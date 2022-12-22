import { For } from "solid-js";
import { useSelectedTags } from "~/context/selectedTags";
import ArcadeStore from "~/domain/ArcadeStore";
import Tag from "~/domain/Tag";
import ArcadeStorePreview from "./ArcadeStorePreview";

const ArcadeStorePreviewList = (props: { arcadeStores: ArcadeStore[] }) => {
  const [selectedTags] = useSelectedTags();

  return (
    <div>
      <h2 class="mb-2">🏛️ ゲーセン一覧</h2>
      <div class="flex flex-col divide-y bg-white p-10 rounded-lg">
        <For
          each={filterByTags(props.arcadeStores, selectedTags)}
          fallback={
            <div class="text-center">
              該当するゲーセンが見つかりませんでした😭
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

// TODO: これメソッドにしてもいいかも？でも密結合になりそう？
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
