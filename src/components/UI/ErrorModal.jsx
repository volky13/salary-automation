import Card from "../UI/Card";

const ErrorModal = (props) => {
  const { onConfirm, error } = props;
  const { title, desc } = error;
  return (
    <div className="error-modal">
      <div
        className="backdrop-blur-sm bg-white/30 top-0 h-screen w-screen fixed"
        onClick={onConfirm}
      ></div>
      <Card className="w-[36rem] p-0 z-20">
        <header className="bg-red-700 p-4 text-white rounded-t-xl">
          <h2 className="text-center text-xl text-white"> {title}</h2>
        </header>
        <section className="p-4">{desc}</section>
        <footer className="p-4 flex justify-end">
          <button className="w-32 bg-blue-500 h-10" onClick={onConfirm}>
            Tamam
          </button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
