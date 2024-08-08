import React from 'react';
import { Header } from './Header';
import Form from './Form';
import logo from './assets/logo.png'  
// import './App.css';
import DataTable from './DataTable';
import { useEffect } from 'react';
import InsertForm from './InsertForm';
import SimpleNewForm from './SimpleNewForm';
// import InsertDataForm from './InsertDataForm';

const App = () => {
  return (
    <div className="container">
    <div className="row">
      <div className="col-lg-12">
          <Header />
          </div>
         </div>
         <div className='row'>
            <div className='col-lg-12 pb-5'>
              <DataTable /> 
        </div>
      </div>
   
    </div>

  );
};

export default App;