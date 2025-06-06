
import emailjs from '@emailjs/browser';

const EMAILJS_PUBLIC_KEY = '2eeLpJ6rlt_oxHhW_';
const EMAILJS_SERVICE_ID = 'service_vvxcn2c';
const EMAILJS_TEMPLATE_ID = 'template_i5dqlmc';

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

export const sendEmail = async (formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_name: 'Ayush Kushwaha',
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    return { success: true, response };
  } catch (error) {
    console.error('EmailJS Error:', error);
    return { success: false, error };
  }
};
