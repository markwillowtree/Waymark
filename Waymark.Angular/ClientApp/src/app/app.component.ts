import { Component, OnInit } from '@angular/core';
import { Client, PersonDto } from './services/apiClient';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ClientApp';

  allPeople = new Array<PersonDto>();
  public get filteredPeople() {
    if (!this.filteredByAge) {
      return this.allPeople;
    }
    else
    {
      return this.allPeople.filter(x => x.age != undefined && x.age > 10);
    }
  }

  sortAscending = true;
  filteredByAge = false;

  constructor(private apiClient: Client) {
    
  }

  ngOnInit(): void {
    this.apiClient.getPeople().subscribe(people => {
      this.allPeople = people;
    });
  }

  filterByAge() {
    this.filteredByAge = !this.filteredByAge;
  }

  sortByAge() {
    this.allPeople = this.allPeople.sort((a, b) => {
      if (a.age == undefined || b.age == undefined) {
        return 0;
      }

      if (this.sortAscending) {
        return b.age - a.age;
      }
      else {
        return a.age - b.age;
      }
    });
    this.sortAscending = !this.sortAscending;
  }

  reverseNames() {
    for(let i = 0; i <this.allPeople.length; i++) {
      let name = this.allPeople[i].name;

      if (name == undefined) {
        continue;
      }
      
      this.allPeople[i].name = this.reverseStr(name);
    }
  }

  reverseStr(text: string) : string {
    return text.split('').reverse().join('');
  }

  downloadCsv() {
    this.downloadFile(this.filteredPeople);
  }

  downloadFile(data: any) {
    const replacer = (key: string, value: string) => value === null ? '' : value; 
    const header = Object.keys(data[0]);
    let csv = data.map((row: { [x: string]: any; }) => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','));
    csv.unshift(header.join(','));
    let csvArray = csv.join('\r\n');

    var blob = new Blob([csvArray], {type: 'text/csv' })
    saveAs(blob, "FEFIe123.csv");
  }

}
