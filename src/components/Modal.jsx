import ReactModal from "react-modal";
// import Button from "./Button";
import GameDetail from "./GameDetails";
const Modal = ({ isOpen, handleClose }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={handleClose}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.75)",
        },
      }}
      className="fixed inset-0 flex"
    >
      <div className="m-auto bg-[#e4e5f1] l max-w-md p-5 rounded dark:bg-[#25273c]">
        <GameDetail />
        <button
          text="Close"
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded "
          onClick={handleClose}
        >
          Zamknij
        </button>
      </div>
    </ReactModal>
  );
};

export default Modal;
