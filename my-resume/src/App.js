import logo from './logo.svg';
import './App.css';
import NameBlock from './components/nameBlock';

function App() {
  return (
    <div className='App'>
      <div>
        <NameBlock />
        <style> 
        html {'{background:url(gradient.jpg);}'}
        body {'{background:url(gradient.jpg);}'}
        </style>
      </div>
    </div>
  );
}

export default App;
