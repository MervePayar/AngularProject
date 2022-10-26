import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../services/alertifyService/alertify.service';
import { CategoryService } from '../services/categoryService/category.service';
import { Category } from './category';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers:[CategoryService]
})
export class CategoryComponent implements OnInit {

  constructor(private categoryService:CategoryService,
    private alertifyService:AlertifyService) { }
  title="Kategori Listesi"
  category:Category[];
  
  
  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data=>{
      this.category=data
    })
  }

}
