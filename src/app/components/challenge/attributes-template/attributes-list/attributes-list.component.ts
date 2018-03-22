import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../../services/validators.service';

@Component({
  selector: 'app-attributes-list',
  templateUrl: './attributes-list.component.html',
})
export class AttributesListComponent{

  @Input('category') category: any;

  dataTypes: string[] = ['String', 'Object'];
  formats: {} = {
    'String': ['None', 'Number', 'Boolean', 'Date-Time', 'CDATA', 'URI'],
    'Object': ['None']
  };

  constructor(private fb: FormBuilder, private validator: ValidatorsService) { }


  load() {
    const formControls = this.addFormItem();
    const formItems = (<FormArray>this.category.controls.items);
    formItems.push(formControls);
    return formItems;
  }

  addFormItem() {
    const formTemplate = this.fb.group({
      name: [''],
      description: [''],
      deviceResource: [''],
      defaultValue: [''],
      dataType: ['String'],
      format: ['None'],
      rangeMin: [],
      rangeMax: [],
      measureUnit: [],
      precision: [],
      accuracy: [],
      newEnumeration: [''],
      enumerations: this.fb.array([])
    });
    formTemplate.controls['name'].setValidators([
      Validators.required,
      this.validator.validNotUnique.bind(this.category)
    ]);
    formTemplate.controls['rangeMin'].setValidators([
      this.validator.validRange.bind(formTemplate)
    ]);
    formTemplate.controls['rangeMax'].setValidators([
      this.validator.validRange.bind(formTemplate)
    ]);
    formTemplate.controls['precision'].setValidators([
      this.validator.validPrecision.bind(formTemplate)
    ]);
    formTemplate.controls['accuracy'].setValidators([
      this.validator.validAccuracy.bind(formTemplate)
    ]);
    return formTemplate;
  }

 

  addItem(category: FormArray) {
    const formItems = (<FormArray>category);
    const formControls = this.addFormItem();
    formItems.push(formControls);
    this.category.reset(this.category.value);
  }

  deleteAttribute(attribute: any, position: number) {
    const currentAttribute = <FormArray>attribute;
    currentAttribute.removeAt(position);
    this.category.reset(this.category.value);
  }

  addEnumeration(enumeration: any, enumerationText: any) {
    if (enumerationText.value.length === 0) {
      return;
    }
    const currentEnumeration = <FormArray>enumeration;
    currentEnumeration.push(new FormControl(enumerationText.value, [Validators.required]));
    enumerationText.setValue('');
  }

  removeEnumeration(enumeration: any, position: number) {
    const currentEnumeration = <FormArray>enumeration;
    currentEnumeration.removeAt(position);
  }

  resetValues(item: any) {
    const initValue = null;
    if (item.format.value === 'Number') {
      item.rangeMin.reset(0);
      item.rangeMax.reset(0);
      item.measureUnit.reset();
      item.precision.reset(0);
      item.accuracy.reset(0);
      item.newEnumeration.reset('');
      while ((<FormArray>item.enumerations).length) {
        (<FormArray>item.enumerations).removeAt(0);
      }
    } else {
      item.rangeMin.reset();
      item.rangeMax.reset();
      item.measureUnit.reset();
      item.precision.reset();
      item.accuracy.reset();
      item.newEnumeration.reset('');
      item.enumerations.reset([]);
    }
  }
}
