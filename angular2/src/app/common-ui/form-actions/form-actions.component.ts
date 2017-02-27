import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-actions',
  templateUrl: './form-actions.component.html',
  styleUrls: ['./form-actions.component.css']
})
export class FormActionsComponent implements OnInit {
  @Input() group: FormGroup;
  @Input() parentPath: string;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
