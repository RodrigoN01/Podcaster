import { useParams } from "react-router-dom";
import { usePodcastDetails } from "../Hooks/usePodcastDetails";
import styles from "./PodcastPage.module.scss";
import Spinner from "../components/Spinner/Spinner";

const PodcastPage = ({ children }) => {
  const { podcastId } = useParams();
  const { podcastDetails, loading } = usePodcastDetails(podcastId);

  if (loading) return <Spinner />;

  return (
    <div className={styles.podcastPage}>
      <aside className={styles.podcastPage__sidebar}>
        <div className={styles.podcastPage__card}>
          <img
            src={podcastDetails.artworkUrl600}
            alt='Podcast artwork'
            className={styles.podcastPage__image}
          />
          <h2 className={styles.podcastPage__title}>
            {podcastDetails.collectionName}
          </h2>
          <p className={styles.podcastPage__author}>
            by {podcastDetails.artistName}
          </p>
          <div className={styles.podcastPage__description}>
            <h3>Description:</h3>
            <p>{podcastDetails.description}</p>
          </div>
        </div>
      </aside>
      <section>{children}</section>
    </div>
  );
};

export default PodcastPage;
