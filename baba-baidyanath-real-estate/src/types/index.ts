export type TabType = 
  | 'home'
  | 'about'
  | 'plotting'
  | 'locations'
  | 'association'
  | 'calculator'
  | 'contact'
  | 'privacy'
  | 'terms'
  | 'disclaimer'
  | 'projects';

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
  preferredLocation?: string;
  propertyType: 'Residential Plot' | 'Land Parcel' | 'Other';
  plotSizeRequirement?: string;
  budgetRange: string;
  purpose: 'Investment' | 'Personal Use' | 'Future Development' | 'Other';
  preferredContactMethod?: 'Phone' | 'WhatsApp' | 'Email';
  message: string;
}

export interface EnquiryFormData {
  name: string;
  phone: string;
  email: string;
  preferredLocation: string;
  propertyType: string;
  plotSizeRequirement: string;
  budgetRange: string;
  purpose: string;
  preferredContactMethod: string;
  message: string;
}
