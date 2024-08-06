"use client";

import React from "react";

import { Box, Button, Divider, Typography } from "@mui/material";

import MyCoolCodeBlock from "@/components/ui/copy-code-block";
import { Tabs, TabsContent, TabsTrigger } from "@/components/ui/tabs";

const TextButton = () => (
  <>
    <Typography variant="h6" mt={4} mb={2} fontWeight="fontWeightBold">
      Primary
    </Typography>
    <Divider sx={{ my: 1 }} />
    <Tabs defaultValue="0">
      <TabsTrigger label="Preview" value="0" />
      <TabsTrigger label="Code" value="1" />
      <TabsContent value="0">
        <Box
          className="flex justify-center items-center border rounded"
          py={15} px={3}
        >
          <Button variant="text">Button</Button>
        </Box>
      </TabsContent>
      <TabsContent value="1">
        <MyCoolCodeBlock
          language="js"
          code={`import { Button } from "@mui/material";

export function ButtonDemo() {
    return <Button variant="text">Button</Button>
}`}
        />
      </TabsContent>
    </Tabs>
  </>
);


export default TextButton;
