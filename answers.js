//Please put you

#1 What is this code doing? How might it be improved?
return !this.allQuestions.filter(q => q.subThreadName == this.currentQuestion.subThreadName ) .filter(q => q.mrLevel == this.currentQuestion.mrLevel) .some( q => q.currentAnswer == "No")

// it is checking the array of questions that fit 3 parameters:
// the subthread name that matches the current objects threadname
// within that matching threadname, returning the objects that match the mrLevel param
// within that matching param, returning all answers that are listed as "YES"



#2 What is this code doing?
var oldAssessment = this.allQuestions.map( q => Object.assign({}, q));

// going through all questions object, assigning the new object information into a new object with the new values and assigning it to the variable oldAssessment

#3 What is this code doing?
const old = this.allQuestions.map(function(question: any) { return {...question}; })

// going through all questions and returning all questions and assigning them to the const of old.

#4 I have an array of objects, they are currently untyped. I'm unsure of how but mixed in with my normal objects ({ id, name, date, createdAt }), are null values. How would you eliminate the null values?

//you would just need to assign these with initial values to eliminate them from being null, i.e id: "", name: "", date: any, createdAt: any 


#5 In Angular 2+ how to you pass variable(s) from a parent to a child? answer in concept

import { Component } from '@angular/core';

@Component ({
  selector: 'header-component',
  template: 'file2.html'
  
export class FileOne {
...
private date: any;
headerMessage: string;
...
}
// file 2 -- header-component
import { FileOne } from "./location/fileOne";
            
<div>
  <header-component>{{FileOne.headerMessage}}</header-component>
</div>
