import { HttpClient } from '@angular/common/http';
import { ApplicationRef, ComponentFactoryResolver, ComponentRef, EmbeddedViewRef, Injectable, Injector, Type } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, UrlTree } from '@angular/router';
import { Location } from '@angular/common';
import { BehaviorSubject, filter, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  timer: number = 0;

  private user: BehaviorSubject<any | null | undefined> = new BehaviorSubject<any | null | undefined>(undefined);

  constructor(private titleService: Title, private http: HttpClient, private router: Router, private _location: Location,
    private resolver: ComponentFactoryResolver,
    private injector: Injector,
    private applcationRef: ApplicationRef) {
    this.loadUser();
  }

  public getAllBadgesUser(id: number) {
    return this.http.get<any>(`http://localhost:3000/badges_user?uid=${id}`).pipe((res) => {
      return res;
    })
  }
  createCookies() {
    localStorage.removeItem('SETTING_USER');
    localStorage.setItem('SETTING_USER', JSON.stringify({
      mode: "light",
      activedCookied: false,
    }));
    localStorage.removeItem('STORAGE_DATA');
    this.getAllBadgesUser(1).subscribe((res) => localStorage.setItem('STORAGE_DATA', JSON.stringify(res)))
    if (localStorage.getItem('TOKEN_USER') || localStorage.getItem('USER'))
      this.redirect(['/dashboard'], null)
    else
      this.redirect(['/sign-in'], null)
  }
  clearCookies() {
    localStorage.removeItem('SETTING_USER');
    localStorage.removeItem('STORAGE_DATA');
    localStorage.removeItem('TOKEN_USER');
    localStorage.removeItem('USER');
    this.redirect(['/sign-in'], null)
  }
  public loadUser() {
    const token = localStorage.getItem('TOKEN_USER');
    const user = localStorage.getItem('USER');
    if (token && user) {
      this.user.next(user);
    } else {
      this.user.next(null);
    }
  }
  public createTokenUser(user: any) {
    localStorage.setItem('TOKEN_USER', user.uid);
    const dataUser = {
      id: user.id,
      uid: user.uid
    }
    localStorage.setItem('USER', JSON.stringify(dataUser))
  }
  public redirect(url: any[], param: any | undefined | null): void {
    window.scroll(0, 0);
    if (param === undefined || param === null) {
      this.router.navigate(url);
    } else {
      this.router.navigate(url, param);
    }
  }
  public getCurrentUser() {
    return this.user.asObservable();
  }
  public getCurrentUserId() {
    return this.user.getValue()!.id;
  }

  public signOut() {
    localStorage.removeItem('TOKEN_USER');
    localStorage.removeItem('USER');
    this.user.next(null);
  }

  // changeColorScheme() {
  //   const localStorageSetting = localStorage.getItem("SETTING_USER");
  //   if (localStorageSetting) {
  //     const setting = JSON.parse(localStorageSetting);
  //     if (setting.mode !== 'dark' || (!('SETTING_USER' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  //       document.documentElement.classList.add('dark')
  //       setting.mode = 'dark';
  //       this.setting = setting;
  //     } else {
  //       document.documentElement.classList.remove('dark')
  //       setting.mode = 'light';
  //       this.setting = setting;
  //     }
  //   }
  // }

  public islocked: boolean = false;
  public startTimer() {
    const timeInterval = setInterval(() => {
      this.timer--;
      if (this.timer < 0) {
        clearInterval(timeInterval)
        this.timer = 0
      }
    }, 1000)
  }
  public controleTimer(timer: number) {
    this.timer = timer
  }
  public getTimer(): number {
    return this.timer
  }
  refresh(): void {
    this.router.navigateByUrl("/refresh", { skipLocationChange: true }).then(() => {
      this.router.navigate([decodeURI(this._location.path())]);
    });
  }
  setTitlePage(text: string) {
    this.titleService.setTitle(text)
  }
  getCountries() {
    return this.http.get('https://restcountries.com/v2/all');
  }
  postSubscribe(data: any) {
    return this.http.get<any>(`http://localhost:3000/post`, data).pipe(map((res: any) => {
      return res;
    }))
  }
  saveStorageData(data: any) {
    localStorage.setItem('STORAGE_DATA', JSON.stringify(data));
  }
  getStorageData(): any {
    const storageData = localStorage.getItem('STORAGE_DATA');
    if (storageData)
      return JSON.parse(storageData);
  }
  // public createPopup(componentRef: Type<PopupComponent>, message: string, image: string) {
  //   const c: ComponentRef<PopupComponent> = this.resolver.resolveComponentFactory(componentRef).create(this.injector);
  //   this.popupComponent = c;
  //   this.popupComponent.instance.setProprity(message, image);
  //   this.applcationRef.attachView(c.hostView);
  //   const ele = (c.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
  //   document.getElementById('body')?.appendChild(ele)
  // }
  // public destroyPopup() {
  //   this.popupComponent.destroy();
  // }

  apiUrl = "http://localhost:3000/user";

  apiArticleUrl = "http://localhost:3000/article";

  getAll() {
    return this.http.get(this.apiUrl).pipe(map((res: any) => {
      return res;
    }));
  }
  public register(user: any) {
    return this.http.post(this.apiUrl, user);
  }
  public loginUser(email: string, password: string) {
    return this.http.get(`${this.apiUrl}?email=${email}&password=${password}`).pipe(map((res) => {
      return res
    }))
  }
  public setStatutUser(user: any){
    return this.http.put(`${this.apiUrl}/${user.id}`, user).pipe(map((res) => {
      return res
    }))
  }
  public getUserById(user: any) {
    return this.http.get(`${this.apiUrl}?id=${user.id}`).pipe(
      map((res: any) => {
        if (res.length > 0)
          if (res[0].uid == user.uid)
            return res[0]
      })
    )
  }
  public updateUser(user: any) {
    return this.http.put(`${this.apiUrl}/${user.id}`, user).pipe(map((res: any) => {
      return res;
    }))
  }
  public getArticleList() {
    return this.http.get(`${this.apiArticleUrl}`).pipe(map((res: any) => {
      return res;
    }))
  }
  public getArticle(id: number) {
    return this.http.get(`${this.apiArticleUrl}?id=${id}`).pipe(map((res: any) => {
      return res;
    }))
  }
  public getArticleListByIdCollection(id: number) {
    return this.http.get(`${this.apiArticleUrl}?idCollection=${id}`).pipe(map((res: any) => {
      return res;
    }))
  }
  public getCollection(id: number) {
    return this.http.get(`http://localhost:3000/collection?id=${id}`).pipe(map((res: any) => {
      return res;
    }))
  }

}
