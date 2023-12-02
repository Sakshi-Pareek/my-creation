import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom'
import Form from './components/Form';
import HeaderSection from './components/HeaderSection';
import About from './components/About';
import NavSection from './components/NavSection';
import CardMap from './components/CardMap';
import EmailJs from './components/EmailJs';


function App() {
  return (
    <div className='App'>
      {/* <Routes>
        <Route path='/' exact element={<HeaderSection />}></Route>
        <Route path='/Form' exact element={<Form />}></Route>
        <Route path='/About' exact element={<About />}></Route>
      </Routes> */}
      {/* <CardMap/> */}
      {/* <NavSection/> */}
      <EmailJs/>
    </div>
  );
}

export default App;
