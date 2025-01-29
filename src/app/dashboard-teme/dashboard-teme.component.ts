import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Topic } from '../thesis.service.service';

@Component({
  selector: 'app-dashboard-teme',
  templateUrl: './dashboard-teme.component.html',
  styleUrls: ['./dashboard-teme.component.scss'],
  imports: [FormsModule, ReactiveFormsModule, RouterOutlet, RouterLink],
})
export class DashboardTemeComponent implements OnInit {
  constructor() {}
  searchQuery = '';
  selectedFilter = 'all';

  topics: Topic[] = [
    {
      title: 'Machine Learning in Healthcare',
      description: 'Exploring AI applications.',
      category: 'licenta',
      level: '',
      maxCandidates: 0,
    },
    {
      title: 'Blockchain Security',
      description: 'Securing transactions with blockchain.',
      category: 'disertatie',
      level: '',
      maxCandidates: 0,
    },
  ];

  filteredTopics() {
    return this.topics.filter(
      (topic) =>
        (this.selectedFilter === 'all' ||
          topic.category === this.selectedFilter) &&
        topic.title.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
  ngOnInit() {}
}
