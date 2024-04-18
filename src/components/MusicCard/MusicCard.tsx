import React, { useState } from 'react';
import checkedHeart from '../../images/checked_heart.png';
import emptyHeart from '../../images/empty_heart.png';

interface MusicCardProps {
  trackName: string;
  previewUrl: string;
  trackId: number;
}

function MusicCard({ trackName, previewUrl, trackId }: MusicCardProps) {
  const [isFavorited, setIsFavorited] = React.useState(false);

  const handleFavoriteClick = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div>
      <h3>{trackName}</h3>
      <audio data-testid="audio-component" controls>
        <source src={ previewUrl } type="audio/mpeg" />
        <track kind="captions" srcLang="en" label="English" />
        Seu navegador não suporta o elemento de áudio.
      </audio>
      <label
        htmlFor={ `favorite-${trackId}` }
        data-testid={ `checkbox-music-${trackId}` }
      >
        <input
          id={ `favorite-${trackId}` }
          type="checkbox"
          name="favorite"
          checked={ isFavorited }
          onChange={ handleFavoriteClick }
        />
        <img src={ isFavorited ? checkedHeart : emptyHeart } alt="favorite" />
      </label>
    </div>
  );
}

export default MusicCard;
