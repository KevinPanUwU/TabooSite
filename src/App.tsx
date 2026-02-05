import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import AboutTaboo from './pages/AboutTaboo';
import AnnotatedBibliography from './pages/AnnotatedBibliography';
import BoWOverview from './pages/BoWOverview';
import CreativeResponse from './pages/CreativeResponse';
import StoryOfLearning from './pages/StoryOfLearning';
import References from './pages/References';
import './App.css';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-taboo" element={<AboutTaboo />} />
        <Route path="/annotated-bibliography" element={<AnnotatedBibliography />} />
        <Route path="/bow-overview" element={<BoWOverview />} />
        <Route path="/creative-response" element={<CreativeResponse />} />
        <Route path="/story-of-learning" element={<StoryOfLearning />} />
        <Route path="/references" element={<References />} />
      </Routes>
    </Router>
  );
}

export default App;
