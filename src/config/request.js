import axios from "axios";

export const request = axios.create({
  baseURL: "http://localhost:3600",
  headers: {
    "Content-Type": "application/json",
  },
});
