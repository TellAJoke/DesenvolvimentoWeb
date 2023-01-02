import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './components/Homepage'
import Loading from './components/Loading'
import ErrorPage404 from './components/ErrorPage404'
import WorkPage from './components/WorkPage';
import WorksPage from './components/WorksPage';
import { Header } from './components/Header';
import About from './components/About';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/loading">
            <Loading />
          </Route>
          <Route path="/works">
            <WorksPage />
          </Route>
          <Route path="/work/:id">
            <WorkPage />
          </Route>
          <Route path="/About">
            {/* <h1>Estou no /about</h1> */}
            <About/>
          </Route>
          <Route path="/contacts">
            <h1>Estou no /contacts</h1>
          </Route>
          <Route path="*">
            <ErrorPage404 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
