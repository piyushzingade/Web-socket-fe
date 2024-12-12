import { useEffect, useRef, useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";


export function Dashboard(){
    const [ws, setWs] = useState<WebSocket | null>(null);
    const [room, setRoom] = useState<string | null>(null);
    const usernameRef = useRef<HTMLInputElement>(null);
    const joincodeRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

  useEffect(() => {
    const websocket = new WebSocket("ws://localhost:3000");
    setWs(websocket);
    websocket.onopen = () => {
      console.log("WebSocket connection established");
    };
    return () => websocket.close(); // Cleanup on unmount
  }, []);

  function createCode() {
    const randomcode = "1234567890ABCD ";
    const generatedCode = Array.from({ length: 6 }, () =>
      randomcode.charAt(Math.floor(Math.random() * randomcode.length))
    ).join("");
    setRoom(generatedCode);
  }

  function copyToClipboard(){
    navigator.clipboard.writeText(room as string);
    alert("Copied to clipboard");
  }

  function joinRoom() {
    const name  = usernameRef.current?.value.trim();
    const code = joincodeRef.current?.value.trim();
    if (!name || !code) {
      alert("Please enter your name and room code!");
      return;
    }
    ws?.send(
      JSON.stringify({
        type: "join",
        payload: { 
          room: code,
          name,
        },
      })
    )
    setRoom(null);
    navigate("/chat")
  }

  
  return (
    <div className="bg-[#0a0a0a] text-white h-screen w-screen flex justify-center items-center">
      <div className="bg-[#0a0a0a] min-w-[500px] min-h-[300px] rounded-xl border border-gray-200 p-8 m-8">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
            />
          </svg>
          <h1 className="text-2xl font-semibold pl-2">Real-Time Chat</h1>
        </div>
        <div className="text-gray-300 text-sm">
          Temporary room that expires after all users exit
        </div>
        <div className="mt-4">
          <button
            onClick={createCode}
            className="bg-white text-black w-full h-12 font-semibold text-lg rounded-lg flex justify-center items-center"
          >
            Create New Room
          </button>
        </div>
        <div className="mt-4">
          <input
            ref={usernameRef}
            placeholder="Enter your name"
            className="border bg-black pl-2 py-2 flex w-full rounded-lg"
          />
          <div className="flex gap-3">
            <input
              ref={joincodeRef}
              placeholder="Enter Room Code"
              className="border bg-black pl-2 py-2 flex mt-3 rounded-lg w-[375px]"
            />
            <button onClick={joinRoom} className="bg-white text-black font-medium rounded-lg mt-3 w-[125px]">
              Join Room
            </button>
          </div>
        </div>
        {room && (
          <div className="mt-4 text-center text-xl font-semibold bg-[#262626] rounded-lg p-4">
            <div className="text-[#a3a3a3] text-center ">
              Share this code with your friends:
            </div>
            <div className="mt-2 flex justify-center gap-3 items-center text-[#fafafa] p-2 rounded-lg text-2xl">
              {room}
              <button onClick={copyToClipboard}>
                <IoCopyOutline />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}