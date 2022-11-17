import { Component, For } from "solid-js";
import { useSelectedTags } from "~/context/selectedTags";
import TagView from "./TagView";

interface SelectedTagsProps {}

const SelectedTags: Component<SelectedTagsProps> = (
  props: SelectedTagsProps
) => {
  const [selectedTags] = useSelectedTags();

  return (
    <>
      <For each={selectedTags}>
        {(tag) => {
          return <TagView tag={tag} method={"REMOVE"}></TagView>;
        }}
      </For>
    </>
  );
};

export default SelectedTags;
