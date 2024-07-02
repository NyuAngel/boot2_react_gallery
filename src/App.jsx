import './App.css';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import { Draw1 } from './components/Draw1';
import { Draw2 } from './components/Draw2';
import { Draw3 } from './components/Draw3';
import { Draw4 } from './components/Draw4';
import { Draw5 } from './components/Draw5';
import { Draw6 } from './components/Draw6';


function App() {
  

  return (
    <>  
    <BrowserRouter>
      <Routes>
        <Route path="/draw1" element = {<Draw1 />} />
        <Route path="/draw2" element = {<Draw2 />} />
        <Route path="/draw3" element = {<Draw3 />} />
        <Route path="/draw4" element = {<Draw4 />} />
        <Route path="/draw5" element = {<Draw5 />} />
        <Route path="/draw6" element = {<Draw6 />} />
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
