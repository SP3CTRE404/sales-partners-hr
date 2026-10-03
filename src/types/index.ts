export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  keyBenefit: string;
}

export interface AdvantageItem {
  advantage: string;
  meaning: string;
}

export interface MetricItem {
  value: string;
  label: string;
  detail: string;
}

export interface TestimonialItem {
  quote: string;
  role: string;
  companyType: string;
}

export interface CoreValueItem {
  number: string;
  title: string;
  description: string;
}

export interface ImpactFrameworkStage {
  stage: string;
  title: string;
  description: string;
}

export interface LeadershipMember {
  title: string;
  personName: string;
  expertise: string;
  bio: string;
}

export interface ConsultationFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  serviceType: string;
  companySize: string;
  message: string;
}
