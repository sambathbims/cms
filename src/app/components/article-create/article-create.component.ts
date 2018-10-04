import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../model/Article';
import { NgForm } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.css']
})
export class ArticleCreateComponent implements OnInit {

  data:any;

  authors:any;

  createddate = Date.now();

  constructor(private articleService:ArticleService, private router:Router) { }

  ngOnInit() {
    this.articleService.getAuthors().subscribe(authors=>{
      this.authors = authors;
      // console.log(authors);
    })
  }

  articleCreate(articleForm:NgForm){
    if(articleForm.value.articleTitle === undefined || articleForm.value.articleType === undefined || articleForm.value.articleAuthor === undefined){
      alert("Please fill in all fields");
    }else{
      let data = articleForm.value;
      this.articleService.createArticle(data);
      articleForm.reset();
      this.router.navigate(['/articles']);      
    }
  }
}
