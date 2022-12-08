
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeNavbar from './Components/HomeNavbar/HomeNavbar';
import Banner from './Components/Banner/Banner';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes';
import MobileLayout from './Layout/MobileLayout/MobileLayout';

function App() {
  return (
    <div className='App'>
      <HomeNavbar></HomeNavbar>
      <Banner></Banner>
      <RouterProvider router={router}></RouterProvider>
      <MobileLayout></MobileLayout>

    </div>
  );
}

export default App;
