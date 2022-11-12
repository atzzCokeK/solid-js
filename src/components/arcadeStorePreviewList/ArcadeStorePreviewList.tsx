import { createMemo } from "solid-js";
import ArcadeStore from "~/domain/ArcadeStore";
import ArcadeStorePreview from "../arcadeStorePreview/ArcadeStorePreview";

const ArcadeStorePreviewList = ({
  arcadeStores,
}: {
  arcadeStores: ArcadeStore[];
}) => {
  const arcadeStoresView = createMemo(() => {
    return arcadeStores.map((arcadeStore) => ArcadeStorePreview(arcadeStore));
  });

  return <div class="wrapper">{arcadeStoresView}</div>;
};

export default ArcadeStorePreviewList;
