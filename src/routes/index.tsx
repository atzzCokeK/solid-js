import { getDocs, collection } from "firebase/firestore";
import { createResource, Show } from "solid-js";
import { Meta, Title } from "solid-start";
import ArcadeStorePreviewList from "~/components/domains/ArcadeStore/ArcadeStorePreviewList";
import { fireStore } from "~/config/firebase";
import ArcadeStore from "~/domain/ArcadeStore";

//  FIXME: これをコンポーネントから分離したい
const fetchArcadeStores = async () =>
  (await getDocs(collection(fireStore, "ArcadeStores"))).docs
    .map((value) => value.data())
    .map(
      (doc) =>
        new ArcadeStore({
          name: doc.name,
          phoneNumber: doc.phoneNumber,
          address: doc.address,
          updatedAt: doc.updatedAt.toDate(),
          // FIXME: 仮に入れている
          tagIds: [1],
        })
    );

// WANT: SUSPENSE使えそう。これonnでも行けそうだな
export default function Home() {
  const [arcadeStores] = createResource(fetchArcadeStores);

  return (
    <main>
      <Title>ゲーセンイキタイ</Title>
      <h1 class="text-center font-bold">ゲーセンイキタイ</h1>
      <div> {arcadeStores.loading && "Loading..."}</div>
      <Show
        when={() => {
          const stores = arcadeStores();
          return stores && stores.length > 0;
        }}
        fallback={<div>loading...</div>}
      >
        <ArcadeStorePreviewList arcadeStores={arcadeStores() ?? []} />
      </Show>
    </main>
  );
}
