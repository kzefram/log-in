import { BrowswerRouter, Routers, Route } from 'react-router-dom';
import './index.css';
import Profile from './pages/Profile';
import Home from './pages/Home';
import About from './pages/About';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

export default function App() {
  return (
    <BrowswerRouter>
      <Routers>
        <Route path="/" element={Home} />
        <Route path="/about" component={About} />
        <Route path="/profile" component={Profile} />
        <Route path="/sign-in" component={Signin} />
        <Route path='/sign-up' component= {Signup} />
      </Routers>
    </BrowswerRouter>
  )
}