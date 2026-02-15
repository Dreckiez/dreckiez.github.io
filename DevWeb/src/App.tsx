import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from "./pages/About";
import Projects from './pages/Projects';
import Posts from './pages/Posts';
import PostLoader from './pages/PostLoader';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/projects" element={<Projects />} />

      <Route path="/posts/:slug" element={<PostLoader />} />
    </Routes>
  );
}

export default App;