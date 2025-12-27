export const patterns = {
    email: /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/gi,
    ssn: /\b\d{3}-\d{2}-\d{4}\b/g,
    phone: /(?:\+?1[\s.\-]?)?(?:\(\s*\d{3}\s*\)|\d{3})[\s.\-]?\d{3}[\s.\-]?\d{4}(?:\s*(?:x|ext\.?|extension)\s*\d{1,6})?\b/gi,
    creditCard: /\b\d{4}[\s\-]?\d{4}[\s\-]?\d{4}[\s\-]?\d{4}\b/g,
    employeeId: /\b(?:EMP|EMPID|EMPLOYEE[_\-]?ID)[:\-]?\s*\d{2,}(?:-\d+)?\b/gi,
    medicalRecord: /\b(?:MRN|MR|MEDICAL[_\-]?RECORD)[#:\-]?\s*\d{5,}\b/gi,
    insurancePolicy: /\b(?:INS|POL|POLICY)[#:\-]?\s*\d{5,}\b/gi,
    accountNumber: /\b(?:ORDER|ACCT|ACCOUNT|REF)[#:\-]?\s*\d{4,}\b/gi,
    dob: /\b(?:DOB|D\.O\.B\.?|DATE\s+OF\s+BIRTH)[:\-]?\s*\d{1,2}[\/\-\.]\d{1,2}[\/\-\.]\d{4}\b/gi,
    birthdate: /\b(?:0?[1-9]|1[0-2])[\/\-\.](?:0?[1-9]|[12]\d|3[01])[\/\-\.](?:19\d{2}|20[01]\d)\b/g,
    partialSSN: /(?:last\s+(?:four|4)\s+digits?|SSN\s+ending|social\s+security\s+number.*?(?:are|is|ending\s+in))\s+(?:are|is|in)?\s*(\d{4})\b/gi,
    address: /\b(?:at|address|located\s+at|billing\s+address\s+at|shipping\s+address\s+at|residing\s+at)\s+\d{1,6}\s+[A-Z][A-Za-z\s]{2,30}(?:Street|St|Avenue|Ave|Road|Rd|Drive|Dr|Lane|Ln|Boulevard|Blvd|Court|Ct|Place|Pl|Terrace|Way|Circle|Pkwy|Parkway)[,\s]+[A-Z][A-Za-z\s]+/gi
};

// Pattern categories for optimization
export const simplePatterns = ['email', 'ssn', 'creditCard', 'birthdate', 'partialSSN'];
export const complexPatterns = ['phone', 'employeeId', 'medicalRecord', 'insurancePolicy', 'accountNumber', 'dob', 'address'];