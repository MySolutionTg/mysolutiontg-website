import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-service-image-card',
  templateUrl: './service-image-card.component.html',
  styleUrls: ['./service-image-card.component.scss']
})
export class ServiceImageCardComponent implements OnInit {
  @Input("image") image!: String;
  @Input("title") title!: String;

  constructor() { }

  ngOnInit(): void {
  }

}
