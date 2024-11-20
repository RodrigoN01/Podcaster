import { useState, useEffect } from "react";
import { fetchPodcasts } from "../utils/fetchData";

export const usePodcasts = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPodcasts = async () => {
      try {
        const data = await fetchPodcasts();
        setPodcasts(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadPodcasts();
  }, []);

  return { podcasts, loading };
};
