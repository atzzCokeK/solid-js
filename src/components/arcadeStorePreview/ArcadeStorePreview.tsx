import ArcadeStore from "~/domain/ArcadeStore";

const StorePreview = (props: { arcadeStore: ArcadeStore }) => {
  return (
    <a href="" class="flex justify-center w-full">
      <img
        class="w-1/5"
        src="https://firebasestorage.googleapis.com/v0/b/wanna-go-to-game-center.appspot.com/o/storeImages%2FAdobeStock_388572983_Preview.jpeg?alt=media&token=eed3df00-4825-4b6e-a27f-fa65cd0223b1"
      />
      <div>
        <div>{props.arcadeStore.name}</div>
        <address>{props.arcadeStore.address}</address>
        <div>{props.arcadeStore.phoneNumber.toString()}</div>
        <div>{props.arcadeStore.updatedAt.toString()}</div>
        <div>
          タグ
          <div class="flex">
            {/* TODO: タグのコンポーネントを作る */}
            <span class="px-1">メダルゲーム</span>
            <span class="px-1">UFOキャッチャー</span>
            <span class="px-1">スロット</span>
            <span>パチンコ</span>
            <span>麻雀</span>
            <span>音ゲー</span>
            <span>格ゲー</span>
          </div>
        </div>
      </div>
    </a>
  );
};

export default StorePreview;
