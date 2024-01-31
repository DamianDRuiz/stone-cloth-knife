//@ts-ignore
import Userfront, { LogoutButton } from '@userfront/toolkit/react';
import { Link, Navigate, useLocation } from 'react-router-dom';
const userData = Userfront.user;
Userfront.init('vbq8rjzn');

const reload = () => setTimeout(() => document.location.reload(), 500);

const Home = () => {
  return (
    <>
      <div>Hi {userData.email ? userData.email : ''} </div>
      {Userfront.tokens.accessToken ? (
        <div className="logout" onClick={reload}>
          <LogoutButton />
        </div>
      ) : (
        <>
          <div>
            <Link to="/signup">Sign Up</Link>
          </div>
          <div>
            <Link to="/login">Log In</Link>
          </div>
        </>
      )}
    </>
  );
};

const RequireAuth = ({ children }: any) => {
  let location = useLocation();
  if (!Userfront.tokens.accessToken) {
    // Redirect to the /login page
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default Home;
