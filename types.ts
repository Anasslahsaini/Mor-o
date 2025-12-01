export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export enum ViewState {
  INTRO = 'INTRO',
  HOME = 'HOME',
  PRODUCT = 'PRODUCT'
}