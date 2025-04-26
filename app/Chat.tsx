"use client";
import axios from "axios";
import React, { useState } from "react";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState<{ qst: string; res: string }[]>([]);
  const handleSubmit = async () => {
    if (message.trim()) {
      try {
        const res = await axios.post("/api/chat", { message });
        setResponse((prev) => [
          ...prev,
          { qst: message, res: res.data.message },
        ]);
        setMessage("");
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  };

  return (
    <div className="max-w-3xl m-auto mt-36 bg-white shadow-md px-10 rounded-md">
      <div className="text-xl font-semibold text-center">AI Assistant</div>
      <p className="text-sm text-gray-400 text-center my-3">
        Have health-related questions? Ask me and clear your thoughts!
      </p>

      {response && response.length > 0 && (
        <div className="border border-gray-300 rounded-md">
          {response.map((item, index) => (
            <div
              key={index}
              className="mb-2 px-10 py-4 text-sm flex flex-col gap-2"
            >
              <p className="font-semibold text-right">{item.qst}</p>
              <p className="text-gray-600">{item.res}</p>
            </div>
          ))}
        </div>
      )}
      <div onSubmit={handleSubmit}>
        <label htmlFor="chat" className="sr-only">
          Your message
        </label>
        <div className="flex items-center py-2 rounded-lg">
          <textarea
            id="chat"
            rows={1}
            className="block mx-2 p-2.5 w-full text-sm outline-none border border-gray-500 max-w-3xl rounded-md"
            placeholder="Your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button
            onClick={handleSubmit}
            type="button"
            className="inline-flex justify-center px-3 py-3 rounded-full text-white hover:opacity-80 bg-blue-600 cursor-pointer"
          >
            <svg
              className="w-5 h-5 rotate-90 rtl:-rotate-90"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 20"
            >
              <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
            </svg>
            <span className="sr-only">Send message</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
