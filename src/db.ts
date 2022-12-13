import { getDocs, collection, addDoc } from "firebase/firestore";
import { fireStore } from "./config/firebase";
import ArcadeStore from "./domain/ArcadeStore";
import Tag from "./domain/Tag";

const db = {
  add: async (arcadeStore: ArcadeStore): Promise<void> => {
    const arcadeStoreDto = {
      name: arcadeStore.name,
      phoneNumber: arcadeStore.phoneNumber.toString(),
      postalCode: arcadeStore.address.postalCode,
      prefecture: arcadeStore.address.prefecture,
      address1: arcadeStore.address.address1,
      address2: arcadeStore.address.address2,
      officialUrl: arcadeStore.officialUrl,
      isPublic: false,
      isClosed: false,
      likes: 0,
      updatedAt: new Date(),
    };

    const collections = collection(fireStore, "ArcadeStores");
    try {
      const docRef = await addDoc(collections, arcadeStoreDto);
      console.log(docRef);
    } catch (err) {
      console.error(err);
    }
  },

  fetchAllTags: async (): Promise<Map<string, Tag>> => {
    const collections = collection(fireStore, "Tags");
    const tags = new Map();
    try {
      const snapShot = await getDocs(collections);
      snapShot.docs.forEach((doc) => tags.set(doc.id, doc.data().name));
    } catch (err) {
      console.error(err);
    }

    return tags;
  },

  fetchStores: (): Promise<ArcadeStore[]> => {
    return (async () =>
      (await getDocs(collection(fireStore, "ArcadeStores"))).docs
        .map((value) => value.data())
        .map(
          (doc) =>
            new ArcadeStore({
              name: doc.name,
              phoneNumber: doc.phoneNumber,
              postalCode: doc.postalCode,
              prefecture: doc.prefecture,
              address1: doc.address1,
              address2: doc.address2,
              updatedAt: doc.updatedAt.toDate(),
              // FIXME: 仮に入れている
              tagIds: [1, 2],
              officialUrl: doc.officialUrl,
            })
        ))();
  },
};

export default db;
