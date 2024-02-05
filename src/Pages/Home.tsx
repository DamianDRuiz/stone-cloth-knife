import Userfront from '@userfront/toolkit';
import { useState } from 'react';
import NavBar from 'src/components/layout/NavBar.tsx';

const userData = Userfront.user;
Userfront.init('vbq8rjzn');

const Home = () => {
  return (
    <>
      <NavBar userData={userData} />
      <Game />
    </>
  );
};

const Game = () => {
  const [p1Move, usep1Move] = useState<Move | null>(null);
  const [p2Move, usep2Move] = useState<Move | null>(null);
  const [turn, useTurn] = useState<Turn>('1');

  const handleClick = (choice: Move) => {
    if (turn == '1') {
      usep1Move(choice);
      useTurn('2');
    } else if (turn == '2') {
      usep2Move(choice);
    }
  };

  const reset = () => {
    usep1Move(null);
    usep2Move(null);
    useTurn('1');
  };

  const decideWinner = (player1Move: Move, player2Move: Move) => {
    if (player1Move == null || player2Move == null) return;
    const wins = { rock: 'scissors', paper: 'rock', scissors: 'paper' };

    if (player1Move == player2Move) alert('stalemate');
    else if (wins[player1Move] == player2Move) alert('1 wins');
    else alert('2 wins');
  };

  return (
    <>
      <div>Player {`${turn}`}</div>
      <MoveChoice
        onClick={() => {
          handleClick('rock');
        }}
        choice="rock"
      />
      <MoveChoice
        onClick={() => {
          handleClick('paper');
        }}
        choice="paper"
      />
      <MoveChoice
        onClick={() => {
          handleClick('scissors');
        }}
        choice="scissors"
      />
      <div>
        <button
          onClick={() => {
            decideWinner(p1Move, p2Move);
          }}
        >
          Reveal
        </button>
        <button onClick={reset}>New Game</button>
      </div>
    </>
  );
};

const MoveChoice = ({ choice, onClick }: { choice: Move; onClick: any }) => {
  return (
    <>
      <div onClick={onClick}>{choice != null ? choice : ''}</div>
    </>
  );
};

type Move = 'rock' | 'paper' | 'scissors';

type Turn = '1' | '2';

// const RequireAuth = ({ children }: any) => {
//   let location = useLocation();
//   if (!Userfront.tokens.accessToken) {
//     // Redirect to the /login page
//     return <Navigate to="/login" state={{ from: location }} replace />;
//   }

//   return children;
// };

export default Home;
