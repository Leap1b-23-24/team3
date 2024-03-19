"use client";
import { Stack } from "@mui/material";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

export const Header = () => {
  const [drop, setDrop] = useState(false);
  return (
    <div className="bg-[#12A795] px-6">
      <div className="max-w-[1240px] m-auto flex items-center justify-between py-[10px]">
        <div className="flex gap-3 items-center">
          <img src="./headerImages/Pinecone Logo.png" className="w-7 h-7" />
          <p className="font-bold text-white text-2xl">Ecommerce</p>
        </div>
        <div className="flex bg-white items-center rounded-lg overflow-hidden relative w-[35%]">
          <img
            src="./headerImages/searchIcon.png"
            className="w-7 h-7 absolute left-1"
          />
          <input
            placeholder="Хайлт"
            type="search"
            className="py-[9px] pl-[35px] w-full"
          />
        </div>
        <div className="w-[12%] flex items-center justify-between gap-2">
          <img src="./headerImages/heart.png" className="w-6 h-6" />
          <img src="./headerImages/sags.png" className="w-6 h-6" />{" "}
          {drop && (
            <Stack sx={{ color: "white" }}>
              <Stack>
                <Link href="/signup">Бүртгүүлэх</Link>
              </Stack>
              <Stack>
                <Link href="#">Нэвтрэх</Link>
              </Stack>
            </Stack>
          )}
          <Stack
            onClick={() => {
              setDrop(!drop);
            }}
          >
            <MenuIcon
              sx={{
                width: "24px",
                height: "24px",
                color: "white",
                cursor: "pointer",
              }}
            />
          </Stack>
        </div>
      </div>
    </div>
  );
};
