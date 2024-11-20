import { useState, useEffect } from "react";
import { fetchPodcastDetails } from "../utils/fetchData";

export const usePodcastDetails = (podcastId) => {
  const [podcastDetails, setPodcastDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPodcast = async () => {
      try {
        const data = await fetchPodcastDetails(podcastId);
        console.log("here", data);
        setPodcastDetails(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadPodcast();
  }, [podcastId]);

  return { podcastDetails, loading, error };
};
