import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  imports: [RouterLink],
  encapsulation: ViewEncapsulation.None,
})
export class SidebarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
