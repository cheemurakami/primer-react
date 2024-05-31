import {
  DotFillIcon,
  GrabberIcon,
  RepoForkedIcon,
  RepoIcon,
  StarIcon,
} from "@primer/octicons-react";
import { Box, Octicon, Label } from "@primer/react";
import { Text } from "@primer/react";
import data from "../data/data.json";

export default function Pinned() {
  return (
    <Box
      sx={{
        display: "flex",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "border.default",
        justifyContent: "space-between",
      }}
    >
      {data.map((item: any) => {
        return (
          <Box
            key={item}
            className="rounded-1"
            sx={{
              display: "flex",
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: "border.default",
              m: 3,
              p: 3,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box sx={{ display: "flex" }}>
                  <Octicon
                    icon={RepoIcon}
                    size={24}
                    color="border.default"
                    sx={{ mr: 2 }}
                  />
                  <Box sx={{ mr: 2 }}>
                    <Text as="p" sx={{ color: "accent.fg", fontWeight: 400 }}>
                      {item.repoName}
                    </Text>
                  </Box>
                  <Label variant={"secondary"}>
                    {item.public ? "Public" : "Private"}
                  </Label>
                </Box>
              </Box>
              <Text sx={{ color: "neutral.fg" }}>{item.description}</Text>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Octicon
                  icon={DotFillIcon}
                  size={24}
                  sx={{ mr: 1, color: "#701516" }}
                />
                <Text sx={{ mr: 2 }}>{item.language}</Text>
                <Octicon icon={StarIcon} size={16} sx={{ mr: 1 }} />
                <Text sx={{ mr: 2 }}>1</Text>
                <Octicon icon={RepoForkedIcon} size={16} sx={{ mr: 1 }} />
                <Text sx={{ mr: 2 }}>1</Text>
              </Box>
            </Box>
            <GrabberIcon size={24} />
          </Box>
        );
      })}
    </Box>
  );
}
