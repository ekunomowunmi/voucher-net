import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/route';
import Header from './components/header';


function App() {
  return (
    
    <Router>
      <Header/>
      <Routes />
    </Router>
  );
}

export default App;
