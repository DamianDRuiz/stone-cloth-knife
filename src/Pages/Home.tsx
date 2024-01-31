//@ts-ignore
import Userfront from '@userfront/toolkit/react';
import { Link, Navigate, useLocation } from 'react-router-dom';
Userfront.init('wn989qpb');
const userData = Userfront.user;

const Home = () => {
  return (
    <>
      <div>Hi {userData.email ? userData.email : ''} </div>
      {Userfront.tokens.accessToken ? (
        <div>
          <Link to="/logout">Log Out</Link>
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
