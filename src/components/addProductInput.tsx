import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Box, TextField, useMediaQuery, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import categoryStore from '../store/categoryStore';

type Props = {
  productName: string;
  setName: (name: string) => void;
  categoryId: number;
};

const AddProductInput = observer(({ productName, setName }: Props) => {
  useEffect(() => {
    categoryStore.loadCategories();
  }, []);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ width: '100%' }}>
      <Stack
        direction={isMobile ? 'column' : 'row'}
        alignItems="center"
        gap={2}
        textAlign="right"
        sx={{ width: '100%' }}
      >
        <TextField
  fullWidth
  label="מה אני רוצה לקנות"
  variant="outlined"
  value={productName}
  onChange={(e) => setName(e.target.value)}
  InputProps={{
    inputProps: {
      dir: 'rtl',
      style: { textAlign: 'right' },
    },
  }}
  InputLabelProps={{
    style: { direction: 'rtl', textAlign: 'right', width: '100%' },
  }}
/>

      </Stack>
    </Box>
  );
});

export default AddProductInput;
