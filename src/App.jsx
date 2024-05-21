import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import PlaylistCreation from "./pages/PlaylistCreation.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/create-playlist" element={<PlaylistCreation />} />
      </Routes>
    </Router>
  );
}

export default App;
