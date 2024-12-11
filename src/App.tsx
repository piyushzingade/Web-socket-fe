
import './App.css'

function App() {
  

  return (
    <div className="bg-black text-white h-screen w-screen flex justify-center items-center">
      <div
        className=" bg-black min-w-96 h-72 rounded-xl
      border  border-gray-200 p-8 m-8"
      >
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
            />
          </svg>
          <h1 className="text-2xl font-semibold pl-2">Real time Chat </h1>
        </div>
        <div className="text-gray-300">
          temporary room that expries after all users exit
        </div>
        <div className="mt-4">
          <button className="bg-white text-black w-full h-10 font-medium rounded-lg flex justify-center items-center">
            Create New Room
          </button>
        </div>
        <div className="mt-4">
          <input
            placeholder="Enter your name"
            className="border bg-black pl-2 py-2 flex w-full rounded-lg"
          />
          <div className="flex gap-3">
            <input
              placeholder="Enter the code"
              className="border bg-black pl-2 py-2 flex mt-3 rounded-lg"
            />
            <button className="bg-white text-black w-full h-10 font-medium rounded-lg  mt-3">
              Join Room
            </button>
          </div>

          
        </div>
      </div>
    </div>
  );
}

export default App
