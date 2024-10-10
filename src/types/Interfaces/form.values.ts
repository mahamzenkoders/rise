export interface formValues {
  dateOfBirth: string;
  location: string;
  city: string;
  email: string;
  phoneNo: string;
  gender: string;
  areasOfinterest: AreaOfInterest[];
  education: string;
  experiences: Experience[]; 
  bio: string;
}

export interface AreaOfInterest {
  category: string;
  interest: string;
}

export interface Experience {
  position: string;
  companyName: string;
  startDate: string | null; 
  endDate: string | null; 
}
