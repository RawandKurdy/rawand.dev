import { personalInfo, aboutInfo, experiences, projects, contactInfo, socialLinks } from "@/lib/data"

export interface CommandResult {
  output: string[]
  type: "success" | "error"
}

export interface Command {
  name: string
  description: string
  usage?: string
  aliases?: string[]
  execute: (args: string[]) => CommandResult
}

export class TerminalCommandParser {
  private commands: Map<string, Command> = new Map()
  private terminalStartTime: number
  private currentDirectory = "/home/user"

  constructor(startTime?: number) {
    this.terminalStartTime = startTime || Date.now()
    this.registerCommands()
  }

  private registerCommands() {
    const commands: Command[] = [
      {
        name: "help",
        description: "Show available commands",
        aliases: ["h", "?"],
        execute: () => ({
          output: [
            "Available commands:",
            "",
            ...this.getCommands().map(
              (cmd) => `  ${cmd.name.padEnd(12)} - ${cmd.description}${cmd.usage ? ` (${cmd.usage})` : ""}`,
            ),
            "",
            "Tips:",
            "  • Use arrow keys to navigate command history",
            "  • Use Tab for command completion (coming soon)",
            "  • Commands are case-insensitive",
          ],
          type: "success",
        }),
      },
      {
        name: "about",
        description: "Display personal information",
        aliases: ["info", "bio"],
        execute: () => ({
          output: [
            `╭─ ${personalInfo.name} ─╮`,
            `│ ${personalInfo.tagline.padEnd(personalInfo.name.length)} │`,
            `╰${"─".repeat(personalInfo.name.length + 2)}╯`,
            "",
            `📍 Location: ${personalInfo.location}`,
            `📧 Email: ${personalInfo.email}`,
            `🌐 Blog: ${personalInfo.blog}`,
            "",
            aboutInfo.bio,
            "",
            "🎓 Education:",
            `  ${aboutInfo.education.degree}`,
            `  ${aboutInfo.education.university} (${aboutInfo.education.period})`,
            `  🏆 ${aboutInfo.education.achievement}`,
          ],
          type: "success",
        }),
      },
      {
        name: "skills",
        description: "List technical skills",
        aliases: ["tech", "technologies"],
        usage: "[category]",
        execute: (args) => {
          const category = args[0]?.toLowerCase()

          if (category) {
            // Filter skills by category (basic implementation)
            const filteredSkills = aboutInfo.skills.filter((skill) => skill.toLowerCase().includes(category))

            if (filteredSkills.length === 0) {
              return {
                output: [`No skills found matching "${category}"`],
                type: "error",
              }
            }

            return {
              output: [`Skills matching "${category}":`, "", ...filteredSkills.map((skill) => `  ✓ ${skill}`)],
              type: "success",
            }
          }

          return {
            output: [
              "🛠️  Technical Skills:",
              "",
              ...aboutInfo.skills.map((skill) => `  ✓ ${skill}`),
              "",
              `Total: ${aboutInfo.skills.length} skills`,
            ],
            type: "success",
          }
        },
      },
      {
        name: "experience",
        description: "Show work experience",
        aliases: ["work", "jobs", "exp"],
        usage: "[company]",
        execute: (args) => {
          const company = args[0]?.toLowerCase()

          if (company) {
            const exp = experiences.find((e) => e.company.toLowerCase().includes(company))

            if (!exp) {
              return {
                output: [`No experience found at "${company}"`],
                type: "error",
              }
            }

            return {
              output: [
                `💼 ${exp.title} @ ${exp.company}`,
                `📅 ${exp.period} (${exp.type})`,
                `📍 ${exp.location}`,
                "",
                exp.description,
                "",
                "🔧 Technologies:",
                ...exp.technologies.map((tech) => `  • ${tech}`),
              ],
              type: "success",
            }
          }

          return {
            output: [
              "💼 Work Experience:",
              "",
              ...experiences.flatMap((exp, index) => [
                `${index + 1}. ${exp.title} @ ${exp.company}`,
                `   📅 ${exp.period} (${exp.type})`,
                `   📍 ${exp.location}`,
                `   ${exp.description}`,
                `   🔧 ${exp.technologies.join(", ")}`,
                "",
              ]),
            ],
            type: "success",
          }
        },
      },
      {
        name: "projects",
        description: "List all projects",
        aliases: ["portfolio", "work"],
        usage: "[type|name]",
        execute: (args) => {
          const filter = args[0]?.toLowerCase()

          if (filter) {
            const filteredProjects = projects.filter(
              (p) => p.type.toLowerCase().includes(filter) || p.title.toLowerCase().includes(filter),
            )

            if (filteredProjects.length === 0) {
              return {
                output: [`No projects found matching "${filter}"`],
                type: "error",
              }
            }

            return {
              output: [
                `🚀 Projects matching "${filter}":`,
                "",
                ...filteredProjects.flatMap((project, index) => [
                  `${index + 1}. ${project.title} (${project.type})`,
                  `   ${project.description}`,
                  `   🔧 ${project.technologies.join(", ")}`,
                  `   🔗 ${Object.entries(project.links)
                    .map(([key, value]) => `${key}: ${value}`)
                    .join(", ")}`,
                  "",
                ]),
              ],
              type: "success",
            }
          }

          return {
            output: [
              "🚀 Projects Portfolio:",
              "",
              ...projects.flatMap((project, index) => [
                `${index + 1}. ${project.title} (${project.type})`,
                `   ${project.description}`,
                `   🔧 ${project.technologies.join(", ")}`,
                `   🔗 ${Object.entries(project.links)
                  .map(([key, value]) => `${key}: ${value}`)
                  .join(", ")}`,
                "",
              ]),
              `Total: ${projects.length} projects`,
            ],
            type: "success",
          }
        },
      },
      {
        name: "contact",
        description: "Display contact information",
        aliases: ["reach", "connect"],
        execute: () => ({
          output: [
            "📞 Contact Information:",
            "",
            ...contactInfo.map((info) => `  ${info.label}: ${info.value}`),
            "",
            "🔗 Social Links:",
            ...socialLinks.map((link) => `  ${link.label}: ${link.href}`),
          ],
          type: "success",
        }),
      },
      {
        name: "whoami",
        description: "Display current user",
        execute: () => {
          const userAgent = typeof navigator !== "undefined" ? navigator.userAgent : ""
          const platform = typeof navigator !== "undefined" ? navigator.platform : "Unknown"

          return {
            output: [
              "user",
              `Machine: ${platform}`,
              `Browser: ${userAgent.includes("Chrome") ? "Chrome" : userAgent.includes("Firefox") ? "Firefox" : userAgent.includes("Safari") ? "Safari" : "Unknown"}`,
            ],
            type: "success",
          }
        },
      },
      {
        name: "ls",
        description: "List directory contents",
        aliases: ["dir"],
        usage: "[-l] [path]",
        execute: (args) => {
          const isLongFormat = args.includes("-l")

          if (this.currentDirectory === "/home/user/projects") {
            if (isLongFormat) {
              return {
                output: [
                  "total " + projects.length,
                  ...projects.map(
                    (project, index) =>
                      `-rw-r--r-- 1 user user  ${Math.floor(Math.random() * 10 + 1)}.${Math.floor(Math.random() * 9)}K Jan 15 10:30 ${project.title.toLowerCase().replace(/\s+/g, "-")}.md`,
                  ),
                ],
                type: "success",
              }
            }
            return {
              output: projects.map((project) => `${project.title.toLowerCase().replace(/\s+/g, "-")}.md`),
              type: "success",
            }
          }

          if (this.currentDirectory === "/home/user/experience") {
            if (isLongFormat) {
              return {
                output: [
                  "total " + experiences.length,
                  ...experiences.map(
                    (exp, index) =>
                      `-rw-r--r-- 1 user user  ${Math.floor(Math.random() * 10 + 1)}.${Math.floor(Math.random() * 9)}K Jan 15 10:30 ${exp.company.toLowerCase().replace(/\s+/g, "-")}.md`,
                  ),
                ],
                type: "success",
              }
            }
            return {
              output: experiences.map((exp) => `${exp.company.toLowerCase().replace(/\s+/g, "-")}.md`),
              type: "success",
            }
          }

          // Default home directory listing
          if (isLongFormat) {
            return {
              output: [
                "total 6",
                "-rw-r--r-- 1 user user  1.2K Jan 15 10:30 about.txt",
                "drwxr-xr-x 2 user user  4.0K Jan 15 10:30 projects/",
                "drwxr-xr-x 2 user user  4.0K Jan 15 10:30 experience/",
                "-rw-r--r-- 1 user user   856 Jan 15 10:30 skills.txt",
                "-rw-r--r-- 1 user user   432 Jan 15 10:30 contact.txt",
                "-rw-r--r-- 1 user user   128 Jan 15 10:30 README.md",
              ],
              type: "success",
            }
          }

          return {
            output: ["about.txt", "projects/", "experience/", "skills.txt", "contact.txt", "README.md"],
            type: "success",
          }
        },
      },
      {
        name: "pwd",
        description: "Print working directory",
        execute: () => ({
          output: [this.currentDirectory],
          type: "success",
        }),
      },
      {
        name: "cd",
        description: "Change directory",
        usage: "[directory]",
        execute: (args) => {
          if (args.length === 0) {
            // cd with no args goes to home
            this.currentDirectory = "/home/user"
            return {
              output: [],
              type: "success",
            }
          }

          const target = args[0]

          if (target === "..") {
            // Go up one directory
            if (this.currentDirectory !== "/home/user") {
              this.currentDirectory = "/home/user"
            }
            return {
              output: [],
              type: "success",
            }
          }

          if (target === "~" || target === "/home/user") {
            this.currentDirectory = "/home/user"
            return {
              output: [],
              type: "success",
            }
          }

          // Handle relative paths
          if (this.currentDirectory === "/home/user") {
            if (target === "projects" || target === "projects/") {
              this.currentDirectory = "/home/user/projects"
              return {
                output: [],
                type: "success",
              }
            }

            if (target === "experience" || target === "experience/") {
              this.currentDirectory = "/home/user/experience"
              return {
                output: [],
                type: "success",
              }
            }
          }

          // Handle absolute paths
          if (target === "/home/user/projects") {
            this.currentDirectory = "/home/user/projects"
            return {
              output: [],
              type: "success",
            }
          }

          if (target === "/home/user/experience") {
            this.currentDirectory = "/home/user/experience"
            return {
              output: [],
              type: "success",
            }
          }

          return {
            output: [`cd: ${target}: No such file or directory`],
            type: "error",
          }
        },
      },
      {
        name: "cat",
        description: "Display file contents",
        usage: "<filename>",
        execute: (args) => {
          if (args.length === 0) {
            return {
              output: ["cat: missing file operand", "Usage: cat <filename>"],
              type: "error",
            }
          }

          const filename = args[0].toLowerCase()

          if (this.currentDirectory === "/home/user/projects") {
            const project = projects.find((p) => `${p.title.toLowerCase().replace(/\s+/g, "-")}.md` === filename)

            if (project) {
              return {
                output: [
                  `# ${project.title}`,
                  "",
                  `**Type:** ${project.type}`,
                  `**Description:** ${project.description}`,
                  "",
                  "## Technologies",
                  ...project.technologies.map((tech) => `- ${tech}`),
                  "",
                  "## Links",
                  ...Object.entries(project.links).map(([key, value]) => `- ${key}: ${value}`),
                ],
                type: "success",
              }
            }
          }

          if (this.currentDirectory === "/home/user/experience") {
            const experience = experiences.find(
              (exp) => `${exp.company.toLowerCase().replace(/\s+/g, "-")}.md` === filename,
            )

            if (experience) {
              return {
                output: [
                  `# ${experience.title} @ ${experience.company}`,
                  "",
                  `**Period:** ${experience.period}`,
                  `**Type:** ${experience.type}`,
                  `**Location:** ${experience.location}`,
                  "",
                  "## Description",
                  experience.description,
                  "",
                  "## Technologies",
                  ...experience.technologies.map((tech) => `- ${tech}`),
                ],
                type: "success",
              }
            }
          }

          // Handle files in home directory
          if (this.currentDirectory === "/home/user") {
            switch (filename) {
              case "about.txt":
                return {
                  output: [aboutInfo.bio],
                  type: "success",
                }
              case "skills.txt":
                return {
                  output: aboutInfo.skills,
                  type: "success",
                }
              case "contact.txt":
                return {
                  output: contactInfo.map((info) => `${info.label}: ${info.value}`),
                  type: "success",
                }
              case "readme.md":
                return {
                  output: [
                    "# Rawand.dev Terminal",
                    "",
                    "Welcome to my interactive portfolio terminal!",
                    "",
                    "## Available Commands",
                    "- `help` - Show all commands",
                    "- `about` - Learn about me",
                    "- `projects` - View my projects",
                    "- `experience` - See my work history",
                    "- `skills` - List my technical skills",
                    "- `contact` - Get in touch",
                    "- `cd` - Change directory",
                    "- `ls` - List directory contents",
                    "- `cat` - Display file contents",
                    "",
                    "Type any command to get started!",
                  ],
                  type: "success",
                }
            }
          }

          return {
            output: [`cat: ${filename}: No such file or directory`],
            type: "error",
          }
        },
      },
      {
        name: "clear",
        description: "Clear terminal screen",
        aliases: ["cls"],
        execute: () => ({
          output: ["CLEAR_SCREEN"],
          type: "success",
        }),
      },
      {
        name: "exit",
        description: "Exit terminal mode",
        aliases: ["quit", "q"],
        execute: () => ({
          output: ["EXIT_TERMINAL"],
          type: "success",
        }),
      },
      {
        name: "date",
        description: "Display current date and time",
        execute: () => ({
          output: [new Date().toString()],
          type: "success",
        }),
      },
      {
        name: "uptime",
        description: "Show system uptime",
        execute: () => {
          const uptimeMs = Date.now() - this.terminalStartTime
          const uptimeSeconds = Math.floor(uptimeMs / 1000)
          const uptimeMinutes = Math.floor(uptimeSeconds / 60)
          const uptimeHours = Math.floor(uptimeMinutes / 60)
          const uptimeDays = Math.floor(uptimeHours / 24)

          let uptimeString = ""
          if (uptimeDays > 0) {
            uptimeString += `${uptimeDays} day${uptimeDays > 1 ? "s" : ""}, `
          }
          if (uptimeHours % 24 > 0) {
            uptimeString += `${uptimeHours % 24} hour${uptimeHours % 24 > 1 ? "s" : ""}, `
          }
          if (uptimeMinutes % 60 > 0) {
            uptimeString += `${uptimeMinutes % 60} minute${uptimeMinutes % 60 > 1 ? "s" : ""}, `
          }
          uptimeString += `${uptimeSeconds % 60} second${uptimeSeconds % 60 > 1 ? "s" : ""}`

          return {
            output: [
              `Terminal uptime: ${uptimeString}`,
              `Started: ${new Date(this.terminalStartTime).toLocaleString()}`,
            ],
            type: "success",
          }
        },
      },
      {
        name: "cv",
        description: "Download CV/Resume",
        aliases: ["resume", "download-cv"],
        execute: () => {
          // Trigger CV download by opening the CV link
          if (typeof window !== "undefined") {
            window.open(personalInfo.links.resume, "_blank")
          }

          return {
            output: [
              "📄 Downloading CV/Resume...",
              `Opening: ${personalInfo.links.resume}`,
              "",
              "If the download doesn't start automatically,",
              `you can access it directly at: ${personalInfo.links.resume}`,
            ],
            type: "success",
          }
        },
      },
    ]

    commands.forEach((cmd) => {
      this.commands.set(cmd.name, cmd)
      cmd.aliases?.forEach((alias) => {
        this.commands.set(alias, cmd)
      })
    })
  }

  executeCommand(input: string): CommandResult {
    const trimmed = input.trim()
    if (!trimmed) {
      return { output: [], type: "success" }
    }

    const [commandName, ...args] = trimmed.toLowerCase().split(/\s+/)
    const command = this.commands.get(commandName)

    if (!command) {
      return {
        output: [`bash: ${commandName}: command not found`, 'Type "help" for available commands.'],
        type: "error",
      }
    }

    try {
      return command.execute(args)
    } catch (error) {
      return {
        output: [`Error executing command: ${error}`],
        type: "error",
      }
    }
  }

  getCommands(): Command[] {
    const uniqueCommands = new Map<string, Command>()

    for (const command of this.commands.values()) {
      if (!uniqueCommands.has(command.name)) {
        uniqueCommands.set(command.name, command)
      }
    }

    return Array.from(uniqueCommands.values())
  }

  getCurrentDirectory(): string {
    return this.currentDirectory
  }

  getProjectFiles(): string[] {
    return projects.map((project) => `${project.title.toLowerCase().replace(/\s+/g, "-")}.md`)
  }

  getExperienceFiles(): string[] {
    return experiences.map((exp) => `${exp.company.toLowerCase().replace(/\s+/g, "-")}.md`)
  }
}
