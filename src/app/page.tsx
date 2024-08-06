import * as React from "react";

import { Box, Button, Typography } from "@mui/material";

import style from "./page.module.css";

const Page = ({
  decorative = "All-in-One",
  title = "The Developer's Toolkit",
  subtitle = "Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.",
}: {
  decorative?: React.ReactNode;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
}) => {
  return (
    <Box className={`${style.herosection} flex flex-col justify-center items-center text-center`} gap={2} my={6} height="50vh">
      <Typography variant="paragraphLg" color="primary" className="text-uppercase" fontWeight="fontWeightMedium">{decorative}</Typography>
      <Typography variant="h1" fontSize="3rem !important" fontWeight="fontWeightBold">{title}</Typography>
      <Typography variant="h6" fontWeight="fontWeightLight" maxWidth="54ch" mb={1}>{subtitle}</Typography>

      <Button component="a" href="/docs" variant="contained" color="primary" sx={{px: 3, py: 1.5}}>Get Started</Button>
    </Box>
  );
}

export default Page;
