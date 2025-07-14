import { TaskAppBackend } from "./TaskAppAPIS";

export const loginUserApi = ({email, password}) => 
    TaskAppBackend.post('/user/login', {email, password});

