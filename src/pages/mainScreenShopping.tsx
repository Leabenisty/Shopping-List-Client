import { useState } from 'react';
import { Button, Box } from '@mui/material';

import SelectCategory from '../components/categoryDropdown ';
import Categories from '../components/categories';

import orderStore from '../store/cartStore ';
import type { Product } from '../models/product';
import Header from './header';

import Swal from 'sweetalert2';
import AddProductInput from '../components/addProductInput';

export default function ShoppingPage() {

  const [product, setProduct] = useState<Product>({
    productName: "",
    categoryId: 0
  });

  const changeName = (newName: string) => {
    setProduct(prev => ({ ...prev, productName: newName }));
  };

  const changeCategoryId = (newCategoryId: number) => {
    setProduct(prev => ({ ...prev, categoryId: newCategoryId }));
  };

  const showError = () => {
    Swal.fire({
      icon: 'warning',
      title: 'שגיאה',
      text: 'יש לבחור קטגוריה ולהכניס שם מוצר',
      confirmButtonText: 'אישור',
      confirmButtonColor: '#3085d6',
    });
  };

  const showSuccess = (message: string) => {
    Swal.fire({
      icon: 'success',
      title: message,
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
    });
  };

  const handleAddProduct = () => {
    if (!product.productName || !product.categoryId) {
      showError();
      return;
    }

    orderStore.addProductToArr(product);
    changeName("");
    changeCategoryId(0);
  };

  const handleSaveOrder = () => {
    if (!product.productName || !product.categoryId) {
      showError();
      return;
    }

    orderStore.addOrder();
    changeName("");
    changeCategoryId(0);
    showSuccess("ההזמנה נשמרה בהצלחה");
  };

  return (
    <>
      <Header />

      <Box display="flex" alignItems="center" gap={2}>
        <SelectCategory categoryId={product.categoryId} setCategoryId={changeCategoryId} />
        <AddProductInput productName={product.productName} setName={changeName} categoryId={product.categoryId} />
      </Box>

      <Box display="flex" justifyContent="center" mt={2}>
        <Button variant="contained" onClick={handleAddProduct}>הוסף</Button>
      </Box>

      <Box display="flex" justifyContent="center" mt={2}>
        <Button variant="contained" onClick={handleSaveOrder}>שמור הזמנה</Button>
      </Box>

      <Categories />
    </>
  );
}
