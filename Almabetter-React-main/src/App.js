import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Main from './components/Main';
import HomePage from './components/HomePage';
// import Error from './components/Error';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


const App = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])
  return (
    <>
      <Navbar />
      <HomePage />
      <Footer />
      {/* <Router>
        <Routes>
          <Route element={<Main />} >
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
