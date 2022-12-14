import { Index } from "solid-js";
import ArcadeStore from "~/domain/ArcadeStore";
import Address from "./Address";
import TagView from "./TagView";
import UpdatedDate from "./UpdatedDate";

const StorePreview = (props: { arcadeStore: ArcadeStore }) => {
  // const mockCategories = [
  //   "β«γ‘γγ«",
  //   "π«UFOγ­γ£γγγ£γΌ",
  //   "π°γΉγ­γγ",
  //   "γγγ³γ³",
  //   "πιΊ»ι",
  //   "β«ι³γ²γΌ",
  //   "π¨ζ Όγ²γΌ",
  //   "πη«Άι¦¬",
  //   "π³γγ¦γͺγ³γ°",
  //   "βΎγγγγ£γ³γ°γ»γ³γΏγΌ",
  // ];

  return (
    // TODO: γγγγγ―aγΏγ°
    <div class="pb-4 pt-4">
      <div class="flex justify-start w-full pb-5">
        <img
          class="w-1/5 rounded-lg"
          src="https://firebasestorage.googleapis.com/v0/b/wanna-go-to-game-center.appspot.com/o/storeImages%2FAdobeStock_388572983_Preview.jpeg?alt=media&token=eed3df00-4825-4b6e-a27f-fa65cd0223b1"
        />
        <div class="flex flex-col justify-start ml-5 space-y-2">
          <div>{props.arcadeStore.name}</div>
          <div class="text-xs text-[#6d7172] hover:opacity-60 transition-opacity">
            <Address address={props.arcadeStore.address.toString()} />
          </div>
          <ul class="flex list-none space-x-2 w-full flex-wrap">
            <Index each={props.arcadeStore.tags.toArray()}>
              {(tag) => (
                <TagView
                  tag={tag()}
                  method={"ADD"}
                />
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
