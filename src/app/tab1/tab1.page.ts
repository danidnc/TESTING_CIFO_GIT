import { Component, OnInit } from '@angular/core';
import { PostsServiceService } from 'src/services/posts-service.service';
/* import { IPosts } from 'src/shared/IPosts'; */

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  postsData: any;

  constructor(private service: PostsServiceService) {}

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.service.makeRequest().then((data) => {
      this.postsData = data;
      console.log(this.postsData);
    });
  }
}
