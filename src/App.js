import { LoginContext, LoginProvider } from './provider/LoginContext.jsx';
import { useContext } from 'react';
import Login from './pages/Login';
import Profile from './pages/Profile';

function App() {
  const { showProfile } = useContext(LoginContext)  // acessa o context

  return (
    <>
      { showProfile ? <Profile /> : <Login /> }
    </>
  );
}

export default App;
