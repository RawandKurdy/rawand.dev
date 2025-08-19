"use client"

import ReactMarkdown from "react-markdown"
import { cn } from "@/lib/utils"

interface MarkdownProps {
  content: string
  className?: string
}

export function Markdown({ content, className }: MarkdownProps) {
  return (
    <div className={cn("prose prose-sm max-w-none [&>*]:text-muted-foreground", className)}>
      <ReactMarkdown
        components={{
          // Customize markdown elements to match our design system
          p: ({ children }) => <p className="!text-muted-foreground leading-relaxed mb-2 last:mb-0">{children}</p>,
          strong: ({ children }) => <strong className="font-semibold !text-foreground">{children}</strong>,
          em: ({ children }) => <em className="italic !text-muted-foreground">{children}</em>,
          code: ({ children }) => (
            <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono !text-foreground">{children}</code>
          ),
          ul: ({ children }) => <ul className="list-disc list-inside space-y-1 !text-muted-foreground">{children}</ul>,
          ol: ({ children }) => (
            <ol className="list-decimal list-inside space-y-1 !text-muted-foreground">{children}</ol>
          ),
          li: ({ children }) => <li className="leading-relaxed !text-muted-foreground">{children}</li>,
          a: ({ children, href }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors font-medium underline underline-offset-2"
            >
              {children}
            </a>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-primary/20 pl-4 italic !text-muted-foreground">
              {children}
            </blockquote>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}