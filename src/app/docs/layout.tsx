import React from "react";

import { Box, Container, Grid, Stack } from "@mui/material";

import styles from "@/app/docs/docs.module.css";
import Sidebar from "@/components/layouts/sidebar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box className="border-top">
      <Grid container spacing={2} mt={0}>
        <Grid item lg={1.5} xs={0} sx={{ background: "var(--secondary-light)" }}></Grid>
        <Grid
          item
          md={1.5}
          sx={{ display: { xs: "none", md: "block", background: "var(--secondary-light)" } }}
          className={`${styles.sidebarBox}`}
        >
          <Sidebar />
        </Grid>
        <Grid item md={9} xs={12} sx={{ height: "calc(100vh - 64px)", overflow: "auto", mt: { md: 3}, pb:4 }}>
          {children}
        </Grid>
      </Grid>
    </Box>
  );
};

export default layout;
