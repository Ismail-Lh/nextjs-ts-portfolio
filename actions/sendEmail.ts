'use server';

const sendEmail = async (formData: FormData) => {
  console.log('from the server side');
  console.log(formData.get('senderEmail'));
  console.log(formData.get('message'));
};

export default sendEmail;
