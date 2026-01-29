
// Added React import to resolve 'Cannot find namespace React' when using React.ReactNode as a type.
import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface BenefitItem {
  title: string;
  description: string;
}