import { ProjectItem } from '../types';

/**
 * PROJECT INVENTORY POLICY:
 * In accordance with our corporate governance charter and statutory compliance guidelines,
 * Baba Baidyanath Real Estate Private Limited only publishes project specifications,
 * RERA numbers, pricing, and master layout plans once approved by regulatory bodies
 * and verified by company management.
 * 
 * No speculative or unverified project listings are published.
 */

export const PUBLISHED_PROJECTS: ProjectItem[] = [];

export interface UpcomingFocusArea {
  title: string;
  typology: string;
  status: string;
  notes: string;
}

export interface UpcomingPortfolioNotice {
  headline: string;
  statement: string;
  focusAreas: UpcomingFocusArea[];
  reraClarification: string;
}

export const UPCOMING_PORTFOLIO_NOTICE: UpcomingPortfolioNotice = {
  headline: "Project Portfolio In Preparation",
  statement: "Project information and development master layouts will be presented here as property opportunities and statutory clearances are formalized.",
  focusAreas: [
    {
      title: "Aurangabad Urban Extension",
      typology: "Planned Residential Plotted Communities",
      status: "Feasibility & Land Due Diligence",
      notes: "Demarcation of clean-title suburban parcels with direct connectivity to administrative arterial routes."
    },
    {
      title: "NH-19 Transit Corridors",
      typology: "Commercial & Logistical Hubs",
      status: "Master Layout Planning",
      notes: "High-visibility frontage acreage tailored for institutional warehousing, fuel outlets, and commercial complexes."
    },
    {
      title: "Generational Land Partnerships",
      typology: "Joint Development Agreements (JDA)",
      status: "Title Verification & Landowner Consultation",
      notes: "Structured collaboration protecting ancestral ownership while converting land into organized residential plots."
    }
  ],
  reraClarification: "All forthcoming residential and commercial developments requiring registration will strictly adhere to the Real Estate (Regulation and Development) Act (RERA) provisions and Bihar RERA guidelines prior to any public sale or advertisement."
};
