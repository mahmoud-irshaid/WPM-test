import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React,{lazy,Suspense} from 'react';
const Scores = lazy(() => import('./components/scores'));
const About = lazy(() => import('./components/about'));
const Home = lazy(() => import('./components/Home'));


function App() {
  
  return (
    <>
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path='/WPM-test/scores' component={Scores} />
        <Route path='/WPM-test/about' component={About} />
        <Route path='/WPM-test' component={Home} />
      </Switch>
      </Suspense>
    </Router>
    </>
  );
}

export default App;
