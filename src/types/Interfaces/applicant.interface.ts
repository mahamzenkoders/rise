interface Experience {
    company: string;
    position: string;
    startDate: string;
    endDate: string;
  }
  
  interface Document {
    name: string;
    url: string;
  }
 export interface Applicant {
    name: string;
    location: string;
    degree: string;
    gender: string;
    age: number;
    tags: string[];
    jobs: string[];
    selectedJob: string;
    bio: string;
    experience: Experience[];
    documents: Document[];
  }
  