import styles from "./FormComponent.module.css";

export default function FormComponent() {
  return (
    <div className={styles.container}>
      <form className={styles.regForm}>
        <h3>LOGIN</h3>

        <div className={styles.inputControl}>
          <label>
            Username or email adddres <sup>*</sup>
          </label>
          <input type="text" required name="emailuser" />
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

        <button>Register</button>
      </div>
    </div>
  );
}
