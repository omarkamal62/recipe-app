import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Sample Recipe',
      'Description',
      'https://a7m3f5i5.rocketcdn.me/wp-content/uploads/2015/09/moms-spaghetti-sauce-recipe-a-healthy-slice-of-life-6-of-6-800x600.jpg'
    ),
    new Recipe(
      'A Sample Recipe',
      'Description',
      'data:image/jpeg;base64,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'
    ),
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();

  onSelectRecipe(recipe: Recipe){
    this.recipeSelected.emit(recipe);
  }

  constructor() {}

  ngOnInit(): void {}
}
