import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import GrandPA from './Components/GrandPa/GrandPA';
import Home from './Components/Home/Home';
import Orders from './Components/Orders/Orders';
import Main from './Layout/Main';

function App() {
const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        loader:()=> fetch('tshirt.json'),
        element:<Home></Home>,

      },
      {
        path:'/orders',
        element:<Orders></Orders>
      },
      {
        path:'/grandpa',
        element:<GrandPA></GrandPA>
      }
    ],
  }
]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
