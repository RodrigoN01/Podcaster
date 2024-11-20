import { useState, useEffect } from "react";
import { fetchPodcastTracks } from "../utils/fetchData";

export const usePodcastTracks = (podcastId) => {
  const [podcastTracks, setPodcastTracks] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPodcast = async () => {
      try {
        const data = await fetchPodcastTracks(podcastId);
        setPodcastTracks(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadPodcast();
  }, [podcastId]);

  return { podcastTracks, loading };
};
