import { useState, useEffect } from "react";
import helper from "@/lib/utils/helper";
export default function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false); // For the typing effect
  const [isResponding, setIsResponding] = useState(false); // For the typing effect
  const [isResized, setIsResized] = useState(false);

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
    setIsResponding(true);
    if (input.trim() === "") {
      setIsResponding(false);
      return;
    }

    const userMessage = { sender: "user", text: input };
    setMessages([...messages, userMessage]);
    setInput("");

    // Send request to the /api/chat endpoint
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_AI_URL}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: input }),
      });
      setIsResponding(false);

      const data = await response.json();

      const botMessage = { sender: "bot", text: "" };
      setIsTyping(true); // Start the typing effect
      setMessages((prevMessages) => [...prevMessages, botMessage]);
      setIsTyping(false); // Stop typing effect

      // Simulate typing effect for the bot's response
      setTimeout(() => {
        setMessages((prevMessages) => {
          const updatedMessages = [...prevMessages];
          updatedMessages[updatedMessages.length - 1].text = data.message;
          return updatedMessages;
        });

        const msgBox = document.querySelector(".message-box");
        msgBox.scrollTop = msgBox.scrollHeight; // Scroll to the bottom of the chat
      }, 1500); // Adjust the delay as needed
    } catch (error) {
      console.error("Error in fetching response:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", text: "Sorry, something went wrong!" },
      ]);
      setIsResponding(false);
    }
  };

  const handleResize = () => {
    setIsResized((prevState) => !prevState);
  };

  const handleClear = () => {
    setMessages([]);
    localStorage.removeItem("chatMessages"); // Clear conversation from localStorage
  };

  return (
    <div
      className={`fixed w-full bottom-0 p-[15px] ${
        isResized && isOpen ? "max-w-full h-full" : "!w-auto max-w-[300px]"
      } z-[9999] font-sans`}
    >
      {!isOpen && (
        <>
          <button
            onClick={toggleChat}
            className="bg-[#1B217A] border-[#3e449f] border relative text-white py-2 px-4 rounded-md font-semibold"
          >
            <span className="bg-[#30ff30] absolute top-[8px] left-[40px] w-[18px] h-[18px] rounded-full block " />
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
        <div
          className={`bg-white flex flex-col w-full rounded-lg shadow-lg overflow-hidden border border-[#ddd] ${
            isResized ? "h-full" : ""
          }`}
        >
          <div className="flex gap-2 px-3 py-2 justify-between bg-[#f5f5f5] border-b">
            <div className="flex items-center text-[#777] text-[14px] gap-2 leading-[100%]">
              <span className="bg-[#30ff30] w-[10px] h-[10px] rounded-full block mt-[2px]" />
              AI Assistant
            </div>
            <div className="flex gap-2 text-[#777]">
              <button
                className=""
                onClick={() => {
                  handleResize();
                }}
              >
                {isResized ? (
                  <>
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
                        d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"
                      />
                    </svg>
                  </>
                ) : (
                  <>
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
                        d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                      />
                    </svg>
                  </>
                )}
              </button>
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

          <div className="flex flex-col flex-grow">
            {messages?.length > 0 ? (
              <>
                <div
                  className={`message-box flex flex-col space-y-3 p-4 ${
                    isResized
                      ? "max-h-[calc(100vh-200px)]"
                      : "max-h-[calc(90vh-300px)]"
                  } overflow-y-auto 
  [&::-webkit-scrollbar]:[width:8px] 
  [&::-webkit-scrollbar-track]:[background:#ccc] 
  [&::-webkit-scrollbar-thumb]:[border-radius:8px] 
  [&::-webkit-scrollbar-thumb]:bg-[#9A0C16]`}
                >
                  {messages.map((msg, index) => {
                    const msgTxt = helper.formatResponseText(
                      msg.text.toString()
                    );

                    return (
                      <div
                        key={index}
                        className={`${
                          msg.sender === "user"
                            ? "bg-[#1B217A] text-white self-end"
                            : "bg-gray-300 text-gray-800 self-start"
                        } p-3 rounded-lg max-w-[80%] text-[14px]`}
                      >
                        {msg.text ? (
                          <>
                            <div
                              className="break-words"
                              dangerouslySetInnerHTML={{
                                __html: helper.formatResponseText(msg.text),
                              }}
                            />
                          </>
                        ) : (
                          <div className="self-start p-3 text-gray-500 italic">
                            Assistant is typing...
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </>
            ) : (
              <div className="flex text-[#777] text-center h-full flex-col space-y-3 p-4 max-h-[350px] overflow-y-auto">
                <div className="p-3 flex flex-col justify-center items-center text-[14px] bg-[#F5F4F1]">
                  <svg
                    version="1.1"
                    width="50"
                    height="50"
                    x="0"
                    y="0"
                    viewBox="0 0 16 16"
                  >
                    <g>
                      <path
                        d="M14.5 5.625h-1.125V5A4.38 4.38 0 0 0 9 .625H7A4.38 4.38 0 0 0 2.625 5v.625H1.5C.742 5.625.125 6.242.125 7v3c0 .758.617 1.375 1.375 1.375h1.163c.19 1.683 1.604 3 3.337 3h.184c.164.575.689 1 1.316 1h1c.758 0 1.375-.617 1.375-1.375s-.617-1.375-1.375-1.375h-1c-.627 0-1.152.425-1.316 1H6A2.628 2.628 0 0 1 3.375 11V5A3.629 3.629 0 0 1 7 1.375h2A3.629 3.629 0 0 1 12.625 5v6c0 .207.168.375.375.375h1.5c.758 0 1.375-.617 1.375-1.375V7c0-.758-.617-1.375-1.375-1.375zm-7 7.75h1a.626.626 0 0 1 0 1.25h-1a.626.626 0 0 1 0-1.25zM.875 10V7c0-.345.28-.625.625-.625h1.125v4.25H1.5A.626.626 0 0 1 .875 10zm14.25 0c0 .345-.28.625-.625.625h-1.125v-4.25H14.5c.345 0 .625.28.625.625z"
                        fill="#777"
                        opacity="1"
                        data-original="#000000"
                      ></path>
                      <path
                        d="M7.5 5.125H7a.376.376 0 0 0-.358.263l-1.25 4a.375.375 0 0 0 .716.224l.23-.737h1.823l.23.737a.376.376 0 0 0 .717-.224l-1.25-4a.376.376 0 0 0-.358-.263zm-.927 3 .677-2.168.677 2.168zM10.25 5.125a.375.375 0 0 0-.375.375v4a.375.375 0 0 0 .75 0v-4a.375.375 0 0 0-.375-.375z"
                        fill="#777"
                        opacity="1"
                      ></path>
                    </g>
                  </svg>
                  Ask anything about Cordova Public College.
                </div>
              </div>
            )}

            <div className="sticky bottom-0 mt-auto">
              <div className="flex gap-[15px] items-center p-3 border-t border-gray-300 ">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Type a message..."
                  className="w-full text-[14px] p-2 rounded-md border border-[#ff9aa2] focus:border-[#ff9aa2] outline-none focus-visible:border-[#ff9aa2] bg-[#f7f7f7] text-[#777]"
                />
                <button
                  onClick={handleSend}
                  className={`bg-[#9A0C16] text-white p-2 rounded-md flex justify-center items-center ${
                    isResponding ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {isResponding ? (
                    <>
                      <svg
                        class="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          class="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          stroke-width="4"
                        ></circle>
                        <path
                          class="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    </>
                  ) : (
                    <>
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
                    </>
                  )}
                </button>
              </div>
              <div className="px-3 text-[#c5c5c5] text-[12px]">
                Current model: gemini-1.5-pro-002
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
