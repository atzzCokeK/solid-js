import { Component, ComponentProps } from "solid-js";

interface AddressProps extends ComponentProps<any> {
  address: string;
}
const googleMapApiBaseUrl = "https://www.google.com/maps/search/?api=1&query=";

const Address: Component<AddressProps> = (props: AddressProps) => {
  return (
    <a href={googleMapApiBaseUrl + props.address} target="blank_">
      {props.address}
    </a>
  );
};

export default Address;
