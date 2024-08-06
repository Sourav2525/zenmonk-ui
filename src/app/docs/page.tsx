import React from "react";

import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Divider, Grid, Stack, Typography } from "@mui/material";

import Sidebar from "@/components/layouts/sidebar";

import styles from "./docs.module.css";

interface Accordian {
  summary: string,
  details: string
}

const componentsLibraryDescription = [
  'Think of a component library as a collection of pre-designed, ready-to-use elements that you can simply plug into your project.',
  'It is like having a set of building blocks for your software development.',
  'These components could be anything from buttons, input fields, and dropdown menus to more complex elements like modals, sliders, and navigation bars.'
]

const accordianDetails : Accordian[] = [
  {
    summary: 'Why copy/paste and re use components?',
    details: 'The idea behind this is to give you ownership and control over the code, allowing you to decide how the components are built and styled. Start with some sensible defaults, then customize the components to your needs.'
  },
  {
    summary: 'Which frameworks are supported?',
    details: 'You can use any framework that supports React. Next.js, Astro, Remix, Gatsby etc.'
  },
]

function Introduction() {
  return (
    <Grid container px={3}>
      <Grid item md={8} xs={12}>
        <Typography variant="h1" fontWeight="fontWeightBold" mb={1}>
          Introduction
        </Typography>
        <Typography
          variant="h6"
          fontWeight="fontWeightLight"
          maxWidth="54ch"
          color="success"
          mb={2}
        >
          Beautifully designed components that you can copy and paste into your
          apps. Accessible. Customizable. Open Source.
        </Typography>

        <Typography variant="paragraphLg" fontWeight="fontWeightLight" maxWidth="90ch" mb={4} component="p">
          This is a
          <Typography variant="paragraphLg" fontWeight="fontWeightBold">
            {' '}component{' '}
          </Typography>
          library which is a collection of re-usable components that you can copy and paste into your apps.
        </Typography>


        <Typography variant="paragraphLg" fontWeight="fontWeightBold" component="h1">
          What do you mean by not a component library?
        </Typography>

        <Stack gap={3} my={3}>

            {
              componentsLibraryDescription?.map((description : string) => 
              <Typography variant="paragraphLg" fontWeight="fontWeightLight" color="secondary.main" key={description}>
                {description}
              </Typography>
              )
            }

              <Typography variant="paragraphLg" fontWeight="fontWeightLight" color="secondary.dark" fontStyle="italic">
                Use this as a reference to build your own component libraries.
              </Typography>

        </Stack>

        <Typography variant="h3" fontWeight="fontWeightBold" color="secondary.dark" mb={1}>
                FAQ
        </Typography>

        <Stack>
          {
            accordianDetails?.map((accordion, index) => 
              <Accordion key={accordion.summary} sx={{ boxShadow: 'none' }} disableGutters className="border-top">
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                {accordion.summary}
              </AccordionSummary>
              <AccordionDetails>  
                {accordion.details}
              </AccordionDetails>
            </Accordion>
            )
          }
        </Stack>

        <Divider />

      </Grid>
      <Grid item md={4} sx={{ display: { xs: "none", md: "block" } }}></Grid>
    </Grid>
  );
}

export default Introduction;
