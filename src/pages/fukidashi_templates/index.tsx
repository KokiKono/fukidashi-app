import { AspectRatio, Button, Card, Typography } from "@mui/joy";
import { Box } from "@mui/system";
import Image from "next/image";

const data = [
  { id: 1, title: "悩みを相談する", image_path: "/fukidashi/1.jpg" },
  { id: 2, title: "説明を聞く", image_path: "/fukidashi/2.jpg" },
  { id: 3, title: "上司としゃべる", image_path: "/fukidashi/3.jpg" },
] as const;

export default function FukidashiTemplates() {
  return (
    <>
      {data.map((item) => (
        <Card sx={{width: 300, mb: 2}}>
          <Typography>{item.title}</Typography>
          <AspectRatio
            variant="outlined"
            objectFit="cover"
            minHeight="120px"
            maxHeight="200px"
            sx={{ my: 2 }}
          >
            <Image alt="fukidashi" src={item.image_path} fill />
          </AspectRatio>
          <Box sx={{display: 'flex'}}>
            <Button>吹き出しを入れる</Button>
          </Box>
        </Card>
      ))}
    </>
  );
}
