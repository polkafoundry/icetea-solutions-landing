import { useEffect } from "react";

interface Props {
  children: any;
  isOpen: boolean;
  handleClose: () => void;
}

const Model = ({ children, isOpen, handleClose }: Props) => {
    useEffect(() => {
      if (document) {
        try {
          if (isOpen) {
            document.body.style.overflow = "hidden";
          } else {
            document.body.style.overflow = "";
          }
        } catch (err) {}
      }
    }, [isOpen, children]);

  if (!isOpen) return null;

  return (
    <div className="fixed w-full h-full p-5 top-0 left-0 z-50 grid items-center justify-center overflow-auto">
      <div
        className="fixed bg-black bg-opacity-80 top-0 left-0 z-0 p-4 w-full h-full"
        onClick={() => handleClose()}
      />
      <div className="bg-white z-10 rounded-[24px] capitalize">{children}</div>
    </div>
  );
};

export default Model;
