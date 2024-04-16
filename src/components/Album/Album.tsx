import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getMusics from '../../services/musicsAPI';
import MusicCard from '../MusicCard/MusicCard';
import { AlbumType, SongType } from '../../types';

function Album() {
  const { id } = useParams();
  const [album, setAlbum] = useState<AlbumType | null>(null);
  const [musics, setMusics] = useState<(AlbumType | SongType)[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchMusics() {
      setIsLoading(true);
      const data = await getMusics(id ?? '');
      setAlbum(data[0]);
      setMusics(data.slice(1));
      setIsLoading(false);
    }
    fetchMusics();
  }, [id]);

  if (isLoading) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <h1 data-testid="album-name">
        Álbum
        { (album as any)?.collectionName }
      </h1>
      <p data-testid="artist-name">
        Artista:
        { (album as any)?.artistName }
      </p>
      <ul>
        {musics.map((music: any, index) => (
          <MusicCard
            key={ index }
            trackName={ music.trackName }
            previewUrl={ music.previewUrl }
          />
        ))}
      </ul>
    </div>
  );
}

export default Album;
