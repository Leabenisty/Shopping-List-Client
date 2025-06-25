import { makeAutoObservable, runInAction } from 'mobx';

export interface Category {
  id: number;
  name: string;
}

export class CategoryStore {
  categories: Category[] = [];
  isLoading = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  async loadCategories() {
    this.isLoading = true;
    this.error = null;
    try {
      const res = await fetch('https://localhost:7172/api/Category' );
      const data = await res.json();
      runInAction(() => {
        this.categories = data;
        this.isLoading = false;
      });
    } catch (err) {
      runInAction(() => {
        this.error = err instanceof Error ? err.message : 'Unknown error';
        this.isLoading = false;
      });
    }
  }
}

const categoryStore = new CategoryStore();
export default categoryStore;
