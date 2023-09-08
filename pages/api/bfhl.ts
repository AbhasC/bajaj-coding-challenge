import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { query } = req;
    if (req.method === "POST") {
      const { array }: any = query;
      const arr = array?.split(",");
      const letters = arr.filter((elem: any) => {
        return /[a-zA-Z]/.test(elem);
      });
      const numbers = arr.filter((elem: any) => {
        return /[0-9]/.test(elem);
      });
      letters.sort();
      letters.reverse();
      res.status(200).json({
        status: "is_connected",
        // eslint-disable-next-line camelcase
        operation_code: "1",
        "User-id": "Abhas Chatterjee 22/01/2002",
        "Roll number": "RA2011026020047",
        numbers: numbers,
        alphabets: letters,
        // eslint-disable-next-line camelcase
        highest_alphabet: letters[0],
      });
    } else if (req.method === "GET") {
      res.status(200).json({
        status: "is_connected",
        // eslint-disable-next-line camelcase
        operation_code: "1",
        "User-id": "Abhas Chatterjee 22/01/2002",
        "Roll number": "RA2011026020047",
      });
    }
  } catch {
    res.status(500).json({ status: "not_success" });
  }
}
