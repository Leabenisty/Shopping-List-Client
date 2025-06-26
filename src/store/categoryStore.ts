import { makeAutoObservable, runInAction } from 'mobx';
import type { Category } from '../models/category';

const baseUrl = "http://3.6.122.6:7172/api/Category";

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
            const res = await fetch(baseUrl);
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
