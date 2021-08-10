import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private transferenciaList: any[];

  constructor() {
    this.transferenciaList = [];
  }

  get transferencias(): any[] {
    return this.transferenciaList;
  }

  adicionar(transferencia: any): void {
    this.setData(transferencia);
    this.transferenciaList.push(transferencia);
  }

  private setData(transferencia: any): void {
    transferencia.data = new Date();
  }
}
