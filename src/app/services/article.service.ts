import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Article } from '../model/Article';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

const httpOptions = {
  headers: new HttpHeaders({'Content-type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  articleUrl:any = "https://www.the-sam.site/articles";

  articleList:any;

  currentArticle:any;

  constructor(private http:HttpClient) { }

  getArticles():Observable<Article[]>{
    return this.http.get<Article[]>(this.articleUrl);
  }

  createArticle(data){
    this.articleList = data;
    this.http.post(this.articleUrl, this.articleList).subscribe(res=>{
      // console.log(res);
    })
  }

  getIndividualArticle(id):Observable<Article>{
    this.currentArticle = id;
    return this.http.get<Article>("https://www.the-sam.site/articles/" + id);
  }

  editArticle(data){
    this.http.put("https://www.the-sam.site/articles/" + this.currentArticle, data).subscribe(res=>{
    });
  }


  // author

  createAuthor(value){
    this.http.post("https://www.the-sam.site/authors", value).subscribe(res=>{
    });
  }

  getAuthors(){
    return this.http.get("https://www.the-sam.site/authors");
  }
}
