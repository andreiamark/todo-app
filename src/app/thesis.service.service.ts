import { Injectable } from '@angular/core';

export interface Topic {
  title: string;
  description: string;
  level: string;
  maxCandidates: number;
  category: string;
}

export interface SupervisedThesis {
  title: string;
  student: string;
  status: string;
}

export interface Document {
  name: string;
  status: string;
}

@Injectable({
  providedIn: 'root',
})
export class ThesisService {
  private topics: Topic[] = [];
  private supervisedTheses: SupervisedThesis[] = [];
  private documents: Document[] = [];

  addTopic(topic: Topic) {
    this.topics.push(topic);
  }

  getTopics(): Topic[] {
    return this.topics;
  }

  requestTopic(topic: Topic) {
    this.supervisedTheses.push({
      title: topic.title,
      student: 'Student X',
      status: 'În progres',
    });
  }

  getSupervisedTheses(): SupervisedThesis[] {
    return this.supervisedTheses;
  }

  uploadDocument(doc: Document) {
    this.documents.push(doc);
  }

  getDocuments(): Document[] {
    return this.documents;
  }
}
