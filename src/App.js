import './App.css';
import { useGlobalcontext } from './context';
import {MathJax} from "better-react-mathjax";

function App() {

  const {isLoading,questions ,getPrev,getNext} = useGlobalcontext();
  // console.log(questions);
  // console.log(data.data[0].Question);

     if(isLoading){
      return(
        <>
        <h2>LOADING ...</h2>
        </>
      )
     }

  return (

    <div className='screen'>
     <h1>Mathematics questions</h1>
     <div className='container'>
     <MathJax className='Math'>{questions}</MathJax>
 
      <div className='buttons'>

     <button onClick={() => getPrev()}>Backword</button>
     <button onClick={() => getNext()}>Formward</button>

       </div>
     </div>
     <div className='footer'>
      <h2>Made by Ansh Sengar</h2>
      
     </div>
    </div>
  );
}

export default App;
