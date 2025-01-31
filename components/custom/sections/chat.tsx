import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessagesSquare, SendHorizonal, X } from "lucide-react";
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

  const [isFirstOpen, setIsFirstOpen] = useState(true);

  // Send defauot message and Auto-scroll to latest message
  useEffect(() => {
    if (open) {
      if (isFirstOpen) {
        // send default hi to get default response
        sendMessage("hi", true);
        setIsFirstOpen(false);
      }
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
  const sendMessage = async (
    message: string,
    skipSetMessage: boolean = false,
  ) => {
    if (!message.trim() || loading) return;

    const userMessage = { role: "user", content: message };
    if (!skipSetMessage) {
      setMessages((prev) => [...prev, userMessage]);
    }
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(
        "https://portfolio.spendings.in/api/no_auth/chat/message",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ user_message: message }),
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
      className={`  fixed  w-14 dark:bg-slate-950 bg-slate-100 dark:text-gray-200 text-gray-900 shadow-lg transition-all ease-in-out duration-200 z-30 ${
        open
          ? " h-[70vh] md:h-96 w-[90vw] md:w-72 rounded-lg rounded-b-none right-5 md:right-20 bottom-24 md:bottom-20"
          : "h-14 rounded-full right-3 bottom-10 md:bottom-10 md:right-16 "
      }`}
    >
      {/* Toggle Button */}
      <Button
        className={`p-3 w-full border-b border-2 border-slate-200 h-14 font-bold text-xl  hover:cursor-pointer flex justify-center items-center hover:bg-blue-200 bg-blue-200 dark:bg-blue-800 ${open ? " justify-end rounded-sm border-0" : " rounded-full"}`}
        variant={"secondary"}
        onClick={() => setOpen(!open)}
      >
        {!open ? (
          <MessagesSquare style={{ width: "28px", height: "28px" }} />
        ) : (
          <span className=" w-full  flex justify-between items-center">
            Chat <X style={{ width: "32px", height: "32px" }} />
          </span>
        )}
      </Button>

      {/* Chat Content */}
      {open && (
        <div className="flex flex-col h-full text-md md:text-lg ">
          {/* Messages Container */}
          <div className="flex-1 p-2 overflow-y-auto flex flex-col gap-2 will-change-transform">
            {messages.length > 0 &&
              messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`p-2 rounded-lg  max-w-[75%] ${
                    msg.role === "user"
                      ? " bg-gray-300 dark:bg-cyan-700  text-gray-900 dark:text-white self-end"
                      : " bg-blue-300 dark:bg-blue-900 text-slate-950 dark:text-slate-50  self-start"
                  }`}
                >
                  {msg.content}
                </div>
              ))}
            {showTyping && (
              <div className="p-2 rounded-lg bg-gray-400 text-white self-start animate-pulse">
                Typing...
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Input Field (Fixed at Bottom) */}
          <div className="p-2 border-t flex items-center gap-2 bg-blue-300 dark:bg-blue-900 ">
            <Input
              type="text"
              className="flex-1 p-2 w-4/5 border rounded-lg text-md md:text-lg dark:bg-slate-950 bg-white text-gray-900 dark:text-slate-100 focus:!border-0 focus:!ring-0"
              placeholder="Type a message..."
              value={input}
              maxLength={50}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
            />
            <Button
              variant="ghost"
              onClick={() => sendMessage(input)}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              <SendHorizonal style={{ width: "20px", height: "20px" }} />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatSection;
