import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import Form from './Form';


const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return <Box>
    {/* <Box width="100%" backgroundColor={theme.palette.background.alt} p="1rem 6%" textAlign="center">
        <Typography
          fontWeight="bold"
          fontSize="32px"
          color="primary"
        >
          Cikarang Society
        </Typography>

        </Box> */}
    <Box
      width="100%"
      padding="1.0rem 5%"
      display={isNonMobileScreens ? "flex" : "block"}
      sx={{
        backgroundImage: 'url("assets/astro.png")', // Replace with the URL of your background image
        //backgroundSize: 'contain', // Adjust background properties as needed
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100%', // Set the width and height as needed
        height: '100%',
      }}
    >
      <Box
        width={isNonMobileScreens ? "100%" : "93%"}
        p="2rem"
        m="2rem 1.5rem 2rem 1rem"
        borderRadius="1.5rem"
        backgroundColor="transparent"
      >
      <Typography fontWeight="700" variant="titlefont" sx={{ mb: "1.5rem" }}>
        Cikarang Society.
      </Typography>
      <br></br>
      <Typography fontWeight="200" variant="h5" sx={{ mb: "1.5rem" }}>
        Welcome To The Largest Social Media in Cikarang Planet
      </Typography>

    </Box>

    <Box
      width={isNonMobileScreens ? "90%" : "93%"}
      p="2rem"
      m="4rem 1.5rem 0.5rem 1rem"
    >

      <Box
        width={isNonMobileScreens ? "95%" : "93%"}
        p="2rem"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="700" variant="h3" sx={{ mb: "1.5rem" }}>
          Join Today
        </Typography>
        <Form />
      </Box>

    </Box>
  </Box>

  </Box >
}

export default LoginPage;
