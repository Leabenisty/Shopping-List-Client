import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import {
  CircularProgress,
  Box,
  Typography,
  Chip,
  Stack,
  Divider,
  Container,
} from "@mui/material";

import categoryStore from "../store/categoryStore";
import orderStore from "../store/cartStore ";
import ProductsByCategory from "./productsByCategory";

const Categories = observer(() => {
  useEffect(() => {
    if (!categoryStore.categories.length) categoryStore.loadCategories();
  }, []);

  if (categoryStore.isLoading) {
    return (
      <Box textAlign="center" mt={4}>
        <CircularProgress />
      </Box>
    );
  }

  const totalUnits = orderStore.totalUnits;

  return (
    <Container maxWidth="md" sx={{ direction: "rtl", mt: 4 }}>
      <Stack spacing={1} alignItems="center" sx={{ mb: 3 }}>
        <Chip
          variant="outlined"
          color="default"
          label={`סה״כ יחידות: ${totalUnits}`}
          sx={{
            fontSize: "1rem",
            px: 2,
            borderRadius: "8px",
            bgcolor: "#f9f9f9",
          }}
        />
        <Typography
          variant="h5"
          component="h1"
          fontWeight={600}
          sx={{ color: "#333" }}
        >
         סל הקניות לפי קטגוריות:
        </Typography>
      </Stack>

      {categoryStore.categories.map((cat, idx) => {
        const productsForCat = orderStore.productsByCategory[cat.id] ?? [];
        if (!productsForCat.length) return null;

        return (
          <Box key={cat.id}>
            <ProductsByCategory category={cat.name} products={productsForCat} />
            {idx < categoryStore.categories.length - 1 && (
              <Divider sx={{ my: 3, borderColor: "#ddd" }} />
            )}
          </Box>
        );
      })}

      {orderStore.products.length === 0 && (
        <Typography
          variant="subtitle1"
          align="center"
          sx={{ mt: 6, color: "#777" }}
        >
          אין מוצרים בהזמנה
        </Typography>
      )}
    </Container>
  );
});

export default Categories;
