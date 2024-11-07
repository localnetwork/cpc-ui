import { useState, useEffect } from "react";

export default function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false); // For the typing effect

  const toggleChat = () => setIsOpen(!isOpen);

  // Load conversation from localStorage when the component mounts
  useEffect(() => {
    const storedMessages = JSON.parse(localStorage.getItem("chatMessages"));
    if (storedMessages) {
      setMessages(storedMessages);
    }
  }, []);

  // Store conversation in localStorage whenever it changes
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem("chatMessages", JSON.stringify(messages));
    }
  }, [messages]);

  const handleSend = async () => {
    if (input.trim() === "") return;

    const userMessage = { sender: "user", text: input };
    setMessages([...messages, userMessage]);
    setInput("");

    // Send request to the /api/chat endpoint
    try {
      console.log(
        "process.env.NEXT_PUBLIC_AI_URL",
        process.env.NEXT_PUBLIC_AI_URL
      );
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_AI_URL}/api/chat`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ prompt: input }),
        }
      );

      const data = await response.json();

      const botMessage = { sender: "bot", text: "" };
      setIsTyping(true); // Start the typing effect
      setMessages((prevMessages) => [...prevMessages, botMessage]);

      // Simulate typing effect for the bot's response
      setTimeout(() => {
        setMessages((prevMessages) => {
          const updatedMessages = [...prevMessages];
          updatedMessages[updatedMessages.length - 1].text = data.message;
          return updatedMessages;
        });
        setIsTyping(false); // Stop typing effect
      }, 1500); // Adjust the delay as needed
    } catch (error) {
      console.error("Error in fetching response:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", text: "Sorry, something went wrong!" },
      ]);
    }
  };

  const handleClear = () => {
    setMessages([]);
    localStorage.removeItem("chatMessages"); // Clear conversation from localStorage
  };

  return (
    <div className="fixed w-full left-5 max-w-[300px] z-[9999] bottom-5 font-sans">
      {!isOpen && (
        <>
          <button
            onClick={toggleChat}
            className="bg-[#1B217A] border-[#3e449f] border text-white py-2 px-4 rounded-md font-semibold"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
              />
            </svg>
          </button>
        </>
      )}
      {isOpen && (
        <div className="bg-white w-full rounded-lg shadow-lg mt-3 overflow-hidden border border-[#ddd]">
          <div className="flex gap-2 px-3 py-2 justify-between bg-[#f5f5f5] border-b">
            <div className="flex items-center text-[#777] text-[14px] gap-2 leading-[100%]">
              <span className="bg-[#30ff30] w-[10px] h-[10px] rounded-full block mt-[2px]" />
              AI assistant
            </div>
            <div className="flex gap-2">
              <button onClick={handleClear} className="text-[#777]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </button>
              <button onClick={toggleChat} className="close">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#777"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          {messages?.length > 0 ? (
            <>
              <div
                className="flex flex-col space-y-3 p-4 max-h-[calc(90vh-300px)] overflow-y-auto 
  [&::-webkit-scrollbar]:[width:8px] 
  [&::-webkit-scrollbar-track]:[background:#ccc] 
  [&::-webkit-scrollbar-thumb]:[border-radius:8px] 
  [&::-webkit-scrollbar-thumb]:bg-[#9A0C16]"
              >
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`${
                      msg.sender === "user"
                        ? "bg-[#1B217A] text-white self-end"
                        : "bg-gray-300 text-gray-800 self-start"
                    } p-3 rounded-lg max-w-[80%] text-[14px]`}
                  >
                    {/* {msg.text} */}

                    {msg.text ? (
                      <>{msg.text}</>
                    ) : (
                      <>
                        {isTyping && (
                          <div className="self-start p-3 text-gray-500 italic">
                            Assistant is typing...
                          </div>
                        )}
                      </>
                    )}
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="flex text-[#777] text-center  flex-col space-y-3 p-4 max-h-[350px] overflow-y-auto">
              <div className="p-3 flex flex-col justify-center items-center text-[14px] bg-[#F5F4F1]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                  />
                </svg>
                Ask anything about Cordova Public College.
              </div>
            </div>
          )}

          <div className="flex items-center p-3 border-t border-gray-300 ">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type a message..."
              className="flex-grow text-[14px] p-2 rounded-md border border-[#ff9aa2] focus:border-[#ff9aa2] outline-none focus-visible:border-[#ff9aa2] bg-[#f7f7f7] text-[#777]"
            />
            <button
              onClick={handleSend}
              className="bg-[#9A0C16] text-white p-2 rounded-md ml-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                />
              </svg>
            </button>
          </div>

          <div className="px-3 text-[#c5c5c5] text-[12px]">
            Current model: gemini-1.0-pro
          </div>
        </div>
      )}
    </div>
  );
}
