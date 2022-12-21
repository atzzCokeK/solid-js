import Address from "./Address";
import PhoneNumber from "./PhoneNumber";
import Tag from "./Tag";

type Args = {
  name: string;
  phoneNumber: PhoneNumber;
  address: Address;
  updatedAt: Date;
  tags: Tag[];
  officialUrl: string;
};

export default class ArcadeStore {
  readonly name: string;
  readonly address: Address;
  readonly phoneNumber: PhoneNumber;
  readonly updatedAt: Date;
  readonly tags: Set<Tag>;
  readonly officialUrl: String;

  constructor({
    name,
    phoneNumber,
    address,
    updatedAt,
    tags,
    officialUrl,
  }: Args) {
    this.name = name;
    this.address = address;
    this.phoneNumber = phoneNumber;
    this.updatedAt = updatedAt;
    this.tags = new Set(tags);
    this.officialUrl = officialUrl;
  }
}

export interface IArcadeStoreRepository {
  fetchAll(): Promise<ArcadeStore[]>;
  // todo: Idを返す方がいいかも
  add(arcadeStore: ArcadeStore): Promise<void>;
}
