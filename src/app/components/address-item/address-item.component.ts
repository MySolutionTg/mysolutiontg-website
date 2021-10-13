import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-address-item',
  templateUrl: './address-item.component.html',
  styleUrls: ['./address-item.component.scss']
})
export class AddressItemComponent implements OnInit {
  @Input("icon") iconName!: String;
  @Input("description") content!: String;

  constructor() { }

  ngOnInit(): void {
  }

}
