"use client";

import { useState, useRef, useEffect, FormEvent } from "react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const DEMO_RESPONSES: string[] = [
  "AURA is online. I'm the reasoning core of the VAGA system — designed to hold context, apply structured judgment, and work alongside you as a thinking partner, not just a query tool. What are you working on?",
  "That's a good question. Let me think through it carefully rather than give you a fast but shallow answer. The architecture you're describing maps closely to what OSAI handles — the mobile layer that allows intelligence to operate outside a fixed server environment.",
  "The key insight here is that intelligence should travel with the operator, not stay locked to a vendor's infrastructure. ARROW handles the transit layer — routing state and context across network boundaries without losing continuity.",
  "You're touching on something important. Sovereignty in AI systems isn't just a philosophical position — it's a technical requirement. If you can't inspect, rebuild, or fork the system, you don't own it. You're renting access.",
  "Phase 3 of Betts Foundations will bring the full live AI integration online. For now, this interface is running in preview mode — but the architecture, the design principles, and the direction are all real.",
];

let demoIndex = 0;

function getDemoResponse(): string {
  const response = DEMO_RESPONSES[demoIndex % DEMO_RESPONSES.length];
  demoIndex++;
  return response;
}

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Welcome to The Forge. I'm AURA — the reasoning core of the VAGA system. This interface is running in preview mode. Full AI integration arrives in Phase 3. Ask me anything about the VAGA/AIOS architecture, or try a general question.",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text || isTyping) return;

    const userMsg: Message = {
      id: `u-${Date.now()}`,
      role: "user",
      content: text,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Simulate a response delay (preview mode)
    const delay = 800 + Math.random() * 600;
    await new Promise((r) => setTimeout(r, delay));

    const responseText = getDemoResponse();
    const assistantMsg: Message = {
      id: `a-${Date.now()}`,
      role: "assistant",
      content: responseText,
      timestamp: new Date(),
    };

    setIsTyping(false);
    setMessages((prev) => [...prev, assistantMsg]);
    inputRef.current?.focus();
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as unknown as FormEvent);
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "min(600px, 70vh)",
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        borderRadius: 16,
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "0.875rem 1.25rem",
          borderBottom: "1px solid var(--border)",
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          background: "rgba(108,99,255,0.06)",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: "#06d6a0",
            boxShadow: "0 0 6px #06d6a066",
            flexShrink: 0,
          }}
        />
        <div>
          <span style={{ fontWeight: 700, fontSize: "0.9rem", color: "var(--text-primary)" }}>
            AURA — Reasoning Core
          </span>
          <span
            style={{
              display: "block",
              fontSize: "0.7rem",
              color: "#06d6a0",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            Preview Mode · Phase 3: Live AI
          </span>
        </div>
      </div>

      {/* Message list */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "1.25rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        {messages.map((msg) => (
          <div
            key={msg.id}
            style={{
              display: "flex",
              flexDirection: msg.role === "user" ? "row-reverse" : "row",
              alignItems: "flex-end",
              gap: "0.6rem",
            }}
          >
            {/* Avatar */}
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: "50%",
                background: msg.role === "user" ? "rgba(108,99,255,0.3)" : "rgba(0,212,255,0.15)",
                border: `1px solid ${msg.role === "user" ? "var(--accent)" : "rgba(0,212,255,0.4)"}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.65rem",
                fontWeight: 800,
                color: msg.role === "user" ? "var(--accent)" : "#00d4ff",
                flexShrink: 0,
              }}
            >
              {msg.role === "user" ? "U" : "A"}
            </div>

            {/* Bubble */}
            <div
              style={{
                maxWidth: "75%",
                padding: "0.75rem 1rem",
                borderRadius: msg.role === "user" ? "12px 12px 4px 12px" : "12px 12px 12px 4px",
                background:
                  msg.role === "user"
                    ? "rgba(108,99,255,0.15)"
                    : "#12121a",
                border: `1px solid ${
                  msg.role === "user"
                    ? "rgba(108,99,255,0.3)"
                    : "var(--border)"
                }`,
                fontSize: "0.9rem",
                lineHeight: 1.65,
                color: "var(--text-primary)",
                whiteSpace: "pre-wrap",
              }}
            >
              {msg.content}
            </div>
          </div>
        ))}

        {/* Typing indicator */}
        {isTyping && (
          <div style={{ display: "flex", alignItems: "flex-end", gap: "0.6rem" }}>
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: "50%",
                background: "rgba(0,212,255,0.15)",
                border: "1px solid rgba(0,212,255,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.65rem",
                fontWeight: 800,
                color: "#00d4ff",
                flexShrink: 0,
              }}
            >
              A
            </div>
            <div
              style={{
                padding: "0.75rem 1rem",
                borderRadius: "12px 12px 12px 4px",
                background: "#12121a",
                border: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <span className="typing-dot" />
              <span className="typing-dot" style={{ animationDelay: "0.2s" }} />
              <span className="typing-dot" style={{ animationDelay: "0.4s" }} />
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form
        onSubmit={handleSubmit}
        style={{
          padding: "0.875rem 1rem",
          borderTop: "1px solid var(--border)",
          display: "flex",
          gap: "0.6rem",
          alignItems: "flex-end",
          flexShrink: 0,
          background: "var(--bg)",
        }}
      >
        <textarea
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask AURA anything… (Enter to send, Shift+Enter for new line)"
          rows={1}
          style={{
            flex: 1,
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            borderRadius: 10,
            padding: "0.65rem 0.9rem",
            color: "var(--text-primary)",
            fontSize: "0.9rem",
            lineHeight: 1.5,
            resize: "none",
            outline: "none",
            fontFamily: "inherit",
            maxHeight: 120,
            overflowY: "auto",
          }}
          aria-label="Message input"
          disabled={isTyping}
        />
        <button
          type="submit"
          disabled={!input.trim() || isTyping}
          style={{
            padding: "0.65rem 1.1rem",
            background: input.trim() && !isTyping ? "var(--accent)" : "rgba(108,99,255,0.2)",
            color: input.trim() && !isTyping ? "#fff" : "var(--text-muted)",
            border: "none",
            borderRadius: 10,
            fontWeight: 700,
            fontSize: "0.875rem",
            cursor: input.trim() && !isTyping ? "pointer" : "not-allowed",
            transition: "background 0.15s ease, color 0.15s ease",
            flexShrink: 0,
          }}
          aria-label="Send message"
        >
          Send
        </button>
      </form>

      <style>{`
        .typing-dot {
          display: inline-block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #00d4ff;
          animation: typing-pulse 1.2s ease-in-out infinite;
        }

        @keyframes typing-pulse {
          0%, 80%, 100% { opacity: 0.2; transform: scale(0.8); }
          40% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
