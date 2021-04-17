import Homepage from './pages/homepage/Homepage';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './components/navbar/Navbar';
import About from './pages/about/About';
import Bookshelf from './pages/bookshelf/Bookshelf';

function App() {
    return (
        <Router>
            <div className="App">
                <NavBar />
                <Switch>
                    <Route exact="exact" path="/" component={Homepage}/>
                    <Route exact="exact" path="/aboutMe" component={About}/>
                    <Route exact="exact" path="/bookShelf" component={Bookshelf}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
