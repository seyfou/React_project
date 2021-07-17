import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TestForm from './components/TestForm';
// import SimpleForm from './components/SimpleForm';
// import MultiStepForm from './components/MultiStepForm';
import img from './Images/R.png';



function App() {

    return (
      
      <body >
      
        <img src= {img} alt="img" />
        <header> Welcome to my world!</header>
        <TestForm/>
        </body>
    );   
  }

export default App;