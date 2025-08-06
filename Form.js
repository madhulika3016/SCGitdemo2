import React from "react";
function Form() {
    function handleSubmit(e) {
      e.preventDefault();
      //let x= document.getElementsByName("form1").value;
      var x=document.getElementById("i1").value;
      if(x!== "madhu")
      {
            alert("Please enter correct name");
      }
      else{
        console.log('You clicked submit.');
      alert("Button Clicked");
    }}
    return (
      <form  name = "form1" onSubmit={handleSubmit}>
        <label>Username :</label>
        <input id = "i1" type="text"></input><br></br>
        <label>Password :</label>
        <input type="password"></input><br></br>
        <button type="submit">Submit</button>
      </form>
    );
  }
  export default Form;