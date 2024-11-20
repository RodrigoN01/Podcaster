import { useParams } from "react-router-dom";
import { usePodcastTracks } from "../Hooks/usePodcastTracks";
import EpisodeList from "../components/EpisodeList/EpisodeList";
import Spinner from "../components/Spinner/Spinner";
import PodcastPage from "./PodcastPage";

const PodcastDetail = () => {
  const { podcastId } = useParams();
  const { podcastTracks, isLoading } = usePodcastTracks(podcastId);

  if (isLoading) return <Spinner />;

  return (
    <PodcastPage>
      <EpisodeList
        podcastId={podcastId}
        tracks={podcastTracks}
        loading={isLoading}
      />
    </PodcastPage>
  );
};

export default PodcastDetail;
