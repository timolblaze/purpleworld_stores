import { useContext, useState } from "react";
import styles from "./FormComponent.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {AuthContext} from "../contexts/AuthProvider";

export default function FormComponent() {
  //Various state variables to hold data for the Form Component and it's children elements
  const [register, setRegister] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  
  // Retrieving the setisAuthenticated state setting function from the AuthContext using the React useContext hook 
  const {isAuthenticated,setIsAuthenticated} = useContext(AuthContext);

  // Assigning the navigate variable to the useNavigate React-router-dom hook
  const navigate = useNavigate();

  // Function to handle the Registering functionality of the form
  function handleSignUp(e) {
    // prevents the page from reloading as it's the default behaviour of the submit button 
    e.preventDefault();
    if(isAuthenticated){
      alert('User already. Logout before initiating user registration')
      return
    }

    // POST request using axios to send a Register request to the registration endpoint 
    axios
      .post("https://pw-be-1.onrender.com/api/v1/auth/register", {
        email,
        password,
        fullName,
      })
      .then((response) => {
        //checking the response status to ensure it returns true beforre storing the data from the response
        if(response.data.status) localStorage.setItem('registeredUsers', JSON.stringify(response.data.data))
        //setting the isAuthenticated state to true to indicate that a user has logged in        
        setIsAuthenticated(true);
        // after user is logged in, the user is redirected to the Home page
        navigate('/')
        
      })
      .catch((error) => {
        //Error checking block to alert user on the error encountered while registering
        const { message } = error.response.data;
        message.includes("duplicate key error")
          ? alert(
              `User already exists \nKindly register with a different email addrress`
            )
          : alert(message);
      });
  }

  // Function to handle the Login functionality of the form
  function handleLogin(e) {
    // prevents the page from reloading as it's the default behaviour of the submit button 
    e.preventDefault();
    if(isAuthenticated){
      alert('User already logged In. Logout before initiating user log in')
      return
    }

    // POST request using axios to send a Login request to the login endpoint 
    axios
      .post("https://pw-be-1.onrender.com/api/v1/auth/login", {
        email,
        password,
      })
      .then((response) => {
        //checking the response status to ensure it returns true beforre storing the data from the response
        if(response.data.status) localStorage.setItem('loggedInUsers', JSON.stringify(response.data.data))
        //setting the isAuthenticated state to true to indicate that a user has logged in
        setIsAuthenticated(true)
        // after user is logged in, the user is redirected to the Home page
        navigate('/')
        
      })
      .catch((error) => {
        //Error checking block to alert user on the error encountered while logging in
        const { message } = error.response.data;
        message.includes("duplicate key error")
          ? alert(
              `User already exists \nKindly register with a different email addrress`
            )
          : alert(message);
      });
  }

  return (
    <div className={styles.container}>
      {register ? (
        <form className={styles.regForm} onSubmit={handleSignUp}>
          <h3>REGISTER</h3>

          <div className={styles.inputControl}>
            <label>
              Full Name<sup>*</sup>
            </label>
            <input
              type="text"
              required
              name="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className={styles.inputControl}>
            <label>
              Email adddres <sup>*</sup>
            </label>
            <input
              type="email"
              required
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.inputControl}>
            <label>
              Phone Number <sup>*</sup>
            </label>
            <input
              type="text"
              required
              name="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className={styles.inputControl}>
            <label>
              Password <sup>*</sup>
            </label>
            <input
              type="password"
              required
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit"> Create Account</button>
        </form>
      ) : (
        <>
          <form className={styles.regForm} onSubmit={handleLogin}>
            <h3>LOGIN</h3>

            <div className={styles.inputControl}>
              <label>
                Email adddres <sup>*</sup>
              </label>
              <input
                type="email"
                required
                name="emailuser"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className={styles.inputControl}>
              <label>
                Password <sup>*</sup>
              </label>
              <input
                type="password"
                required
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit"> Login</button>
          </form>
        </>
      )}

      <div className={styles.registerDiv}>
        <h3> REGISTER </h3>
        <div className={styles.paraBlock}>
          <p>
            Registering for this site allows you to access your order status and
            history.
          </p>

          <p>
            Just fill in the fields below, and we'll get a new account set up
            for you in no time.
          </p>

          <p>
            We will only ask you for information necessary to make the purchase
            process faster and easier.
          </p>
        </div>

        <button onClick={() => setRegister(!register)}>
          {register ? "Login" : "Register"}
        </button>
      </div>
    </div>
  );
}
