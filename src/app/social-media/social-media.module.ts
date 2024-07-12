import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialMediaRoutingModule } from './social-media-routing.module';
import { PostService } from './services/post.service';
import { PostResolver } from './resolvers/post.resolver';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SocialMediaRoutingModule
  ],
  providers: [ 
    PostService,
    PostResolver 
  ]
})
export class SocialMediaModule { }
