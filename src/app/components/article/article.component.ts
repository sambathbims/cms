import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../model/Article';
import { ArticleEditComponent } from '../article-edit/article-edit.component';
import { Router } from '@angular/router';

@Component({ 
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  articles:Article[];

  currentArticle:any;

  constructor(private articleService:ArticleService, private router:Router) { }

  ngOnInit() {
    this.articleService.getArticles().subscribe(articles => {
      this.articles = articles;
      // console.log(articles);
    })
  }

  getindividualArticale(id){
    this.router.navigate([`article/${id}/edit`])
  }

}
