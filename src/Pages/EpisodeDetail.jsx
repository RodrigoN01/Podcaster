import { useParams } from "react-router-dom";
import EpisodePlayer from "../components/EpisodePlayer/EpisodePlayer";
import { usePodcastTracks } from "../Hooks/usePodcastTracks";
import Spinner from "../components/Spinner/Spinner";
import PodcastPage from "./PodcastPage";

const EpisodeDetail = () => {
  const { podcastId, episodeId } = useParams();
  const { podcastTracks, loading } = usePodcastTracks(podcastId);

  if (loading) return <Spinner />;

  const episode =
    podcastTracks && podcastTracks.find((track) => track.trackId == episodeId);

  return (
    <PodcastPage>
      {!!episode && <EpisodePlayer episode={episode} />}
    </PodcastPage>
  );
};

export default EpisodeDetail;
