import * as React from 'react';
import { observer } from 'mobx-react-lite';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import CartStore from '../store/cartStore ';

const OrderSummaryTable: React.FC = observer(() => {
  const products = CartStore.products;
  const HEADERS = ['שם מוצר', 'כמות', 'קטגוריה'];

  return (
    <TableContainer
      component={Paper}
      sx={{ overflow: 'auto', direction: 'rtl' }}
    >
      <Table stickyHeader size="small">
        <TableHead>
          <TableRow>
            {HEADERS.map((header, i) => (
              <TableCell key={i} align={i === 0 ? 'right' : 'center'}>
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product, index) => (
            <TableRow key={index}>
              <TableCell align="right">{product.productName}</TableCell>
              <TableCell align="center">{product.quantity}</TableCell>
              <TableCell align="center">{product.categoryId}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
});

export default OrderSummaryTable;
