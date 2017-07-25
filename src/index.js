import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import { BrowserRouter, Route} from 'react-router-dom';



ReactDOM.render(
<BrowserRouter>
    <div>
        <Route path="/" component={App} />
        <Route path="/Home" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Contact" component={Contact} />

        {/* render default component to homepage  use exact */}
        <Route exact path="/" component={Home}/>
    </div>
</BrowserRouter>, document.getElementById('root'));
//default render  ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
