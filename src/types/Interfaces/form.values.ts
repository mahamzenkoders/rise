export interface formValues{
 dateOfBirth:string,
 location:string,
 city:string,
 email:string,
 phoneNo:string,
 gender:string,
 areasOfinterest:AreaOfInterest[],
 education:string,
 position:string,
 companyName:string,
 StartDate:string,
 EndDate:string,
 bio:string,
}

export interface AreaOfInterest {
    category: string;
    interest: string;
  }