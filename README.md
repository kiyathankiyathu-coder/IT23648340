# IT23648340 - Tamil Transliteration Testing Suite

**Comprehensive Test Suite for Tamil Thanglish Transliteration System**

A complete end-to-end testing framework using Playwright for validating Tamil language transliteration from Thanglish (Tamil written in English characters) to Tamil script. This project includes 35 test cases covering positive scenarios, negative edge cases, and UI responsiveness validation.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Test Coverage](#test-coverage)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Test Cases](#test-cases)
- [Configuration](#configuration)
- [Results](#results)
- [Technologies](#technologies)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

This project provides a comprehensive testing framework for the Tamil Changathi transliteration website (https://tamil.changathi.com/). It validates the system's ability to correctly transliterate Thanglish text to Tamil script across various linguistic scenarios, edge cases, and user interface interactions.

**Test Automation Framework:** Playwright (TypeScript)  
**Test Target:** https://tamil.changathi.com/  
**Total Test Cases:** 35  
**Status:** ✅ All Tests Passing

## ✨ Features

- ✅ **24 Positive Functional Tests** - Valid Tamil transliteration scenarios
- ✅ **10 Negative Functional Tests** - Edge cases and robustness validation
- ✅ **1 UI Test** - Real-time update capability verification
- ✅ **Real-time Execution Monitoring** - Live test feedback
- ✅ **Comprehensive Documentation** - Detailed Excel test case repository
- ✅ **Multiple Report Formats** - HTML and detailed test results
- ✅ **Parallel Execution Support** - Configurable worker threads
- ✅ **Failure Screenshots/Videos** - Visual debugging evidence

## 📁 Project Structure

```
IT23648340/
├── IT23648340.spec.ts                    # Main test specification file (35 tests)
├── playwright.config.ts                  # Playwright configuration
├── package.json                          # Node.js dependencies
├── .gitignore                            # Git ignore rules
├── README.md                             # This file
├── Test_Cases_IT23648340.xlsx            # Complete test case documentation
├── Test_Cases_IT23648340.csv             # Test cases in CSV format
├── Assignment 1 - Test cases-2.xlsx      # Excel test template (updated)
├── node_modules/                         # Dependencies (not committed)
├── test-results/                         # Test execution results
├── playwright-report/                    # HTML test reports
├── convert_csv.js                        # CSV to Excel converter utility
├── update_excel.js                       # Excel update utility
└── create_excel.py                       # Excel generation script
```

## 📊 Test Coverage

### Positive Functional Tests (24 Cases)

| Category | Test Cases | Coverage |
|----------|-----------|----------|
| **Grammar** | Simple, Complex, Compound, Interrogative, Imperative, Negation, Conditional, Past Perfect | All major structures |
| **Tenses** | Present, Past, Future, Past Perfect | All tense variations |
| **Domains** | Daily language, Greeting, Request, Mixed language, Formatting, Numbers, Slang | Real-world scenarios |
| **Length** | S (≤30), M (31-299), L (≥300) | All text lengths |
| **Special Features** | Punctuation, Numbers, Plural, Honorifics, Emphasis | Advanced features |

### Negative Functional Tests (10 Cases)

| Edge Case | Type | Validation |
|-----------|------|-----------|
| Special Characters | `!!!***###@@@` | Symbol handling |
| Mixed Scripts | Kannada/Telugu mix | Language boundary |
| Unicode | Emoji, combining diacritics | Unicode support |
| Gibberish | Long nonsensical text | Noise handling |
| Security | HTML/Code injection | Injection safety |
| Zero-width Characters | Hidden characters | Word boundary detection |
| Invalid Phonotactics | Repeated consonants | Tamil rules validation |
| Nested Punctuation | Complex nesting | Formatting complexity |
| Bidirectional Text | RTL/LTR mix | Text direction handling |

### UI Test (1 Case)

| Test | Purpose | Coverage |
|------|---------|----------|
| Real-time Updates | Verify character-by-character updates | Input responsiveness |

## 📋 Test Cases Details

### Example Positive Test (Pos_Fun_0001)
```
Input:  naan veetukku pogren
Output: நான் வீட்டுக்கு போகிறன்
Type:   Simple greeting phrase
Domain: Daily language usage
Grammar: Simple sentence - Present tense
Status: ✅ Pass
```

### Example Negative Test (Neg_Fun_0001)
```
Input:  !!!***###@@@
Output: Error/No translation
Type:   Repeated special characters
Domain: Edge case
Grammar: Invalid formatting
Status: ✅ Pass (Robustness verified)
```

## 🔧 Prerequisites

- **Node.js** v18 or higher
- **npm** or **yarn**
- **Git** (for version control)
- **Playwright** (installed via npm)
- **Internet connection** (to access tamil.changathi.com)

## 📦 Installation

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/IT23648340.git
cd IT23648340
```

### 2. Install Dependencies
```bash
npm install
```

This will install:
- `@playwright/test` - E2E testing framework
- `xlsx` - Excel file handling

### 3. Install Playwright Browsers
```bash
npx playwright install
```

## 🚀 Usage

### Run All Tests
```bash
npm test
# or
npx playwright test
```

### Run Specific Test File
```bash
npx playwright test IT23648340.spec.ts
```

### Run Specific Test
```bash
npx playwright test -g "Pos_Fun_0001"
```

### Run Tests with UI Mode (Interactive)
```bash
npx playwright test --ui
```

### Run Tests with Debug Mode
```bash
npx playwright test --debug
```

### Generate HTML Report
```bash
npx playwright show-report
```

### Run Tests in Headed Mode (See Browser)
```bash
npx playwright test --headed
```

### Run with Specific Browser
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Parallel Execution
```bash
npx playwright test --workers=4
```

### Sequential Execution (One at a time)
```bash
npx playwright test --workers=1
```

## 📝 Test Cases

### Positive Functional Tests (24)

1. **Pos_Fun_0001** - Simple greeting phrase
2. **Pos_Fun_0002** - Interrogative sentence
3. **Pos_Fun_0003** - Imperative command
4. **Pos_Fun_0004** - Past tense sentence
5. **Pos_Fun_0005** - Future tense sentence
6. **Pos_Fun_0006** - Negation sentence
7. **Pos_Fun_0007** - Plural reference
8. **Pos_Fun_0008** - Compound sentence
9. **Pos_Fun_0009** - Mixed Thanglish with English
10. **Pos_Fun_0010** - Formatting with punctuation
11. **Pos_Fun_0011** - Numbers with Tamil words
12. **Pos_Fun_0012** - Slang casual request
13. **Pos_Fun_0013** - Complex question with negation
14. **Pos_Fun_0014** - Respectful greeting phrase
15. **Pos_Fun_0015** - Request with conditional clause
16. **Pos_Fun_0016** - Past perfect tense
17. **Pos_Fun_0017** - Affirmative response with emphasis
18. **Pos_Fun_0018** - Multi-clause sentence
19. **Pos_Fun_0019** - Formal request with politeness markers
20. **Pos_Fun_0020** - Temporal expression with tense change
21. **Pos_Fun_0021** - Negation with rhetorical question
22. **Pos_Fun_0022** - Location-based request
23. **Pos_Fun_0023** - Continuous action with numbers
24. **Pos_Fun_0024** - Inclusive plural with action

### Negative Functional Tests (10)

1. **Neg_Fun_0001** - Repeated special characters
2. **Neg_Fun_0002** - Mixed script languages
3. **Neg_Fun_0003** - Emoji and Unicode symbols
4. **Neg_Fun_0004** - Extremely long gibberish text
5. **Neg_Fun_0005** - HTML/Code injection attempt
6. **Neg_Fun_0006** - Unicode combining diacritics
7. **Neg_Fun_0007** - Mixed numerals with zero-width chars
8. **Neg_Fun_0008** - Invalid romanization - repeated consonants
9. **Neg_Fun_0009** - Nested punctuation and formatting
10. **Neg_Fun_0010** - Mixed RTL/LTR text with numbers

### UI Test (1)

1. **Pos_UI_0001** - Real-time update capability verification

## ⚙️ Configuration

### playwright.config.ts

Key configurations:

```typescript
export default defineConfig({
  testDir: './',                    // Test directory
  testMatch: '*.spec.ts',           // Test file pattern
  fullyParallel: false,             // Sequential execution
  workers: 1,                       // Single worker thread
  timeout: 60000,                   // 60s per test timeout
  reporter: 'html',                 // HTML reporting
  use: {
    baseURL: 'https://tamil.changathi.com/',
    trace: 'on-first-retry',        // Trace on failure
    screenshot: 'only-on-failure',  // Screenshots on failure
    video: 'retain-on-failure',     // Video on failure
  }
});
```

## 📊 Results

### Latest Test Run

```
Running 35 tests using 1 worker

  ✓ Positive Functional (24 tests)    - PASSED
  ✓ Negative Functional (10 tests)    - PASSED
  ✓ UI Tests (1 test)                 - PASSED

  35 passed (9.2m)
```

### Test Execution Time

- **Average per test:** ~15-20 seconds
- **Total execution:** ~9.2 minutes (sequential)
- **Optimized parallel (4 workers):** ~3-4 minutes

### Reports

- **HTML Report:** `playwright-report/index.html`
- **Test Results:** `test-results/`
- **Screenshots:** `test-results/*/screenshots/`
- **Videos:** `test-results/*/video.webm`

## 🛠️ Technologies

### Core Technologies

| Technology | Version | Purpose |
|-----------|---------|---------|
| **Playwright** | Latest | E2E Test Automation |
| **TypeScript** | Latest | Type-safe test code |
| **Node.js** | v18+ | JavaScript runtime |
| **npm** | Latest | Package management |

### Supporting Tools

- **XLSX** - Excel file handling
- **Git** - Version control
- **GitHub** - Repository hosting

## 📚 Documentation

### Test Case Documentation

Comprehensive test documentation is available in:

- **Excel Format:** `Test_Cases_IT23648340.xlsx`
  - TC ID, Test name, Input, Expected output, Actual output
  - Status, Accuracy justification, Coverage details
  
- **CSV Format:** `Test_Cases_IT23648340.csv`
  - Backup format for compatibility

### Each Test Case Includes

- ✅ Unique TC ID
- ✅ Test case name
- ✅ Input length type (S/M/L)
- ✅ Thanglish input
- ✅ Expected Tamil output
- ✅ Actual output
- ✅ Pass/Fail status
- ✅ Accuracy justification
- ✅ 4-point coverage breakdown:
  - Domain
  - Grammar
  - Length
  - Quality Focus

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Contribution Guidelines

- Follow existing test naming conventions
- Add comprehensive test documentation
- Ensure all tests pass before submitting PR
- Update README with new features
- Add test cases to Excel documentation

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 Author

**IT23648340**  
Student Test Suite Project  
Created: January 31, 2026

## 📞 Support

For issues, questions, or suggestions:

1. Open an [Issue](https://github.com/yourusername/IT23648340/issues) on GitHub
2. Check existing documentation in `/docs`
3. Review test case documentation in Excel files

## 🔗 Links

- **Website Under Test:** https://tamil.changathi.com/
- **Playwright Documentation:** https://playwright.dev/
- **GitHub Repository:** https://github.com/yourusername/IT23648340

---

**Status:** ✅ Active & Maintained  
**Last Updated:** January 31, 2026  
**Test Coverage:** 35/35 Cases (100%)  
**All Tests Passing:** ✅ Yes
