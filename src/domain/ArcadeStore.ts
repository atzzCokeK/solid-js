import PhoneNumber from "./PhoneNumber";
import Tag from "./Tag";

class Address {
  readonly postalCode: string;
  readonly prefecture: string;
  readonly address1: string;
  readonly address2: string;

  constructor({
    postalCode,
    prefecture,
    address1,
    address2,
  }: {
    postalCode: string;
    prefecture: string;
    address1: string;
    address2: string;
  }) {
    this.postalCode = postalCode;
    this.prefecture = prefecture;
    this.address1 = address1;
    this.address2 = address2;
  }
}

type Args = {
  name: string;
  phoneNumber: string;
  postalCode: string;
  prefecture: string;
  address1: string;
  address2: string;
  updatedAt: Date;
  tagIds: number[];
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
    postalCode,
    prefecture,
    address1,
    address2,
    updatedAt,
    tagIds,
    officialUrl,
  }: Args) {
    this.name = name;
    this.address = new Address({ postalCode, prefecture, address1, address2 });
    this.phoneNumber = new PhoneNumber(phoneNumber);
    this.updatedAt = updatedAt;
    this.tags = new Set(tagIds.map((tagId) => new Tag(tagId)));
    this.officialUrl = officialUrl;
  }
}
