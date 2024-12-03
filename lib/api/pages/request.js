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

  static getFindRouteSWR(id, params = "", options = {}) {
    // Check if params is an object, then serialize it into a query string
    if (typeof params === "object" && params !== null) {
      params = new URLSearchParams(params).toString();
    }

    // If params is not an empty string, append it to the URL
    const url = `${APIDOMAIN}/api/route${id}${params ? `?${params}` : ""}`;

    // Pass the URL and options (like onSuccess and onError)
    return BaseApi.swr(url, options);
  }
}
