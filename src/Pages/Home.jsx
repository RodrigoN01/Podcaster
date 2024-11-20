import { useState } from "react";
import PodcastCard from "../components/PodcastCard/PodcastCard";
import { usePodcasts } from "../Hooks/usePodcasts";
import styles from "./Home.module.scss";
import SearchBar from "../components/SearchBar/SearchaBar";
import Spinner from "../components/Spinner/Spinner";

const Home = () => {
  const { podcasts, loading } = usePodcasts();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPodcasts = podcasts.filter((podcast) =>
    podcast["im:name"].label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.home}>
      <div className={styles.home__search}>
        <span className={styles.home__search__count}>
          {filteredPodcasts.length}
        </span>
        <SearchBar onSearch={setSearchTerm} value={searchTerm} />
      </div>

      {loading ? (
        <Spinner />
      ) : (
        <div className={styles.home__podcasts}>
          {filteredPodcasts.map((podcast) => (
            <PodcastCard
              key={podcast.id.attributes["im:id"]}
              podcast={podcast}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
