import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
// import List from './components/List/List';
import { BrowserRouter as Router } from 'react-router-dom';
import Routings from './Routes/Routing';
import { AuthProvider } from './components/Auth/AuthContext';
import List from './components/List/List';


function App() {
  console.log('=env',process.env.PUBLIC_URL);
  
  return (
    <AuthProvider>
      <div className="App">
        <Router  basename={process.env.PUBLIC_URL}>
          <Header />
          <Routings />
          {/* <List /> */}
          
          <Footer />

        </Router>
      </div>
    </AuthProvider>
    
  );
}

export default App;
