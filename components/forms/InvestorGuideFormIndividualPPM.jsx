import { Button, FormControl, FormLabel, Input, InputAdornment, MenuItem, Select, TextField, Checkbox, FormControlLabel, CircularProgress, Container, Box } from '@mui/material';
import { ValidateEmail } from "@lib/utils";
import { useState } from 'react';
import countries from "data/countries";

export function InvestorGuideFormIndividual({ guideName, authToken, isNewUser, setFormProgress }) {

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [newUser, setNewUser] = useState(isNewUser);
  const [isVerified, setVerified] = useState(false);
  const [isEmailSent, setEmailSent] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [formError, setFormError] = useState(null);
  const [isRevealUUIDField, setIsRevealUUIDFields] = useState(false);

  const [formForCompany, setFormForCompany] = useState({
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
    uuid: '',
    annualRevenue: 0,
    bankName: '',
    requiredGuides: { 'ppm-reg-d': false, 'ppm-reg-s': false }
  });

  const handleCountryChange = (country) => {
    setFormForCompany(prev => ({ ...prev, address: { ...prev.address, country: country } }));
  };

  const handleEmailSend = (e) => {
    e.preventDefault();
    const newErrors = findFormErrors();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setFormProgress(90);
      setEmailSent(true);
    }
  };

  const handleSubmit = (e) => {
    setFormProgress(100);
    setIsSubmitted(true);
  };

  const findFormErrors = () => {
    const { firstName, lastName, email, phone, annualRevenue } = formForCompany;
    const { city, country, countryCode, state, address } = formForCompany.address;
    const { "ppm-reg-d": ppmRegD, "ppm-reg-s": ppmRegS } = formForCompany.requiredGuides;

    const newErrors = {};
    if (!firstName) newErrors.firstName = 'Cannot be blank!';
    else if (firstName.length > 30) newErrors.firstName = 'Name is too long!';
    if (!lastName) newErrors.lastName = 'Cannot be blank!';
    else if (lastName.length > 30) newErrors.lastName = 'Name is too long!';
    if (!email) newErrors.email = 'Please provide an email';
    else if (!ValidateEmail(email)) newErrors.email = 'Please provide a valid email';
    if (!phone) newErrors.phone = 'Please provide phone';
    if (!address) newErrors.address = 'Please provide your address';
    if (!city) newErrors.city = 'Please provide a city name';
    if (!country) newErrors.country = 'Please provide country name';
    if (!countryCode) newErrors.countryCode = 'Please provide country code';
    if (!state) newErrors.state = 'Please provide state name';
    if (!annualRevenue) newErrors.annualRevenue = 'Please provide annual revenue';
    else if (annualRevenue < 100000) newErrors.annualRevenue = 'Annual revenue must be greater than 100,000 USD';
    if (!ppmRegD || !ppmRegS) newErrors.ppmEmpty = 'Please select at least one of PPM';
    return newErrors;
  };

  if (isNewUser) {
    return (
      <Container style={{ maxHeight: '55vh', overflow: 'scroll', marginTop: 10 }}>
        {!isEmailSent ? (
          <form onSubmit={handleEmailSend}>
            <FormControl fullWidth margin="normal" error={!!errors.firstName}>
              <FormLabel>First Name</FormLabel>
              <Input value={formForCompany.firstName} onChange={e => setFormForCompany(prev => ({ ...prev, firstName: e.target.value }))} />
              <FormHelperText>{errors.firstName}</FormHelperText>
            </FormControl>
            <FormControl fullWidth margin="normal" error={!!errors.lastName}>
              <FormLabel>Last Name</FormLabel>
              <Input value={formForCompany.lastName} onChange={e => setFormForCompany(prev => ({ ...prev, lastName: e.target.value }))} />
              <FormHelperText>{errors.lastName}</FormHelperText>
            </FormControl>
            <FormControl fullWidth margin="normal" error={!!errors.email}>
              <FormLabel>Email</FormLabel>
              <Input value={formForCompany.email} onChange={e => setFormForCompany(prev => ({ ...prev, email: e.target.value }))} />
              <FormHelperText>{errors.email}</FormHelperText>
            </FormControl>
            <FormControl fullWidth margin="normal" error={!!errors.phone}>
              <FormLabel>Phone</FormLabel>
              <Input type="number" value={formForCompany.phone} onChange={e => setFormForCompany(prev => ({ ...prev, phone: e.target.value }))} />
              <FormHelperText>{errors.phone}</FormHelperText>
            </FormControl>
            <FormControl fullWidth margin="normal" error={!!errors.address}>
              <FormLabel>Address</FormLabel>
              <Input value={formForCompany.address.address} onChange={e => setFormForCompany(prev => ({ ...prev, address: { ...prev.address, address: e.target.value } }))} />
              <FormHelperText>{errors.address}</FormHelperText>
            </FormControl>
            <FormControl fullWidth margin="normal" error={!!errors.country}>
              <FormLabel>Country</FormLabel>
              <Select value={formForCompany.address.country} onChange={e => handleCountryChange(e.target.value)}>
                <MenuItem value="">...</MenuItem>
                {countries.map((country, key) => <MenuItem value={country.name} key={key}>{country.name}</MenuItem>)}
              </Select>
              <FormHelperText>{errors.country}</FormHelperText>
            </FormControl>
            <FormControl fullWidth margin="normal" error={!!errors.state}>
              <FormLabel>State</FormLabel>
              <Input value={formForCompany.address.state} onChange={e => setFormForCompany(prev => ({ ...prev, address: { ...prev.address, state: e.target.value } }))} />
              <FormHelperText>{errors.state}</FormHelperText>
            </FormControl>
            <FormControl fullWidth margin="normal" error={!!errors.city}>
              <FormLabel>City</FormLabel>
              <Input value={formForCompany.address.city} onChange={e => setFormForCompany(prev => ({ ...prev, address: { ...prev.address, city: e.target.value } }))} />
              <FormHelperText>{errors.city}</FormHelperText>
            </FormControl>
            <FormControl fullWidth margin="normal" error={!!errors.annualRevenue}>
              <FormLabel>Annual Revenue in USD</FormLabel>
              <Input
                type="number"
                value={formForCompany.annualRevenue}
                onChange={e => setFormForCompany(prev => ({ ...prev, annualRevenue: e.target.value }))}
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                endAdornment={<InputAdornment position="end">.00</InputAdornment>}
              />
              <FormHelperText>{errors.annualRevenue}</FormHelperText>
            </FormControl>
            <FormControlLabel
              control={<Checkbox checked={formForCompany.requiredGuides["ppm-reg-d"]} onChange={e => setFormForCompany(prev => ({ ...prev, requiredGuides: { ...prev.requiredGuides, 'ppm-reg-d': !prev.requiredGuides["ppm-reg-d"] } }))} />}
              label="PPM Reg D"
            />
            <FormControlLabel
              control={<Checkbox checked={formForCompany.requiredGuides["ppm-reg-s"]} onChange={e => setFormForCompany(prev => ({ ...prev, requiredGuides: { ...prev.requiredGuides, 'ppm-reg-s': !prev.requiredGuides["ppm-reg-s"] } }))} />}
              label="PPM Reg S"
            />
            <Button variant="contained" color="error" type="submit">
              Verify my email
            </Button>
          </form>
        ) : !isSubmitted ? (
          <Box>
            <p>Please input your UUID which has been sent to your provided email <strong>{formForCompany.email}</strong>.</p>
            <FormControl fullWidth margin="normal">
              <FormLabel>Your UUID</FormLabel>
              <Input value={formForCompany.uuid} onChange={e => setFormForCompany(prev => ({ ...prev, uuid: e.target.value }))} />
            </FormControl>
            <Button variant="contained" color="error" disabled={formForCompany.uuid.trim().length !== 36} onClick={handleSubmit}>
              Verify and Download
            </Button>
          </Box>
        ) : (
          <Box textAlign="center" marginTop={4}>
            <img src="/assets/images/success-email.png" alt="success-envelop" width={100} />
            <p>We will carefully evaluate your application, and upon approval, you will be provided with a download link for PPM.</p>
          </Box>
        )}
      </Container>
    );
  }

  return (
    <Container style={{ maxHeight: '55vh', overflow: 'scroll', marginTop: 10 }}>
      <form>
        <FormControl fullWidth margin="normal" error={!!errors.email}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            value={formForCompany.email}
            onChange={e => setFormForCompany(prev => ({ ...prev, email: e.target.value }))}
            endAdornment={
              <InputAdornment position="end">
                <Button variant="contained" disabled={isVerified || isVerified === 'loading'} onClick={() => setVerified('loading')}>
                  {isVerified === 'loading' ? (
                    <>
                      <CircularProgress size={24} />
                      <span style={{ marginLeft: 3 }}>Verifying</span>
                    </>
                  ) : (
                    <span>Verify</span>
                  )}
                </Button>
              </InputAdornment>
            }
          />
          <FormHelperText>{errors.email}</FormHelperText>
        </FormControl>
        {isVerified && (
          <>
            <FormControl fullWidth margin="normal">
              <FormLabel>Select to get</FormLabel>
              <FormControlLabel
                control={
                  <Checkbox
                    disabled={!isVerified}
                    checked={formForCompany.requiredGuides["ppm-reg-d"]}
                    onChange={e => setFormForCompany(prev => ({ ...prev, requiredGuides: { ...prev.requiredGuides, 'ppm-reg-d': !prev.requiredGuides["ppm-reg-d"] } }))} />
                }
                label="PPM Reg D"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    disabled={!isVerified}
                    checked={formForCompany.requiredGuides["ppm-reg-s"]}
                    onChange={e => setFormForCompany(prev => ({ ...prev, requiredGuides: { ...prev.requiredGuides, 'ppm-reg-s': !prev.requiredGuides["ppm-reg-s"] } }))} />
                }
                label="PPM Reg S"
              />
            </FormControl>
            <Button variant="contained" color="error" disabled={!isNewUser} onClick={handleSubmit}>
              Download
            </Button>
          </>
        )}
      </form>
    </Container>
  );
}
