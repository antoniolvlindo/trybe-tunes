import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import searchAlbumsAPI from '../../services/searchAlbumsAPI';
import { AlbumType } from '../../types';
import Loading from '../Loading/Loading';

function Search() {
  const [artistName, setArtistName] = useState('');
  const [searchedArtist, setSearchedArtist] = useState('');
  const [searchAlbuns, setSearchAlbuns] = useState<AlbumType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (artistName.length >= 2) {
      setIsLoading(true);
      const data = await searchAlbumsAPI(artistName);
      setSearchAlbuns(data);
      setSearchedArtist(artistName);
      setArtistName('');
      setIsLoading(false);
    }
  }

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <form onSubmit={ handleSubmit }>
          <input
            data-testid="search-artist-input"
            type="text"
            value={ artistName }
            onChange={({ target }) => setArtistName(target.value)}
          />
          <button
            data-testid="search-artist-button"
            type="submit"
            disabled={ artistName.length < 2 }
          >
            Pesquisar
          </button>
        </form>
      )}
      {searchedArtist && <h2>Resultado de álbuns de: {searchedArtist}</h2>}
      {searchAlbuns.length > 0 ? (
        searchAlbuns.map((album) => (
          <Link
            key={ album.collectionId }
            to={ `/album/${album.collectionId}` }
            data-testid={ `link-to-album-${album.collectionId}` }
          >
            {album.collectionName}
          </Link>
        ))
      ) : (
        <p>Nenhum álbum foi encontrado</p>
      )}
    </div>
  );
}

export default Search;
