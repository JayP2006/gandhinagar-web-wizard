// EmailJS public browser identifiers preserved from the existing working integration.
// These are not private credentials. Deployment variables can override each value.
export const emailConfig = {
  service: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_v9mln5m',
  template: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_cas860r',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '7ZUQd9T5SNeeziM5J',
};