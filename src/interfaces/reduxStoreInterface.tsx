export interface ConfigSliceInterface{
    theme:string
}

export interface UserSliceInterface{
    id: null | string,
    email: null | string,
    loading: boolean,
    error: string | null
}

export interface ProductSliceInterface {
    categories: { id: string; category: string; totalProducts: number }[]; 
    products: { id: string; name: string; price: number; desc: string; category: string }[];
    loading: boolean;
    error: string | null;
  }
  