import { Suspense } from 'react';
import ServiceProductsDetailsClient from './ServiceProductsDetailsClient';

const ServiceProductsDetailsPage = () => (
  <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
    <ServiceProductsDetailsClient />
  </Suspense>
);

export default ServiceProductsDetailsPage;
