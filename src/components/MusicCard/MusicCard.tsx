import React from 'react';

interface MusicCardProps {
  trackName: string;
  previewUrl: string;
}

function MusicCard({ trackName, previewUrl }: MusicCardProps) {
  return (
    <div>
      <h3>{trackName}</h3>
      <audio data-testid="audio-component" controls>
        <source src={ previewUrl } type="audio/mpeg" />
        <track kind="captions" srcLang="en" label="English" />
        Seu navegador não suporta o elemento de áudio.
      </audio>
    </div>
  );
}

export default MusicCard;
