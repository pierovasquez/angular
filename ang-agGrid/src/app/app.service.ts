import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor() {
  }

  data: any = [
    {
      id: 1, name: 'group1', description: 'Description of group1', enabled: true,
      startDate: new Date(), modificationDate: new Date(), endDate: new Date()
    },
    {
      id: 2, name: 'group2', description: 'Description of group2', enabled: true,
      startDate: new Date(), modificationDate: new Date(), endDate: new Date()
    },
    {
      id: 3, name: 'group3', description: 'Description of group3', enabled: false,
      startDate: new Date(), modificationDate: new Date(), endDate: new Date()
    },
  ];

  getData() {
    return this.data;
  }
}
