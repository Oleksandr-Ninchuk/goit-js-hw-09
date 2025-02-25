const form = document.querySelector('.feedback-form');
const formData = { email: '', message: '' };

const loadFormData = () => {
  try {
    const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
    if (savedData) {
      formData.email = savedData.email;
      formData.message = savedData.message;
      form.elements.email.value = formData.email;
      form.elements.message.value = formData.message;
    }
  } catch (error) {
    console.error('Error loading form data:', error);
  }
};

const saveFormData = () => {
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value.trim();
  saveFormData();
});

form.addEventListener('submit', event => {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  console.log('Form data:', formData);
  localStorage.removeItem('feedback-form-state');
  formData.email = '';
  formData.message = '';
  form.reset();
});

loadFormData();
