export class UserData {
  public from: number;
  public to: number;
  public silenceMode: boolean;

  constructor(public token: string = 'Tor') { }
}
