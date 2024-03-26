import {
  Container,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
const category = [
  "Хувцас",
  "Камер, хэрэгсэл",
  "Ухаалаг утас, таблет",
  "Чихэвч",
  "Гэр ахуйн бараа",
];
const other = ["Бидний тухай", "Холбоо барих", "Түгээмэл асуулт хариулт"];
const social = ["/facebook.svg", "/instagram.svg", "/twitter.svg"];

export const Footer = () => {
  return (
    <>
      <Stack bgcolor="#EEEFFB">
        <Stack className="max-w-[1240px]  py-[50px]  w-full m-auto color-[#FFFFFF]">
          <Stack
            py="94px"
            direction="row"
            justifyContent="space-between"
            alignItems="start"
          >
            <Stack gap="25px">
              <Typography color="black" fontSize={38} fontWeight={800}>
                eCommerce
              </Typography>
              <Stack direction="row">
                <TextField
                  placeholder="Имэйл хаяг"
                  inputProps={{
                    style: {
                      padding: "14px 20px",
                      paddingRight: "140px",
                    },
                  }}
                  InputProps={{
                    style: {
                      backgroundColor: "#FFF",
                      position: "relative",
                    },
                    endAdornment: (
                      <InputAdornment position="end">
                        <Stack
                          position="absolute"
                          right={0}
                          bgcolor="#FB2E86"
                          borderRadius="4px"
                          p={1.5}
                        >
                          <Typography color="#EEEFFB">Бүртгүүлэх</Typography>
                        </Stack>
                      </InputAdornment>
                    ),
                  }}
                />
              </Stack>
              <Stack gap={1.25} color="#8A8FB9" fontSize={16} fontWeight={400}>
                <Typography>Хаяг</Typography>
                <Typography maxWidth="484px">
                  Олимпын гудамж, 1-р хороо, Сүхбаатар дүүрэг, Улаанбаатар хот,
                  Гурван гол - 401 тоот
                </Typography>
              </Stack>
            </Stack>
            <Stack flexDirection="row" width={0.5}>
              <Stack width={0.5} gap="37px">
                <Typography color="common.black" fontSize={22} fontWeight={800}>
                  Ангилал
                </Typography>
                <Stack gap="21px">
                  {category.map((item, index) => (
                    <Typography
                      key={index}
                      color="#8A8FB9"
                      fontSize={16}
                      fontWeight={400}
                      sx={{ cursor: "pointer" }}
                    >
                      {item}
                    </Typography>
                  ))}
                </Stack>
              </Stack>
              <Stack width={0.5} gap="37px">
                <Typography color="common.black" fontSize={22} fontWeight={800}>
                  Бусад
                </Typography>
                <Stack gap="21px">
                  {other.map((item, index) => (
                    <Typography
                      key={index}
                      color="#8A8FB9"
                      fontSize={16}
                      fontWeight={400}
                      sx={{ cursor: "pointer" }}
                    >
                      {item}
                    </Typography>
                  ))}
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack py="17px" width={1} bgcolor="#E7E4FB">
        <Container maxWidth="lg">
          <Stack
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            pr={30}
            pl={5}
          >
            <Typography className="text-[#9DA0AE]">©ecommerce </Typography>
            <Stack flexDirection="row" gap="10.87px">
              {social.map((item, index) => (
                <Stack
                  key={index}
                  width="19.42px"
                  height="19.42px"
                  borderRadius="50%"
                  bgcolor="#151875"
                  alignItems="center"
                  justifyContent="center"
                  sx={{ cursor: "pointer" }}
                >
                  <Image src={item} alt="social image" height={12} width={12} />
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Container>
      </Stack>
    </>
  );
};
