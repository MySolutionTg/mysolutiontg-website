import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-menu-bars',
  templateUrl: './menu-bars.component.html',
  styleUrls: ['./menu-bars.component.scss']
})
export class MenuBarsComponent implements OnInit {
  @Output() collapse: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  sidebarCollapse() {
    this.collapse.emit();
  }
}
