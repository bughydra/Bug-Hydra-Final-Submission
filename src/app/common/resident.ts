export class Resident {

  constructor(public residentSpecialId: string,
              public residentName: string,
              public isActive: number,
              public email: string,
              public phone: string,
              public notes: string,
              public registrationDate: string) {
  }
}
