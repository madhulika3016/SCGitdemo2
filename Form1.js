import { useState } from "react";
function Form1()
{     const [name, setName] = useState("");
      const [tech,setTech]=useState("Java");
      function handleSubmit(e) {
            e.preventDefault();
            console.log('You clicked submit.');
            alert("Welcome  "+name); }
      return ( 
      <>
        <form onSubmit= {handleSubmit}>
          <label>Enter your name: </label>
 <input type="text" value={name} onChange={(e) => 
      setName(e.target.value)}/>
     <br></br>
            <label>Technology</label>
     <input type="text" value={tech} onChange={(e) => 
      setTech(e.target.value)}/>
     <button type="submit">Login</button>
        </form>
        <p>{name}</p>
        <p>{tech}</p>
        </>
      )
}
export default Form1;