// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import LogIn from '../Pages/login';
import SignUp from '../Pages/signup';

export function App() {
  return (
    <>
      <Routes>
        <Route path="/stone-cloth-knife/" element={<Home />} />
        <Route path="/stone-cloth-knife/signup" element={<SignUp />} />
        <Route path="/stone-cloth-knife/login" element={<LogIn />} />
      </Routes>
    </>
  );
}

export default App;
