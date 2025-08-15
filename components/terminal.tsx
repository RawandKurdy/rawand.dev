"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { TerminalCommandParser } from "@/lib/terminal-commands"

interface TerminalLine {
  type: "input" | "output" | "error"
  content: string
  timestamp?: Date
}

export default function Terminal({ onExit }: { onExit: () => void }) {
  const [terminalStartTime] = useState(() => Date.now())

  const [lines, setLines] = useState<TerminalLine[]>([
    { type: "output", content: "Welcome to Rawand.dev Terminal v1.0.0" },
    { type: "output", content: 'Type "help" to see available commands.' },
    { type: "output", content: "" },
  ])
  const [currentInput, setCurrentInput] = useState("")
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [commandParser] = useState(() => new TerminalCommandParser(terminalStartTime))
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [lines])

  const executeCommand = (command: string) => {
    const trimmedCommand = command.trim()

    // Add command to history
    if (trimmedCommand) {
      setCommandHistory((prev) => [...prev, trimmedCommand])
    }

    // Add input line
    setLines((prev) => [...prev, { type: "input", content: `user@rawand.dev:~$ ${command}` }])

    const result = commandParser.executeCommand(trimmedCommand)

    // Handle special commands
    if (result.output.includes("CLEAR_SCREEN")) {
      setLines([])
      return
    }

    if (result.output.includes("EXIT_TERMINAL")) {
      onExit()
      return
    }

    // Add output lines
    setLines((prev) => [
      ...prev,
      ...result.output.map((line) => ({
        type: result.type === "error" ? ("error" as const) : ("output" as const),
        content: line,
      })),
      { type: "output", content: "" },
    ])
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      executeCommand(currentInput)
      setCurrentInput("")
      setHistoryIndex(-1)
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1)
        setHistoryIndex(newIndex)
        setCurrentInput(commandHistory[newIndex])
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1)
          setCurrentInput("")
        } else {
          setHistoryIndex(newIndex)
          setCurrentInput(commandHistory[newIndex])
        }
      }
    } else if (e.key === "Tab") {
      e.preventDefault()
      const inputParts = currentInput.trim().split(/\s+/)
      const command = inputParts[0]?.toLowerCase()
      const currentArg = inputParts[inputParts.length - 1] || ""

      if (inputParts.length === 1) {
        // Complete command names
        const availableCommands = commandParser.getCommands().map((cmd) => cmd.name)
        const matches = availableCommands.filter((cmd) => cmd.startsWith(currentInput.toLowerCase()))

        if (matches.length === 1) {
          setCurrentInput(matches[0])
        } else if (matches.length > 1) {
          setLines((prev) => [
            ...prev,
            { type: "input", content: `user@rawand.dev:~$ ${currentInput}` },
            { type: "output", content: matches.join("  ") },
            { type: "output", content: "" },
          ])
        }
      } else if (inputParts.length >= 2) {
        // Complete arguments for specific commands
        let completions: string[] = []

        if (command === "cd") {
          // Get available directories based on current directory
          const currentDir = commandParser.getCurrentDirectory()
          if (currentDir === "/home/user") {
            completions = ["projects/", "experience/", "..", "~"]
          } else {
            completions = ["..", "~", "/home/user"]
          }
        } else if (command === "cat") {
          // Get available files based on current directory
          const currentDir = commandParser.getCurrentDirectory()
          if (currentDir === "/home/user") {
            completions = ["about.txt", "skills.txt", "contact.txt", "README.md"]
          } else if (currentDir === "/home/user/projects") {
            completions = commandParser.getProjectFiles()
          } else if (currentDir === "/home/user/experience") {
            completions = commandParser.getExperienceFiles()
          }
        }

        const matches = completions.filter((item) => item.startsWith(currentArg))

        if (matches.length === 1) {
          const newInput = inputParts.slice(0, -1).concat(matches[0]).join(" ")
          setCurrentInput(newInput)
        } else if (matches.length > 1) {
          setLines((prev) => [
            ...prev,
            { type: "input", content: `user@rawand.dev:~$ ${currentInput}` },
            { type: "output", content: matches.join("  ") },
            { type: "output", content: "" },
          ])
        }
      }
    }
  }

  return (
    <div className="fixed inset-0 bg-black text-green-400 font-mono text-sm overflow-hidden">
      {/* Terminal Header */}
      <div className="bg-gray-800 border-b border-gray-600 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-gray-300 text-xs">user@rawand.dev: ~</span>
        </div>
        <button onClick={onExit} className="text-gray-400 hover:text-white text-xs px-2 py-1 rounded">
          Exit Terminal
        </button>
      </div>

      {/* Terminal Content */}
      <div ref={terminalRef} className="h-full overflow-y-auto p-4 pb-20" onClick={() => inputRef.current?.focus()}>
        {lines.map((line, index) => (
          <div key={index} className="whitespace-pre-wrap">
            {line.type === "input" && <span className="text-green-400">{line.content}</span>}
            {line.type === "output" && <span className="text-gray-100">{line.content}</span>}
            {line.type === "error" && <span className="text-red-400">{line.content}</span>}
          </div>
        ))}

        {/* Current Input Line */}
        <div className="flex items-center">
          <span className="text-green-400 mr-2">user@rawand.dev:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent border-none outline-none text-gray-100 caret-green-400"
            autoComplete="off"
            spellCheck={false}
          />
          <span className="animate-pulse text-green-400">█</span>
        </div>
      </div>
    </div>
  )
}
