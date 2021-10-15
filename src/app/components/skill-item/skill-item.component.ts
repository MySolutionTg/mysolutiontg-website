import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.scss']
})
export class SkillItemComponent implements OnInit {
  @Input("icon") iconName!: String;
  @Input("title") title!: String;
  @Input("content") content!: Number;

  constructor() { }

  ngOnInit(): void {
  }

}
