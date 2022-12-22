import { addDoc, collection, getDocs } from "firebase/firestore";
import Address from "~/domain/Address";
import ArcadeStore, { IArcadeStoreRepository } from "~/domain/ArcadeStore";
import PhoneNumber from "~/domain/PhoneNumber";
import Tag from "~/domain/Tag";
import Tags from "~/domain/Tags";
import { fireStore } from "../config/firebase";

export default class ArcadeStoreRepository implements IArcadeStoreRepository {
  async add(arcadeStore: ArcadeStore): Promise<void> {
    const arcadeStoreDto = {
      name: arcadeStore.name,
      phoneNumber: arcadeStore.phoneNumber.toString(),
      postalCode: arcadeStore.address.getPostalCode(),
      prefecture: arcadeStore.address.getPrefecture(),
      address1: arcadeStore.address.getAddress1(),
      address2: arcadeStore.address.getAddress2(),
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
  }

  async fetchAll(): Promise<ArcadeStore[]> {
    const collections = collection(fireStore, "Tags");
    const allTags: Tag[] = [];
    try {
      const snapShot = await getDocs(collections);
      snapShot.docs.forEach((doc) =>
        allTags.push(new Tag(doc.id, doc.data().name))
      );
    } catch (err) {
      console.error(err);
    }

    return (async () =>
      (await getDocs(collection(fireStore, "ArcadeStores"))).docs
        .map((value) => value.data())
        .map((doc) => {
          const tags = allTags.filter((tag) => doc.tagIds.includes(tag.toId()));

          return new ArcadeStore({
            name: doc.name,
            phoneNumber: new PhoneNumber(doc.phoneNumber),
            address: new Address({
              postalCode: doc.postalCode,
              prefecture: doc.prefecture,
              address1: doc.address1,
              address2: doc.address2,
            }),
            updatedAt: doc.updatedAt.toDate(),
            tags: new Tags(tags),
            officialUrl: doc.officialUrl,
          });
        }))();
  }
}
