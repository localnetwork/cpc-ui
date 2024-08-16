import BaseApi from "@/lib/api/_base.api";
const APIDOMAIN = process.env.NEXT_PUBLIC_TENANT_API;
export default class CONTENTAPI {
  static async getContents(id, params = "") {
    const queryParams = ``;
    const res = await BaseApi.get(
      APIDOMAIN + `/api/contents/entries/${id}` + queryParams
    );
    return res.data;
  }

  static async findEntry(contentId, entryId, params = "") {
    const res = await BaseApi.get(
      APIDOMAIN + `/api/${contentId}/${entryId}` + params
    );
    return res.data;
  }

  static async findContent(id, params = "") {
    const res = await BaseApi.get(APIDOMAIN + `/api/contents/${id}` + params);
    return res.data;
  }

  static getContentsSwr(params = "", options = {}) {
    const queryParams = ``;
    return BaseApi.swr(APIDOMAIN + `/api/contents` + queryParams, options);
  }
}
