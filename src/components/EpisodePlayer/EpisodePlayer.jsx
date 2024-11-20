import styles from "./EpisodePlayer.module.scss";

const EpisodePlayer = ({ episode }) => {
  return (
    <div className={styles.episodePlayer}>
      <h2 className={styles.episodePlayer__title}>{episode.trackName}</h2>
      <div className={styles.episodePlayer__description}>
        <p>
          {episode.shortDescription
            ? episode.shortDescription
            : episode.description}
        </p>
      </div>
      <div className={styles.episodePlayer__player}>
        <audio controls className={styles.episodePlayer__audio}>
          <source src={episode.episodeUrl} type='audio/mpeg' />
        </audio>
      </div>
    </div>
  );
};
export default EpisodePlayer;
