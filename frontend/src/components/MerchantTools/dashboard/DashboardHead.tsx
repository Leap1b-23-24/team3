import { Stack, Typography } from "@mui/material";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

const data = [
  {
    icon: <AttachMoneyOutlinedIcon />,
    label: "Орлого",
    number: "235,000$",
    date: "Өнөөдөр",
  },
  {
    icon: <ShoppingBagOutlinedIcon />,
    label: "Захиалга",
    number: "58",
    date: "Өнөөдөр",
  },
  {
    icon: <PersonOutlineOutlinedIcon />,
    label: "Хэрэглэгч",
    number: "980",
    date: "Өнөөдөр",
  },
];

export const DashboardHead = () => {
  return (
    <>
      <Stack
        maxWidth="1170px"
        direction="row"
        justifyContent="space-between"
        marginY="32px"
      >
        {data.map((item, index) => (
          <Stack
            key={index}
            width="30%"
            bgcolor="white"
            gap="10px"
            px="24px"
            py="16px"
            borderRadius="12px"
          >
            <Stack direction="row" alignItems="center" gap="8px">
              <Typography
                display="flex"
                width="20px"
                height="20px"
                alignItems="center"
              >
                {item.icon}
              </Typography>
              <Typography
                display="flex"
                fontWeight="600"
                fontSize="16px"
                alignItems="center"
              >
                {item.label}
              </Typography>
            </Stack>

            <Typography fontWeight="700" fontSize="32px">
              {item.number}
            </Typography>
            <Typography color="#5E6166" fontWeight="100" fontSize="14px">
              {item.date}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </>
  );
};
