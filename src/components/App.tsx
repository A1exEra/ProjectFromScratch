import Test from './Test';
import UseEffect from './UseEffect/UseEffect';

import '../styles/styles.scss';

// import img from '../assets/images/sandro.jpeg';

function App() {
  const heading = 'Code_Daemon';
  return (
    <div className="main-container">
      <h1 id="heading">{heading}</h1>
      {/* <img src={img} alt="Code_Daemon" id="image" /> */}
      <Test />
      <UseEffect />
    </div>
  );
}

export default App;
