"use client";
import React, { Fragment } from "react";

import { Typography } from "@mui/material";

import ColorPalette from "@/app/docs/color/ColorPallete";
import { CopyButton } from "@/components/ui/CopyButton";
import { colors } from "@/theme/Theme";
const themePallete = {
    primary: {
        light: colors.primary[50],
        main: colors.primary[900],
        dark: colors.primary[900],
        50: colors.primary[50],
        100: colors.primary[100],
        200: colors.primary[200],
        300: colors.primary[300],
        400: colors.primary[400],
        500: colors.primary[500],
        600: colors.primary[600],
        700: colors.primary[700],
        800: colors.primary[800],
        900: colors.primary[900],
      },
      "secondary/neutral": {
        light: colors.neutral[50],
        main: colors.neutral[800],
        dark: colors.neutral[900],
        50: colors.neutral[50],
        100: colors.neutral[100],
        200: colors.neutral[200],
        300: colors.neutral[300],
        400: colors.neutral[400],
        500: colors.neutral[500],
        600: colors.neutral[600],
        700: colors.neutral[700],
        800: colors.neutral[800],
        900: colors.neutral[900],
      },
      "error/critical": {
        light: colors.critical[50],
        main: colors.critical[600],
        dark: colors.critical[900],
        50: colors.critical[50],
        100: colors.critical[100],
        200: colors.critical[200],
        300: colors.critical[300],
        400: colors.critical[400],
        500: colors.critical[500],
        600: colors.critical[600],
        700: colors.critical[700],
        800: colors.critical[800],
        900: colors.critical[900],
      },
      success: {
        light: colors.success[50],
        main: colors.success[600],
        dark: colors.success[900],
        50: colors.success[50],
        100: colors.success[100],
        200: colors.success[200],
        300: colors.success[300],
        400: colors.success[400],
        500: colors.success[500],
        600: colors.success[600],
        700: colors.success[700],
        800: colors.success[800],
        900: colors.success[900],
      },
      info: {
        light: colors.info[50],
        main: colors.info[500],
        dark: colors.info[900],
        50: colors.info[50],
        100: colors.info[100],
        200: colors.info[200],
        300: colors.info[300],
        400: colors.info[400],
        500: colors.info[500],
        600: colors.info[600],
        700: colors.info[700],
        800: colors.info[800],
        900: colors.info[900],
      },
      "warning/high": {
        light: colors.high[50],
        main: colors.high[600],
        dark: colors.high[900],
        50: colors.high[50],
        100: colors.high[100],
        200: colors.high[200],
        300: colors.high[300],
        400: colors.high[400],
        500: colors.high[500],
        600: colors.high[600],
        700: colors.high[700],
        800: colors.high[800],
        900: colors.high[900],
      },
}
const formatedThemeColorPallete = (colors: any) => Object.keys(colors)?.map((ColorPallete: any) => {
    return (
        {
            label: ColorPallete,
            value: Object.keys(colors[ColorPallete])?.map((colorsKey: any) => (
                {
                    label: `${ColorPallete.split("/")[0]}.${colorsKey}`,
                    value: colors[ColorPallete][colorsKey]
                })
            )
        }
    )
});

const labelWrapper = (color: { value: string, label: string }) => {
    return (
        <CopyButton className="text-prewrap" value={color.label} hideIcon>
            {color.label}
        </CopyButton>
    );
}

export const FormatPallete = () => (
    <>
        {formatedThemeColorPallete(themePallete).map((colorPallete, index) => (
            <Fragment key={index}>
                <Typography variant="h3" fontWeight="fontWeightLight" mb={4} textTransform="capitalize">
                    {colorPallete.label}
                </Typography>
                <ColorPalette
                    colors={colorPallete.value}
                    labelWrapper={labelWrapper}
                    sx={{ mb: 4 }}
                />
            </Fragment>
        ))}
    </>
)
