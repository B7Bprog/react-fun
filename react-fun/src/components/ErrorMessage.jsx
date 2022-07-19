import styles from "../styles/ErrorMessage.module.css";

const ErrorMessage = () => {
  setTimeout(() => {
    console.log("Waiting is over");
  }, 3000);

  return (
    <div className={styles.errorMessage}>
      <p>Something went wrong. Try again!</p>
    </div>
  );
};

export default ErrorMessage;
