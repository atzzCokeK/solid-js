import PhoneNumber from "./PhoneNumber";

type Args = {
  name: string;
  phoneNumber: string;
  address: string;
};

export default class ArcadeStore {
  name: string;
  address: string;
  phoneNumber: PhoneNumber;

  constructor({ name, phoneNumber, address }: Args) {
    this.name = name;
    this.address = address;
    this.phoneNumber = new PhoneNumber(phoneNumber);
  }
}
