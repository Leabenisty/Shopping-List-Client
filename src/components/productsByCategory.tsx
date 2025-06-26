import { observer } from "mobx-react-lite";
import { Table, TableHead, TableRow, TableCell, TableBody, Typography, Box, Chip, Stack} from "@mui/material";
import type { Product } from "../models/product";

type Props = {
  category: string;
  products: Product[];
};

const ProductsByCategory = observer(({ category, products }: Props) => {
  const totalUnits = products.reduce((sum, p) => sum + (p.quantity ?? 1), 0);

  return (
    <Box>
      <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
        <Typography variant="h6">{category}</Typography>
        <Chip size="small" label={`${totalUnits} יחידות`} />
      </Stack>

      <Table size="small" sx={{ direction: "rtl" }}>
        <TableHead>
          <TableRow>
            <TableCell align="right">שם מוצר</TableCell>
            <TableCell align="center">כמות</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((p, i) => (
            <TableRow key={i}>
              <TableCell align="right">{p.productName}</TableCell>
              <TableCell align="center">{p.quantity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
});

export default ProductsByCategory;
