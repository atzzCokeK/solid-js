import { For } from "solid-js";
import { useSelectedTags } from "~/context/selectedTags";
import ArcadeStore from "~/domain/ArcadeStore";
import Tag from "~/domain/Tag";
import ArcadeStorePreview from "./ArcadeStorePreview";

const ArcadeStorePreviewList = (props: { arcadeStores: ArcadeStore[] }) => {
  const [selectedTags] = useSelectedTags();

  return (
    <div>
      <h2 class="mb-2">ποΈ γ²γΌγ»γ³δΈθ¦§</h2>
      <div class="flex flex-col divide-y bg-white p-10 rounded-lg">
        <For
          each={filterByTags(props.arcadeStores, selectedTags)}
          fallback={
            <div class="text-center">
              θ©²ε½γγγ²γΌγ»γ³γθ¦γ€γγγΎγγγ§γγπ­
            </div>
          }
        >
          {(arcadeStore) => {
            return <ArcadeStorePreview arcadeStore={arcadeStore} />;
          }}
        </For>
      </div>
    </div>
  );
};

// TODO: γγγ‘γ½γγγ«γγ¦γγγγγοΌγ§γε―η΅εγ«γͺγγγοΌ
const filterByTags = (
  arcadeStores: ArcadeStore[],
  selectedTags: Tag[]
): ArcadeStore[] => {
  return [...arcadeStores].filter((arcadeStore) =>
    selectedTags.every((tag) =>
      arcadeStore.tags
        .toArray()
        .map((tag) => tag.toName())
        .includes(tag.toName())
    )
  );
};

export default ArcadeStorePreviewList;
