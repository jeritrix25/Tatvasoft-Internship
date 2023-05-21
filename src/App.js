
import './App.css';
import {HomePage} from "./HomePage"
import {Apple} from "./Apple"
import {Routes,Route, Link, BrowserRouter} from "react-router-dom";
import { PageNotFound } from './PageNotFound';

const App = () => (
 <BrowserRouter>
 <div>
    <Link to="/" style={
    {
        marginLeft: 5,
    }
    }>Home</Link>
    <Link to="/apple" style={{marginLeft: 10,}}>Apple</Link>
    <Link to="/applet" style={{marginLeft: 15,}}>Applet</Link>
 </div>
 <Routes>
    <Route path="/" element={<HomePage/>}></Route>
    <Route path="/apple" element={<Apple/>}></Route>
    <Route path="*" element={<PageNotFound/>}></Route>
 </Routes>
 </BrowserRouter>
);

export default App;
