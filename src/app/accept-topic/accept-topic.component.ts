import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThesisService, Topic } from '../thesis.service.service';

@Component({
  selector: 'app-accept-topic',
  templateUrl: './accept-topic.component.html',
  styleUrls: ['./accept-topic.component.scss'],
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
})
export class AcceptTopicComponent implements OnInit {
  topics: Topic[] = [];

  constructor(private thesisService: ThesisService) {}

  ngOnInit() {
    this.topics = this.thesisService.getTopics();
  }

  requestTopic(topic: Topic) {
    this.thesisService.requestTopic(topic);
    alert(`Ai solicitat tema: ${topic.title}`);
  }
}
