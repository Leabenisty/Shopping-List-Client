import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import type { SelectChangeEvent } from '@mui/material/Select';
import categoryStore from '../store/categoryStore';

interface SelectCategoryProps {

    categoryId: number;
    setCategoryId: (id: number) => void;
}

const CategoryDropdown = observer(({ categoryId, setCategoryId }: SelectCategoryProps) => {

    useEffect(() => {
        categoryStore.loadCategories();
    }, []);

    const handleChange = (event: SelectChangeEvent) => {
        setCategoryId(Number(event.target.value));
    };

    return (
        <FormControl sx={{ m: 1, minWidth: 360 }} size="medium">
            <InputLabel id="select-category-label">בחר קטגוריה</InputLabel>
            <Select
                labelId="select-category-label"
                id="select-category"
                value={categoryId.toString()}
                label="בחר קטגוריה"
                onChange={handleChange}
                MenuProps={{
                    PaperProps: {
                        style: {
                            direction: 'rtl',
                            textAlign: 'right',
                        },
                    },
                }}
                sx={{ textAlign: 'right' }}
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

export default CategoryDropdown;
