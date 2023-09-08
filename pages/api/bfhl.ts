import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { query } = req;
    const { array }: string = query;
    const arr = array?.split(",");
    const letters = arr.filter((elem: any) => {
      return /[a-zA-Z]/.test(elem);
    });
    const numbers = arr.filter((elem: any) => {
      return /[0-9]/.test(elem);
    });
    console.log(letters);
    console.log(numbers);
    if (req.method === "POST") {
      res.status(200).json({
        status: "is_connected",
        operation_code: "1",
        "User-id": "Abhas Chatterjee 22/01/2002",
        "Roll number": "RA2011026020047",
      });
    } else {
      res.status(200).json({
        status: "is_connected",
        operation_code: "1",
        "User-id": "Abhas Chatterjee 22/01/2002",
        "Roll number": "RA2011026020047",
      });
    }
  } catch {
    res.status(500).json({ status: "not_success" });
  }
}
