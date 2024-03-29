import { numberFormatter } from "@/components/numberFormatter";
import { MerchantContext } from "@/components/providers/MerchantProvider";
import { Card, Stack, Typography } from "@mui/material";
import { useContext } from "react";

export default function Card2() {
  const { orderDetail } = useContext(MerchantContext);
  return (
    <Card>
      <Typography className="p-6 border-b-[1px]">Төлбөрийн мэдээлэл</Typography>
      <Stack className="p-6">
        {orderDetail.orderDetails.map((item: any, index: any) => {
          return (
            <Stack key={index}>
              <Typography>Бүтээгдэхүүн</Typography>
              <Stack>
                <Typography>{item.name}</Typography>
              </Stack>
              <Stack>
                <Typography>{item.description}</Typography>
              </Stack>
              <Stack>
                <Typography> Хүргэлт</Typography>
              </Stack>
            </Stack>
          );
        })}

        <Stack
          direction="row"
          className="w-full size-4 font-semibold justify-between"
        >
          <Typography className="flex font-semibold">
            Нийт төлсөн дүн
          </Typography>
          <Typography className="flex font-semibold">
            {numberFormatter.format(orderDetail.orderTotalPrice)}₮
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
}
