// import logo from './logo.svg';
// import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
function App() {
  return (
    <>
      <Navbar title="Case Converter"/>
      
      <div className="container my-3">
      <TextForm heading=" Enter your text below to analyze"/>
      </div>
      

    </>

    
  );
}

export default App;
