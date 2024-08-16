import BaseApi from "@/lib/api/_base.api";
const APIDOMAIN = process.env.NEXT_PUBLIC_TENANT_API;
export default class PAGEAPI {
  static async findPageByRoute(id, params = "") {
    const queryParams = ``;

    try {
      const res = await BaseApi.get(
        APIDOMAIN + "/api/route/" + id + queryParams
      );
      return res.data;
    } catch (error) {
      return null;
    }
  }
  static async getPages(params = "") {
    const queryParams = ``;
    const res = await BaseApi.get(APIDOMAIN + "/api/routes" + queryParams);
    return res.data;
  }
  static async findByRoute(id, params = "") {
    const queryParams = "";
    try {
      let res;

      if (id?.length == 0) {
        res = await BaseApi.customGet(
          APIDOMAIN + "/api/route/home" + queryParams
        );
      } else {
        res = await BaseApi.customGet(
          APIDOMAIN + "/api/route/" + id + queryParams
        );
      }
      return res?.data;
    } catch (error) {
      return null;
    }
  }
}
