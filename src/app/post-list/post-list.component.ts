import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
    @Input() title;
    @Input() content;
    @Input() loveIts;
    @Input() created_at;

    constructor() { }

  ngOnInit() {
  }

  like() {
     this.loveIts++;
  }

    unlike() {
        this.loveIts--;
    }

}
