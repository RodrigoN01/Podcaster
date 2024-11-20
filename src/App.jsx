import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./Pages/Home";
import EpisodeDetail from "./pages/EpisodeDetail";
import PodcastDetail from "./Pages/PodcastDetail";

const App = () => {
  return (
    <BrowserRouter>
      <div className='app'>
        <Header />
        <main className='app__content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/podcast/:podcastId' element={<PodcastDetail />} />
            <Route
              path='/podcast/:podcastId/episode/:episodeId'
              element={<EpisodeDetail />}
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
