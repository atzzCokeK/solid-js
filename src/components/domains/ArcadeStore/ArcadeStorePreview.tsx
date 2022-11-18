import { Index } from "solid-js";
import ArcadeStore from "~/domain/ArcadeStore";
import Tag from "~/domain/Tag";
import Address from "./Address";
import TagView from "./TagView";
import UpdatedDate from "./UpdatedDate";

const StorePreview = (props: { arcadeStore: ArcadeStore }) => {
  const mockCategories = [
    "メダル",
    "UFOキャッチャー",
    "🎰スロット",
    "パチンコ",
    "🀄麻雀",
    "♫音ゲー",
    "👨格ゲー",
    "🐎競馬",
    "🎳ボウリング",
    "⚾バッティングセンター",
  ];

  return (
    // TODO: ゆくゆくはaタグ
    <div class="pb-3 pt-3">
      <div class="flex justify-start w-full pb-5">
        <img
          class="w-1/5 rounded-lg"
          src="https://firebasestorage.googleapis.com/v0/b/wanna-go-to-game-center.appspot.com/o/storeImages%2FAdobeStock_388572983_Preview.jpeg?alt=media&token=eed3df00-4825-4b6e-a27f-fa65cd0223b1"
        />
        <div class="flex flex-col justify-start ml-5 space-y-2">
          <div>{props.arcadeStore.name}</div>
          <div class="text-xs text-[#6d7172] hover:opacity-60 transition-opacity">
            <Address address={props.arcadeStore.address}></Address>
          </div>
          <ul class="flex list-none space-x-2 w-full flex-wrap">
            <Index each={[1, 2, 3]}>
              {(category) => (
                <TagView tag={new Tag(category())} method={"ADD"} />
              )}
            </Index>
          </ul>
        </div>
      </div>
      <div class="footer">
        <UpdatedDate updatedAt={props.arcadeStore.updatedAt} />
      </div>
    </div>
  );
};

export default StorePreview;
