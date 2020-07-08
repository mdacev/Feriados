import React, {StrictMode} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootswatch/dist/flatly/bootstrap.min.css';
import { BrowserRouter , Route, Switch} from 'react-router-dom'
//import './App.css';

import configfront from '../src/helpers/configfront.json' 
import NotFound from './components/NotFound'
import LoadingClass from './components/LoadingClass';
import FeriadosListClass from './components/FeriadosListClass';
import FeriadoClass from './components/FeriadoClass';

function App() {
  return (
    
    <div className="container mr-0 ml-0 mt-0 mb-0 col-md-12">
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <a href="/api" className="navbar-brand">
       {`Listado de Feriados ${new Date().getFullYear()}`}
    </a>
    </nav>
    <section>
    
    
    <StrictMode>
     <BrowserRouter>
          <Switch>
              <Route exact path={configfront.EOP_API} component={LoadingClass} />
              <Route path={configfront.PATH_LISTA_FERIADOS} component={FeriadosListClass} />
              <Route path={configfront.PATH_FERIADO} component={FeriadoClass} />
              <Route component={NotFound}/>
          </Switch>
      </BrowserRouter>
    </StrictMode>
    
    
    </section>
    <footer className="footer">
      Realizado por  &copy; Mariano Dacev.  <a href={`mailto:marianodacev@gmail.com`}>marianodacev@gmail.com</a>
    </footer>
    </div>
    
    
  );
}

export default App;
