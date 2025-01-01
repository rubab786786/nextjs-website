import { useState } from 'react'

export default function useInvestorGuideFormForIndividual(guideName) {
  return useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: {
      countryCode: '',
      country: '',
      state: '',
      city: '',
      address: ''
    },
    annualRevenue: 0,
    bankName: '',
    uuid: '',
    guideName: guideName,
    isPPM: false,
    // requiredGuides: { 'ppm-reg-d': false, 'ppm-reg-s': false }
  })
}
