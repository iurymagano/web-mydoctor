export const isCPFValid = (value: string): boolean => {
  // Ensure the CPF has 11 digits
  if (!/^\d{11}$/.test(value)) {
    return false;
  }

  // Extract the digits and check for repeated sequences
  const digits = value.split("").map(Number);
  if (new Set(digits).size === 1) {
    return false;
  }

  // Validate the first verification digit
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += digits[i] * (10 - i);
  }
  let verificationDigit = 11 - (sum % 11);
  if (verificationDigit >= 10) {
    verificationDigit = 0;
  }
  if (digits[9] !== verificationDigit) {
    return false;
  }

  // Validate the second verification digit
  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += digits[i] * (11 - i);
  }
  verificationDigit = 11 - (sum % 11);
  if (verificationDigit >= 10) {
    verificationDigit = 0;
  }
  if (digits[10] !== verificationDigit) {
    return false;
  }

  return true;
};
