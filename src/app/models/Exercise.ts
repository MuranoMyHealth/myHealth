export class Exercise {
  constructor(
    public name: string = '',
    public imgUrl: string = './assets/images/1-tilt-neck-forward-back.gif',
    public instructions: string = 'Медленно наклоняйте шею вперед и назад',
    public duration: number = 30) { }
}
