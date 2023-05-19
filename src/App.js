import { Route, Routes } from 'react-router-dom';
import './App.css';
import Form1 from './components/form1';
import Form2 from './components/form2';
import Form3 from './components/form3';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Form1 />} />
        <Route path='/form2' element={<Form2 />} />
        <Route path='/form3' element={<Form3 />} />
      </Routes>
    </div>
  );
}

export default App;
