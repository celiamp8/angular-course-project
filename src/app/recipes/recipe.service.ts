import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A pizza',
      'This is just a test',
      'https://img.bestrecipes.com.au/rZFo7F8i/h300-w400-cscale-1495077669/br-api/asset/20771/super-easy-pizza-dough-recipe.jpg',
      [new Ingredient('Tomato', 2),
      new Ingredient('Dough', 1)]
    ),
    new Recipe(
      'A pizza, but better',
      'This is just a test 2',
      'https://img.bestrecipes.com.au/rZFo7F8i/h300-w400-cscale-1495077669/br-api/asset/20771/super-easy-pizza-dough-recipe.jpg',
      [new Ingredient('Tomato', 1),
      new Ingredient('Dough', 1),
      new Ingredient('Mozzarella', 3)]
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }

}
