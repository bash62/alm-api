import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



import {Login} from './components/Login/';
import LandingPageLayout from './components/Layout';


function App() {
  return (   
    <Router>

      <Routes>
        <Route path="/" element={ <LandingPageLayout heading="Passage"></LandingPageLayout>}></Route>
        <Route path="/auth" element={ <Login></Login>}></Route>
        
      </Routes>
      
    </Router>





  )
}

export default App;
