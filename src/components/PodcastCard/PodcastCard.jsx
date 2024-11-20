import { Link } from "react-router-dom";
import styles from "./PodcastCard.module.scss";

const PodcastCard = ({ podcast }) => {
  return (
    <Link
      to={`/podcast/${podcast.id.attributes["im:id"]}`}
      className={styles.podcastCard}
    >
      <div className={styles.podcastCard__imageContainer}>
        <img
          src={podcast["im:image"][2].label}
          alt={podcast["im:name"].label}
          className={styles.podcastCard__image}
        />
      </div>
      <h2 className={styles.podcastCard__title}>{podcast["im:name"].label}</h2>
      <p className={styles.podcastCard__author}>
        Author: {podcast["im:artist"].label}
      </p>
    </Link>
  );
};

export default PodcastCard;
