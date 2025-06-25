import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import categoryStore from '../store/categoryStore';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import type { SelectChangeEvent } from '@mui/material/Select';

const SelectCategory = observer(() => {
  const [selected, setSelected] = React.useState('');

  useEffect(() => {
    categoryStore.loadCategories();
  }, []);

  const handleChange = (event: SelectChangeEvent) => {
    setSelected(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 360 }} size="medium">
      <InputLabel id="select-category-label">בחר קטגוריה</InputLabel>
      <Select
        labelId="select-category-label"
        id="select-category"
        value={selected}
        label="בחר קטגוריה"
        onChange={handleChange}
      >

        {categoryStore.categories.map((cat) => (
          <MenuItem key={cat.id} value={cat.id}>
            {cat.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
});

export default SelectCategory;
