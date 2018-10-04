import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../model/Article';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css']
})
export class ArticleEditComponent implements OnInit {

  article:any;

  data:any;

  createddate = Date.now();

  createdDateStart:any;

  authors:any;

  constructor(private articleService:ArticleService, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    let currentArticle:string = this.activatedRoute.snapshot.params['id'];
    this.articleService.getIndividualArticle(currentArticle).subscribe(article=>{
      this.article = article;
      // console.log(this.article);
    })

    this.articleService.getAuthors().subscribe(authors=>{
      this.authors = authors;
      // console.log(authors);
    })
  }

  articleEdit(articleForm:NgForm){
    if(articleForm.value.articleTitle === undefined || articleForm.value.articleType === undefined || articleForm.value.articleAuthor === undefined){
      alert("Please fill in all fields");
    }else{
      // this.data = {
      //   "data":articleForm.value,
      //   "created":this.createddate,
      //   "updated":""
      // }
      // this.articleService.createArticle(this.data);
      // let data = JSON.stringify(articleForm.value);
      let data = articleForm.value;
      this.articleService.editArticle(data);
      articleForm.reset();
    }
  }

}
