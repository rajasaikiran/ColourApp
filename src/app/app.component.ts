
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  


// created empty array for storing
  Colors : string[]=[];

// Add colors to the empty array
  addColor(val)
  {
    
  let enteredcolor = (val.value)
    
  document.body.style.backgroundColor = enteredcolor;
  
   
if(this.Colors.includes(enteredcolor))
{
  alert('This color is already exist')
}
  else
  {
    this.Colors.push(enteredcolor)

  }

}
}
