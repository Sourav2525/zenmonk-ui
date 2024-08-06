import React, { ReactNode } from 'react';

import { Grid, SxProps, Theme, Typography } from '@mui/material';

interface ColorType {
  label: string;
  value: string;
}

interface ColorPaletteProps {
  colors: { label: string; value: string }[];
  labelWrapper?: (color: ColorType) => ReactNode;
  sx?: SxProps<Theme>;
  className?: string;
}

const ColorPalette = (props: ColorPaletteProps) => {
  const { colors, labelWrapper, sx, className } = props;
  return (
    <Grid className={className} sx={sx} container>
      {colors.map((color, index) => (
        <>
          <Grid
            key={index}
            sx={{
              aspectRatio: "3/2",
              bgcolor: color.value,
            }}
            className='flex justify-start items-end position-relative m-1'
            item
            xs={4}
            sm={2.4}
          >
            <Typography variant='paragraphMd' className="rounded text-prewrap" sx={{ backgroundColor: "#00000020", p: 1, color: "white" }}>
              {labelWrapper ? labelWrapper(color) : color.label}
            </Typography>
            <Typography variant='paragraphMd' className="rounded text-prewrap position-absolute" sx={{ backgroundColor: "#00000020", p: 1, color: "white", top: 0, right: 0 }}>
            {color.value}
          </Typography>
          </Grid>
        </>

      ))}
    </Grid>
  );
};

export default ColorPalette;