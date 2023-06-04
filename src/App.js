import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Pages/Routes/Routes/Routes';

function App() {
  return (
    <div  className='bg-white'>
      <RouterProvider router={router}>

      </RouterProvider>
      
    </div>
  );
}

export default App;
