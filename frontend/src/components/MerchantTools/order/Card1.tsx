import { MerchantContext } from "@/components/providers/MerchantProvider";
import { Card, Stack, Typography } from "@mui/material";
import { useContext } from "react";

export default function Card1() {
  const { orderDetail } = useContext(MerchantContext);
  return (
    <Card className="w-[529px]">
      <Typography className="p-6 border-b-[1px]">
        Хүргэлтийн мэдээлэл
      </Typography>
      <Stack className="p-6">
        <Typography>Гэр</Typography>
        <Typography fontSize="16px" fontWeight="600">
          {orderDetail.deliveryAddress}
        </Typography>
      </Stack>
    </Card>
  );
}
