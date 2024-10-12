 
import React from "react";
import { IoMdClose } from "react-icons/io";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, videoUrl }) => {
  if (!isOpen) return null;

  console.log(videoUrl);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose} className="modal-close">
          <IoMdClose />
        </button>
        <iframe
          className="iframe"
          width="100%"
          height="100%"
          src={`${videoUrl}?autoplay=1`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};
export default Modal;
