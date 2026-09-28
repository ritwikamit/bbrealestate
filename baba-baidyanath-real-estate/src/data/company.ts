import { CompanyData } from '../types';

export const COMPANY_DATA: CompanyData = {
  name: "Baba Baidyanath Real Estate Private Limited",
  shortName: "Baba Baidyanath Real Estate",
  cin: "U68100BR2024PTC072121",
  incorporationDate: "7 November 2024",
  status: "Active",
  type: "Private Limited Company (Non-Government, Unlisted)",
  roc: "Registrar of Companies, Patna",
  authorisedCapital: "₹1,00,000",
  paidUpCapital: "₹1,00,000",
  officeAddress: "Kunda House, Near PNB Bank, MG Road, Yodha Nagar, Aurangabad-Bihar-824101, Bihar",
  registeredAddress: "C/O Kundan Kumar Singh, Near Gayatri Mandir, Aurangabad, Bihar 824101, India",
  directors: ["Kundan Kumar Singh", "Vikas Kumar Singh"],
  publicActivity: "Real-estate activities with own or leased property",
  tagline: "Building Value. Creating Places.",
  googleMapsUrl: "https://www.google.com/maps/place/24%C2%B045'03.2%22N+84%C2%B022'10.8%22E/@24.750898,84.3696775,18z/data=!4m4!3m3!8m2!3d24.750898!4d84.3696775",
  mapEmbedUrl: "https://maps.google.com/maps?q=24.750898,84.3696775&hl=en&z=17&output=embed"
};

export const SIYARAM_DATA = {
  name: "Siyaram & Siya Shop",
  brand: "Siyaram's",
  category: "Authorised Retail & Premium Textile Showroom",
  landmark: "Near PNB Bank, MG Road, Yodha Nagar, Aurangabad, Bihar 824101",
  relationship: "Promoter's Flagship Commercial Landmark",
  justdialUrl: "https://www.justdial.com/Aurangabad-Bihar/Siyaram-And-Siya-Shop-Near-Pnb-Bank-Yodha-Nagar/9999P6186-6186-160224135143-H1K6_BZDET",
  googleMapsUrl: "https://www.google.com/maps/place/24%C2%B045'03.2%22N+84%C2%B022'10.8%22E/@24.750898,84.3696775,18z/data=!4m4!3m3!8m2!3d24.750898!4d84.3696775",
  note: "Located at the same building landmark as the corporate real estate office."
};

export const CORPORATE_FACTS = [
  {
    label: "Incorporation",
    value: "7 Nov 2024",
    detail: "Registered under Companies Act, 2013"
  },
  {
    label: "Corporate Status",
    value: "Active",
    detail: "MCA Compliant & Verified"
  },
  {
    label: "ROC Jurisdiction",
    value: "RoC Patna",
    detail: "State of Bihar Registration"
  },
  {
    label: "Corporate Office",
    value: "Aurangabad",
    detail: "Kunda House, MG Road, Pin 824101"
  }
];

export interface VerifiedRegistryItem {
  id: 'falconebiz' | 'zaubacorp' | 'dnb' | 'tracxn' | 'tofler' | 'justdial';
  name: string;
  category: string;
  url: string;
  badge: string;
  description: string;
  identifierType: string;
  identifierValue: string;
  status: string;
}

export const VERIFIED_REGISTRIES: VerifiedRegistryItem[] = [
  {
    id: "zaubacorp",
    name: "Zauba Corp",
    category: "Indian Corporate Database",
    url: "https://www.zaubacorp.com/BABA-BAIDYANATH-REAL-ESTATE-PRIVATE-LIMITED-U68100BR2024PTC072121",
    badge: "Official Registry Listing",
    description: "Verified MCA corporate filing record, share capital structure, registered office address, and RoC Patna jurisdiction.",
    identifierType: "CIN",
    identifierValue: "U68100BR2024PTC072121",
    status: "Active / Verified"
  },
  {
    id: "dnb",
    name: "Dun & Bradstreet",
    category: "Global Commercial Directory",
    url: "https://www.dnb.com/business-directory/company-profiles/baba-baidyanath-real-estate-private-limited.cbc7c0fb9db121bc077e91d301531883",
    badge: "D&B Business Directory",
    description: "International corporate business profile cataloged on the Dun & Bradstreet worldwide enterprise directory.",
    identifierType: "D&B Entity ID",
    identifierValue: "cbc7c0fb9db121bc077e91d301531883",
    status: "Cataloged Profile"
  },
  {
    id: "tofler",
    name: "Tofler",
    category: "Business Intelligence & Financials",
    url: "https://www.tofler.in/baba-baidyanath-real-estate-private-limited/company/U68100BR2024PTC072121",
    badge: "Company Intelligence Record",
    description: "Statutory company profile, active directorship details, authorized capital verification, and RoC incorporation history.",
    identifierType: "CIN",
    identifierValue: "U68100BR2024PTC072121",
    status: "Active Corporate Entity"
  },
  {
    id: "tracxn",
    name: "Tracxn",
    category: "Institutional Market Intelligence",
    url: "https://tracxn.com/d/legal-entities/india/baba-baidyanath-real-estate-private-limited/__BiQ1jHIeSiB2QxZvhYJPGB6dgbHPUE6dEs3wzvXXRTM",
    badge: "Enterprise Market Research",
    description: "Institutional intelligence coverage tracking legal entity incorporation and regional real estate activities.",
    identifierType: "Tracxn Entity Key",
    identifierValue: "BiQ1jHIeSiB2QxZvhYJPGB6...",
    status: "Indexed Legal Entity"
  },
  {
    id: "falconebiz",
    name: "FalconeBiz",
    category: "Corporate Compliance Directory",
    url: "https://www.falconebiz.com/company/BABA-BAIDYANATH-REAL-ESTATE-PRIVATE-LIMITED-U68100BR2024PTC072121",
    badge: "Corporate Status Verified",
    description: "Comprehensive corporate lookup detailing active registration under RoC Patna, paid-up capital, and corporate objects.",
    identifierType: "CIN",
    identifierValue: "U68100BR2024PTC072121",
    status: "RoC Patna / Active"
  },
  {
    id: "justdial",
    name: "Justdial",
    category: "Verified Regional Enterprise Listing",
    url: "https://www.justdial.com/Aurangabad-Bihar/Baba-Baijnath-Enterprises-Ramdih/9999P6186-6186-240102215951-K3D7_BZDET",
    badge: "Regional Commercial Profile",
    description: "Verified regional enterprise listing for Baba Baijnath Enterprises in Aurangabad, Bihar on India's leading local search platform.",
    identifierType: "JD Listing ID",
    identifierValue: "9999P6186-6186-240102215951-K3D7",
    status: "JD Verified Listing"
  }
];

