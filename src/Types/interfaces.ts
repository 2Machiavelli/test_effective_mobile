import { Status } from "./types.js";

export interface Appeal {
  status: Status,
  theme?: string,
  text?: string,
  date: Date
}
