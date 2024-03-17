"use client";

import { AxiosError } from "axios";
import { toast } from "react-toastify";

export function toastSuccess(data: any) {
  toast.success(data.message, {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: true,
  });
}

export function toastError(error: any) {
  if (error instanceof AxiosError) {
    toast.error(error.response?.data.message ?? error.message, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
    });
  }
}
