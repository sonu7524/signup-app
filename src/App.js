
import './App.css';
import google from './images/google.png';
import image from './images/Abstraction.png';
import facebook from './images/facebook.png';
import Message from './Message';

function App() {
  return (
    <div className='main-content'>
      <div className='left-content'>
        <h3>Find 3D Objects, Mockups and Ilustration here</h3>
      </div>
      <img src={image} />
      <div className='signup-form'>
        <h1>Create Account</h1>
        <div className='external-signup'>
          <button className='google'>
            <img src={google} />
            <a>Sign up with Google </a>
          </button>
          <button className='facebook'>
            <img src={facebook} />
            <a>Sign up with Facebook  </a>
          </button>
        </div>
        <p>---OR----</p>
        <Message />
      </div>
    </div>
  );
}

export default App;
