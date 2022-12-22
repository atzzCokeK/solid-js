import Address from "./Address";
import PhoneNumber from "./PhoneNumber";
import Tags from "./Tags";

type Args = {
  name: string;
  phoneNumber: PhoneNumber;
  address: Address;
  updatedAt: Date;
  tags: Tags;
  officialUrl: string;
};

export default class ArcadeStore {
  readonly name: string;
  readonly address: Address;
  readonly phoneNumber: PhoneNumber;
  readonly updatedAt: Date;
  readonly tags: Tags;
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
    this.tags = tags;
    this.officialUrl = officialUrl;
  }
}

export interface IArcadeStoreRepository {
  fetchAll(): Promise<ArcadeStore[]>;
  // todo: Idを返す方がいいかも
  add(arcadeStore: ArcadeStore): Promise<void>;
}
