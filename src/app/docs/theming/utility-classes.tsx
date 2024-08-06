"use client"

import React from 'react'

import MyCoolCodeBlock from '@/components/ui/copy-code-block'


const UtilityClasses = () => {
  return (
    <MyCoolCodeBlock
    language="js"
    code={
        `import { Typography } from "@mui/material";

        export function TypographyH1() {
          return (
            <Typography variant="h1">
              The People of the Kingdom
            </Typography>
          )
        }`
    }
  />
  )
}

export default UtilityClasses