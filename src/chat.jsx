import { useState } from "react";

export default function ChatDrawer({ isOpen, onClose }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = () => {
    if (message.trim()) {
      setMessages([...messages, { text: message, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
      setMessage("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={onClose}
        />
      )}

      {/* Drawer - slides from left */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-[#fce8e8] z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ fontFamily: "-apple-system, 'SF Pro Display', BlinkMacSystemFont, sans-serif" }}
      >
        {/* Header */}
        <div className="bg-[#cc0000] px-5 py-4 flex items-start justify-between w-full">
          <div className="flex-1 text-left">
            <h2 className="text-[#ffffff] font-bold text-[18px] !text-white">TechShed</h2>
            <div className="flex items-center gap-2 mt-0.5">
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              <span className="text-white text-[13px]">We'll reply as soon as we can</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center text-white hover:opacity-70 transition-opacity"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>

        {/* Chat area */}
        <div className="flex-1 overflow-y-auto px-4 py-6 flex flex-col gap-3">
          {messages.length === 0 && (
            <p className="text-center text-[13px] text-[#999] mt-10">No messages yet. Say hello!</p>
          )}
          {messages.map((msg, i) => (
            <div key={i} className="flex justify-end">
              <div className="bg-[#cc0000] text-white px-4 py-2 rounded-2xl rounded-br-sm max-w-[75%]">
                <p className="text-[14px]">{msg.text}</p>
                <p className="text-[10px] text-red-200 mt-1 text-right">{msg.time}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="bg-white border-t border-[#e0e0e0] px-4 py-3 flex items-center gap-3">
          <input
            type="text"
            value={message}
            onChange={e => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
            className="flex-1 text-[15px] text-[#1d1d1f] placeholder-[#999] outline-none bg-transparent"
          />
          <button onClick={handleSend} className="text-[#cc0000] hover:opacity-70 transition-opacity">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66L9.41 17.41a2 2 0 0 1-2.83-2.83l8.49-8.48"/>
            </svg>
          </button>
        </div>

      </div>
    </>
  );
}