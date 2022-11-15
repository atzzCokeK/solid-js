import { createMemo, For } from "solid-js";
import ArcadeStore from "~/domain/ArcadeStore";
import ArcadeStorePreview from "./ArcadeStorePreview";

const ArcadeStorePreviewList = (props: { arcadeStores: ArcadeStore[] }) => (
  <div class="flex flex-col divide-y bg-white p-10 rounded-lg">
    <For each={props.arcadeStores}>
      {(arcadeStore) => {
        return <ArcadeStorePreview arcadeStore={arcadeStore} />;
      }}
    </For>
  </div>
);

export default ArcadeStorePreviewList;
