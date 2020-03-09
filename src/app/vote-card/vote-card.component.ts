import { Component, OnInit, Input } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';

@Component({
  selector: 'app-vote-card',
  templateUrl: './vote-card.component.html',
  styleUrls: ['./vote-card.component.scss']
})
export class VoteCardComponent implements OnInit {
  @Input() data;
  positiveVotes: number;
  negativeVotes: number;

  constructor() { }

  ngOnInit(): void {
    const totalVotes = this.data.votes_against + this.data. votes_in_favor;
    this.positiveVotes = (this.data.votes_in_favor / totalVotes) * 100;
    this.negativeVotes = (this.data.votes_against / totalVotes) * 100;
  }

  voteInput(e: MatButtonToggleChange) {
    console.log(e.value);
  }
}
