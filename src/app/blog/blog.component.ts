import { Component, OnInit } from '@angular/core';
import * as blogData from '../blogData.json';
import { BlogPost } from '../BlogPost';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogPosts: Array<BlogPost> = blogData;
  constructor() { }

  ngOnInit(): void {
  }


}
