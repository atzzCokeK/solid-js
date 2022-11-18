import { Component, For, Show } from "solid-js";
import { useSelectedTags } from "~/context/selectedTags";
import TagView from "./TagView";

interface SelectedTagsProps {}

const SelectedTags: Component<SelectedTagsProps> = (
  props: SelectedTagsProps
) => {
  const [selectedTags] = useSelectedTags();

  return (
    <div class={"mb-5"}>
      <h2 class="mb-2">選択中のタグ</h2>
      <div class="bg-white rounded-lg p-5">
        <Show
          when={selectedTags.length > 0}
          fallback={<div class={"text-[#6d7172]"}>なし</div>}
        >
          <div class={"flex space-x-2 w-full flex-wrap"}>
            <For each={selectedTags}>
              {(tag) => {
                return <TagView tag={tag} method={"REMOVE"}></TagView>;
              }}
            </For>
          </div>
        </Show>
      </div>
    </div>
  );
};

export default SelectedTags;
