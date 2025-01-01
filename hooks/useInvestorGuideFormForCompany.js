import { useState } from "react";

export default function useInvestorGuideFormForCompany(guideName) {
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
    },
    company: {
      companyName: '',
      companyAddress: '',
    },
    bankName: '',
    uuid: '',
    guideName: guideName,
    isPPM: false,
  })
}
