import { makeAutoObservable } from "mobx";

export interface ShoppingItem {
  id: string;          // מזהה ייחודי (למשל UUID)
  productName: string; // שם המוצר
  categoryId: string;  // מזהה קטגוריה
}

export class ShoppingListStore {
  items: ShoppingItem[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addItem(productName: string, categoryId: string) {
    // בדיקה אם המוצר כבר קיים בקטגוריה (אפשר להרחיב עם כמות)
    const existing = this.items.find(
      (item) =>
        item.productName === productName && item.categoryId === categoryId
    );
    if (existing) {
      // אפשר להוסיף פה לוגיקה להגדלת כמות במקום הוספה כפולה
      return;
    }
    this.items.push({
      id: crypto.randomUUID(),
      productName,
      categoryId,
    });
  }

  clear() {
    this.items = [];
  }
}

const shoppingListStore = new ShoppingListStore();
export default shoppingListStore;
