import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VotingService {
  newVoteList = {
    1: false,
    2: false,
    3: false,
    4: false
  };

  private mockData = [
    {
      id: '1',
      name: 'Kanye West',
      image: '../../assets/images/zuck.jpg',
      published_date: '1 month ago',
      category: 'Entertaiment',
      description: 'Vestibulum diam ante, portitor a odio eget, rhoncus neque. Aenean eu velit libero.',
      votes_in_favor: 1,
      votes_against: 3
    },
    {
      id: '2',
      name: 'Mark Zuckerberg',
      image: '../../assets/images/zuck.jpg',
      published_date: '1 month ago',
      category: 'Business',
      description: 'Vestibulum diam ante, portitor a odio eget, rhoncus neque. Aenean eu velit libero.',
      votes_in_favor: 7,
      votes_against: 1
    },
    {
      id: '3',
      name: 'Cristina Fernández de Kirchner',
      image: '../../assets/images/zuck.jpg',
      published_date: '1 month ago',
      category: 'Politics',
      description: 'Vestibulum diam ante, portitor a odio eget, rhoncus neque. Aenean eu velit libero.',
      votes_in_favor: 3,
      votes_against: 2
    },
    {
      id: '4',
      name: 'Malala Yousafzai',
      image: '../../assets/images/zuck.jpg',
      published_date: '1 month ago',
      category: 'Entertaiment',
      description: 'Vestibulum diam ante, portitor a odio eget, rhoncus neque. Aenean eu velit libero.',
      votes_in_favor: 3,
      votes_against: 8
    }
  ];

  public data$ = new BehaviorSubject(this.getData());

  constructor() {}

  setData(data) {
    localStorage.setItem('votingData', JSON.stringify(data));
    this.data$.next(data);
  }

  getData() {
    return JSON.parse(localStorage.getItem('votingData')) || this.mockData;
  }

  get getNewVote() {
    return this.newVoteList;
  }

  set setNewVote(data) {
    this.newVoteList[data.id] = data.value;
  }
}
