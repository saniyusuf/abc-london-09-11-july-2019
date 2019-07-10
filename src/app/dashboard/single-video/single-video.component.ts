import {Component, Input, OnInit} from '@angular/core';
import {Video} from '../../../types';

@Component({
  selector: 'app-single-video',
  templateUrl: './single-video.component.html',
  styleUrls: ['./single-video.component.css']
})
export class SingleVideoComponent implements OnInit {

  @Input() video: Video;

  constructor() { }

  ngOnInit() {
  }

}
