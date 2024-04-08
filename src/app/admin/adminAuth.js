export const setAdminToken = (token) => {
  if (typeof window !== "undefined") {
    window.localStorage.setItem("token", token);
  }
};

export const getToken = () => {
  if (typeof window !== "undefined") {
    return window.localStorage.getItem("token");
  }
};

export const removeToken = () => {
  if (typeof window !== "undefined") {
    window.localStorage.removeItem("token");
  }
};
