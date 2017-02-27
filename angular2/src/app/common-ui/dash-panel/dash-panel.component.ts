import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dash-panel',
  templateUrl: './dash-panel.component.html',
  styleUrls: ['./dash-panel.component.css']
})
export class DashPanelComponent implements OnInit {
  @Input() image: string;
  @Input() description: string;

  constructor() { }

  ngOnInit() {
  }

}
