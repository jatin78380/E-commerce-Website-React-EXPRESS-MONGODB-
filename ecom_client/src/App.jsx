import {BrowserRouter,Route,Routes} from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
function App() {
 
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/navbar' element={<Navbar/>}>   </Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
