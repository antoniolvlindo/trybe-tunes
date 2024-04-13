import React, { useEffect, useState } from 'react';
import searchAlbumsAPI from '../../services/searchAlbumsAPI';
import { AlbumType } from '../../types';

function Search() {
  const [artistName, setArtistName] = React.useState('');
  const [searchAlbuns, setSearchAlbuns] = useState<AlbumType[]>([]);

  useEffect(() => {
    async function fetchAlbum() {
      const data = await searchAlbumsAPI(artistName);
      setSearchAlbuns(data);
    }
    fetchAlbum();
  });

  function isArtistNameValid() {
    return artistName.length >= 2;
  }

  function resetArtistName() {
    setArtistName('');
  }

  function handleSubmit() {
    isArtistNameValid();
    resetArtistName();
  }

  return (
    <form onSubmit={ handleSubmit }>
      <input
        type="text"
        data-testid="search-artist-input"
        placeholder="Nome do Artista"
        name={ artistName }
        onChange={ ({ target }) => setArtistName(target.value) }
      />
      <button
        data-testid="search-artist-button"
        disabled={ !isArtistNameValid() }
      >
        Procurar
      </button>
    </form>
  );
}

export default Search;
