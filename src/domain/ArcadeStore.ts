import PhoneNumber from "./PhoneNumber";
import Tag from "./Tag";

type Args = {
  name: string;
  phoneNumber: string;
  address: string;
  updatedAt: Date;
  tagIds: number[];
};

export default class ArcadeStore {
  readonly name: string;
  readonly address: string;
  readonly phoneNumber: PhoneNumber;
  readonly updatedAt: Date;
  readonly tags: Set<Tag>;

  constructor({ name, phoneNumber, address, updatedAt, tagIds }: Args) {
    this.name = name;
    this.address = address;
    this.phoneNumber = new PhoneNumber(phoneNumber);
    this.updatedAt = updatedAt;
    this.tags = new Set();
  }
}
