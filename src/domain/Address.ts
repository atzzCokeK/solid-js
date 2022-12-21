export default class Address {
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
