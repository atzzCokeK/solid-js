import { Component, ComponentProps, For } from "solid-js";

interface SelectProps extends ComponentProps<"select"> {
  // add props here
  options: any[] | undefined;
}

const Select: Component<SelectProps> = (props: SelectProps) => {
  return (
    <select
      multiple={props.multiple}
      onChange={props.onChange}
    >
      <For each={props.options}>
        {(option) => <option value={option}>{option}</option>}
      </For>
    </select>
  );
};

export default Select;
