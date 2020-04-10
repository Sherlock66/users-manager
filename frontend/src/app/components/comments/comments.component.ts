import { Component, OnInit } from '@angular/core';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  infos:{
    nom:string,
    email:string,
    tel:number
  };
	comments=[];
  commentaire ={date:null, message:""};
  
  constructor(private commentService: CommentService) {
    this.infos=this.commentService.getInfo();
  	this.comments=this.commentService.getAllComments();
  }

  ngOnInit(): void {
  }

  onAddCommentaire(c){
    this.commentService.addComment(c);
    this.commentaire.message="";
    this.comments=this.commentService.getAllComments();
  }

}
