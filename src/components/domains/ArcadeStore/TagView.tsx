import { Component, ComponentProps } from "solid-js";
import { useSelectedTags } from "~/context/selectedTags";
import Tag from "~/domain/Tag";

type Method = "ADD" | "REMOVE";

type TagViewProps = {
  tag: Tag;
  method: Method;
};

const TagView: Component<TagViewProps> = (props) => {
  const [, { addTag, removeTag }] = useSelectedTags();

  return (
    <li
      class={"list-none"}
      onClick={() => {
        return props.method === "ADD"
          ? addTag(props.tag)
          : removeTag(props.tag);
      }}
    >
      <span class="text-[#243c5a] bg-[#eaeaea] p-1 rounded-md text-sm">
        {props.tag.toName()}
      </span>
    </li>
  );
};

export default TagView;
