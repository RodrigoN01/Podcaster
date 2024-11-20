import { useParams } from "react-router-dom";
import { usePodcastDetails } from "../Hooks/usePodcastDetails";

const PodcastDetail = () => {
  const { podcastId } = useParams();
  const { podcastDetails } = usePodcastDetails(podcastId);

  return <div>PodcastDetail</div>;
};

export default PodcastDetail;
