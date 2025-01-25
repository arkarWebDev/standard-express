import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

// config
cloudinary.config({
  cloud_name: "dfl5rzss0",
  api_key: "749591279322661",
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadFileToCloudinary = async (filePath) => {
  try {
    if (!filePath) return null;
    const response = await cloudinary.uploader.upload(filePath, {
      resource_type: "auto",
    });
    console.log("File upload complete", response.url);
    console.log(filePath);
    fs.unlinkSync(filePath);
    return response.url;
  } catch (error) {
    console.log(error);
    fs.unlinkSync(filePath);
    return null;
  }
};
