"use client";

import useModal from "../hooks/useModal";

interface ButtonProps {
  title: string;
}

const Button: React.FC<ButtonProps> = ({ title }) => {
  const modal = useModal();
  const handleClick = () => {
    if (modal.isOpen) {
      modal.onClose();
    }
  };
  return (
    <div className="w-full flex justify-center mt-8 rounded-md bg-veryDarkViolet h-10 text-center text-[14px] text-lightGrayishViolet cursor-pointer">
      <button type="submit" onClick={handleClick}>
        {title}
      </button>
    </div>
  );
};

export default Button;
