import React from "react";

import { Grid, Typography } from "@mui/material";
import { Metadata } from "next";

import PlainTable from "@/app/docs/typography/PlainTable";

import H1 from "./H1";
import H2 from "./H2";
import H3 from "./H3";
import H4 from "./H4";
import H5 from "./H5";
import H6 from "./H6";
import ParagraphButton from "./ParagraphButton";
import ParagraphLg from "./ParagraphLg";
import ParagraphMd from "./ParagraphMd";
import ParagraphSm from "./ParagraphSm";
import ParagraphTable from "./ParagraphTable";
import ParagraphXs from "./ParagraphXs";
import TitleLg from "./TitleLg";
import TitleMd from "./TitleMd";
import TitleSm from "./TitleSm";

export const metadata: Metadata = {
  title: "Typography - ZENMONK UI",
};

const TypographyPage = () => {

  const columns = [
    { header: "Varient", key: "varient", size: 100 },
    { header: "Property", key: "property", size: 350 },
  ]

  const data = [
    {
      varient: "h1",
      property: "Font size: 32px, Line height: 40px, Letter spacing: -2%"
    },
    {
      varient: "h2",
      property: "Font size: 28px, Line height: 36px, Letter spacing: -2%"
    },
    {
      varient: "h3",
      property: "Font size: 25px, Line height: 36px, Letter spacing: -2%"
    },
    {
      varient: "h4",
      property: "Font size: 22px, Line height: 32px, Letter spacing: 0%"
    },
    {
      varient: "h5",
      property: "Font size: 20px, Line height: 28px, Letter spacing: 0%"
    },
    {
      varient: "h6",
      property: "Font size: 18px, Line height: 24px, Letter spacing: 0%"
    },
    {
      varient: "paragraphButton",
      property: "Font size: 14px, Weight: Semibold, Line height: 26px, Letter spacing: 0.5%"
    },
    {
      varient: "paragraphLg",
      property: "Font size: 16px, Line height: 24px, Letter spacing: 0%"
    },
    {
      varient: "paragraphMd",
      property: "Font size: 14px, Line height: 20px, Letter spacing: 0%"
    },
    {
      varient: "paragraphSm",
      property: "Font size: 12px, Line height: 20px, Letter spacing: 0%"
    },
    {
      varient: "paragraphTable",
      property: "Font size: 13px, Line height: 18px, Letter spacing: 0%"
    },
    {
      varient: "paragraphXs",
      property: "Font size: 11px, Line height: 16px, Letter spacing: 0%"
    },
    {
      varient: "titleLg",
      property: "Font size: 22px, Line height: 32px, Letter spacing: 0%"
    },
    {
      varient: "titleMd",
      property: "Font size: 20px, Line height: 28px, Letter spacing: 0%"
    },
    {
      varient: "titleSm",
      property: "Font size: 18px, Line height: 24px, Letter spacing: 0%"
    },
  ];

  return (
    <>
      <Grid container px={3}>
        <Grid item md={9}>
          <Typography
            variant="h1"
            color="secondary"
            fontWeight="fontWeightBold"
            mb={3}
          >
            Typography
          </Typography>
          <Typography variant="h6" fontWeight="fontWeightLight" mb={2}>
            Typography is an important part of a design system that brings
            consistency across experiences and platforms. Good typography rules
            help present content clearly and efficiently.
          </Typography>
          <Typography variant="h6" fontWeight="fontWeightLight" mb={4}>
            <Typography component="span" fontWeight="fontWeightBold">
              Open Sans
            </Typography>{" "}
            is our corporate typeface. It has been carefully selected to meet
            our needs as a educational organization and reflect our brand spirit
            and design principles.
          </Typography>
          <Typography variant="h1" fontWeight="fontWeightLight" mb={4}>
            Type scale
          </Typography>
          <Typography variant="h6" fontWeight="fontWeightLight" mb={4}>
            Our type scale includes a range of contrasting styles that support the needs of a product and its content.
          </Typography>
          <PlainTable columns={columns} data={data} sx={{ maxWidth: 700, mb: 4 }} />
          <H1 />
          <H2 />
          <H3 />
          <H4 />
          <H5 />
          <H6 />
          <ParagraphButton />
          <ParagraphLg />
          <ParagraphMd />
          <ParagraphSm />
          <ParagraphTable />
          <ParagraphXs />
          <TitleLg />
          <TitleMd />
          <TitleSm />
        </Grid>
        <Grid item md={3} sx={{ display: { xs: "none", md: "block" } }} />
      </Grid>
    </>
  );
};

export default TypographyPage;
