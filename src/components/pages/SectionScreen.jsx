import React from 'react'
import ServicePage from './ServicePage'
import ServicesList from './ServicesList'
import WidthWrapper from '../common/WidthWrapper';


export default function SectionScreen() {
    return (
      <WidthWrapper>
<div className="flex flex-row gap-6 p-4">
        <ServicePage />
        <ServicesList />
      </div>
      </WidthWrapper>
      
    );
  }
