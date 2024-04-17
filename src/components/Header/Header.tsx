import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../../services/userAPI';
import Loading from '../Loading/Loading';

function Header() {
  const [userName, setUserName] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getUser().then((user) => {
      setUserName(user.name);
      setIsLoading(false);
    });
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <header data-testid="header-component">
          <h1 data-testid="header-user-name">{userName}</h1>
          <p>
            <Link to="/search" data-testid="link-to-search">Procurar</Link>
          </p>
          <p>
            <Link to="/favorites" data-testid="link-to-favorites">Favoritos</Link>
          </p>
          <p>
            <Link to="/profile" data-testid="link-to-profile">Perfil</Link>
          </p>
        </header>
      )}

    </div>

  );
}

export default Header;
