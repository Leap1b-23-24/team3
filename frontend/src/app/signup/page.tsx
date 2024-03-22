"use client";
import SignUp from "@/components/Authentication/Signup_parts/Signup";
import Step1 from "@/components/Authentication/Signup_parts/Step1";
import Step2 from "@/components/Authentication/Signup_parts/Step2";
import Step3 from "@/components/Authentication/Signup_parts/Step3";
import { Stack, Typography } from "@mui/material";
import { Auth } from "@/components/providers/AuthProvider";

export default function () {
  const { index } = Auth();

  return (
    <Stack className="p-11">
      <img
        src="/PineconeLogo.svg"
        alt="pinecone"
        width={193}
        height={32}
        className=" mb-14"
      />
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

      {index === "signup" && <SignUp />}
      {index === "step1" && <Step1 />}
      {index === "step2" && <Step2 />}
      {index === "step3" && <Step3 />}
    </Stack>
  );
}
