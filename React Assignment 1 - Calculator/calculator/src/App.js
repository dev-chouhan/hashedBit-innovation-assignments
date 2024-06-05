import './App.css';
import { useRef, useState } from 'react';

function App() {

  const num01 = useRef(null);
  const num02 = useRef(null);
  const oper01 = useRef(null);
  var opt;
  const [res, setRes] = useState("");
  //**  👇️ Clear all input values in the form
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');


  const handleClick = (e) =>{
    e.preventDefault();
    opt = operator(num01.current.value, num02.current.value, oper01.current.value);
    setRes(opt);
    //**  👇️ Clear all input values in the form
    // setFirstName('');
    // setLastName('');
  }

  const flex = {
    display: "flex",
    flexDirection: "column",
    height: "50vh",
    width: "60vw",
    justifyContent: "center",
    alignItem: "center",
    margin: "10vh auto",
    padding: "2rem 0",
  };
  const btn = {
    padding: "0.5rem 2rem",
    fontSize: "2rem",
  };
  const result = {
    fontSize: "1.4rem",
    fontWeight: "300",
  }


  function operator(a, b, param) {
    switch(param) {
      case '+':
        return (+a)+(+b);
      case '-':
        return a-b;
      case '*':
        return a*b;
      case '/':
        return a/b;
      default:
        return "Not a valid Operator";
    }
  }


  return (
    <>
    <div style={flex}> 
    <h1 style={{margin: "auto", padding:"0 0 1rem 0"}}>My Calculator Pro</h1>
      <form style={{display: "flex", flexDirection: "column",}}>
                <label htmlFor="num1" style={{padding: "1rem"}}> Number 1.
                {/* //**  👇️ Clear all input values in the form */}
                {/* onChange={event => setFirstName(event.target.value)} value={firstName} */}
                    <input type="text" id='num1'  placeholder='Enter num1' style={{marginLeft: "2rem"}} ref={num01}/>
                </label>
                <label htmlFor="num2" style={{padding: "1rem"}}> Number 2.
                    <input type="text" id='num2'  placeholder='Enter num2' style={{marginLeft: "2rem"}} ref={num02}/>
                </label>
                <div  style={{padding: "2rem", display: "flex"}}>
                  <p style={{padding: "1rem"}}>Select operator(+, -, *, /): </p>
                  <input type="text" id='operator' placeholder='Enter operator'  ref={oper01}/>
                </div>
                <button onClick={handleClick} style={btn}>Calculate</button>
            </form>
            <div>
              <p style={result}>Result: <span style={{fontWeight: "500"}}> {res} </span></p>
            </div>

            <p style={{fontSize:"0.8rem", fontWeight: "200", margin:"3rem 1rem"}}>Developed By Dev Chouhan as an Assignment for HashedBit</p>
            </div>
    </>
  );
}

export default App;
