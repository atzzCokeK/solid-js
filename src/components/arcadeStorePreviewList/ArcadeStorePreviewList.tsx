import { createMemo } from "solid-js";
import ArcadeStore from "~/domain/ArcadeStore";
import ArcadeStorePreview from "../arcadeStorePreview/ArcadeStorePreview";

const ArcadeStorePreviewList = (props: { arcadeStores: ArcadeStore[] }) => {
  const arcadeStoresView = createMemo(() => {
    return props.arcadeStores.map((arcadeStore) =>
      ArcadeStorePreview(arcadeStore)
    );
  }, [props.arcadeStores]);

  return <div class="wrapper">{arcadeStoresView}</div>;
};

export default ArcadeStorePreviewList;
