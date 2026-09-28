export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Corporate' | 'Property & Land' | 'Compliance';
}

export const FREQUENT_QUESTIONS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Corporate',
    question: "Where is Baba Baidyanath Real Estate Private Limited incorporated?",
    answer: "The company was incorporated on 7 November 2024 under the Companies Act, 2013, with the Registrar of Companies (RoC), Patna. Its Corporate Identity Number (CIN) is U68100BR2024PTC072121."
  },
  {
    id: 'faq-2',
    category: 'Corporate',
    question: "Where is the company's registered office located?",
    answer: "The registered corporate seat is located at: C/O Kundan Kumar Singh, Near Gayatri Mandir, Aurangabad, Bihar 824101, India."
  },
  {
    id: 'faq-3',
    category: 'Property & Land',
    question: "How does the company collaborate with local landowners?",
    answer: "We structure Joint Development Agreements (JDA) and clean-title acquisitions that protect landowners' family interests, offering transparent revenue/area sharing, complete documentation oversight, and access to organized infrastructure development."
  },
  {
    id: 'faq-4',
    category: 'Compliance',
    question: "What is your policy regarding Bihar RERA registration?",
    answer: "Baba Baidyanath Real Estate strictly complies with statutory directives. No development project is advertised or booked without obtaining requisite statutory approvals and RERA registrations where mandated by law."
  },
  {
    id: 'faq-5',
    category: 'Property & Land',
    question: "What land measurement units are used in Bihar property transactions?",
    answer: "While international metrics use Square Feet and Acres, transactions in Aurangabad and Bihar routinely use regional units: 1 Katha is approximately 1,361.25 sq. ft (20 Dhur), 1 Bigha equals 20 Katha (27,225 sq. ft), and 1 Decimal equals approx. 435.6 sq. ft. Our built-in Land Calculator provides instant mathematical conversion between all units."
  }
];

export const FAQS = FREQUENT_QUESTIONS;
