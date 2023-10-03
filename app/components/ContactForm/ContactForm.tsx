'use client';
import './ContactForm.scss';
import { useState, useEffect } from 'react';
import { useColorScheme } from '../../hooks/useColorScheme';
import { toast } from 'react-toastify';
import Link from 'next/link';
import axios from 'axios';

interface FormData {
  name: string;
  email: string;
  message: string;
}

function ContactForm() {
  const initialFormData: FormData = {
    name: '',
    email: '',
    message: '',
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);

  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [validationErrors, setValidationErrors] = useState<Partial<FormData>>({});
  const { isDark } = useColorScheme();

  // Function to handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear the validation error message for the field when the user starts typing
    setValidationErrors({ ...validationErrors, [name]: '' });
  };

  // Function to validate a single field
  const validateField = (fieldName: string, value: string) => {
    let errorMessage = '';

    // Custom validation rules for each field
    switch (fieldName) {
      case 'name':
        errorMessage = value.trim() === '' ? '*Name is required' : '';
        break;
      case 'email':
        errorMessage = value.trim() === '' ? '*Email is required' : !/^\S+@\S+\.\S+$/.test(value) ? '*Invalid email address' : '';
        break;
      default:
        break;
    }

    // Update validationErrors state
    setValidationErrors({ ...validationErrors, [fieldName]: errorMessage });
  };

  // Function to validate the entire form
  const validateForm = () => {
    const isValid = formData.name.trim() !== '' && /^\S+@\S+\.\S+$/.test(formData.email);

    setIsFormValid(isValid);
  };

  // Function to handle field blur (loss of focus)
  const handleFieldBlur = (fieldName: string) => {
    // @ts-ignore: Unreachable code error
    const { [fieldName]: value } = formData;
    validateField(fieldName, value);
  };

  // Debounced function to perform validation after typing is complete
  const debouncedValidateForm = () => {
    clearTimeout(validationTimeout);
    validationTimeout = setTimeout(validateForm, 500); // Adjust the debounce delay as needed
  };

  let validationTimeout: NodeJS.Timeout;

  // Effect to run the debounced validation on form data changes
  useEffect(() => {
    debouncedValidateForm();
  }, [formData]);

  // Function to reset the form after a successful submit
  const resetForm = () => {
    setFormData(initialFormData);
    setValidationErrors({});
    setIsSubmitted(false);
  };

  // Function to submit the form
  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();

    // Manually validate all fields one last time
    Object.keys(formData).forEach((fieldName) => {
      // @ts-ignore: Unreachable code error
      validateField(fieldName, formData[fieldName]);
    });

    if (isFormValid) {
      // Perform form submission here
      axios({
        url: 'https://formspree.io/f/xknlpgll',
        method: 'post',
        headers: { Accept: 'application/json' },
        data: formData,
      }).then((response) => {
        if (response.status === 200) {
          toast.success('Message sent successfully!', {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: isDark ? 'dark' : 'light',
          });
          setIsSubmitted(true);
        } else {
          console.log(response);
          toast.error('Error! Please try again later', {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: isDark ? 'dark' : 'light',
          });
        }
      });

      setTimeout(() => resetForm(), 10000); // Reset the form after successful submit
    }
  };

  return (
    <div className='form-wrap'>
      {isSubmitted && <ThankYouMessage />}
      <form onSubmit={submitForm}>
        <div className='form-group'>
          <label htmlFor='name' className='text-left'>
            Name*
          </label>
          <input type='text' id='name' name='name' value={formData.name} onChange={handleInputChange} onBlur={() => handleFieldBlur('name')} required />
          {validationErrors.name && <div className='error'>{validationErrors.name}</div>}
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email*</label>
          <input type='email' id='email' name='email' value={formData.email} onChange={handleInputChange} onBlur={() => handleFieldBlur('email')} required />
          <div className='error'>{validationErrors.email}</div>
        </div>
        <div className='form-group'>
          <label htmlFor='message'>Message</label>
          <textarea id='message' name='message' value={formData.message} onChange={handleInputChange} onBlur={() => handleFieldBlur('message')} />
          <div className='error'>{validationErrors.message}</div>
        </div>
        <button className='submit-button' type='submit' disabled={!isFormValid}>
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactForm;

const ThankYouMessage = () => {
  return (
    <div className='thank-you gradient-box'>
      <h5 className='mb-5'>
        Thank you for your <br /> message!
      </h5>
      <p>I appreciate you getting in touch. I will review your message as soon as possible and get back to you shortly.</p>
      <p className='mt-5'>
        In the meantime feel free to explore more projects in my <Link href='/projects'>Portfolio</Link>.
      </p>
    </div>
  );
};
