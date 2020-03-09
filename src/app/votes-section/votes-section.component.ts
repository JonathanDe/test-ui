import { Component, OnInit } from '@angular/core';
import { VotingService } from '../shared/voting.service';

@Component({
  selector: 'app-votes-section',
  templateUrl: './votes-section.component.html',
  styleUrls: ['./votes-section.component.scss']
})
export class VotesSectionComponent implements OnInit {
  data = [];
  constructor(private votingService: VotingService) {}

  ngOnInit(): void {
    this.votingService.data$.subscribe(newData => this.data = newData);
  }
}
