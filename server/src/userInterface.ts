export interface UserData {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
}

export interface Address {
  street: string;
  city: string;
}
