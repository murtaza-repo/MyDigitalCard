import {CardHeader, CardBody, CardFooter } from './components/Card';

import './App.css';


function App() {
  return (
    <div className="App">
      <div className="container">
        <div className='card'>
          <CardHeader />
          <CardBody />
          <CardFooter />
        </div>
      </div>
    </div>
  );
}

export default App;
