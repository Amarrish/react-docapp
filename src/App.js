import { Route, Routes } from 'react-router-dom';
import './App.css';
import Adddocument from './components/Adddocument';
import Quillpage from './components/Quillpage';

function App() {
  return (
    <>
    <Routes>
    <Route path='/' element={<Adddocument/> }/>
    <Route path='/quill/:id' element={<Quillpage/>} />
    </Routes>
    </>
  );
}

export default App;
