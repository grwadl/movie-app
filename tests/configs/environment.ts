import { Environment as mainEnvironment } from "@/configs";
import dotenv from "dotenv";

dotenv.config();

const Environment = { ...mainEnvironment };

export { Environment };
