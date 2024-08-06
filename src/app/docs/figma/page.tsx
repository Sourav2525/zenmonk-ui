import React from "react";

import { Box, Divider, Grid, Typography } from "@mui/material";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Figma - ZENMONK UI",
};


const Figma = () => {
  return (
    <Grid container px={3} pb={4}>
      <Grid item md={9}>
        <Typography variant="h1" fontWeight="fontWeightBold" color='secondary' mb={3}>
          Figma
        </Typography>
        <Typography variant="h6" fontWeight="fontWeightLight" mb={2}>
          Every component recreated in Figma. With customizable props, typography and icons.
        </Typography>
        <Typography variant="h6" fontWeight="fontWeightMedium" mb={2}>
          The Figma UI Kit is open sourced by{' '}
          <Link href='/' color='secondary.dark'>
            Pietro Schirano.
          </Link>
        </Typography>

        <Typography variant="h4" fontWeight="fontWeightBold" color='secondary' mb={3}>
          Grab a copy
        </Typography>

        <Box
          className="border rounded"
          sx={{ aspectRatio: "16/9", position: 'relative', width: "100%" }}
        >
          <Image
            src={'/Figma-cover.png'}
            alt='logo'
            layout='fill'
            objectFit='contain'
          />
        </Box>


        <Divider sx={{ marginY: 2 }} />

        <Link href='/' color='secondary.dark' className="word-break-all ">
          <Typography variant="h6" fontWeight="fontWeightMedium">
            https://www.figma.com/community/file/1203061493325953101
          </Typography>
        </Link>
      </Grid>
      <Grid item md={3} sx={{ display: { xs: "none", md: "block" } }} />
    </Grid>
    );
};

 export default Figma;
