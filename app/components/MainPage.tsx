"use client";

import { Box } from "@primer/react";
import Image from "next/image";
import image from "../../public/shigoto_zaitaku_cat_woman.png";
import Pinned from "./Pinned";

export default function MainPage() {
  return (
    <Box
      sx={{
        display: "flex",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "border.default",
        p: 3,
        m: 3,
        height: "20rem",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: "border.default",
        }}
      >
        <Image
          src={image}
          alt="profile-image"
          style={{ width: "100%", height: "auto" }}
        ></Image>
      </Box>
      <Pinned />
    </Box>
  );
}
