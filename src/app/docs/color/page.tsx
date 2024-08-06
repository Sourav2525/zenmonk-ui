import React from "react";

import { Grid, Typography } from "@mui/material";
import type { Metadata } from "next";

import { FormatPallete } from "./FormatPallate";

export const metadata: Metadata = {
  title: "Color - ZENMONK UI",
};

const Color = () => (
  <>
    <Grid container px={3}>
      <Grid item md={9}>
        <Typography
          variant="h1"
          color="secondary"
          fontWeight="fontWeightBold"
          mb={3}
        >
          Color
        </Typography>
        <Typography variant="h6" fontWeight="fontWeightLight" mb={2}>
          The Material Design color system helps you apply color to your UI in a meaningful way.
        </Typography>
        <Typography variant="h6" fontWeight="fontWeightLight" mb={4}>
          Our color palette is composed of light-blue and gray, both belonging to the chromatic circle of cold tones. This allows us to generate a perfect harmony between them.
        </Typography>
        <FormatPallete />
      </Grid>
      <Grid item md={3} sx={{ display: { xs: "none", md: "block" } }} />
    </Grid>
  </>
);

export default Color;
