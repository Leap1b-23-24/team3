import {
  NotificationsNoneOutlined,
  PersonOutlineOutlined,
} from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
export default function AdminHeader() {
  return (
    <Stack direction="row" className="bg-black py-3 w-full h-12">
      <Stack
        direction="row"
        className="justify-between px-5 w-full max-w-[1440px] m-auto"
      >
        <img
          src="/Logo.svg"
          width="30px"
          height="30px"
          className="cursor-pointer"
        />

        <Stack direction="row" spacing={2} alignItems="center">
          <NotificationsNoneOutlined className="text-white" />
          <Stack direction="row" spacing={1} alignItems="center">
            <PersonOutlineOutlined className="text-white" />
            <Typography className="text-white text-sm">Username</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
