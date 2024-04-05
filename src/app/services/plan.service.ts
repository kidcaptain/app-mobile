import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  private _formations: any[] = [];

  private url: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getPlan() {
    return this.http.get<any>(`${this.url}/plans`).pipe(map((res: any) => {
      return res;
    }))
  }

  getPlanById(id: number) {
    return this.http.get<any>(`${this.url}/plans/${id}`).pipe(map((res: any) => {
      return res;
    }))
  }

  getPlanByIdPlan(id: number) {
    return this.http.get<any>(`${this.url}/plans?id=${id}`).pipe(map((res: any) => {
      return res;
    }))
  }

  getSubscribes() {
    return this.http.get<any>(`${this.url}/subscribes`).pipe(map((res: any) => {
      return res;
    }))
  }
  
  getSubscribesByIdPlan(id: number, uid : number) {
    return this.http.get<any>(`${this.url}/subscribes?idPlan=${id}&uid=${uid}`).pipe(map((res: any) => {
      return res;
    }))
  }

  postSubscribe(data : any){
    return this.http.post<any>(`${this.url}/subscribes`, data).pipe(map((res: any) => {
      return res;
    }))
  }

  setSubscribesByIdPlan(data: any) {
    return this.http.put<any>(`${this.url}/subscribes/${data.id}`, data).pipe(map((res: any) => {
      return res;
    }))
  }

  getVideoList() {
    return this.http.get<any>(`${this.url}/videos`).pipe(map((res: any) => {
      return res;
    }))
  }

  getVideoListByPlan(id : number) {
    return this.http.get<any>(`${this.url}/videos?idPlan=${id}`).pipe(map((res: any) => {
      return res;
    }))
  }

  getVideoById(id : number) {
    return this.http.get<any>(`${this.url}/videos/${id}`).pipe(map((res: any) => {
      return res;
    }))
  }

  getVideoUser(uid: number){
    return this.http.get<any>(`${this.url}/videos_user?uid=${uid}`).pipe(map((res: any) => {
      return res;
    }))
  }

  getVideoUserByUidAndIdVideo(uid : number, id : number){
    return this.http.get<any>(`${this.url}/videos_user?uid=${uid}&idVideo=${id}`).pipe(map((res: any) => {
      return res;
    }))
  }

  postVideoUser(data : any) {
    return this.http.post<any>(`${this.url}/videos_user`, data).pipe(map((res: any) => {
      return res;
    }))
  }

  getVideoListFilterByTime(gte : string, lte : string, id : number) {
    return this.http.get<any>(`${this.url}/videos?time_gte=${gte}&time_lte=${lte}&idPlan=${id}`).pipe(map((res: any) => {
      return res;
    }))
  }

  getVideoListTargetByCompetence(like: string, id : number){
    return this.http.get<any>(`${this.url}/videos?competences_like=${like}&idPlan=${id}`).pipe(map((res: any) => {
      return res;
    }))
  }

  getTestList() {
    return this.http.get<any>(`${this.url}/questionnaire`).pipe(map((res: any) => {
      return res;
    }))
  }

  getTestListByPlan(id : number) {
    return this.http.get<any>(`${this.url}/questionnaire?idPlan=${id}`).pipe(map((res: any) => {
      return res;
    }))
  }

  getTestById(id : number) {
    return this.http.get<any>(`${this.url}/questionnaire/${id}`).pipe(map((res: any) => {
      return res;
    }))
  }

  getTestUser(uid : number){
    return this.http.get<any>(`${this.url}/questionnaire_user?uid=${uid}`).pipe(map((res: any) => {
      return res;
    }))
  }

  getTestUserByUidAndIdTest(uid : number, id : number){
    return this.http.get<any>(`${this.url}/questionnaire_user?uid=${uid}&idQuestionnaire=${id}`).pipe(map((res: any) => {
      return res;
    }))
  }

  postTestUser(data : any) {
    return this.http.post<any>(`${this.url}/questionnaire_user`, data).pipe(map((res: any) => {
      return res;
    }))
  }

  setTestUser(data : any) {
    return this.http.put<any>(`${this.url}/questionnaire_user/${data.id}`, data).pipe(map((res: any) => {
      return res;
    }))
  }

  getTestListFilterByTime(gte : string, lte : string, id : number) {
    return this.http.get<any>(`${this.url}/questionnaire?time_gte=${gte}&time_lte=${lte}&idPlan=${id}`).pipe(map((res: any) => {
      return res;
    }))
  }

  getTestListTargetByCompetence(like: string, id : number){
    return this.http.get<any>(`${this.url}/questionnaire?competences_like=${like}&idPlan=${id}`).pipe(map((res: any) => {
      return res;
    }))
  }

  getQuestionList(id: number){
    return this.http.get<any>(`${this.url}/question?idQuestionnaire=${id}&_start=0&_limit=10`).pipe(map((res: any) => {
      return res;
    }))
  }
  
}
