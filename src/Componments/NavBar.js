// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Button from '@mui/material/Button';
// import MenuItem from '@mui/material/MenuItem';
// import '../App.css'
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import Link from '@mui/material/Link';



// const pages = ['簡歷', '工作經驗','能力','學歷','作品集'];



// const ResponsiveAppBar = () => {
// const [anchorElNav, setAnchorElNav] = React.useState(null);

// const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
// };

// const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
// };
// const darkTheme = createTheme({
//     palette: {
//     mode: 'dark',
//     primary: {
//         main: '#001427'
//     },
//     },
// });



// return (
//     <ThemeProvider theme={darkTheme}>
//     <AppBar position="static" color='primary'>
//     <Container maxWidth="xl">
//         <Toolbar disableGutters>
//         <Typography
//             variant="h6"
//             noWrap
//             component="div"
//             sx={{ mr: 2, display: { xs: 'none', md: 'flex' }}}
//         >
//             Corbin
//         </Typography>
        
//         <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//             size="large"
//             aria-label="account of current user"
//             aria-controls="menu-appbar"
//             aria-haspopup="true"
//             onClick={handleOpenNavMenu}
//             color="inherit"
//             >
//             <MenuIcon />
//             </IconButton>
//             <Menu
//             id="menu-appbar"
//             anchorEl={anchorElNav}
//             anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//             }}
//             keepMounted
//             transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//             }}
//             open={Boolean(anchorElNav)}
//             onClose={handleCloseNavMenu}
//             sx={{
//                 display: { xs: 'block', md: 'none' },
//             }}
//             >
//             {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                 <Typography textAlign="center">{page}</Typography>
//                 </MenuItem>
//             ))}
//             </Menu>
//         </Box>
//         <Typography
//             variant="h6"
//                 noWrap
//             component="div"
//             sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
//         >
//             Corbin
//         </Typography>

//         <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//             {pages.map((page) => (
//         <Link href="" underline="none">
//             <Button
//                 key={page}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: 'white', display: 'block' }}
//             >
//                 {page}
//             </Button>
//             </Link>
//             ))}
//         </Box>
//         </Toolbar>
//     </Container>
//     </AppBar>
//     </ThemeProvider>
// );
// };
// export default ResponsiveAppBar;
