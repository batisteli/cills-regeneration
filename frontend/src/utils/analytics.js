// Google Analytics 4 Event Tracking Utilities

/**
 * Track button click events to Google Analytics
 * @param {string} buttonName - Name of the button clicked
 * @param {string} section - Section where the button is located
 * @param {string} action - Action performed (e.g., 'whatsapp_click', 'cta_click')
 */
export const trackButtonClick = (buttonName, section, action = 'cta_click') => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', action, {
      event_category: 'Button Click',
      event_label: buttonName,
      button_section: section,
      button_name: buttonName,
    });
    console.log(`[GA4] Event tracked: ${action} - ${buttonName} (${section})`);
  }
};

/**
 * Track WhatsApp button clicks specifically
 * @param {string} section - Section where the WhatsApp button is located
 */
export const trackWhatsAppClick = (section) => {
  trackButtonClick('WhatsApp CTA', section, 'whatsapp_click');
  
  // Also track as conversion event
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      event_category: 'Lead',
      event_label: 'WhatsApp Contact',
      conversion_source: section,
    });
  }
};

/**
 * Track page section views
 * @param {string} sectionName - Name of the section viewed
 */
export const trackSectionView = (sectionName) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'section_view', {
      event_category: 'Engagement',
      event_label: sectionName,
      section_name: sectionName,
    });
  }
};

/**
 * Track form submissions
 * @param {string} formName - Name of the form submitted
 * @param {boolean} success - Whether the submission was successful
 */
export const trackFormSubmission = (formName, success = true) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', success ? 'form_submission_success' : 'form_submission_error', {
      event_category: 'Form',
      event_label: formName,
      form_name: formName,
    });
  }
};
