/* eslint-disable @next/next/no-img-element */

import React from "react";

import { Divider, Grid, Stack, Typography } from "@mui/material";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import MyCoolCodeBlock from "@/components/ui/copy-code-block";

import UtilityClasses from "./utility-classes";

export const metadata: Metadata = {
  title: "Theming - ZENMONK UI",
};

const Theming = () => {
  return <Grid container px={3}>
  <Grid item md={8} xs={12}>
    <Typography variant="h1" fontWeight="fontWeightBold" mb={1}>
      Theming
    </Typography>
    <Typography
          variant="h6"
          fontWeight="fontWeightLight"
          maxWidth="54ch"
          color="success"
          mb={2}
        >
        Using CSS Variables or Tailwind CSS for theming.
    </Typography>

    <Typography variant="paragraphLg" fontWeight="fontWeightMedium" component="h1">
        You can choose between using CSS variables or Tailwind CSS utility classes for theming.
    </Typography>

    <Stack mt={4}>
      <Typography variant="h3" fontWeight="fontWeightMedium">
        Steps to use Theming in your app
      </Typography>

      <Stack gap={2} padding={3}>

        <Link 
          href="https://gitlab.fbr.group/Sourav1121/zenmonk-ui"
        >
          <Typography variant="paragraphLg" fontWeight="fontWeightMedium" component="h1">
            https://gitlab.fbr.group/Sourav1121/zenmonk-ui
          </Typography>
        </Link>

        <Typography variant="paragraphLg" fontWeight="fontWeightMedium" component="h1">
          1. Go to Gitlab using above link and copy global.css file and them folder to your app.
        </Typography>
        <img src={"/theme-file.png"} alt="theme-folder-image" />
        <img src={"/global.css.png"} style={{
          position: 'relative',
          right: '10px'
        }}  alt="global-css-image" />
      </Stack>

      
      <Stack gap={2} padding={3}>

        <Typography variant="paragraphLg" fontWeight="fontWeightMedium" component="h1">
          2. After importing files simply use the utility classes from global.css file or theme file.
        </Typography>

        {/* <Typography variant="h3" fontWeight="fontWeightBold" mb={1}>
          Utility classes
        </Typography>

        <Divider />

        <UtilityClasses /> */}

      </Stack>

    </Stack>

  </Grid>
  <Grid item md={4} sx={{ display: { xs: "none", md: "block" } }}></Grid>
</Grid>
};

export default Theming;
