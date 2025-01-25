import { useState, useEffect, useRef } from "react";
import { FaHeart, FaStopCircle } from "react-icons/fa";

export default function LiveStream() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [likes, setLikes] = useState(0);
  const [isStreaming, setIsStreaming] = useState(true);
  const videoRef = useRef(null);
  const wsRef = useRef(null);
  const streamRef = useRef(null);

  useEffect(() => {
    // WebSocket connection for real-time chat
    wsRef.current = new WebSocket("wss://your-websocket-server.com");

    wsRef.current.onmessage = (event) => {
      setMessages((prevMessages) => [...prevMessages, event.data]);
    };

    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((err) => console.error("Error accessing media devices.", err));

    return () => {
      if (wsRef.current) wsRef.current.close();
      stopStreaming();
    };
  }, []);

  const sendMessage = () => {
    if (newMessage.trim() && wsRef.current) {
      wsRef.current.send(newMessage);
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setNewMessage("");
    }
  };

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const stopStreaming = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
    }
    setIsStreaming(false);
  };

  return (
    <div className="flex flex-col h-screen bg-black text-white">
      {/* Video Stream */}
      <div className="relative w-full h-3/4">
        {isStreaming ? (
          <video
            ref={videoRef}
            autoPlay
            playsInline
            className="w-full h-full object-cover rounded-b-3xl"
          ></video>
        ) : (
          <div className="flex items-center justify-center h-full bg-gray-900">
            <p className="text-xl">Live Stream Stopped</p>
          </div>
        )}

        <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded-lg">
          <p className="text-sm">Live Stream</p>
        </div>

        {/* Like Button */}
        <button
          onClick={handleLike}
          className="absolute bottom-4 right-4 bg-red-500 text-white p-3 rounded-full shadow-lg"
        >
          <FaHeart size={24} />
          <span className="text-xs ml-1">{likes}</span>
        </button>

        {/* Stop Streaming Button */}
        <button
          onClick={stopStreaming}
          className="absolute top-4 right-4 bg-gray-800 text-white p-3 rounded-full"
        >
          <FaStopCircle size={24} />
        </button>
      </div>

      {/* Chat Section */}
      <div className="flex flex-col h-1/4 p-4 space-y-2 overflow-y-auto">
        <div className="flex-1 overflow-y-auto">
          {messages.map((msg, index) => (
            <div key={index} className="bg-gray-800 p-2 rounded-lg text-sm mb-1">
              {msg}
            </div>
          ))}
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 p-2 rounded-lg bg-gray-700 border-none focus:outline-none"
          />
          <button
            onClick={sendMessage}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
