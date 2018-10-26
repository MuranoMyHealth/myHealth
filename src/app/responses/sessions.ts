import { Session } from '../models/Session';
import { Exercise } from '../models/Exercise';

export class Sessions {
    constructor(public list: Session[] = [
        new Session([new Exercise(), new Exercise()], 0),
        new Session([new Exercise(), new Exercise()], 1),
        new Session([new Exercise(), new Exercise()], 2),
        new Session([new Exercise(), new Exercise()], 3),
        new Session([new Exercise(), new Exercise()], 4),
        new Session([new Exercise(), new Exercise()], 5),
        new Session([new Exercise(), new Exercise()], 6),
        new Session([new Exercise(), new Exercise()], 7),
        new Session([new Exercise(), new Exercise()], 8),
        new Session([new Exercise(), new Exercise()], 9),
        new Session([new Exercise(), new Exercise()], 10),
        new Session([new Exercise(), new Exercise()], 11),
        new Session([new Exercise(), new Exercise()], 12),
        new Session([new Exercise(), new Exercise()], 13),
        new Session([new Exercise(), new Exercise()], 14),
        new Session([new Exercise(), new Exercise()], 15),
        new Session([new Exercise(), new Exercise()], 16),
        new Session([new Exercise(), new Exercise()], 17),
        new Session([new Exercise(), new Exercise()], 18),
        new Session([new Exercise(), new Exercise()], 19),
        new Session([new Exercise(), new Exercise()], 20),
        new Session([new Exercise(), new Exercise()], 21),
        new Session([new Exercise(), new Exercise()], 22),
        new Session([new Exercise(), new Exercise()], 23)]) { }
}
