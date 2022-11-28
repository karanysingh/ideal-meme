// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: "John Doe" });
}

export class UefaService {
  private static readonly server_url: string = "http://localhost:8081";
  private static readonly client = axios.create({
    baseURL: this.server_url,
  });

  public static async getUefaData(data: {
    player_name?: string;
    club_name?: string;
    position?: string;
    type?: string;
  }) {
    const res = await this.client.get(
      `api/v1/uefa?player_names=${data.player_name || ""}&club_names=${
        data.club_name || ""
      }&position=${data.position || ""}&type=${data.type || ""}`
    );
    return res;
  }
}
