import { api } from "./configs";

export const UserAPI = {
    get: async function () {
        const response = await api.request({
          url: `/user/me`,
          method: "GET",
        })
         return response.data
    }
}