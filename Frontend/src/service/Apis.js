const BASE_URL=import.meta.env.VITE_BASE_URL

export const authEndpoints={
    LOGIN_API: BASE_URL+ "/user/login",
    SIGNUP_API: BASE_URL+ "/user/signUp"
}