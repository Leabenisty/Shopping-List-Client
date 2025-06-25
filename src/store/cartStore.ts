// store/cartStore.ts
import { makeAutoObservable } from 'mobx';

export interface Product {
  name: string;
  categoryId: string;
  quantity: number;
}

class CartStore {
  items: Product[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addProduct(name: string, categoryId: string) {
    const existing = this.items.find(
      (item) => item.name === name && item.categoryId === categoryId
    );
    if (existing) {
      existing.quantity++;
    } else {
      this.items.push({ name, categoryId, quantity: 1 });
    }
  }

  get totalItems() {
    return this.items.reduce((acc, item) => acc + item.quantity, 0);
  }

  clearCart() {
    this.items = [];
  }
}

const cartStore = new CartStore();
export default cartStore;
