import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { Category } from '../category.dto';

@Component({
  selector: 'category-form',
  standalone: true,
  imports: [MatButtonModule, MatInputModule, ReactiveFormsModule, MatCardModule],
  templateUrl: './form.component.html',
  styles: ``
})
export class CategoryFormComponent {
private fb = inject(FormBuilder);
categoryForm = this.fb.group({
  id: [null],
  name: ["", [Validators.required, Validators.minLength(3)]],
  description: ["", Validators.required],
});
@Input()
set category(category:Category){
  this.categoryForm.setValue(category);
}
@Output() back = new EventEmitter();
@Output() save = new EventEmitter<Category>();

onSubmit() {
  console.log("Button save clicked in the CategoryFormComponent");
  this.save.emit(this.categoryForm.value as Category);
}
onBack(){
  this.back.emit();
}
}
