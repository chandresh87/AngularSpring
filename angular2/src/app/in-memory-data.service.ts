import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let countries = [
        {type: "COUNTRY__", id: "00000010", start_date: "01/01/1900",end_date: "01/01/2078",VALUE:"NORTHERN IRELAND"},
        {type: "COUNTRY__", id: "00000011", start_date: "01/01/1900",end_date: "01/01/2078",VALUE:"GREAT BRITAIN"},
        {type: "COUNTRY__", id: "00000012", start_date: "01/01/1900",end_date: "01/01/2078",VALUE:"ISLE OF MAN"},
        {type: "COUNTRY__", id: "00000012", start_date: "01/01/1900",end_date: "01/01/2078",VALUE:"AUSTRALIA"},
    ];
    let status = [
        {type: "STATUS_", id: "00000010", start_date: "01/01/1900",end_date: "01/01/2078",VALUE:"Married or in a civil partnership"},
        {type: "STATUS_", id: "00000011", start_date: "01/01/1900",end_date: "01/01/2078",VALUE:"Married"},
        {type: "STATUS_", id: "00000012", start_date: "01/01/1900",end_date: "01/01/2078",VALUE:"Divorced"},
    ];
    let childrendetails = [
      {birthNumberVal: '1234',nino:"AB123456",surnameName: 'John',forenameName:'Joana',otherName:'Joshu',dateOfBirth:'01/02/1978'},
        {birthNumberVal: '4567',nino:"AN45678",surnameName: 'Mathew',forenameName:'Sandra',otherName:'Joshu',dateOfBirth:'23/04/2001'},
         {birthNumberVal: '890',nino:"DE123456",surnameName: 'Luke',forenameName:'Anna',otherName:'Mary',dateOfBirth:'12/12/2005'},
        {birthNumberVal: '3214',nino:"JK123456",surnameName: 'Mark',forenameName:'Tessa',otherName:'Adona',dateOfBirth:'25/10/1990'},
        {birthNumberVal: '113',nino:"AE12345",surnameName: 'King',forenameName:'King',otherName:'King',dateOfBirth:'05/02/2016'}
    ];

   let config = [
        {type: "COUNTRY__", id: "00000010", start_date: "01/01/1900",end_date: "01/01/2078",VALUE:"NORTHERN IRELAND"},
        {type: "COUNTRY__", id: "00000011", start_date: "01/01/1900",end_date: "01/01/2078",VALUE:"GREAT BRITAIN"},
        {type: "COUNTRY__", id: "00000012", start_date: "01/01/1900",end_date: "01/01/2078",VALUE:"ISLE OF MAN"},
        {type: "COUNTRY__", id: "00000012", start_date: "01/01/1900",end_date: "01/01/2078",VALUE:"AUSTRALIA"},
    ];
    return {childrendetails,countries,status, config};
  }
}