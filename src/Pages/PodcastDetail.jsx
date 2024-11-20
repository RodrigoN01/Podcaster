import { useParams } from "react-router-dom";
import { usePodcastDetails } from "../Hooks/usePodcastDetails";
import { usePodcastTracks } from "../Hooks/usePodcastTracks";
import EpisodeList from "../components/EpisodeList/EpisodeList";
import styles from "./PodcastDetail.module.scss";
import Spinner from "../components/Spinner/Spinner";

const PodcastDetail = () => {
  const { podcastId } = useParams();
  const { podcastDetails, loading } = usePodcastDetails(podcastId);
  const { tracks, isLoading } = usePodcastTracks(podcastId);

  if (loading) return <Spinner />;

  return (
    <div className={styles.podcastDetail}>
      <aside className={styles.podcastDetail__sidebar}>
        <div className={styles.podcastDetail__card}>
          <img
            src={podcastDetails.artworkUrl600}
            alt='Podcast artwork'
            className={styles.podcastDetail__image}
          />
          <h2 className={styles.podcastDetail__title}>
            {podcastDetails.collectionName}
          </h2>
          <p className={styles.podcastDetail__author}>
            by {podcastDetails.artistName}
          </p>
          <div className={styles.podcastDetail__description}>
            <h3>Description:</h3>
            <p>{podcastDetails.description}</p>
          </div>
        </div>
      </aside>
      <section>
        <EpisodeList
          podcastId={podcastId}
          tracks={tracks}
          loading={isLoading}
        />
      </section>
    </div>
  );
};

export default PodcastDetail;
