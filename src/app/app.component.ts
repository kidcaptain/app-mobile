import { Component, ElementRef, ViewChild } from '@angular/core';
import { AppService } from './services/app.service';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Formation', url: '/folder/plan', icon: 'terminal' },
    { title: 'Apprentisage', url: '/folder/apprentiship', icon: 'cellular' },
    { title: 'Communauté', url: '/folder/communaute', icon: 'chatbubbles' },
    { title: 'Boutique', url: '/folder/shop', icon: 'storefront' },
  ];
  public _user = JSON.parse(`${localStorage.getItem('USER')}`)
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  public user: any;

  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;

  logActiveIndex() {
    if (this.swiperRef) {
      console.log(this.swiperRef);
    }
  }
  constructor(private appService: AppService) {
  }

  onSlideChangeNext() {
    this.swiperRef?.nativeElement.swiper.slideNext();
  }
}
