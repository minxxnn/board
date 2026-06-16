import { BrowserRouter, Routes, Route } from "react-router-dom";
import BoardList from "./pages/board/BoardList";
import BoardWrite from "./pages/board/BoardWrite";
import BoardDetail from "./pages/board/BoardDetail";
import BoardEdit from "./pages/board/BoardEdit";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/board" element={<BoardList />} />
      <Route path="/board/write" element={<BoardWrite />} />
      <Route path="/board/:id" element={<BoardDetail />} />
      <Route path="/board/:id/edit" element={<BoardEdit />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;