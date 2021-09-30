import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public arr =[
    {
      name: "temo",
      age: 27,
      status: false,
    },
    {
      name: "mariami",
      age: 23,
      status: true,
    },
    {
      name: "shako",
      age: 30,
      status: false,
    }
  ];
  public arr1: any[] = [];



  constructor(private router:ActivatedRoute) { }

  ngOnInit(): void {
    
    const age: number = Number(this.router.snapshot.queryParamMap.get('age'));
    this.arr1 = this.arr.filter( item => item.age > age )

  }
  filterItems(data: any){
    this.arr1 = this.arr.filter(item => item.age > data.age)
  }

}
