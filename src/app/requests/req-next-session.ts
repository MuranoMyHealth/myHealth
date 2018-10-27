import { v4 as uuid } from 'uuid';
export class ReqNextSession {
    token: string = uuid();
    timezone: number;
}
