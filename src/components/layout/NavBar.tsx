import Userfront, { LogoutButton } from '@userfront/toolkit';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.scss';

const NavBar = ({ userData }: { userData: Userfront.User }) => {
  const reload = () => setTimeout(() => document.location.reload(), 500);
  const path = import.meta.env.VITE_PATH;
  return (
    <>
      <div className={`${styles.greeting}`}>
        Hi {userData.email ? userData.email : ''}{' '}
      </div>
      {Userfront.tokens.accessToken ? (
        <div className={`logout ${styles.link}`} onClick={reload}>
          <LogoutButton />
        </div>
      ) : (
        <>
          <div className={`${styles.link}`}>
            <Link to={`${path}signup`}>Sign Up</Link>
          </div>
          <div className={`${styles.link}`}>
            <Link to={`${path}login`}>Log In</Link>
          </div>
        </>
      )}
    </>
  );
};

export default NavBar;
