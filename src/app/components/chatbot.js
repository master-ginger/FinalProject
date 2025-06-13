"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import { FiSend, FiMessageSquare } from "react-icons/fi";
import { RiRobot2Line } from "react-icons/ri";
import ReactMarkdown from 'react-markdown';

export default function Chatbot() {
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hello! I'm CoinCoach. Ask me about any financial term and I'll explain it in simple words.",
      sender: "bot",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Use your Vercel deployment URL here
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://final-project-eosin-tau.vercel.app/api/chatbot/ask";

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  const askQuestion = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: input }),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      
      if (data.term && data.definition) {
        setMessages((prev) => [
          ...prev,
          { 
            text: `**${data.term}**: ${data.definition}`,
            sender: "bot",
            confidence: data.confidence || 0
          },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          { 
            text: "I couldn't find a precise answer. Try rephrasing your question.", 
            sender: "bot" 
          },
        ]);
      }
    } catch (error) {
      console.error("API Error:", error);
      setMessages((prev) => [
        ...prev,
        { 
          text: error.message.includes("Failed to fetch") 
            ? "Network error. Please check your connection."
            : "Sorry, I'm having trouble processing your request.", 
          sender: "bot" 
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      askQuestion();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Chat Icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all transform hover:scale-110"
        aria-label="Open chat"
      >
        {isOpen ? (
          <span className="text-xl">×</span>
        ) : (
          <FiMessageSquare size={24} />
        )}
      </button>

      {/* Chat Panel */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 max-h-[80vh] bg-white rounded-xl shadow-xl z-50 flex flex-col overflow-hidden border border-gray-200">
          {/* Header */}
          <div className="bg-blue-600 text-white p-3 flex items-center justify-between">
            <div className="flex items-center">
              <RiRobot2Line className="text-xl mr-2" />
              <h1 className="text-lg font-semibold">CoinCoach</h1>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-blue-200 transition"
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>

          {/* Chat Area */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex mb-3 ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-lg px-4 py-2 text-sm ${
                    message.sender === "user"
                      ? "bg-blue-600 text-white rounded-br-none"
                      : "bg-gray-200 text-gray-800 rounded-bl-none"
                  }`}
                >
                  {message.sender === "bot" ? (
                    <ReactMarkdown>{message.text}</ReactMarkdown>
                  ) : (
                    message.text
                  )}
                  {message.confidence && (
                    <div className="text-xs mt-1 opacity-70">
                      Confidence: {Math.round(message.confidence * 100)}%
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start mb-3">
                <div className="bg-gray-200 text-gray-800 rounded-lg px-4 py-2 text-sm flex items-center">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-200"></div>
                  </div>
                  <span className="ml-2">Thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 border-t bg-white">
            <div className="flex items-center">
              <input
                type="text"
                className="flex-1 border rounded-l-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Ask about financial terms..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                disabled={isLoading}
                aria-label="Type your question"
              />
              <button
                onClick={askQuestion}
                disabled={isLoading || !input.trim()}
                className={`bg-blue-600 text-white px-4 py-2 rounded-r-lg text-sm transition ${
                  isLoading || !input.trim()
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-blue-700"
                }`}
                aria-label="Send message"
              >
                <FiSend />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Press Enter to send, Shift+Enter for new line
            </p>
          </div>
        </div>
      )}
    </div>
  );
}