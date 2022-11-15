const regex = new RegExp(/[0 - 9]/g);

export default class PhoneNumber {
  private value: string;

  constructor(phoneNumber: string) {
    if (phoneNumber.length !== 10 && phoneNumber.length !== 11) {
      throw new Error("wrong phone number by length");
    }

    if (!phoneNumber.matchAll(regex)) {
      throw new Error("wrong phone number by regex");
    }

    this.value = phoneNumber;
  }

  toString() {
    return this.value;
  }
}
