import React from "react";

export interface IButtonProps {
  children?: React.ReactNode;
  title?: string;
  primary?: boolean;
}

const ButtonGuu: React.FC<IButtonProps> = props => {
  return <button className="ButtonGuu">{props.children || 'button'}</button>;
};

export default ButtonGuu;
