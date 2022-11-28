import { getDocs, collection } from "firebase/firestore";
import { fireStore } from "./config/firebase";
import ArcadeStore from "./domain/ArcadeStore";

export class db {
  constructor() {}

  // addArcadeStore(arcadeStore: ArcadeStore): Promise<void> {
  //   return;
  // }

  // fetchTags(): Promise<Map<string, string>> {}

  fetch(): Promise<ArcadeStore[]> {
    return (async () =>
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
        ))();
  }
}
