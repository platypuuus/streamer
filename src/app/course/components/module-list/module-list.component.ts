import { Component, Input, OnInit } from '@angular/core';
import { MediaType } from '../../types/media-type';
import { SelectModuleType } from '../../types/select-module-type';
import { UiModule } from 'src/app/ui/ui.module';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.scss']
})
export class ModuleListComponent implements OnInit {
  public moduleTime : number=0;

  public animationEnable=false;
    public showedModules = false;
  @Input() public moduleInfo: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.moduleInfo);

    //get module duration
    for (let i = 0; i < this.moduleInfo.medias.length; i++) {
      this.moduleTime += this.moduleInfo.medias[i].duration;
      
    }
  }
  public onClick(event: any): void {
    this.moduleInfo.isSelected = !this.moduleInfo.isSelected;
  }
}
