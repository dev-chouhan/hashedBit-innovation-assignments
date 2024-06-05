import './App.css';
import { useRef, useState } from 'react';

function App() {

  const Uname = useRef(null);
  const Uemail = useRef(null);
  const Upass = useRef(null);

  const [data, setData] = useState([{id: 0, name: "Delete Array ELement", email: "The easiest way to remove an item from an array is to filter it out. In other words, you will produce a new array that will not contain that item. To do this, use the filter method", pwd: "delete, pop"}]);
  const [Uname0, setUname0] = useState('');
  const [Uemail0, setUemail0] = useState('');
  const [Upass0, setUpass0] = useState('');
  var [id0, setId] = useState(1);
  const [errcol, setErrcol] = useState("");
  const [errtxt, setErrtxt] = useState("");

  function mujheHataDe(time){
    setTimeout(() => {
      setErrcol("");
      setErrtxt("");
    }, (time)?time:5000);
  }

  function handleError(unit, txt){
    if(unit === 0){
      // for empty field
      setErrcol("yellow");
    } else if (unit === 1){
      // for success
      setErrcol("green");
    } else if(unit === 2){
      // for deletion
      setErrcol("red");
    } else {
      setErrcol("");
      setErrtxt("");
    }
    setErrtxt(txt);
    mujheHataDe();
  }

  const handleClick = (e) => {
    e.preventDefault();
    var opt = {
      id: id0,
      name: Uname.current.value,
      email: Uemail.current.value,
      pwd: Upass.current.value
    }
    console.log(opt);
    if (Uname.current.value !== "" && Uemail.current.value !== "") {
      // Push data in array
      setData([
        ...data,
        opt
      ])
      setId(id0+1);
      handleError(1, "Note added");
    } else {
      if(Uname.current.value === ""){
        handleError(0, "Title is required");
        // alert("Title is required");
      } else {
        handleError(0, "Description is required");
        // alert("Description is required");
      }
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
    cursor: "pointer",
  };
  const result = {
    fontSize: "1.4rem",
    fontWeight: "300",
  }
  const tableHeader = {
    border: "2px solid black",
    backgroundColor: "#989796",
    fontSize: "2rem",
  };

  const tableEle = {
    border: "1px solid black",
    background: "white",
    fontSize: "1rem",
    fontWeight: "150",
    padding: "1rem",
  };

  const delbtn = {
    width: "8vw",
    padding: "1vh 2vw",
    cursor: "pointer",
  }

  return (
    <>
      <nav style={{backgroundColor: errcol, position: "absolute", top: "0", width: "100%", padding: "1vh 0", display:"flex", justifyContent:"center", alignItems:"center", fontSize:"1.3rem", fontWeight:"400"}}>{errtxt}</nav>
      <div style={flex}>
        <h1 style={{ margin: "auto", padding: "0 0 3rem 0" , fontSize:"4em"}}>ToDo List</h1>
        <form style={{ display: "flex", flexDirection: "column", }}>
          <label htmlFor="name" style={{ padding: "1rem" }}> Title:
            <input type="text" id='name' placeholder='Enter Title (*required)' style={{ marginLeft: "2rem" }} ref={Uname} required onChange={event => setUname0(event.target.value)} value={Uname0} />
          </label>
          <label htmlFor="email" style={{ padding: "1rem" }}> Description:
            <input type="text" id='email' placeholder='Enter Description (*required)' style={{ marginLeft: "2rem", width:"80%", height:"10vh" }} ref={Uemail} required onChange={event => setUemail0(event.target.value)} value={Uemail0} />
          </label>
          <label htmlFor="pwd" style={{ padding: "1rem" }}> Tag:
            <input type="text" id='pwd' placeholder='Enter Tag' style={{ marginLeft: "2rem" }} ref={Upass} onChange={event => setUpass0(event.target.value)} value={Upass0} />
          </label>
          <button onClick={handleClick} style={btn}>Submit</button>
        </form>
        <div>
          <p style={result}>Registered Persons here: <span style={{ fontWeight: "500" }}> </span></p>
          {data.length > 0 ? (
            <table>
              <thead>
                <tr style={tableHeader}>
                  <th style={{ padding: "1rem 4rem", fontWeight: "500" }}>S.No.</th>
                  <th style={{ padding: "1rem 4rem" , fontWeight: "500" }}>Title</th>
                  <th style={{ padding: "1rem 4rem" , fontWeight: "500" }}>Description</th>
                  <th style={{ padding: "1rem 4rem" , fontWeight: "500" }}>Tag</th>
                </tr>
              </thead>
              <tbody>
                {data.map((val, key) => {
                  return (
                    <tr key={key}>
                      <td style={tableEle}>{key + 1}</td>
                      <td style={tableEle}>{val.name}</td>
                      <td style={tableEle}>{val.email}</td>
                      <td style={tableEle}>{val.pwd ? val.pwd : "Null"}</td>
                      <td>
                        <button onClick={() => {
                          handleError(2, `Element with id: ${val.id} is deleted`);
                          setData(
                            data.filter(a =>
                              a.id !== val.id
                            )
                          );
                        }} style={delbtn}>
                          Delete id: {val.id}
                        </button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          ) : (
            <h2>Nothing to diisplay!</h2>
          )}
        </div>

        <p style={{ fontSize: "0.8rem", fontWeight: "200", margin: "3rem 1rem" }}>Developed By Dev Chouhan as an Assignment for HashedBit</p>
      </div>
    </>
  );
}

export default App;
