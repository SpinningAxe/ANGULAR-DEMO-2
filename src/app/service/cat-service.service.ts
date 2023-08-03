import { Injectable } from '@angular/core';
import { catFacts } from '../model/catFacts.model';
import { HttpClient } from '@angular/common/http';
import { StateObservable } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class CatServiceService {
  constructor(private httpService: HttpClient) {}

  async getCatFacts(maxLength: number, limit: number): Promise<catFacts[]> {
    let result: catFacts[] = [];
    let responseFact = this.httpService.get(
      `https://catfact.ninja/fact?max_length=${maxLength}&limit=${limit}`
    );

    let responseImage = this.httpService.get(
      `http://api.thecatapi.com/v1/images/search?limit=${limit}`
    );
    let promiseFact = await new Promise<catFacts[]>((resolve, reject) => {
      responseFact.subscribe((data: any) => {
        resolve(data['data']);
      });
    });
    let promiseImage = new Promise<any>((resolve, reject) => {
      responseImage.subscribe((data: any) => {
        resolve(data);
      });
    });

    let data = await Promise.all([promiseFact, promiseImage]);
    let facts: catFacts[] = data[0];
    let images: any[] = data[1];
    facts.forEach((fact, index) => {
      result.push({
        id: fact.id,
        fact: fact.fact,
        image: images[index].image,
        length: fact.length,
      });
    });
    return result;
  }

  // async getCatFacts(maxLength: number, limit: number):StateObservable{
  //   let result: catFacts[];
  //   let response = this.httpService.get<catFacts[]>(`${maxLength}${limit}`)
  //   let data = await new Promise<catFacts[]>((resolve,reject)=>{
  //     response.subscribe(
  //       (data:any)=>{
  //         console.log(data);
  //         resolve(data)
  //       }
  //     )
  //   })
  //   result = data as catFacts[]
  // }

  // async getCatImage(limit: number):Observable<any>{
  //   return result = this.httpService.get<catFacts[]>(`${maxLength}${limit}`)
  // }
}
