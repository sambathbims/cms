import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  constructor(private articleService:ArticleService) { }

  ngOnInit() {
  }

  addAuthor(authorForm:NgForm){
    if(authorForm.value.name === undefined || authorForm.value.email === undefined){
      alert('Please fill the fields')
    }else{
      this.articleService.createAuthor(authorForm.value);
      authorForm.reset();
    }
  }

}
