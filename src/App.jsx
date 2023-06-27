import "./App.css";
import Home from "./pages/Home/Home";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "./pages/Movies/Movies";
import Series from "./pages/Series/Series";
import Bookmarked from "./pages/Bookmarked/Bookmarked";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="Movies" element={<Movies />} />
            <Route path="Series" element={<Series />} />
            <Route path="Bookmarked" element={<Bookmarked />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
