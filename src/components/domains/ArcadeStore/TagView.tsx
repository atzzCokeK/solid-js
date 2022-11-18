import { Component, ComponentProps } from "solid-js";
import { useSelectedTags } from "~/context/selectedTags";
import Tag from "~/domain/Tag";

type Method = "ADD" | "REMOVE";

type TagViewProps = {
  tag: Tag;
  method: Method;
};

const TagView: Component<TagViewProps> = (props) => {
  const [selectedTags, { addTag, removeTag }] = useSelectedTags();

  return (
    <li
      class={"list-none cursor-pointer"}
      onClick={() => {
        if (
          props.method === "ADD" &&
          selectedTags.some((tag) => props.tag.isEqualTo(tag))
        ) {
          return;
        }

        return props.method === "ADD"
          ? addTag(props.tag)
          : removeTag(props.tag);
      }}
    >
      <span
        class="text-[#243c5a] bg-[#eaeaea] p-1 rounded-md text-sm"
        classList={{
          "font-bold": selectedTags.some((tag) => tag.isEqualTo(props.tag)),
          "bg-[#BFD6F2]": selectedTags.some((tag) => tag.isEqualTo(props.tag)),
        }}
      >
        {props.tag.toName()}
      </span>
    </li>
  );
};

export default TagView;
