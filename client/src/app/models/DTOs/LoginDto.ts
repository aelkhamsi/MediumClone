import { User } from '../User';

export interface LoginWriteDto { //request of the client
    email: string,
    password: string
}

export interface LoginReadDto { //response of the server
    user: User,
    access_token: string
}