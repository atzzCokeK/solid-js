import { Component, ComponentProps, mergeProps } from "solid-js";

type ButtonColor = "Primary" | "Secondary";

interface ButtonProps extends ComponentProps<"button"> {
  text: string;
  color?: ButtonColor;
}

const Button: Component<ButtonProps> = (props: ButtonProps) => {
  const merged = mergeProps({ color: "Primary" }, props);

  return (
    <button
      type={props.type}
      onSubmit={(e) => {
        if (typeof props.onSubmit === "function") props.onSubmit(e);
      }}
      onClick={(e) => {
        if (typeof props.onClick === "function") props.onClick(e);
      }}
      class="text-white rounded-lg w-32 p-1"
      classList={{ "bg-primary": merged.color === "Primary" }}
    >
      {props.text}
    </button>
  );
};

export default Button;
