export interface HospitalTreatment {
  id: string;
  name: string;
  city: string;
  country: string;
  starts: string;
  finishes: string;
  cause: string;
  treatment: string;
}

export interface HospitalTreatmentList {
  hospitals: HospitalTreatment[];
  count: number;
}
