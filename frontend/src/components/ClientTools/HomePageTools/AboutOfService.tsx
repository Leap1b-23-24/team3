import { Card, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
const services = [
  {
    title: "Үнэгүй хүргэлт",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    img: "/car.svg",
  },
  {
    title: "Буцаан олголт",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    img: "/cashback.svg",
  },
  {
    title: "Найдвартай",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    img: "/medal.svg",
  },
  {
    title: "24/7 тусламж",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    img: "/247.svg",
  },
];
export const AboutOfService = () => {
  return (
    <Stack maxWidth="1240px" m="auto" mt="120px">
      <Stack alignItems="center" pt="56" pb="64px">
        <Typography color="#151875" fontSize={42} fontWeight={800} mb="65px">
          Үйлчилгээний тухай
        </Typography>
        <Stack>
          <Grid container spacing="29.8px">
            {services.map((item, index) => (
              <Grid item xs={3} key={index}>
                <Card className="mt-14 pb-11 items-center px-7 gap-7 shadow-slate-200 shadow-lg">
                  <Stack
                    position="relative"
                    height="65px"
                    width="69px"
                    m="auto"
                    mb="27px"
                  >
                    <Image alt="service" src={item.img} fill />
                  </Stack>
                  <Stack textAlign="center" gap="15px">
                    <Typography color="#151875" fontWeight={800} fontSize={22}>
                      {item.title}
                    </Typography>
                    <Typography
                      color="#1A0B5B4D"
                      fontSize={16}
                      fontWeight={700}
                    >
                      {item.text}
                    </Typography>
                  </Stack>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Stack>
    </Stack>
  );
};
