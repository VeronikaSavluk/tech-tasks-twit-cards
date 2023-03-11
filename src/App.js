import {lazy} from 'react';
import {Routes, Route} from 'react-router-dom';
import useLocalStorage from "./hooks/useLocalStorage";
import CardContext from './Context';

import { Layout } from './components/layout/Layout';
import './App.css';

const TwitCardspage = lazy(() => import('./pages/TwitCardsPage'));

function App() {
  const [followings, setFollowings] = useLocalStorage('followings', []);

  const handleFollowings = id => {
    const followingUser = followings.filter(userId => userId === id);

    if(followingUser.length > 0){
      return setFollowings(prevState => prevState.filter(userId => userId !== id));
    }

    setFollowings(prevState => [...prevState, id]);
  };

  const value = {
    followings,
    handleFollowings
  };
  
  return (
    <CardContext.Provider value={value}>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<TwitCardspage/>} />
      </Route>
    </Routes>
    </CardContext.Provider>
  );
};

export default App;