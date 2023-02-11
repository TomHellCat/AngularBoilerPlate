import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {
  constructor() { }

  getBooks() {
    return [
      { 
        name:   'clean code',
        author:   'Robert C Martin',
        image:   'https://m.media-amazon.com/images/I/41SH-SvWPxL.jpg',
        amount: 800
      },
      { 
        name:   'something',
        author:   'someone',
        image:   'https://m.media-amazon.com/images/I/514NPRZ1AQL._SL1500_.jpg',
        amount: 1300
      }
    ];
  }
}
