import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

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
    console.log("File upload successful.", response.url);
    fs.unlinkSync(filePath);
  } catch (error) {
    fs.unlinkSync(filePath);
    return null;
  }
};
