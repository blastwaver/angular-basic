
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-new-coursecomponent',
  templateUrl: './new-coursecomponent.component.html',
  styleUrls: ['./new-coursecomponent.component.css']
})
export class NewCoursecomponentComponent  {

  form = new FormGroup({
    name: new FormControl('',Validators.required),
    contact: new FormGroup({
      email: new FormControl(),
      phone: new FormControl(),
    }),
    topics: new FormArray([])
  });

  constructor(FormBuilder: FormBuilder) {
    FormBuilder.group({
      name: ['',Validators.required],
      contact: FormBuilder.group({
        email: [],
        phone: []
      }),
      topics: FormBuilder.array([])
    });
  }

  addTopic(topic: HTMLInputElement){
   (this.form.get('topics') as FormArray).push(new FormControl(topic.value));
  }

  removeTopic(topic: FormControl) {
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }
  get topics() {
    return this.form.get('topics') as FormArray;
  }

}
