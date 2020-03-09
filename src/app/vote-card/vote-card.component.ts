import { Component, OnInit, Input } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { VotingService } from '../shared/voting.service';

@Component({
  selector: 'app-vote-card',
  templateUrl: './vote-card.component.html',
  styleUrls: ['./vote-card.component.scss']
})
export class VoteCardComponent implements OnInit {
  @Input() data;
  positiveVotes: number;
  negativeVotes: number;
  actualVote: string;

  constructor(private votingService: VotingService) {}

  ngOnInit(): void {
    const totalVotes = this.data.votes_against + this.data.votes_in_favor;
    this.positiveVotes = (this.data.votes_in_favor / totalVotes) * 100;
    this.negativeVotes = (this.data.votes_against / totalVotes) * 100;
  }

  voteInput(e: MatButtonToggleChange) {
    this.actualVote = e.value;
  }

  sendVote(id: string) {
    this.votingService.setNewVote = {id, value: true};

    switch (this.actualVote) {
      case 'thumbUp':
        this.setVote(id, 1, this.actualVote);
        break;
      case 'thumbDown':
        this.setVote(id, 1, this.actualVote);
        break;
    }
  }

  setVote(id: string, vote: number, type: string): void {
    const votingDataTemp = this.votingService.getData();

    for (const item of votingDataTemp) {
      if (item.id === id && type === 'thumbUp') {
        item.votes_in_favor += vote;
      } else if (item.id === id && type === 'thumbDown') {
        item.votes_against += vote;
      }
    }

    this.votingService.setData(votingDataTemp);
  }

  voteAgain() {
    this.votingService.setNewVote = {id: this.data.id, value: false};
  }

  checkNewVote() {
    return this.votingService.getNewVote[this.data.id];
  }
}
