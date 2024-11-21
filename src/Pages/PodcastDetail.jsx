import { useParams } from "react-router-dom";
import { usePodcastTracks } from "../Hooks/usePodcastTracks";
import EpisodeList from "../components/EpisodeList/EpisodeList";
import Spinner from "../components/Spinner/Spinner";
import PodcastPage from "./PodcastPage";

const PodcastDetail = () => {
  const { podcastId } = useParams();
  const { podcastTracks, loading } = usePodcastTracks(podcastId);

  return (
    <PodcastPage>
      {loading ? (
        <Spinner />
      ) : (
        <EpisodeList
          podcastId={podcastId}
          tracks={podcastTracks}
          loading={loading}
        />
      )}
    </PodcastPage>
  );
};

export default PodcastDetail;
