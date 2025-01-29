import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonContent, SidebarComponent],
})
export class HomePage {
  constructor() {}
}
