/* eslint-disable @next/next/no-img-element */
import React from "react";

import { Grid, Stack, Typography } from "@mui/material";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import FolderStructure from "./folder-structure";

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
              {process.env.NEXT_PUBLIC_REPOSITORY_LINK}
            </Typography>
          </Link>

          <Typography variant="paragraphLg" fontWeight="fontWeightMedium" component="h1">
            1. Go to above link and copy theme folder to your app.
          </Typography>
          <FolderStructure />
        </Stack>


        <Stack gap={2} padding={3}>
          <Typography variant="paragraphLg" fontWeight="fontWeightMedium" component="h1">
            2. After importing files simply use the utility classes from global.css file or theme file.
          </Typography>
        </Stack>
      </Stack>

    </Grid>
    <Grid item md={4} sx={{ display: { xs: "none", md: "block" } }}></Grid>
  </Grid>
};

export default Theming;
