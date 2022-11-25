import { getDocs, collection } from "firebase/firestore";
import { createResource, Show } from "solid-js";
import { Title } from "solid-start";
import ArcadeStorePreviewList from "~/components/domains/ArcadeStore/ArcadeStorePreviewList";
import SelectedTags from "~/components/domains/ArcadeStore/SelectedTags";
import { fireStore } from "~/config/firebase";
import { useSelectedTags } from "~/context/selectedTags";
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
          tagIds: [1, 2],
        })
    );

// WANT: SUSPENSE使えそう。これonnでも行けそうだな
export default function Home() {
  const [arcadeStores] = createResource(fetchArcadeStores);

  return (
    <main>
      <Title>ゲーセンイキタイ</Title>
      <h1 class="text-center font-bold text-primary">Favorite Arcades</h1>
      <SelectedTags />
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
