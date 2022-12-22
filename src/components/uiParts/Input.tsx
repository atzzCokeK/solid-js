import { Component, ComponentProps } from "solid-js";

interface InputProps extends ComponentProps<"input"> {
  // add props here
}

const Input: Component<InputProps> = (props: InputProps) => {
  return (
    <input
      class="border-2 border-gray-300 rounded-md bg=white"
      {...props}
     />
  );
};

export default Input;
