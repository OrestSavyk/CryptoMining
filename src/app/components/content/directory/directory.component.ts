import { Component, OnInit } from '@angular/core';
import { CHOOSE_TYPE } from './directory.constant';
@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss'],
})
export class DirectoryComponent implements OnInit {
  choseType = CHOOSE_TYPE;
  constructor() {}

  ngOnInit(): void {}
}
