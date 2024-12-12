import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
// import {  ChatPage } from "./pages/Chat"; // Assuming this component is in the `pages` directory

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        {/* <Route path="/chat" element={<ChatPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
