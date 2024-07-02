import './App.css';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import { Draw1 } from './components/Draw1';
import { Draw2 } from './components/Draw2';
import { Draw3 } from './components/Draw3';
import { Draw4 } from './components/Draw4';
import { Draw5 } from './components/Draw5';
import { Draw6 } from './components/Draw6';
import { Navigation } from './components/Navigation';


function App() {
  

  return (
    <>  
    <BrowserRouter>
    <div>
      <h1 id= "title" className='text-center my-3'> Proyecto Galería </h1>
    </div>
      <Routes>
        <Route path="/draw1" element = {<Draw1  className = 'image-size'/>} />
        <Route path="/draw2" element = {<Draw2 className = 'image-size' />} />
        <Route path="/draw3" element = {<Draw3 className = 'image-size'/>} />
        <Route path="/draw4" element = {<Draw4 className = 'image-size'/>} />
        <Route path="/draw5" element = {<Draw5 className = 'image-size'/>} />
        <Route path="/draw6" element = {<Draw6 className = 'image-size'/>} />
      </Routes>
      <Navigation />
     </BrowserRouter>
    </>
  )
}

export default App
