import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

export class RecipeService {
  slService = new ShoppingListService;

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

  getRecipe(id: number) {
    return this.recipes[id];
  }

  getRecipeId(recipe: Recipe) {
    return this.recipes.indexOf(recipe);
  }

  addIngredientsToSL(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

}
