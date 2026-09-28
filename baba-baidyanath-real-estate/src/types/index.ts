export type TabType = 
  | 'home'
  | 'about'
  | 'services'
  | 'projects'
  | 'calculator'
  | 'contact'
  | 'privacy'
  | 'terms'
  | 'disclaimer';

export interface CompanyData {
  name: string;
  shortName: string;
  cin: string;
  incorporationDate: string;
  status: string;
  type: string;
  roc: string;
  authorisedCapital: string;
  paidUpCapital: string;
  registeredAddress: string;
  officeAddress?: string;
  directors: string[];
  publicActivity: string;
  tagline: string;
  googleMapsUrl: string;
  mapEmbedUrl?: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: string;
  overview: string;
  deliverables: string[];
  audience: string;
  description?: string;
  features?: string[];
}

export interface ProjectItem {
  id: string;
  name: string;
  slug: string;
  statusText: string;
  plannedPhase: string;
  locationScope: string;
  typology: string;
  summary: string;
  isPublished: boolean;
}

export interface EnquirySubmission {
  id: string;
  createdAt: string;
  name: string;
  phone: string;
  email?: string;
  enquiryType: string;
  propertyRequirement?: string;
  budget?: string;
  preferredLocation?: string;
  message: string;
}

export interface EnquiryFormData {
  name: string;
  phone: string;
  email: string;
  enquiryType: string;
  propertyRequirement: string;
  budget: string;
  preferredLocation: string;
  message: string;
}
