"use client";

import React from "react";

import { Box, Typography, Divider } from "@mui/material";

import MyCoolCodeBlock from "@/components/ui/copy-code-block";
import { Tabs, TabsContent, TabsTrigger } from "@/components/ui/tabs";

const ParagraphSm = () => (
    <>
      <Typography variant="h4" mt={2} fontWeight="fontWeightMedium">
        paragraphSm
      </Typography>
      <Divider sx={{ my: 1 }} />
      <Tabs
        defaultValue="0"
      >
        <TabsTrigger label="Preview"  value="0"  />
        <TabsTrigger label="Code" value="1"/>
      <TabsContent value="0">
        <Box className="flex justify-center items-center border rounded" py={15} px={3}>
          <Typography variant="paragraphSm">The People of the Kingdom</Typography>
        </Box>
      </TabsContent>
      <TabsContent value="1">
        <MyCoolCodeBlock
          language="js"
          code={
`import { Typography } from "@mui/material";

export function TypographyParagraphSm() {
  return (
    <Typography variant="paragraphSm">
      The People of the Kingdom
    </Typography>
  )
}`
          }
        />
      </TabsContent>
      </Tabs>
    </>
  );


export default ParagraphSm;
