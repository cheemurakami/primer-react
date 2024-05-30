import { Box } from "@primer/react";

export default function Pinned() {
  return (
    <Box
      sx={{
        display: "flex",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "border.default",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: "border.default",
          m: 3,
        }}
      >
        💩
      </Box>
      <Box
        sx={{
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: "border.default",
          m: 3,
        }}
      >
        💩
      </Box>
    </Box>
  );
}
