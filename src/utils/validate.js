export const checkValidData = (isSignInForm, name, email, password) => {
  const trimmedName = name.trim();
  const trimmedEmail = email.trim();
  const trimmedPassword = password.trim();

  const isNameValid = /^[A-Za-z][A-Za-z\s'-]*$/.test(trimmedName);
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail);
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      trimmedPassword
    );

  if (!isSignInForm && !isNameValid) return "Name is invalid";
  if (!isEmailValid) return "Email is invalid";
  if (!isPasswordValid) return "Password is invalid";

  return null;
};
