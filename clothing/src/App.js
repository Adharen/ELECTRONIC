import {Switch,Route} from 'react-router-dom';
import './App.css'
import About from './About'
import Contact from './Contact'
import Service from './Service';
import Product from './Product';
import Shopping from './Shopping';
import Pimformation from './Pimformation';
import Slide from './comman/header/Slide';
import Navbar from './comman/header/Navbar';
import Head from './comman/header/Head'
import Footer from './Footer';
function App() {


  return (
   <>
   <Head/>
   <Navbar/>
     <Switch>
     <Route  exact path='/' component={Slide}></Route>
       <Route exact path = '/About' component={About}></Route>
       <Route exact path = '/Contact' component={Contact}></Route>
       <Route exact path = '/Service' component={Service}></Route>
       <Route exact path = '/Shopping' ><Shopping /></Route>
       <Route exact path = '/Pimformation/:id/:name/:price' component={Pimformation}></Route>
     </Switch>
   <Product/>
   <Footer/>
   </>
  );
}


export default App;


