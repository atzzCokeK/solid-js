import { Component, ComponentProps, createMemo, For } from "solid-js";

interface SelectProps extends ComponentProps<"select"> {
  // add props here
  options: any[] | undefined;
}

const Select: Component<SelectProps> = (props: SelectProps) => {
  const onChangeHandler = createMemo(() => props.onChange);

  return (
    <select
      multiple={props.multiple}
      onChange={onChangeHandler}
    >
      <For each={props.options}>
        {(option) => <option value={option}>{option}</option>}
      </For>
    </select>
  );
};

export default Select;
