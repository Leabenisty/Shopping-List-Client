import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import categoryStore from '../store/categoryStore';
import cartStore from '../store/cartStore';

import { Box, Button, TextField } from '@mui/material';

const AddProductForm = observer(() => {
  const [name, setName] = useState('');
  const [categoryId, setCategoryId] = useState('');

  useEffect(() => {
    categoryStore.loadCategories();
  }, []);

  const handleAdd = () => {
    if (name && categoryId) {
      cartStore.addProduct(name.trim(), categoryId);
      setName('');
    }
  };

  return (
    <Box display="flex" alignItems="center" gap={2}>
      <TextField
        label="מה אני רוצה לקנות"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <Button variant="contained" onClick={handleAdd}>
        הוסף
      </Button>
    </Box>
  );
});

export default AddProductForm;
