import { useState } from "react";
import styles from "./FormComponent.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function FormComponent() {
  const [register, setRegister] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();


  function handleSignUp(e) {
    e.preventDefault();
    console.log("form sent");
    axios
      .post("http://localhost:8080/api/v1/auth/register", {
        email,
        password,
        fullName,
      })
      .then((response) => {
        console.log(response.data)
        if(response.data.status) localStorage.setItem('registeredUsers', JSON.stringify(response.data.data))
        navigate('/')
        
      })
      .catch((error) => {
        console.log(error.response.data.message);
        const { message } = error.response.data;
        message.includes("duplicate key error")
          ? alert(
              `User already exists \nKindly register with a different email addrress`
            )
          : alert(message);
      });
  }
  function handleLogin(e) {
    e.preventDefault();
    console.log("form sent");
    axios
      .post("http://localhost:8080/api/v1/auth/login", {
        email,
        password,
      })
      .then((response) => {
        console.log(response.data)
        if(response.data.status) localStorage.setItem('loggedInUsers', JSON.stringify(response.data.data))
        navigate('/')
        
      })
      .catch((error) => {
        console.log(error.response.data.message);
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

          <div className={styles.recoverDiv}>
            <div className={styles.remPassword}>
              <input type="checkbox" name="remPword" />
              <p>Remember Password</p>
            </div>

            <a href="3">Lost your password?</a>
          </div>
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

            <div className={styles.recoverDiv}>
              <div className={styles.remPassword}>
                <input type="checkbox" name="remPword" />
                <p>Remember Password</p>
              </div>

              <a href="3">Lost your password?</a>
            </div>
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
