import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MovieDetails from "./pages/MovieDetails";
import SeriesDetails from "./pages/SeriesDetails";
import TrendDetails from "./pages/TrendDetails";
import Favorites from "./pages/Favorites";

// State
// ----------------- Handler --------------

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/series/:id" element={<SeriesDetails />} />
        <Route path="/trend/:id" element={<TrendDetails />} />
        <Route path="favorites" element={<Favorites />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
