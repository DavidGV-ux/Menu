export interface Food {
  id: number;
  name: string;
  type: string;
  category: string;
  image: string;
  price: number;
  description: string;
}

export type CartItem = {
  id: number;
  name: string;
  quantity: number;
  price: number;
};
