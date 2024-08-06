import React from "react";

import { Button, Divider, Grid, Typography } from "@mui/material";
import { Metadata } from "next";

import ContainedButton from "./contained-button";
import OutlinedButton from "./outlined-button";
import TextButton from "./text-button";

export const metadata: Metadata = {
  title: "Button Component - ZENMONK UI",
};

const ButtonPage = () => {
  return (
    <>
      <Grid container px={3}>
        <Grid
          item
          md={9}
        >
          <Typography
            variant="h1"
            color="secondary"
            fontWeight="fontWeightBold"
            mb={3}
          >
            Button
          </Typography>
          <Typography variant="h6" fontWeight="fontWeightLight" mb={2}>
            Buttons allow users to take actions, and make choices, with a single
            tap. The Button comes with three variants: text (default),
            contained, and outlined.
          </Typography>
          <Typography variant="h6" fontWeight="fontWeightLight" mb={4}>
            Displays a button or a component that looks like a button.
          </Typography>

          <Typography variant="h4" fontWeight="fontWeightMedium" mb={1}>
            Examples
          </Typography>
          <Divider sx={{ my: 1 }} />

          <ContainedButton />

          <OutlinedButton />

          <TextButton />
        </Grid>
        <Grid item md={3} sx={{ display: { xs: "none", md: "block" } }}></Grid>
      </Grid>
    </>
  );
};

export default ButtonPage;
