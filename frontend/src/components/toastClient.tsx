"use client";

import { toast } from "react-toastify";

export function toastSuccess(data: any) {
  toast.success(data.message, {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: true,
  });
}

export function toastError(data: any) {
  toast.error(data.message, {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: true,
  });
}
