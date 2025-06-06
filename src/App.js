import './App.css';
import React, {useState} from "react";
import { evaluate } from 'mathjs';

function App() {
  const [value, setValue] = useState("");
  const [isCalculated, setIsCalculated] = useState(false);
  const [isEvaluated, setIsEvaluated] = useState(0);

  const handleClick = (e) => {
    if(e.target.value === "C"){
      setValue("");
      setIsCalculated(false);
    }
    else if(e.target.value === "="){
      calculate();
    }else{
      setValue(prev => prev + e.target.value);
    }
  }
  // console.log(value);

  const calculate = () => {

    const expression = value;
    const calculation = evaluate(expression);
    setIsCalculated(true);
    // console.log(calculation);
        if(value === ""){
      setIsEvaluated("Error");
    }else{
      setIsEvaluated(calculation);
    }
    // setValue("");
  }

  return (
    <div className="App">
      <h1>React Calculator</h1>
      <input type='text' value={value}></input>
      {isCalculated && <p>{isEvaluated}</p>}
      <div className="buttons">
        <button type='button' value="7" className='button' onClick={(e) => handleClick(e)}>7</button>
        <button type='button' value="8" className='button' onClick={(e) => handleClick(e)}>8</button>
        <button type='button' value="9" className='button' onClick={(e) => handleClick(e)}>9</button>
        <button type='button' value="+" className='button' onClick={(e) => handleClick(e)}>+</button>
        <button type='button' value="4" className='button' onClick={(e) => handleClick(e)}>4</button>
        <button type='button' value="5" className='button' onClick={(e) => handleClick(e)}>5</button>
        <button type='button' value="6" className='button' onClick={(e) => handleClick(e)}>6</button>
        <button type='button' value="-" className='button' onClick={(e) => handleClick(e)}>-</button>
        <button type='button' value="1" className='button' onClick={(e) => handleClick(e)}>1</button>
        <button type='button' value="2" className='button' onClick={(e) => handleClick(e)}>2</button>
        <button type='button' value="3" className='button' onClick={(e) => handleClick(e)}>3</button>
        <button type='button' value="*" className='button' onClick={(e) => handleClick(e)}>*</button>
        <button type='button' value="C" className='button' onClick={(e) => handleClick(e)}>C</button>
        <button type='button' value="0" className='button' onClick={(e) => handleClick(e)}>0</button> 
        <button type='button' value="=" className='button' onClick={(e) => handleClick(e)}>=</button> 
        <button type='button' value="/" className='button' onClick={(e) => handleClick(e)}>/</button> 
      </div>
    </div>
  );
}

export default App;
