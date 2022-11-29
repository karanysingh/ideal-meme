import axios from "axios";

export class UefaService {
  private static readonly server_url: string = process.env.NEXT_PUBLIC_API_URL;
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
