"use client";
import { Button, Card, Spinner, Text, TextField } from "@radix-ui/themes";
import axios from "axios";
import React, { useState } from "react";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState<{ qst: string; res: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const handleSubmit = async () => {
    if (message.trim()) {
      setLoading(true);
      try {
        const res = await axios.post("/api/chat", { message });
        setLoading(false);
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
              className="mb-2 px-10 py-4 text-sm flex flex-col gap-2 w-full"
            >
              <div className="flex justify-end">
                <Card className="w-fit max-w-[85%] p-3">
                  <Text as="p" className="font-semibold text-right">
                    {item.qst}
                  </Text>
                </Card>
              </div>
              <div className="flex justify-start">
                <Card className="w-fit max-w-[85%] p-3 bg-gray-100">
                  <Text as="p" className="text-gray-600">
                    {item.res}
                  </Text>
                </Card>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="py-3">
        <TextField.Root
          size="3"
          placeholder="Enter your message..."
          className="h-full"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        >
          <TextField.Slot side="right" px="1">
            <Button
              size="2"
              type="button"
              onClick={handleSubmit}
              disabled={loading}
              className="text-sm sm:text-xs"
            >
              {loading ? <Spinner /> : "Ask Ai"}
            </Button>
          </TextField.Slot>
        </TextField.Root>
      </div>
    </div>
  );
};

export default Chat;
