import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ThesisService, Topic } from '../thesis.service.service';

@Component({
  selector: 'app-propose-topic',
  templateUrl: './propose-topic.component.html',
  styleUrls: ['./propose-topic.component.scss'],
  imports: [CommonModule, FormsModule],
})
export class ProposeTopicComponent implements OnInit {
  newTopic: Topic = {
    title: '',
    description: '',
    level: 'licenta',
    maxCandidates: 1,
    category: '',
  };

  constructor(private thesisService: ThesisService) {}

  submitTopic() {
    this.thesisService.addTopic(this.newTopic);
    alert('Tema a fost propusă cu succes!');
  }
  ngOnInit() {}
}
