import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { query } = req;
    console.log(query);
    res.status(200).json({
      status: "is_connected",
      operation_code: "1",
      "User-id": "Abhas Chatterjee 22/01/2002",
      "Roll number": "RA2011026020047",
    });
  } catch {
    res.status(500).json({ status: "not_success" });
  }
}
