import {BrowserRouter as Switch,Routes, Route } from 'react-router-dom';
import Register from './views/register';
import Login from './views/login';
import Home from './views/home';

function App() {
  return (
    <div className="App">
      <Switch>
        <Routes>
          <Route path='/' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
        </Routes>
      </Switch>
    </div>
  );
}

export default App;
