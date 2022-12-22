import { Component, ComponentProps, createMemo, mergeProps } from "solid-js";

type ButtonColor = "Primary" | "Secondary";

interface ButtonProps extends ComponentProps<"button"> {
  text: string;
  color?: ButtonColor;
}

const Button: Component<ButtonProps> = (props: ButtonProps) => {
  const merged = mergeProps({ color: "Primary" }, props);
  const onSubmitHandler = createMemo(() => props.onSubmit);
  const onClickHandler = createMemo(() => props.onClick);

  return (
    <button
      type={props.type}
      onSubmit={onSubmitHandler}
      onClick={onClickHandler}
      class="text-white rounded-lg w-32 p-1"
      classList={{ "bg-primary": merged.color === "Primary" }}
    >
      {props.text}
    </button>
  );
};

export default Button;
