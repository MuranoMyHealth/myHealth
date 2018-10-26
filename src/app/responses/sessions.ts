import { Session } from '../models/Session';

export class Sessions {
    constructor(public list: Session[] = [new Session(), new Session()]) { }
}
