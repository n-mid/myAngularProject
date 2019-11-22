import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private comments = [];

  constructor() { }

  getComments() {
    this.generateComments();

    return this.comments;
  }

  generateComments() {
    for(let i = 0; i < 10; i++) {
      this.comments.push( {
        id: i,
        text: 'comment ' + i.toString(),
        commentDeepLevel:1,
        subComments:[],
        parentId:i
      } as Comment);
    }
  }
}
