"use client";
import Link from 'next/link';
import React from 'react';
import YoutubeComponent from './YoutubeComponent';
import { Spotify } from 'react-spotify-embed';

const ProjectLink = ({ url }: {url: string}) => {
  if (url.includes('youtube.com') || url.includes('youtu.be')) {

    return <YoutubeComponent url={url}/>;
  } else if (url.includes('spotify.com')) {
    return <SpotifyComponent url={url}/>;
  } else if (url.includes('drive.google.com/file')) {
    return <PdfComponent url={url}/>;
  } else {
    return <OtherComponent url={url}/>;
  }
};

const SpotifyComponent = ({url}: {url: string}) => {
  return (
    <Spotify wide link={url} />
  );
};

const PdfComponent = ({url}: {url: string}) => {
  return (
    <iframe src={url} width="640" height="480" allow="autoplay"></iframe>
  );
};

const OtherComponent = ({url}: {url: string}) => {
  return (
    <Link className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-green-400 hover:text-gray-900 transition" href={url} title="Ver Projeto" target="_blank" rel="noopener noreferrer">Ver Projeto</Link>
  );
};

export default ProjectLink;
