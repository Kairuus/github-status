import { StatusService } from './../../services/status.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {

  statusData: any;
  components: any;

  constructor(
    private statusService: StatusService
  ){}

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this.statusService.getComponentStatus().subscribe(data => {
      this.statusData = data
      this.components = this.statusData.components;
    })
  }

  toggleDescription(div: HTMLElement, description: HTMLElement){
    if(div.style.display === 'none'){
      div.style.display = 'flex'
      description.hidden = true;
    }else{
      div.style.display = 'none';
      description.hidden = false;
    }
  }

}
