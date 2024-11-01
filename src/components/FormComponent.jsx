import { useState } from "react";
import styles from "./FormComponent.module.css";

export default function FormComponent() {
  const [register, setRegister] = useState(false)
  return (
    
    <div className={styles.container}>
      {register ? (
        <form className={styles.regForm}>
        <h3>REGISTER</h3>

        <div className={`${styles.inputControl} ${styles.names}`}>
          <div>
            <label>
            First Name<sup>*</sup>
            </label>
            <input type="text" required name="emailuser" />
          </div>
          <div>
            <label>
            Last Name<sup>*</sup>
            </label>
            <input type="text" required name="emailuser" />
          </div>
        </div>
        <div className={styles.inputControl}>
          <label>
            Phone Number <sup>*</sup>
          </label>
          <input type="text" required name="emailuser" />
        </div>
        <div className={styles.inputControl}>
          <label>
            Email adddres <sup>*</sup>
          </label>
          <input type="email" required name="emailuser" />
        </div>

        <div className={styles.inputControl}>
          <label>
            Password <sup>*</sup>
          </label>
          <input type="password" required name="password" />
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
        <form className={styles.regForm}>
          <h3>LOGIN</h3>
  
          <div className={styles.inputControl}>
            <label>
              Email adddres <sup>*</sup>
            </label>
            <input type="email" required name="emailuser" />
          </div>
  
          <div className={styles.inputControl}>
            <label>
              Password <sup>*</sup>
            </label>
            <input type="password" required name="password" />
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

        <button onClick={() => setRegister(!register)}>{register ? 'Login' : 'Register'}</button>
      </div>
    </div>
  );
}
