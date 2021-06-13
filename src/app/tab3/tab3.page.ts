import { Component } from '@angular/core';
import { ListInfoServiceService } from 'src/services/list-info-service.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  listData: any;

  constructor(private info : ListInfoServiceService) {}

  ngOnInit() {
    this.listData = this.info.buildInfoList();
  }

}
