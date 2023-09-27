import logo from './logo.svg';
import './App.css';
import Messenger from './components/Messenger';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from './components/context/AccountProvider';
function App() {

  const clientId = '206025614448-mrmf06f6fbuc11dq8no2jkqghjgr7uvp.apps.googleusercontent.com';

  return (
   <GoogleOAuthProvider clientId={clientId}>
    <AccountProvider>
    <Messenger/> 
    </AccountProvider>
    
   </GoogleOAuthProvider>
  );
}

export default App;
