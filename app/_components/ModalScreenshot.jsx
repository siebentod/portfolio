function ModalScreenshot({ openedModal, closeModal }) {
  return (
    <>
      <div
        className="relative bg-[#242424] m-3 rounded-lg shadow-lg  grid justify-center items-center z-10 animate-slide-up cursor-pointer select-none"
        onClick={closeModal}
      >
        <img src={openedModal.src} alt="Project 1" className="max-h-[95vh]" />
        {/* <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          ></svg>
        </button> */}
      </div>
    </>
  );
}

export default ModalScreenshot;
