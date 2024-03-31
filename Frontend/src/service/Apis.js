const BASE_URL=import.meta.env.VITE_BASE_URL

export const authEndpoints={
    LOGIN_API: BASE_URL+ "/user/login",
    SIGNUP_API: BASE_URL+ "/user/signUp",
    GET_ALL_STAFF: BASE_URL +"/user/getAllStaff",
    CHANGE_STATUS_API: BASE_URL+"/user/changeStatus",
    SET_ATTENDANCE_API: BASE_URL+"/user/setAttendance",
    GET_ALL_ATTENDANCE_API: BASE_URL+ "/user/getAllAttendance"
}

export const taskEndpoints={
    ASSING_TASK_API: BASE_URL+ "/task/assignTask",
    GET_TODAY_TASK_API: BASE_URL+ "/task/getToadyTask"
}