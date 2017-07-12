import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'test', 'https://www.google.fi/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwiG-cGtlYTVAhVlDJoKHaWHBrgQjRwIBw&url=http%3A%2F%2Fwww.seriouseats.com%2F2017%2F03%2Fpressure-cooker-recipes.html&psig=AFQjCNGiCOzRnp5qob3ocKXxEnR_lIX7Cg&ust=1499963429731319')
  ];

  constructor() { }

  ngOnInit() {
  }

}
