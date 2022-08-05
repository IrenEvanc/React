import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComp from './components/HeaderComp';
import AddUserComponent from './components/AddUserComponent';


import ListUserComponent from './components/ListUserComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComp/>
        <div className='container'>
          <Routes>
            <Route exact path='/' element ={<ListUserComponent/>}></Route>
            <Route path='/users' element ={<ListUserComponent/>}></Route>
            <Route path='/add-user' element={<AddUserComponent/>}></Route>
            <Route path='/edit-user/:id' element={<AddUserComponent/>}></Route>
          </Routes>
        </div>
        <FooterComponent/>        
      </Router>
    </div>
  );
}

export default App;
