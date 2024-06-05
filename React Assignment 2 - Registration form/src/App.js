import './App.css';
import { useRef, useState } from 'react';

function App() {

  const Uname = useRef(null);
  const Uemail = useRef(null);
  const Upass = useRef(null);

  const [data, setData] = useState([]);
  const [Uname0, setUname0] = useState('');
  const [Uemail0, setUemail0] = useState('');
  const [Upass0, setUpass0] = useState('');
  
//   var data = [
//     { name: "Anom", email: "anom@gmail.com", pwd: "Male" }
// ]


  const handleClick = (e) =>{
    e.preventDefault();
    var opt = {
      name: Uname.current.value,
      email: Uemail.current.value,
      pwd: Upass.current.value
    }
    console.log(opt);
    if(Uname.current.value !== "" && Uemail.current.value !== ""){
      // Push data in array
      setData([
          ...data,
          opt
        ])
    } 
    //**  👇️ Clear all input values in the form
    setUname0("");
    setUemail0('');
    setUpass0('');
  }

  const flex = {
    display: "flex",
    flexDirection: "column",
    width: "60vw",
    justifyContent: "center",
    alignItem: "center",
    margin: "5vh auto",
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
  const tableHeader = {
    border: "2px solid black",
    backgroundColor: "grey",
    fontSize: "2rem",
    fontWeight: "300",
  };

  const tableEle = {
    border: "2px solid black",
    background: "white",
    fontSize: "1rem",
    fontWeight: "150",
    padding: "1rem 4rem",

  };

  return (
    <>
    <div style={flex}> 
    <h1 style={{margin: "auto", padding:"0 0 3rem 0"}}>Registration form</h1>
      <form style={{display: "flex", flexDirection: "column",}}>
                <label htmlFor="name" style={{padding: "1rem"}}> Name: 
                    <input type="text" id='name'  placeholder='Enter Name' style={{marginLeft: "2rem"}} ref={Uname} required onChange={event => setUname0(event.target.value)} value={Uname0}/>
                </label>
                <label htmlFor="email" style={{padding: "1rem"}}> Email: 
                    <input type="email" id='email'  placeholder='Enter Email' style={{marginLeft: "2rem"}} ref={Uemail} required onChange={event => setUemail0(event.target.value)} value={Uemail0}/>
                </label>
                <label htmlFor="pwd" style={{padding: "1rem"}}> Password: 
                    <input type="password" id='pwd'  placeholder='Enter Password' style={{marginLeft: "2rem"}} ref={Upass} onChange={event => setUpass0(event.target.value)} value={Upass0}/>
                </label>
                <button onClick={handleClick} style={btn}>Submit</button>
            </form>
            <div>
              <p style={result}>Registered Persons here: <span style={{fontWeight: "500"}}> </span></p>
              <table>
                <thead>
                <tr style={tableHeader}>
                    <th style={{padding: "1rem 4rem"}}>S.No.</th>
                    <th style={{padding: "1rem 4rem"}}>Name</th>
                    <th  style={{padding: "1rem 4rem"}}>Email</th>
                    <th style={{padding: "1rem 4rem"}}>Password</th>
                </tr>
                </thead>
                <tbody>
                {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td style={tableEle} >{key+1}</td>
                            <td style={tableEle} >{val.name}</td>
                            <td style={tableEle} >{val.email}</td>
                            <td style={tableEle} >{val.pwd?val.pwd: "Null"}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
            </div>

            <p style={{fontSize:"0.8rem", fontWeight: "200", margin:"3rem 1rem"}}>Developed By Dev Chouhan as an Assignment for HashedBit</p>
            </div>
    </>
  );
}

export default App;
