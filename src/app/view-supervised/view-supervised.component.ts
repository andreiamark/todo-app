import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SupervisedThesis, ThesisService } from '../thesis.service.service';

@Component({
  selector: 'app-view-supervised',
  templateUrl: './view-supervised.component.html',
  styleUrls: ['./view-supervised.component.scss'],
  imports: [CommonModule],
})
export class ViewSupervisedComponent implements OnInit {
  supervisedTheses: SupervisedThesis[] = [];

  constructor(private thesisService: ThesisService) {}

  ngOnInit() {
    this.supervisedTheses = this.thesisService.getSupervisedTheses();
  }
}
