import { Key, ReactNode } from 'react';

export type AlbumType = {
  name: ReactNode;
  id: Key | null | undefined;
  artistId: number;
  artistName: string;
  collectionId: number;
  collectionName: string;
  collectionPrice: number;
  artworkUrl100: string;
  releaseDate: string;
  trackCount: number;
};

export type UserType = {
  name: string;
  email: string;
  image: string;
  description: string;
};

export type SongType = {
  trackId: number,
  trackName: string,
  previewUrl: string,
};
