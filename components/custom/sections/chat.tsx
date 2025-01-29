import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronUp } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const ChatSection = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: string; content: string }[]>(
    [],
  );
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showTyping, setShowTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll to latest message
  useEffect(() => {
    if (open) {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open]);

  // Effect to delay typing indicator
  useEffect(() => {
    if (loading) {
      const typingDelay = setTimeout(() => setShowTyping(true), 500); // 500ms delay
      return () => clearTimeout(typingDelay); // Cleanup on unmount
    } else {
      setShowTyping(false);
    }
  }, [loading]);

  // Send message
  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(
        "https://portfolio.spendings.in/api/no_auth/chat/message",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ user_message: input }),
        },
      );

      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.message },
      ]);
    } catch (error) {
      console.log(error);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Error fetching response." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`fixed bottom-20 right-5 md:right-10 w-full max-w-[90%] md:max-w-[350px] dark:bg-gray-900 bg-slate-100 dark:text-gray-200 text-gray-900 shadow-lg rounded-lg transition-all ease-in-out duration-300 z-50 ${
        open ? "h-96" : "h-14"
      }`}
    >
      {/* Toggle Button */}
      <Button
        className="p-3 w-full h-14 rounded-none font-bold text-xl hover:cursor-pointer flex justify-between items-center bg-gray-100 dark:bg-gray-800"
        variant={"secondary"}
        onClick={() => setOpen(!open)}
      >
        Chat
        <ChevronUp
          className={`transition-transform duration-200 ${
            open ? "-rotate-180" : "rotate-0"
          }`}
        />
      </Button>

      {/* Chat Content */}
      {open && (
        <div className="flex flex-col h-full">
          {/* Messages Container */}
          <div className="flex-1 p-2 overflow-y-auto flex flex-col gap-2">
            {messages.length === 0 ? (
              <p className="text-center text-gray-500 dark:text-gray-400">
                Start a conversation...
              </p>
            ) : (
              messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`p-2 rounded-lg max-w-[75%] ${
                    msg.role === "user"
                      ? "bg-blue-500 text-white self-end"
                      : "bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white self-start"
                  }`}
                >
                  {msg.content}
                </div>
              ))
            )}
            {showTyping && (
              <div className="p-2 rounded-lg bg-gray-400 text-white self-start animate-pulse">
                Typing...
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Input Field (Fixed at Bottom) */}
          <div className="p-2 border-t flex items-center gap-2 bg-gray-300 dark:bg-gray-800">
            <Input
              type="text"
              className="flex-1 p-2 border rounded-lg text-sm dark:bg-gray-700 bg-white text-gray-900 dark:text-white"
              placeholder="Type a message..."
              value={input}
              maxLength={50}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <Button
              variant="ghost"
              onClick={sendMessage}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Send
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatSection;
