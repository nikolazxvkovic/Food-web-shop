import { Injectable } from '@angular/core';
import { Food } from '../../shared/models/Food';
import { Tag } from '../../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  getFoodById(id: number): Food{
    return this.getAll().find(food => food.id == id)!;
  }
  
  getAllFoodsBySearchTerm(searchTerm:string) :Food[]{
    return  this.getAll().filter(food =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
  getAllTags(): Tag[] {
    return [
      { name: 'All', count: 11 },
      { name: 'FastFood', count: 3 },
      { name: 'Pizza', count: 1},
      { name: 'Lunch', count: 4 },
      { name: 'SlowFood', count: 1 },
      { name: 'Hamburger', count: 1 },
      { name: 'Fry', count: 1 },
    ];
  }

  getAllFoodsByTag(tag: string): Food[] {
    return tag == "All" ?
      this.getAll() :
      this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAll(): Food[] {
    return [
      {
        id: 1,
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 10,
        favorite: true,
        origins: ['Italy'],
        stars: 4.7,
        imageUrl: '/assets/images/pizza.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 2,
        name: 'Pasta',
        price: 15,
        cookTime: '20-30',
        favorite: false,
        origins: ['Italy'],
        stars: 4.5,
        imageUrl: '/assets/images/pasta.jpg',
        tags: ['Lunch'],
      },
      {
        id: 3,
        name: 'Hamburger',
        price: 10,
        cookTime: '10-15',
        favorite: false,
        origins: ['Germany', 'US'],
        stars: 4.3,
        imageUrl: '/assets/images/burger.jpg',
        tags: ['FastFood', 'Hamburger'],
      },
      {
        id: 4,
        name: 'Fries',
        price: 2,
        cookTime: '15-20',
        favorite: true,
        origins: ['Belgium', 'France', 'US'],
        stars: 4,
        imageUrl: '/assets/images/fries.jpg',
        tags: ['FastFood', 'Fry'],
      },
      {
        id: 5,
        name: 'Sarma',
        price: 11,
        cookTime: '240',
        favorite: false,
        origins: ['Serbia'],
        stars: 4.6,
        imageUrl: '/assets/images/sarma.jpg',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id: 6,
        name: 'Steak Sandwich',
        price: 13,
        cookTime: '15-20',
        favorite: false,
        origins: ['US'],
        stars: 4.0,
        imageUrl: '/assets/images/steak_sandwich.jpg',
        tags: ['Lunch'],
      },
    ];
  }
}
