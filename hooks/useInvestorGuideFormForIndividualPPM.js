import { useState } from 'react'

export default function useInvestorGuideFormForIndividualPPM() {
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
    requiredGuides: { 'ppm-reg-d': false, 'ppm-reg-s': false },
    status: 'pending',
    isPPM: true,
  })
}
