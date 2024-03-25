"use client";
import { Button, Stack, TextField } from "@mui/material";
import { Auth } from "../../providers/AuthProvider";
import { useContext } from "react";
import { MerchantContext } from "@/components/providers/MerchantProvider";
export default function ProductImages() {
  const { setProductModal } = Auth();
  const { handleImageChange, handleImageInput } = useContext(MerchantContext);
  return (
    <Stack padding="30px" gap="20px">
      <TextField type="file" onChange={handleImageChange} />
      <Button
        className="bg-black"
        variant="contained"
        onClick={async () => {
          await handleImageInput();
          setProductModal(false);
        }}
      >
        Upload
      </Button>
    </Stack>
  );
}
