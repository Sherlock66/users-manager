import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor() { }
  infos = {
		nom : "Armel Nya",
		email: "armelnganji@gmail.com",
		tel: 654390565
	}
	comments= [
		{date: new Date(), message: "Je pense que pour un début c'est assez bien "},
	
	];
	commentaire =[
		{date: null, message:""}
	];

	addComment(c){
		c.date=new Date();
		this.comments.push(c);
	}
	getAllComments(){
		return this.comments;
	}
	getInfo(){
		return this.infos;
	}
  
}
