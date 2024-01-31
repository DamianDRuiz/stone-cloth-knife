// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import LogIn from '../Pages/login';
import SignUp from '../Pages/signup';

export function App() {
  const path = import.meta.env.VITE_PATH;
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={`${path}signup`} element={<SignUp />} />
        <Route path={`${path}login`} element={<LogIn />} />
      </Routes>
    </>
  );
}

export default App;
