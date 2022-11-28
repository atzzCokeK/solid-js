import { Component, ComponentProps } from "solid-js";

type ButtonColor = "Primary" | "Secondary";
type ButtonType = "submit" | "reset" | "button";

interface ButtonProps extends ComponentProps<"button"> {
  text: string;
  color?: ButtonColor;
}

const Button: Component<ButtonProps> = (props: ButtonProps) => {
  const color = props.color ? props.color : "Primary";

  return (
    <button
      type={props.type}
      onClick={props.onClick}
      class="text-white rounded-lg w-32 p-1"
      classList={{ "bg-primary": color === "Primary" }}
    >
      {props.text}
    </button>
  );
};

export default Button;