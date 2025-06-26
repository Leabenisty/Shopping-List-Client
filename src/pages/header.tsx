import { Box, Typography } from '@mui/material';

const Header = () => (
    <Box sx={{ textAlign: 'center', mt: 0, pt: 1, mb: 2 }}>
        <Typography
            variant="h4"
            component="h1"
            fontWeight="bold"
            sx={{ color: '#333', m: 0 }}
        >
            רשימת הקניות שלי
        </Typography>
    </Box>
);

export default Header;
