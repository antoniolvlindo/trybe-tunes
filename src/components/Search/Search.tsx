import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import searchAlbumsAPI from '../../services/searchAlbumsAPI';
import { AlbumType } from '../../types';

function Search() {
  const [artistName, setArtistName] = useState('');
  const [searchedArtist, setSearchedArtist] = useState('');
  const [searchAlbuns, setSearchAlbuns] = useState<AlbumType[]>([]);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (artistName.length >= 2) {
      const data = await searchAlbumsAPI(artistName);
      setSearchAlbuns(data);
      setSearchedArtist(artistName);
      setArtistName('');
    }
  }

  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <input
          type="text"
          value={ artistName }
          onChange={ ({ target }) => setArtistName(target.value) }
          data-testid="search-artist-input"
        />
        <button
          type="submit"
          disabled={artistName.length < 2}
          data-testid="search-artist-button"
        >
          Pesquisar
        </button>
      </form>
      {
      searchedArtist
        && <h2>
          Resultado de álbuns de:
          {' '}
          {searchedArtist}
        </h2>
      }
      {searchAlbuns.length > 0 ? (
        searchAlbuns.map((album) => (
          <Link key={ album.id } to={ `/album/${album.id}` }>
            { album.name }
          </Link>
        ))
      ) : (
        <p>Nenhum álbum foi encontrado</p>
      )}
    </div>
  );
}

export default Search;
