import Image from "@/models/Image";
import { connect } from "@/utils/connection";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  connect();

  if (method === "POST") {
    try {
      const image = await Image.create(req.body);
      res.status(201).json({ success: true, data: image });
    } catch (error) {
      res.status(500).json({ success: false });
    }
  }
  if (method === "GET") {
    try {
      const images = await Image.find({});
      res.status(200).json({ success: true, data: images });
    } catch (error) {
      res.status(500).json({ success: false });
    }
  }

  res.status(400).json({ success: false, message: "Bad request" });
}
