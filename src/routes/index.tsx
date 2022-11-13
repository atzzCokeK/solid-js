import { getDocs, collection } from "firebase/firestore";
import { createMemo, createResource } from "solid-js";
import { Meta, Title } from "solid-start";
import ArcadeStorePreviewList from "~/components/arcadeStorePreviewList/ArcadeStorePreviewList";
import { fireStore } from "~/config/firebase";
import ArcadeStore from "~/domain/ArcadeStore";

const fetchArcadeStores = async () =>
  (await getDocs(collection(fireStore, "ArcadeStores"))).docs
    .map((value) => value.data())
    .map(
      (doc) =>
        new ArcadeStore({
          name: doc.name,
          phoneNumber: doc.phoneNumber,
          address: doc.address,
        })
    );

export default function Home() {
  const [arcadeStores] = createResource(fetchArcadeStores);

  return (
    <main>
      <Title>ゲーセンイキタイ</Title>
      <h1>ゲーセンイキタイ</h1>
      <h2>ゲーセン一覧</h2>
      <ArcadeStorePreviewList arcadeStores={arcadeStores() ?? []} />
    </main>
  );
}
