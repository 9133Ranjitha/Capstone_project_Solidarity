import logo from './logo.svg';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
// import LadingPage from './Components/landing';
// import LoginPage from './Components/login';
// import SignUpPage from './signup';
// import ForGotPage from './forgot';
// import HomePage from './home';
import FinancialMastery from './FinancialMastery';

function App() {
  return (
    <Router>
      {/* <LadingPage /> */}
      {/* <LoginPage /> */}
      {/* <SignUpPage /> */}
      {/* <ForGotPage /> */}
      {/* <HomePage /> */}
      <FinancialMastery />

    </Router>
  );
}

export default App;
