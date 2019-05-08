import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';

@Injectable()
export class DataStorageService {
  constructor(
    private httpClient: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}

  storeRecipes() {
    const token = this.authService.getToken();

    return this.httpClient.put(
      'https://angular-course-practice.firebaseio.com/recipes.json' + token,
      this.recipeService.getRecipes(),
      {
        observe: 'body',
        params: new HttpParams().set('auth', token)
      }
    );
  }

  getRecipes() {
    const token = this.authService.getToken();
    return this.httpClient
      .get<Recipe[]>(
        'https://angular-course-practice.firebaseio.com/recipes.json?auth=' +
          token
      )
      .pipe(
        map(recipes => {
          for (const recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        })
      )
      .subscribe((recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      });
  }
}
