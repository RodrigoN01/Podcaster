export const fetchPodcasts = async () => {
  const response = await fetch(
    "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
  );
  const data = await response.json();
  return data.feed.entry;
};

export const fetchPodcastDetails = async (podcastId) => {
  const response = await fetch(
    `https://cors-anywhere.herokuapp.com/https://itunes.apple.com/lookup?id=${podcastId}`
  );
  const data = await response.json();
  return data.results[0];
};

export const fetchPodcastTracks = async (podcastId) => {
  const response = await fetch(
    `https://cors-anywhere.herokuapp.com/https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=100`
  );
  const data = await response.json();
  return data.results;
};
