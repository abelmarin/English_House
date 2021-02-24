import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { Courses } from './components/Courses/Courses';
import Gallery from './components/Gallery/Gallery';
import AboutUs from './components/AboutUs/AboutUs';
import { ExtraCurricular } from './components/ExtraCurricular/ExtraCurricular';
import Contact from './components/Contact/Contact';
import Admin from './components/Admin/Admin';
import { Header } from './components/HeadFoot/Header';
import Footer from './components/HeadFoot/Footer';

import { GlobalProvider } from './context/GlobalState';

function App() {
  
  return (
    <div>
      <GlobalProvider>
        <BrowserRouter>
          <Header />
          <div className="wrapper">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/courses" component={Courses} exact />
            <Route path="/gallery" component={Gallery} exact />
            <Route path="/aboutus" component={AboutUs} exact />
            <Route path="/extracurricular" component={ExtraCurricular} exact />
            <Route path="/contact" component={Contact} exact />
            <Route path="/admin" component={Admin} exact />
          </Switch>
          </div>
          <Footer />
        </BrowserRouter>
      </GlobalProvider>
    </div>
  );
}

export default App;
