import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Calculator from './component/Calculator';

const App = () => {

  return (
  <div className='min-h-screen justify-center items-center flex w-full bg-violet-400'>
    <Calculator/>
  </div>
  );
};

export default App;
