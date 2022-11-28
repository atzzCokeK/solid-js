import { getDocs, collection } from "firebase/firestore";
import { createResource, Show } from "solid-js";
import { Title } from "solid-start";
import ArcadeStorePreviewList from "~/components/domains/ArcadeStore/ArcadeStorePreviewList";
import SelectedTags from "~/components/domains/ArcadeStore/SelectedTags";
import { db } from "~/db";

const dataBase = new db();

// WANT: SUSPENSE使えそう。これonnでも行けそうだな
export default function Home() {
  const [arcadeStores] = createResource(() => dataBase.fetch());

  return (
    <main>
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
