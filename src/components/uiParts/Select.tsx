import { Component, ComponentProps, For } from "solid-js";

interface SelectProps extends ComponentProps<"select"> {
  options: { value: string; name: string }[] | undefined;
}

const Select: Component<SelectProps> = (props: SelectProps) => {
  return (
    <select
      multiple={props.multiple}
      onChange={(e) => {
        if (typeof props.onChange === "function") props.onChange(e);
      }}
    >
      <For each={props.options}>
        {(option) => <option value={option.value}>{option.name}</option>}
      </For>
    </select>
  );
};

export default Select;
