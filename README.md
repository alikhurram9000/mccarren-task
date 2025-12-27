# McCaren – Take-Home Project  
### Word Document Redaction Add-in

This project is a Microsoft Word add-in built with **TypeScript, React, and Vite**.  
It automatically **redacts sensitive information**, adds a confidentiality header, and enables **Track Changes** to log all modifications.

The add-in works in **Word Desktop** and **Word on the Web** (when sideloading is allowed).

---

## ✨ What this add-in does

When executed, the add-in:

1. Enables **Track Changes** (if supported by the Word API)  
2. Adds a header:  
   **`CONFIDENTIAL DOCUMENT`**  
3. Finds and replaces all sensitive data with **`REDACTED`**

All changes are logged and visible in Word’s review panel.

---

## 🔍 What gets redacted

The add-in detects and redacts all of the following:

| Category | Examples |
|--------|--------|
| **Email** | `john.smith@email.com` |
| **SSN** | `123-45-6789` |
| **Partial SSN** | `last four digits 8234`, `SSN ending in 1234` |
| **Phone numbers** | `(555) 123-4567`, `555-123-4567`, `+1 555 123 4567` |
| **Credit cards** | `4532-1234-5678-9012` |
| **Employee IDs** | `EMP-2024-5567`, `EMPID-2211` |
| **Medical records** | `MRN-998877`, `MEDICAL-RECORD 998877` |
| **Insurance policies** | `INS-44556677`, `POLICY 998877` |
| **Account / Order numbers** | `ORDER-45782`, `ACCT-99221` |
| **Date of birth (DOB)** | `DOB 03/15/1985`, `DATE OF BIRTH: 3/15/1985` |
| **Birthdates** | `03/15/1985`, `3-15-1985` |
| **Addresses** | Street-style postal addresses |

The redaction add-in is format-tolerant and works across tables, paragraphs, and mixed formatting.

---

## 🛠 Tech Stack

- TypeScript  
- React  
- Vite  
- Microsoft Word JavaScript API  
- Office Add-in Debugging Tools  

---

## 🚀 How to Run

Only **two commands** are needed.

### 1️⃣ Install dependencies
```bash
npm install
```

### 2️⃣ Start the add-in
```bash
npm start
```
