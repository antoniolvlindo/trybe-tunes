import React from 'react';

interface SearchResultHeaderProps {
  searchedArtist: string;
}

function SearchResultHeader({ searchedArtist }: SearchResultHeaderProps) {
  return (
    <h2>
      Resultado de álbuns de:
      {' '}
      {searchedArtist}
    </h2>
  );
}

export default SearchResultHeader;
