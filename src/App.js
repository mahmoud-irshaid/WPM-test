import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React,{lazy,Suspense} from 'react';
const Scores = lazy(() => import('./components/scores'));
const About = lazy(() => import('./components/about'));
const Home = lazy(() => import('./components/Home'));


function App() {
  
  return (
    <>
    <Router basename={`${process.env.PUBLIC_URL}/`}>
      <Suspense fallback={<center class="spinner-4"></center>}>
      <Switch>
        <Route path='/scores' component={Scores} />
        <Route path='/about' component={About} />
        <Route path='/' component={Home} />
      </Switch>
      </Suspense>
    </Router>
    </>
  );
}

export default App;
