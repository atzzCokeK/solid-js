import ArcadeStore from "~/domain/ArcadeStore";

export default function StorePreview(store: ArcadeStore) {
  return (
    <div class="wrapper">
      <img />
      <div>
        <div>{store.name}</div>
        <address>{store.address}</address>
      </div>
    </div>
  );
}
