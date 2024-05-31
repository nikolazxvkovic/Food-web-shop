import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() { }

  getAll():String[] {
    return [
      'assets/images/burger.jpg',
      'assets/images/fries.jpg',
      'assets/images/pasta.jpg',
      'assets/images/pizza.jpg',
      'assets/images/sarma.jpg',
      'assets/images/steak_sandwich.jpg'
    ]
  }
}
