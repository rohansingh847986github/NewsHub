import load from "./load.gif";

const Spinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <img src={load} alt="Loading..." className="w-20 h-20" />
    </div>
  );
};

export default Spinner;
