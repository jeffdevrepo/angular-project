import { Component, OnInit } from '@angular/core';
import { Dog } from './app.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-project';

  public dogsName: string = "";
  public dog: Dog = new Dog();
  public dogs: Dog[] = [];

  ngOnInit() {

  }


  addDog(): void {
    this.dog.status = "listed";
    this.dog.name = this.dogsName;
    this.dogs.push(this.dog);

    this.dog = new Dog();
    this.dogsName = "";
    console.log(this.dogs);
  }

  changeListedStatus(dogObj: Dog): string {
    return dogObj.status = 'examining';
  }

  changeExaminingStatus(dogObj: Dog): string {
    return dogObj.status = 'finally_back_to_hooman';
  }
}
