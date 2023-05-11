import React, { useState } from "react";
import { FiSend } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import {
  MdCameraAlt,
  MdMic,
  MdImage,
  MdInsertDriveFile,
  MdCall,
  MdVideocam,
} from "react-icons/md"; // import the necessary icons
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

const ChatComponent = () => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [message, setMessage] = useState("");

  const handleEmojiSelect = (emoji) => {
    setMessage(message + emoji.native);
  };

  const handleSend = () => {
    // handle send message
    setMessage("");
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen bg-gray-900 text-white p-2">
      <div className="w-full flex justify-center mb-4">
        <h1 className="text-2xl font-bold">Chat ui</h1>
      </div>
      {/* Header Start */}
      <div className="flex w-full justify-between mb-4">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-600 flex items-center justify-center">
            <CgProfile className="text-3xl text-purple-400" />
          </div>
          <div className="ml-3">
            <div className="text-base font-medium text-white">John Doe</div>
            <div className="text-sm text-gray-400">Online</div>
          </div>
        </div>
        <div className="flex items-center">
          <button className="mr-3 bg-gray-700 hover:bg-gray-600 rounded-full py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-600">
            <MdCall className="text-xl" />
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 rounded-full py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-600">
            <MdVideocam className="text-xl" />
          </button>
        </div>
      </div>
      {/* Component Start */}
      <div className="flex flex-col flex-grow w-full bg-gray-800 shadow-xl rounded-lg overflow-hidden">
        <div className="flex flex-col flex-grow h-0 p-4 overflow-auto">
          <div className="flex w-full mt-2 space-x-3 max-w-xs">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-600 flex items-center justify-center">
              <CgProfile className="text-3xl text-purple-400" />
            </div>
            <div>
              <div className="bg-gray-600 p-3 rounded-l-lg rounded-br-lg">
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <span className="text-xs text-gray-400 leading-none">
                2 min ago
              </span>
            </div>
          </div>
          <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
            <div>
              <div className="bg-blue-500 text-white p-3 rounded-r-lg rounded-bl-lg">
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod.
                </p>
              </div>
              <span className="text-xs text-gray-400 leading-none">
                2 min ago
              </span>
            </div>
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-600 flex items-center justify-center">
              <CgProfile className="text-3xl text-red-400" />
            </div>
          </div>
          <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
            <div>
              <div className="bg-blue-500 text-white p-3 rounded-r-lg rounded-bl-lg">
                <p className="text-sm">Lorem ipsum dolor sit amet.</p>
              </div>
              <span className="text-xs text-gray-400 leading-none">
                2 min ago
              </span>
            </div>
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-600 flex items-center justify-center">
              <CgProfile className="text-3xl text-red-400" />
            </div>
          </div>
          <div className="flex w-full mt-2 space-x-3 max-w-xs">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-600 flex items-center justify-center">
              <CgProfile className="text-3xl text-purple-400" />
            </div>
            <div>
              <div className="bg-gray-600 p-3 rounded-l-lg rounded-br-lg">
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </p>
              </div>
              <span className="text-xs text-gray-400 leading-none">
                2 min ago
              </span>
            </div>
          </div>
          <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
            <div>
              <div className="bg-blue-500 text-white p-3 rounded-r-lg rounded-bl-lg">
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </p>
              </div>
              <span className="text-xs text-gray-400 leading-none">
                2 min ago
              </span>
            </div>
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-600 flex items-center justify-center">
              <CgProfile className="text-3xl text-red-400" />
            </div>
          </div>
          <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
            <div>
              <div className="bg-blue-500 text-white p-3 rounded-r-lg rounded-bl-lg">
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
              <span className="text-xs text-gray-400 leading-none">
                2 min ago
              </span>
            </div>
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-600 flex items-center justify-center">
              <CgProfile className="text-3xl text-red-400" />
            </div>
          </div>
          <div className="flex w-full mt-2 space-x-3 max-w-xs">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-600 flex items-center justify-center">
              <CgProfile className="text-3xl text-purple-400" />
            </div>
            <div>
              <div className="bg-gray-600 p-3 rounded-l-lg rounded-br-lg">
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <span className="text-xs text-gray-400 leading-none">
                2 min ago
              </span>
            </div>
          </div>
        </div>
        <div className="flex p-4">
          <div className="flex-grow-0">
            {/* Camera icon */}

            {/* Voice note icon */}
            <button className="ml-2 bg-gray-700 hover:bg-gray-600 rounded-full py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-600">
              <MdMic className="text-xl" />
            </button>
          </div>
          <div className="flex-grow ml-4">
            {/* Input field */}
            <div className="relative rounded-full border border-gray-700 bg-gray-900 py-2 pl-4 pr-12 focus-within:ring-2 focus-within:ring-blue-600 focus-within:border-transparent">
              <input
                type="text"
                className="w-full bg-transparent outline-none text-white"
                placeholder="Type your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button
                className="absolute right-0 top-0 bottom-0 px-4 py-2 text-blue-600 hover:text-blue-800"
                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
              >
                {showEmojiPicker ? "😄" : "😊"}
              </button>
              {showEmojiPicker && (
                <div className="absolute bottom-full right-0 mb-16">
                  <Picker
                    set="twitter"
                    onSelect={handleEmojiSelect}
                    data={data}
                  />
                </div>
              )}
            </div>
          </div>
          <div className="flex-grow-0 ml-auto">
            {/* Send button */}
            <button
              className="bg-blue-600 hover:bg-blue-700 rounded-full py-2 px-4 ml-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
              onClick={handleSend}
            >
              <FiSend className="text-xl" />
            </button>
          </div>
        </div>
      </div>
      {/* Component End */}
    </div>
  );
};

export default ChatComponent;
