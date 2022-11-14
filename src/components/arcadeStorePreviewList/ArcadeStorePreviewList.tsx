import { createMemo, For } from "solid-js";
import ArcadeStore from "~/domain/ArcadeStore";
import ArcadeStorePreview from "../arcadeStorePreview/ArcadeStorePreview";

const ArcadeStorePreviewList = (props: { arcadeStores: ArcadeStore[] }) => (
  <div class="flex bg-white p-10 rounded-lg">
    <For each={props.arcadeStores}>
      {(arcadeStore) => {
        return <ArcadeStorePreview arcadeStore={arcadeStore} />;
      }}
    </For>
  </div>
);

export default ArcadeStorePreviewList;
