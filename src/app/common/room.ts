export class Room {


  constructor(public id: string,
              public roomNumber: string,
              public occupation: string,
              public view: string,
              public price: number,
              public amountToBePaid: number,
              public numberOfResidents: number,
              public capacity: number,
              public lastPayment: string,
              public nextPayment: string) {
  }
}
