const ErrorMessage = () => {
  setTimeout(() => {
    console.log("Waiting is over");
  }, 3000);

  return (
    <div className="error">
      <p>Something went wrong. Try again!</p>
    </div>
  );
};

export default ErrorMessage;
