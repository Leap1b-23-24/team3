"use client";
import {
  CheckCircleOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import {
  Button,
  Checkbox,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { ChangeEventHandler, Dispatch, SetStateAction, useState } from "react";
import cities from "../Authentication/Authentication_merchant/cities.json";
type FormikType = {
  phone: string;
  firstName: string;
  address: string;
  additional: string;
  city: string;
  handleChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  setIsBtn: Dispatch<SetStateAction<boolean>>;
};
export const OrderAddress = (props: FormikType) => {
  const {
    phone,
    firstName,
    address,
    additional,
    handleChange,
    setIsBtn,
    city,
  } = props;

  const [isContinue, setIsContinue] = useState(false);

  return (
    <Stack className="bg-[#F8F8FD] rounded-sm pt-[69px] pr-10 pb-16 pl-11">
      <Typography color="#1D3178" fontSize={18} fontWeight={800}>
        Холбоо барих мэдээлэл
      </Typography>
      <Stack>
        <TextField
          type="text"
          name="phone"
          value={phone}
          onChange={handleChange}
          placeholder="И-мэйл эсвэл утасны дугаар"
          sx={{
            "& fieldset": { border: "none" },
          }}
          inputProps={{
            style: {
              borderBottom: "2px solid #BFC6E0",
            },
          }}
        />
      </Stack>
      <Stack mt={4} flexDirection="row" alignItems="center">
        <Checkbox defaultChecked color="success" size="small" />
        <Typography color="#8A91AB" fontSize={12} fontWeight={500}>
          Мэдээ, онцгой саналуудын талаар надад байнга мэдээлж байгаарай
        </Typography>
      </Stack>
      <Stack mt="80px">
        <Typography color="#1D3178" fontSize={18} fontWeight={800}>
          Хүргэлтийн хаяг
        </Typography>

        <TextField
          fullWidth
          type="text"
          name="firstName"
          value={firstName}
          onChange={handleChange}
          placeholder="Нэр"
          sx={{
            "& fieldset": { border: "none" },
            borderBottom: "2px solid #BFC6E0",
          }}
        />
        <Stack flexDirection="row" gap="30px" mt={3}>
          <TextField
            select
            fullWidth
            type="text"
            name="city"
            value={city}
            onChange={handleChange}
            defaultValue="Сонгох"
            placeholder="Хот/аймаг"
            sx={{
              "& fieldset": { border: "none" },
              marginTop: "24px",
              borderBottom: "2px solid #BFC6E0",
            }}
          >
            <MenuItem value="Сонгох" disabled>
              Сонгох
            </MenuItem>
            {cities.map((city, index) => {
              return (
                <MenuItem
                  key={index}
                  className="cursor-pointer hover:bg-gray-100"
                  value={city.name}
                >
                  {city.name}
                </MenuItem>
              );
            })}
          </TextField>
          <TextField
            fullWidth
            type="text"
            name="address"
            value={address}
            onChange={handleChange}
            placeholder="Хаяг"
            sx={{
              "& fieldset": { border: "none" },
              marginTop: "24px",
            }}
            inputProps={{
              style: {
                borderBottom: "2px solid #BFC6E0",
              },
            }}
          />
        </Stack>

        <TextField
          fullWidth
          type="text"
          name="additional"
          value={additional}
          onChange={handleChange}
          placeholder="Орц код, нэмэлт мэдээлэл"
          sx={{
            "& fieldset": { border: "none" },
            marginTop: "24px",
            borderBottom: "2px solid #BFC6E0",
          }}
        />
        <Stack
          width={1}
          direction="row"
          alignItems="center"
          mt={3}
          justifyContent="end"
          gap={2}
        >
          {isContinue ? (
            <CheckCircleOutlined
              style={{ fontSize: "40px", color: "#19D16F" }}
            />
          ) : (
            <ExclamationCircleOutlined
              style={{ fontSize: "40px", color: "#FB2E86" }}
            />
          )}
          <Button
            onClick={() => {
              if (firstName && address && phone && additional && city) {
                setIsContinue(true);
                setIsBtn(true);
              }
            }}
            variant="contained"
            disabled={isContinue}
            sx={{
              width: "fit-content",
              bgcolor: isContinue
                ? "#19D16F !important"
                : ({ palette }) => palette.success.main + "!important",
            }}
          >
            {isContinue ? (
              <Typography>Амжилттай</Typography>
            ) : (
              <Typography>Үргэлжлүүлэх</Typography>
            )}
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};
