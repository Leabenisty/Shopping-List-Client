// orderStore.ts
import { makeAutoObservable, runInAction } from "mobx";
import type { Product } from "../models/product";

const baseUrl = "http://3.6.122.6:7172/api/Order";
class CartStore {
  products: Product[] = [];
  isLoading = false;
  error: string | null = null;

  constructor() {
    this.products = [];
    makeAutoObservable(this);
  }


  async getOrder() {
    this.isLoading = true;
    this.error = null;
    try {
      const res = await fetch(baseUrl);
      const data: CartStore = await res.json();
      runInAction(() => {
        this.products = data.products;
        this.isLoading = false;
      });
    } catch (err) {
      runInAction(() => {
        this.error = err instanceof Error ? err.message : 'Unknown error';
        this.isLoading = false;
      });
    }
  }
  async addOrder() {
    const res = await fetch(baseUrl
      , {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.products),
      });
    if (res.ok) {
      this.clearOrder();
    }
  }
  addProductToArr(product: Product) {
    const existing = this.products.find(
      (p) => p.productName === product.productName && p.categoryId === product.categoryId
    );

    if (existing) {
      existing.quantity = (existing.quantity ?? 1) + (product.quantity ?? 1);
    } else {
      this.products.push({ ...product, quantity: product.quantity ?? 1 });
    }
  }

  get totalUnits() {             
    return this.products.reduce((s, p) => s + (p.quantity ?? 1), 0);
  }

  get productsByCategory(): Record<number, Product[]> {
    return this.products.reduce((acc, p) => {
      (acc[p.categoryId] ??= []).push(p);
      return acc;
    }, {} as Record<number, Product[]>);
  }
  get totalProducts(): number {
    return this.products.length;

  }

  clearOrder() {
    this.products = [];
  }


}

const cartStore = new CartStore();
export default cartStore ;
