import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../class/Person';

@Component({
  selector: 'app-resultform',
  templateUrl: './resultform.component.html',
  styleUrls: ['./resultform.component.css']
})
export class ResultformComponent implements OnInit {

  @Input () user : Person;
  constructor() { }

  ngOnInit(): void {
  }

}
