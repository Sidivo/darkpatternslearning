import React, { useEffect } from 'react';
import Login from './pages/Login';
import Homepage from './pages/Homepage'
import Registration from './pages/Registration'
import ForgotPassword from './pages/ForgotPassword';
import Categories from './pages/Categories';
import Account from './pages/Account';
import Obstruction from './pages/Obstruction';
import ForcedAction from './pages/ForcedAction';
import Sneaking from './pages/Sneaking';
import InterfaceInterference from './pages/InterfaceInterference';
import Nagging from './pages/Nagging';
import NaggingQuiz from './pages/NaggingQuiz';
import SneakingQuiz from './pages/SneakingQuiz';
import ObstructionQuiz from './pages/ObstructionQuiz';
import ForcedActionQuiz from './pages/ForcedActionQuiz';
import InterfaceInterferenceQuiz from './pages/InterfaceInterferenceQuiz';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';


function App() {

  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/forgotpassword' element={<ForgotPassword />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/account' element={<Account />} />
          <Route path='/obstruction' element={<Obstruction />} />
          <Route path='/interfaceinterference' element={<InterfaceInterference />} />
          <Route path='/sneaking' element={<Sneaking />} />
          <Route path='/forcedaction' element={<ForcedAction />} />
          <Route path='/nagging' element={<Nagging />} />
          <Route path='/naggingquiz' element={<NaggingQuiz />} />
          <Route path='/sneakingquiz' element={<SneakingQuiz />} />
          <Route path='/interfaceinterferencequiz' element={<InterfaceInterferenceQuiz />} />
          <Route path='/forcedactionquiz' element={<ForcedActionQuiz />} />
          <Route path='/obstructionquiz' element={<ObstructionQuiz />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
