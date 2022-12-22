export default class Address {
  private readonly postalCode: string;
  private readonly prefecture: string;
  private readonly address1: string;
  private readonly address2: string;

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
  getPostalCode() {
    return this.postalCode;
  }
  getPrefecture() {
    return this.prefecture;
  }
  getAddress1() {
    return this.address1;
  }
  getAddress2() {
    return this.address2;
  }

  toString() {
    return this.postalCode + this.prefecture + this.address1 + this.address2;
  }
}
