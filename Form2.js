import { useState } from 'react'
import * as yup from 'yup' // importing functions from yup library

function Form2() {
  const [firstName, setFirstName] = useState('') // useState to store First Name
  const [lastName, setLastName] = useState('') // useState to store Last Name
  const [mobile, setMobile] = useState('') // useState to store Mobile Number
  const [age, setAge] = useState('') // useState to store Age
  const [email, setEmail] = useState('') // useState to store Email address of the user
  const [password, setPassword] = useState('') // useState to store Password

  // defining yup schema to validate our form

  const userSchema = yup.object().shape({
    // name can not be an empty string so we will use the required function
    firstName: yup.string().required(),
    lastName: yup.string(),
    // email can not be an empty string so we will use the required function
    email: yup.string().email().required(),
    // password can not be an empty string so we will use the required function. Also, we have used the `min` function to set the minimum length of the password. Yup passwords by default handle the conditions of at least one upper case, at least one lower case, and at least one special character in the password
    password: yup.string().min(8).required(),
    age: yup.string(),
    mobile: yup.string().min(10),
  })

  // Function which will validate the input data whenever submit button is clicked.

  async function validateForm() {
    // creating a form data object

    let dataObject = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      age: age,
      mobile: mobile,
    }
    //pattern for alphanumeric username
    let strRegex = new RegExp(/^[a-z0-9]+$/i);
    // validating this dataObject concerning Yup userSchema
   
    const isValid = await userSchema.isValid(dataObject)

    if (isValid) {
      alert('Form is Valid')
    } else {
      alert('Form is Invalid')
    }
  }

  return (
    <div className="main">
      <form>
        {/* Input Field to insert First Name */}
        <input
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        {/* Input Field to insert Last Name */}
        <input
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />
        {/* Input Field to insert Mobile Number */}
        <input
          placeholder="Mobile Number"
          onChange={(e) => setMobile(e.target.value)}
        />
        {/* Input Field to insert Age */}
        <input placeholder="Age" onChange={(e) => setAge(e.target.value)} />
        {/* Input Field to insert Email Address of the user */}
        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        {/* Input Field to insert Password */}
        <input type="password" placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}/><br></br>
        <button type="submit" onClick={() => {validateForm()}}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default Form2