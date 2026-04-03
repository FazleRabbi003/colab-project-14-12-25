import axios from "axios";
import { ContactFormData } from "./types";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

const api = axios.create({
  baseURL: API_BASE,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  timeout: 15000,
});

export async function submitContactForm(data: ContactFormData): Promise<{ success: boolean; message: string }> {
  const response = await api.post("/contact", data);
  return response.data;
}

export default api;
