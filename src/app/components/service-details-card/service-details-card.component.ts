import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-service-details-card',
  templateUrl: './service-details-card.component.html',
  styleUrls: ['./service-details-card.component.scss']
})
export class ServiceDetailsCardComponent implements OnInit {
  @Input("icon") iconName!: String;
  @Input("title") title!: String;
  @Input("description") content!: String;

  constructor() { }

  ngOnInit(): void {
  }

}
