import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-populationcrud',
  templateUrl: './populationcrud.component.html',
  styleUrls: ['./populationcrud.component.scss']
})
export class PopulationcrudComponent {

  PopulationArray : any[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;

  state: string ="";
  date: string ="";
  sex: string ="";
  age: string ="";
  ethnicity: string ="";
  population: string ="";
  currentPopulationID = "";

  constructor(private http: HttpClient ) 
  {
    this.getAllPopulation();
  }

  ngOnInit(): void {
  }

  getAllPopulation()
  { 
    this.http.get("http://localhost:8085/api/population_state")
    .subscribe((resultData: any)=>
    {
        this.isResultLoaded = true;
        console.log(resultData.data);
        this.PopulationArray = resultData.data;
    });
  }


  


  register()
  {
   // this.isLogin = false; 
   // alert("hi");
    let bodyData = {
      "state" : this.state,
      "date" : this.date,
      "sex" : this.sex,
      "age" : this.age,
      "ethnicity" : this.ethnicity,
      "population" : this.population,
    };

    this.http.post("http://localhost:8085/api/population_state/add",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Population Add Successfully")
        this.getAllPopulation();
      //  this.name = '';
      //  this.address = '';
      //  this.mobile  = 0;
    });
  }

  setUpdate(data: any) 
  {
   this.state = data.state;
   this.date = data.date;
   this.sex = data.sex;
   this.age = data.age;
   this.ethnicity = data.ethnicity;
   this.population = data.population;
  

   this.currentPopulationID = data.id;
 
  }

  UpdateRecords()
  {
    let bodyData = 
    {
      "state" : this.state,
      "date" : this.date,
      "sex" : this.sex,
      "age" : this.age,
      "ethnicity" : this.ethnicity,
      "population" : this.population,
    };
    
    this.http.put("http://localhost:8085/api/population_state/update"+ "/"+ this.currentPopulationID,bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Population Updated")
        this.getAllPopulation();
      
    });
  }
 
  save()
  {
    if(this.currentPopulationID == '')
    {
        this.register();
    }
      else
      {
       this.UpdateRecords();
      }       

  }


  setDelete(data: any)
  {
    this.http.delete("http://localhost:8085/api/population_state/delete"+ "/"+ data.id).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Population Deleted")
        this.getAllPopulation();
    });
  }
}