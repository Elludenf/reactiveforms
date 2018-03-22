import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import 'rxjs/Rx';

@Component({
  selector: 'app-attributes-template',
  templateUrl: './attributes-template.component.html'

})
export class AttributesTemplateComponent implements OnInit {

  form: FormGroup;

  @Input('categories') categories: string[];

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    if (this.form.valid) {
      console.log("Form Submitted!");
      this.form.reset(this.form.value);
    }

  }

  ngOnInit() {
    this.form = this.fb.group({
      categories: this.fb.array([])
    }
    );
    this.form.valueChanges
      .filter(data => this.form.valid)
      .subscribe(data => console.log(JSON.stringify(data)));

    const categories = (<FormArray>this.form.controls['categories']);
    for (let i = 0; i < this.categories.length; i++) {
      const categoryGroup = this.load(this.categories[i]);
      categories.push(categoryGroup);
    }

  }

  load(categoryName) {
    const categoryGroup = this.fb.group({
      categoryName: [categoryName],
      items: this.fb.array([])
    });
    return categoryGroup;

  }

}
