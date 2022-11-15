import { Component } from "solid-js";

const CategoryTag: Component<{ tagName: string }> = (props) => {
  return (
    <li>
      <span class="text-[#243c5a] bg-[#eaeaea] p-1 rounded-md text-sm">
        {props.tagName}
      </span>
    </li>
  );
};

export default CategoryTag;
