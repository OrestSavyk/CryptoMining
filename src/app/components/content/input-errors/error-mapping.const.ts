export const FieldErrors = {
  firstName: {
    required: 'Please enter your first name.',
    minlength: 'First Name must have 2 characters minimum.',
  },

  secondName: {
    required: 'Please enter your second name.',
    minlength: 'Second Name must have 3 characters minimum.',
  },

  email: {
    required: 'Email is required.',
    email: 'Please enter a valid email address.',
  },

  password: {
    required: 'Please enter password.',
    minlength: 'Password length must have 8 characters minimum',
  },

  isRobot: {
    required: 'Please click, if you don`t a robot.',
  },
};
