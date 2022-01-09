import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {Header} from './components/Header';
import {Stats} from './components/Stats';

import LandingPageLayout from './components/Layout';
import HomePage from './components/HomePage';

function App() {
  return (   
    <Router>

      <Routes>
        <Route path="/" element={ <LandingPageLayout heading="Passage"></LandingPageLayout>}>

        </Route>
      </Routes>
    </Router>





  )
}

export default App;
