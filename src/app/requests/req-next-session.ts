import { v4 as uuid } from 'uuid';
export class ReqNextSession {
    token: string = uuid().replace('-', '');
    timezone: number;
}
