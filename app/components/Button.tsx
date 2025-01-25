import { ReactNode } from "react";

interface ButtonProps {
  className:string,
  onClick?:()=>void;
  href?:string;
  children:ReactNode,
  outline?:boolean
}
const Button = ({ className, onClick, href, children,outline }:ButtonProps) => {
  const classes = `relative  button inline-flex justify-center items-center h-11
    rounded-md p-2 text-center bg-sky-900 text-white hover:bg-primary hover:text-white transition-all duration-500 px-7 
    ${
        outline ? "text-dark bg-white border-2 border-dark" : "text-n-1"
  } ${className || ""}`;

  const spanClasses = `relative z-5`;
  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
    </button>
  );
  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
    </a>
  );
  return href ? renderLink() : renderButton();
};

export default Button;
