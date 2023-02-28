import clsx from "clsx";
import { FaCheckCircle } from "react-icons/fa";

interface Props {
  isShow: boolean;
  handleClose: () => void;
}

const ModalSubmit = ({ isShow, handleClose }: Props) => {
  return (
    <div
      id="popup-modal"
      tabIndex={-1}
      className={clsx(
        "background-modal fixed flex justify-center items-center top-0 left-0 z-50 overflow-x-hidden overflow-y-auto inset-0 h-full",
        isShow ? "" : "hidden"
      )}
    >
      <div className="relative w-full max-w-[400px] h-auto">
        <div className="relative bg-white rounded-[12px] shadow dark:bg-[#1A1F27]">
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-[#515966] hover:bg-gray-200 hover:text-gray-900 rounded-[50%] text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            data-modal-hide="popup-modal"
            onClick={() => handleClose()}
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="p-6 text-center text-white">
            <div className="tick_done_bg w-[80px] h-[80px] mx-auto mt-5 flex justify-center items-center">
              <FaCheckCircle size={"30px"} color={"#8FFFD7"} />
            </div>
            <h3 className="text-lg py-[10px] text-[20px] leading-[28px] font-[700]">
              Thank you!
            </h3>
            <p className="text-[14px] leading-[22px]">
              Your form has been submitted.
            </p>
            <p className="text-[14px] leading-[22px]">
              Our team will reach out to you via email shortly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalSubmit;
