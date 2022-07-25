import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Soccer } from '../interface/Soccer';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() {}
  createDb() {
    const soccers = [
      { id: 8, name: 'Martin Ødegaard' },
      { id: 10, name: 'Smith Rowe' },
      { id: 7, name: 'Bukayo Saka' },
      { id: 4, name: 'White' },
      { id: 6, name: 'Gabriel' },
      { id: 3, name: 'Tierney' },
      { id: 32, name: 'Ramsdale' },
    ];
    return { soccers };
  }
  genId(soccers: Soccer[]): number {
    return soccers.length > 0
      ? Math.max(...soccers.map((soccer) => soccer.id)) + 1
      : 32;
  }
}
