"use client";
import { Spotify } from 'react-spotify-embed';

const SpotifyComponent = ({url}: {url: string}) => {
  return (
    <Spotify wide link={url} />
  );
};

export default SpotifyComponent;