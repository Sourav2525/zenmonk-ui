"use client"

import React from "react";

import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "@/app/docs/docs.module.css";
import { docsConfig } from "@/config/docs";

function NavItem({
  href,
  text,
  active = false,
}: {
  href: string;
  text: string;
  active?: boolean;
}) {
  return (
    <Link href={href} className={`${styles.link}`}>
      <Typography
        variant="paragraphMd"
        className={styles.navText}
        fontWeight={active ? "fontWeightMedium" : "fontWeightLight"}
      >
        {text}
      </Typography>
    </Link>
  );
}

const Sidebar = () => {
  const pathname = usePathname();
  console.log("pathname: ", pathname);
  return (
    <Box
      className="flex flex-col"
      gap={1}
      pt={2}
      sx={{ height: "100%", overflow: "auto" }}
    >
      {docsConfig?.map((doc, index) => {
        return (
          <React.Fragment key={doc.title}>
            <Typography variant="paragraphMd" fontWeight="fontWeightBold" mt={index !== 0 ? 2 : 0 }>
              {doc.title}
            </Typography>
            {doc.items.map((item) => {
              return (
                <NavItem key={item.title} href={item.href} text={item.title} active={pathname === item.href} />
              );
            })}
          </React.Fragment>
        );
      })}
    </Box>
  );
};

export default Sidebar;
