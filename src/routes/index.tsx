import { getDocs, collection } from "firebase/firestore";
import { createResource, Show } from "solid-js";
import { Title } from "solid-start";
import ArcadeStorePreviewList from "~/components/domains/ArcadeStore/ArcadeStorePreviewList";
import SelectedTags from "~/components/domains/ArcadeStore/SelectedTags";
import db from "~/db";
import ArcadeStoreRepository from "~/repository/ArcadeStoreRepository";

// WANT: SUSPENSE使えそう。これonnでも行けそうだな
export default function Home() {
  const arcadeStoreRepository = new ArcadeStoreRepository();
  const [arcadeStores] = createResource(() => arcadeStoreRepository.fetchAll());

  return (
    <main>
      <h1>Glist</h1>
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
