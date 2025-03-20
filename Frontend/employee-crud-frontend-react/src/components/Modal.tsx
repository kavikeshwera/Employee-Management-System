import { ReactNode } from "react";

const Modal = ({ isOpen, onClose, children }: { isOpen: boolean; onClose: () => void; children: ReactNode }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-5 rounded shadow-lg w-96">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          ✖
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
