import { getDocs, collection, where, query } from "firebase/firestore";
import { fireStore } from "./config/firebase";
import Tag from "./domain/Tag";

const db = {
  async fetchAllTags(): Promise<Tag[]> {
    const collections = collection(fireStore, "Tags");
    const tags: Tag[] = [];
    try {
      const snapShot = await getDocs(collections);
      snapShot.docs.forEach((doc) =>
        tags.push(new Tag(doc.id, doc.data().name))
      );
    } catch (err) {
      console.error(err);
    }

    return tags;
  },

  async fetchTagsByIds(ids: string[]): Promise<Tag[]> {
    const collections = collection(fireStore, "Tags");
    const q = query(collections, where("id", "in", ids));
    const tags: Tag[] = [];
    try {
      const snapShot = await getDocs(q);
      snapShot.docs.forEach((doc) =>
        tags.push(new Tag(doc.id, doc.data().name))
      );
    } catch (err) {
      console.error(err);
    }

    return tags;
  },
};

export default db;
