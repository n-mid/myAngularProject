import { FilterPipe } from './../../helpers/filter.pipe';
import { Component, OnInit } from '@angular/core';
import { CommentService } from '../../services/comment.service';
import { Comment } from '../../models/comment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  comments: Comment[] = [];

  constructor(private commentService: CommentService) { }

  ngOnInit() {
    this.comments = this.commentService.getComments();
  }

  add(item, text) {
    if (text) {
      let newComment: Comment = {
        id: this.getRandomInt(20, 1000),
        text: text,
        commentDeepLevel: ++item.commentDeepLevel,
        subComments: [],
        parentId: item.id
      };
      item.subComments = [...item.subComments, newComment];
    }
  }


  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
