import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "56bec76a-9b79-49cd-8a34-0e02c235c1d9",
  },
});

export const authAPI = {
  getAuth: () => {
    return instance.get("auth/me");
  },
};

export const userAPI = {
  getUsers: (currentPage) => {
    return instance.get(`users?page=${currentPage}&count=10`);
  },
  getNewUsersPage: (pageNumber) => {
    return instance.get(`users?page=${pageNumber}&count=10`);
  },
  setFollow: (id) => {
    return instance.post(`follow/${id}`);
  },
  unsetFollow: (id) => {
    return instance.delete(`follow/${id}`);
  },
};

export const profileAPI = {
  getProfile: (id) => {
    return instance.get(`profile/${id}`);
  },
  getStatus: (id) => {
    return instance.get(`profile/status/${id}`);
  },
  setStatus: (status) => {
    return instance.put(`profile/status`, {
      status,
    });
  },
};
