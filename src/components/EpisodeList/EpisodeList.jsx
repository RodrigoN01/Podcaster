import { Link } from "react-router-dom";
import { convertMillisecondsToTime } from "../../utils/convertMillisecondsToTime";
import { formatDate } from "../../utils/formatDate";
import styles from "./EpisodeList.module.scss";
import Spinner from "../Spinner/Spinner";

const EpisodeList = ({ podcastId, tracks, loading }) => {
  if (!tracks) return null;

  if (loading) return <Spinner />;

  return (
    <div className={styles.episodeList}>
      <h2 className={styles.episodeList__header}>Episodes: {tracks.length}</h2>

      <div className={styles.episodeList__table}>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Date</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {tracks.slice(1).map((episode) => (
              <tr key={episode.trackId}>
                <td>
                  <Link to={`/podcast/${podcastId}/episode/${episode.trackId}`}>
                    {episode.trackName}
                  </Link>
                </td>
                <td>{formatDate(episode.releaseDate)}</td>
                <td>{convertMillisecondsToTime(episode.trackTimeMillis)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EpisodeList;
