import { Button, Stack, TextField, Typography } from "@mui/material";
import { Auth } from "../providers/AuthProvider";
import { ChangeEvent } from "react";

export default function ProductImages() {
  const { handleImageChange, handleImageInput, imageUrl, setProductModel } =
    Auth();

  return (
    <Stack padding="30px" gap="20px">
      <TextField type="file" onChange={handleImageChange} />
      <Button
        className="bg-black"
        variant="contained"
        onClick={async () => {
          await handleImageInput();
          setProductModel(false);
        }}
      >
        Upload
      </Button>
    </Stack>
  );
}
