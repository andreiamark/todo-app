import { Component, Input, OnInit } from '@angular/core';
interface Topic {
  title: string;
  description: string;
  category: string;
}

@Component({
  selector: 'app-topic-card',
  templateUrl: './topic-card.component.html',
  styleUrls: ['./topic-card.component.scss'],
})
export class TopicCardComponent implements OnInit {
  constructor() {}
  @Input() topic!: Topic;

  requestTopic() {
    console.log(`Solicitare trimisă pentru tema: ${this.topic.title}`);
    // Aici poți adăuga funcționalitatea de solicitare (ex: trimitere request la backend)
  }

  viewDetails() {
    console.log(`Vizualizare detalii pentru tema: ${this.topic.title}`);
    // Aici poți adăuga navigarea către pagina detaliată a temei
  }
  ngOnInit() {}
}
