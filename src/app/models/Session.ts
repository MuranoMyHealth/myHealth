import { Exercise } from './Exercise';

export class Session {
  constructor(public list: Exercise[] = [new Exercise(), new Exercise(), new Exercise()], public hour: number = 0) { }
}
