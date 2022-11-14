import PhoneNumber from "./PhoneNumber";

type Args = {
  name: string;
  phoneNumber: string;
  address: string;
  updatedAt: Date;
};

export default class ArcadeStore {
  readonly name: string;
  readonly address: string;
  readonly phoneNumber: PhoneNumber;
  readonly updatedAt: Date;

  constructor({ name, phoneNumber, address, updatedAt }: Args) {
    this.name = name;
    this.address = address;
    this.phoneNumber = new PhoneNumber(phoneNumber);
    this.updatedAt = updatedAt;
  }
}
