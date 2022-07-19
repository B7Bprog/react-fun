import styles from "../styles/Answer.module.css";

const Answer = ({ answer }) => {
  return <h5 id={styles.answer}>{answer} </h5>;
};

export default Answer;
