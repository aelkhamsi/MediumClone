import { User } from '../User';

export interface SignupWriteDto { //request of the client
    username: string;
    email: string;
    password: string;
    role: string;
}


// export interface SignupWriteDto == User
