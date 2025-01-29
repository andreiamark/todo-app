import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { ThesisService } from '../thesis.service.service';

@Component({
  selector: 'app-manage-documents',
  templateUrl: './manage-documents.component.html',
  styleUrls: ['./manage-documents.component.scss'],
  imports: [CommonModule, IonIcon],
})
export class ManageDocumentsComponent implements OnInit {
  documents: any[] = [];

  constructor(private thesisService: ThesisService) {}

  ngOnInit() {
    this.documents = this.thesisService.getDocuments();
  }

  uploadDocument(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.thesisService.uploadDocument({
        name: file.name,
        status: 'În așteptare',
      });
    }
  }

  approveDocument(doc: any) {
    doc.status = 'Aprobat';
    console.log('aprobat');
  }
}
