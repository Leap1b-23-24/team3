"use client";
import { Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function OrderCompleted() {
  return (
    <Container
      maxWidth="lg"
      style={{
        marginTop: "96px",
        marginBottom: "96px",
      }}
    >
      <Stack
        alignItems={"center"}
        justifyContent={"center"}
        gap={3}
        m={"auto"}
        maxWidth={"800px"}
        borderBottom={1}
        borderLeft={1}
        borderColor={"#D2D1D1"}
        sx={{ borderStyle: "dashed" }}
        px={12}
        pb={8}
        position={"relative"}
      >
        <Image
          alt="clock"
          width={94}
          height={94}
          src={"/clock.png"}
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "translate(-50%,-50%)",
          }}
        />
        <Image
          alt="clock"
          width={70}
          height={70}
          src={"/checklist.png"}
          style={{
            position: "absolute",
            right: 0,
            bottom: 0,
            transform: "translate(50%,50%)",
          }}
        />
        <Stack
          width={70}
          height={70}
          bgcolor={"#F6F7FA"}
          alignItems={"center"}
          justifyContent={"center"}
          borderRadius={"50%"}
        >
          <Stack
            width={50}
            height={50}
            bgcolor={"common.white"}
            alignItems={"center"}
            justifyContent={"center"}
            borderRadius={"50%"}
          >
            <Image alt="success" width={45} height={45} src={"/success.png"} />
          </Stack>
        </Stack>
        <Typography color={"#101750"} fontSize={36} fontWeight={800}>
          Таны захиалга амжилттай
        </Typography>
        <Typography color={"#8D92A7"} fontSize={16} fontWeight={600}>
          Thank you for your order! Your order is being processed and will be
          completed within 3-6 hours. You will receive an email confirmation
          when your order is completed.
        </Typography>
        <Button
          sx={{
            width: "208px",
            backgroundColor: "#FF1788" + "!important",
            color: "#fff",
          }}
        >
          <Link href="/SuccessOrder">
            <Typography
              px={"16px"}
              py={"8px"}
              fontWeight={600}
              fontSize={"16px"}
            >
              Үргэлжлүүлэх
            </Typography>
          </Link>
        </Button>
      </Stack>
    </Container>
  );
}
