export const fetchPodcasts = async () => {
  const response = await fetch(
    "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
  );
  const data = await response.json();
  return data.feed.entry;
};

export const fetchPodcastDetails = async (podcastId) => {
  const response = await fetch(
    `https://itunes.apple.com/lookup?id=${podcastId}`
  );
  const data = await response.json();
  return data.results[0];
};
