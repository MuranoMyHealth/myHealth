export class Exercise {
  constructor(
    public name: string = '',
    public imgUrl: string = 'https://trello-attachments.s3.amazonaws.com/5bd2f8df0b2e610533418238/5bd30500d0d84f18aa27d540/be383039bbe26a1b187f4004e3ff126c/1-tilt-neck-forward-back.gif',
    public instructions: string = 'Медленно наклоняйте шею вперед и назад',
    public duration: number = 1) { }
}
