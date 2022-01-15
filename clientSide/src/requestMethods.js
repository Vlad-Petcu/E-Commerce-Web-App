import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxY2RiYTRkZGViYjljZjE1N2E4Nzc5YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MTY1OTU3OSwiZXhwIjoxNjQxOTE4Nzc5fQ.iqdw4BaHNueEWgRDfikB24-blRieDh7Qe0yHUrj_dqI";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{ token:`Bearer ${TOKEN}` },
});