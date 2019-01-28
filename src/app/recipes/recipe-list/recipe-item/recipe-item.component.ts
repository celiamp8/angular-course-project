import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;
  @Input() index: number;

  ngOnInit() {
  }

  addRecipeItem(item) {
    this.recipe.name = item.name;
    this.recipe.description = item.description;
    this.recipe.imagePath = item.imagePath;
  }

}
