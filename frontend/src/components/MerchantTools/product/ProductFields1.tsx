import { Box, Modal, Stack, TextField, Typography } from "@mui/material";
import { CustomInput } from "../../CustomInput";
import { Auth } from "../../providers/AuthProvider";
import PhotoSizeSelectActualOutlinedIcon from "@mui/icons-material/PhotoSizeSelectActualOutlined";
import AddIcon from "@mui/icons-material/Add";
import { ChangeEventHandler, useContext } from "react";
import ProductImages from "./ImageUploadModal";
import { MerchantContext } from "@/components/providers/MerchantProvider";
type Product1Props = {
  productName: string;
  description: string;
  price: number;
  thumbnail: string;
  qty: number;
  error: any;
  helperText: any;
  onBlur: any;
  // images: {
  //   imageLink: string;
  // }[];

  handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
};
export default function ProductFields1(props: Product1Props) {
  const {
    productName,
    description,
    price,
    // thumbnail,
    qty,
    // images,
    handleChange,
    error,
    helperText,
    onBlur,
  } = props;

  const { productModal, setProductModal } = Auth();
  const { handleImageChange, imageUrl } = useContext(MerchantContext);

  return (
    <Stack className="max-w-[563px] gap-6 ">
      <Stack className="bg-white p-[24px] rounded-[12px] gap-[16px]">
        <Stack mb="10px">
          <Typography>Бүтээгдэхүүний нэр</Typography>
          <CustomInput
            name="productName"
            placeholder="Нэр"
            defaultValue={productName}
            error={error.productName}
            helperText={helperText.productName}
            onBlur={onBlur}
            onChange={(event) => {
              handleChange(event);
            }}
            className="bg-[#F7F7F8] text-lg"
          />
        </Stack>
        <Stack>
          <Typography>Нэмэлт мэдээлэл</Typography>
          <CustomInput
            name="description"
            placeholder="Гол онцлог, давуу тал, техникийн үзүүлэлтүүдийг онцолсон дэлгэрэнгүй, сонирхолтой тайлбар."
            defaultValue={description}
            error={error.description}
            helperText={helperText.description}
            onBlur={onBlur}
            onChange={(event) => {
              handleChange(event);
            }}
            className="bg-[#F7F7F8] text-lg"
          />
        </Stack>
      </Stack>
      <Stack className="bg-white p-[24px] rounded-[12px] gap-[16px]">
        <Typography>Бүтээгдэхүүний зураг</Typography>
        <Stack direction="row" className="justify-between">
          <Stack className="w-[125px] h-[125px] border-dashed border-[2px]  justify-center items-center rounded-[16px] relative">
            {imageUrl && (
              <img
                className="absolute w-full h-full rounded-[16px]"
                src={imageUrl}
                onClick={() => {
                  handleImageChange;
                }}
              />
            )}
            <PhotoSizeSelectActualOutlinedIcon />
          </Stack>
          <Stack className="w-[125px] h-[125px] border-dashed border-[2px]  justify-center items-center rounded-[16px]">
            <PhotoSizeSelectActualOutlinedIcon />
          </Stack>
          <Stack className="w-[125px] h-[125px] border-dashed border-[2px]  justify-center items-center rounded-[16px]">
            <PhotoSizeSelectActualOutlinedIcon />
          </Stack>
          <Stack
            className="w-[125px] h-[125px] justify-center items-center relative"
            onClick={() => {
              setProductModal(true);
            }}
          >
            <Modal open={productModal}>
              <Box
                sx={{
                  position: "absolute" as "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  bgcolor: "background.paper",
                  boxShadow: 24,
                  borderRadius: "20px",
                }}
              >
                {productModal && <ProductImages />}
              </Box>
            </Modal>
            <AddIcon className="bg-[#ECEDF0] rounded-[100%] w-[32px] h-[32px]" />
          </Stack>
        </Stack>
      </Stack>
      <Stack
        direction="row"
        gap="16px"
        className="bg-white rounded-[13px] p-[24px] justify-between"
      >
        <Stack>
          <Typography>Үндсэн үнэ</Typography>
          <CustomInput
            type="number"
            name="price"
            placeholder="Үндсэн үнэ"
            value={price}
            error={error.price}
            helperText={helperText.price}
            onBlur={onBlur}
            onChange={(event) => {
              handleChange(event);
            }}
            className="bg-[#F7F7F8] w-[250px] text-lg"
          />
        </Stack>
        <Stack>
          <Typography>Үлдэгдэл тоо ширхэг</Typography>
          <CustomInput
            type="number"
            name="qty"
            placeholder="Үлдэгдэл тоо ширхэг"
            value={qty}
            error={error.qty}
            helperText={helperText.qty}
            onBlur={onBlur}
            onChange={(event) => {
              handleChange(event);
            }}
            className="bg-[#F7F7F8] w-[250px] text-lg"
          />
        </Stack>
      </Stack>
    </Stack>
  );
}
