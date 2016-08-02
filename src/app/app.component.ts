import { Component, Input } from '@angular/core';
import { Checkbox } from 'primeng/primeng';
import { InputText } from 'primeng/primeng';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  directives: [InputText, Checkbox]
})


export class AppComponent {  
    
    title = 'app works!';

    value: string = "";

    selectedCities: string[] = [];

}
