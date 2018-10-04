import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app/app.component';
import { HomeComponent } from '../app/components/home/home.component';
import { ArticleComponent } from '../app/components/article/article.component';
import { ArticleCreateComponent } from '../app/components/article-create/article-create.component';
import { ArticleEditComponent } from '../app/components/article-edit/article-edit.component';
import { AuthorsComponent } from '../app/components/authors/authors.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'articles',
    component: ArticleComponent,
  },
  {
    path: 'create-article',
    component: ArticleCreateComponent
  },
  {
    path: 'article/:id/edit',
    component: ArticleEditComponent
  },
  {
    path:'create-author',
    component: AuthorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
