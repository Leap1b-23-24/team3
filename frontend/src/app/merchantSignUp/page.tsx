"use client";
import Step1 from "@/components/Authentication/Authentication_merchant/Step1";
import Step2 from "@/components/Authentication/Authentication_merchant/Step2";
import Step3 from "@/components/Authentication/Authentication_merchant/Step3";
import { Stack, Typography } from "@mui/material";
import { Auth } from "@/components/providers/AuthProvider";
import SignUpStep from "@/components/Authentication/Authentication_merchant/SignUpStep";

export default function () {
  const { index, router } = Auth();

  return (
    <Stack>
      <Stack className="p-11 h-screen ">
        <Stack
          onClick={() => {
            router.push("/");
          }}
        >
          <img src="/PineconeLogo.svg" className=" mb-14 w-[193px] h-8" />
        </Stack>

        {index !== "signup" && (
          <Stack className="max-w-[792px] w-full m-auto mb-[120px] ">
            <Stack
              direction="row"
              className="max-w-[656px] w-full m-auto relative justify-between"
            >
              <Stack className="z-10 w-9 h-9 bg-black rounded-full items-center justify-center text-white ">
                {index !== "step1" ? <span>&#10003;</span> : 1}
              </Stack>
              <Stack
                className="z-10 w-9 h-9 rounded-full items-center justify-center"
                sx={{
                  bgcolor: index !== "step1" ? "#000" : "#ECEDF0",
                  color: index !== "step1" ? "white" : "black",
                }}
              >
                {index == "step3" ? <span>&#10003;</span> : 2}
              </Stack>
              <Stack
                className="z-10 w-9 h-9 rounded-full items-center justify-center"
                sx={{
                  bgcolor: index == "step3" ? "#000" : "#ECEDF0",
                  color: index == "step3" ? "white" : "black",
                }}
              >
                3
              </Stack>
              <Stack className="w-full h-1 bg-[#ECEDF0] absolute top-[50%]"></Stack>
              <Stack
                className="h-1 absolute top-[50%]"
                sx={{
                  width:
                    index === "step2"
                      ? "50%"
                      : "0%"
                      ? index === "step3"
                        ? "100%"
                        : "0%"
                      : "0%",
                  backgroundColor:
                    index === "step2"
                      ? "black"
                      : "#ECEDF0"
                      ? index === "step3"
                        ? "black"
                        : "#ECEDF0"
                      : "#ECEDF0",
                }}
              ></Stack>
            </Stack>
            <Stack
              direction="row"
              className="w-full m-auto relative justify-between text-base font-semibold"
            >
              <Typography className="ml-8">Дэлгүүрийн нэр</Typography>
              <Typography>Бүс нутаг</Typography>
              <Typography className="mr-5">Нэмэлт мэдээлэл</Typography>
            </Stack>
          </Stack>
        )}

        {index === "signup" && <SignUpStep />}
        {index === "step1" && <Step1 />}
        {index === "step2" && <Step2 />}
        {index === "step3" && <Step3 />}
      </Stack>
      <Stack width="100%" className="items-center" marginTop="86px">
        <Typography color="#1C20243D" p="8px">
          © 2023 Pinecone
        </Typography>
      </Stack>
    </Stack>
  );
}
