import './App.css';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import PrivateComponets from './Components/PrivateComponets';
import Signup from './Components/Signup';
import Footer from './Footer/Footer';
import Nav from './Header/Nav';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { TestApi, getOtherUsers, getUsers } from './Services/Api';
import { useEffect, useState } from 'react';
import Createproduct from './Components/Createproduct';
import Produclist from './Components/Produclist';
import Updateproduct from './Components/Updateproduct';



function App() {


  // useEffect(() => {
  //   TestApi().then(response => {
  //     //use map here
  //     console.log('response.results[0].gender', response.results.email);
  //   });
  // },[]);

  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>

        <Route element = {<PrivateComponets />}>
        <Route path='/Productlist' element={<Produclist />}/>
        <Route path='/Addproduct' element={<Createproduct />}/>
        <Route path='/UpdateProduct/:id' element={<Updateproduct />}/>
        <Route path='/Logout' element={<h1>Logout Component</h1>}/>
        <Route path='/Profile' element={<h1>Profile Component</h1>}/>
        <Route path='/' element={<Dashboard />}/>
        
        <Route path='/*' element={<h1>Page Not Found</h1>}/>
        </Route>

        <Route path='/Signup' element={<Signup />}/>
        <Route path='/Login' element={<Login />} />

      </Routes>
      </BrowserRouter>
      <Footer />

    </div>
  );
}

export default App;
