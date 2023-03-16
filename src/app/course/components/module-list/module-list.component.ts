import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.scss']
})
export class ModuleListComponent implements OnInit {
  @Input() public moduleInfo: any;

  constructor() { }

  ngOnInit(): void {
  }

}
