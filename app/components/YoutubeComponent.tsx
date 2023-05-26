export default function YouTubeComponent({url}: {url: string}) {

  function extractYouTubeVideoId(url: string): string | null {
    const youtubeUrlPattern = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([^\s&]+)/;
    const match = url.match(youtubeUrlPattern);

    if (match && match[1]) {
      const embedId = match[1];
      return embedId;
    }
    return null;
  }

  const embedId = extractYouTubeVideoId(url)
  
  return (
    <div className="relative pb-[56.25%]">
    <iframe
      className="absolute top-0 left-0 w-full h-full"
      src={`https://www.youtube.com/embed/${embedId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Youtube"
    />
  </div>
  );
};