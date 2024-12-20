import { useState, useEffect } from "react";
import { fetchPodcastDetails } from "../utils/fetchData";

export const usePodcastDetails = (podcastId) => {
  const [podcastDetails, setPodcastDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPodcast = async () => {
      try {
        const data = await fetchPodcastDetails(podcastId);
        setPodcastDetails(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadPodcast();
  }, [podcastId]);

  return { podcastDetails, loading };
};
