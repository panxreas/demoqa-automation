# DemoQA Automation Framework

## 📌 Project Purpose

This project is a UI test automation framework built using WebdriverIO.

The goal of this repository is to:

- Demonstrate QA Automation best practices
- Implement Smoke, MAT (Minimal Acceptance Tests), and AT (Acceptance Tests)
- Apply Page Object Model (POM) design pattern
- Build a scalable and maintainable test architecture
- Create a reusable skeleton for testing larger web applications
- Clean architecture
- Professional test organization

The application under test is https://demoqa.com, starting with the **Elements → Text Box** feature.

---

## 🛠 Tech Stack

- WebdriverIO
- JavaScript (Node.js)
- Mocha
- Firefox Browser
- Page Object Model (POM)

---

## 📋 Prerequisites

Make sure you have installed:

- Node.js (v16+ recommended)
- npm
- Firefox Browser

Check versions:

```bash
node -v
npm -v
```

## ⚙️ Installation

Clone repository:

```bash
git clone https://github.com/panxreas/demoqa-automation.git
cd demoqa-automation
```

Install dependencies:

```bash
npm install
```

## ▶️ Running Tests

### Run All Tests

```
npm test
```

### Run Smoke Tests

Smoke tests validate that the main functionality works and the page loads correctly.

```
npm run test:smoke
```

### Run MAT Tests

MAT (Minimal Acceptance Tests) tests validate the minimal required functionality for a feature to be considered working.

```
npm run test:mat
```

### Run AT Tests

Acceptance tests validate business rules, edge cases, and form validations.

```
npm run test:at
```

---

## 🏗 Framework Structure

```
test/
├── pageobjects
│   ├── elements
│   │   ├── elements.page.js
│   │   └── textBox.page.js
│   ├── main.page.js
│   └── page.js
└── specs
    ├── alert_windows
    ├── elements
    │   ├── elementsTest.e2e.js
    │   └── testBoxTest.e2e.js
    ├── forms
    └── mainPageTest.e2e.js
wdio.conf.js
package.json
```

## Structure Explanation

- **pageobjects/** → Contains reusable page classes (POM pattern)
- **specs/** → Test files grouped by feature
- **data/** → Test data (future expansion)
- **utils/** → Helper functions (future expansion)
- **wdio.conf.js** → WebdriverIO configuration
- **package.json** → Contains test execution scripts

# 🏷 Test Execution Strategy

Tests are **grouped by feature**.

Test levels are separated using **Mocha tags**:

- `@smoke`
- `@mat`
- `@at`

**Example:**

```javascript
it("should submit textbox with minimum required data @mat", async () => {
  // test implementation
});
```

This allows flexible execution without duplicating folder structures.

## 🧪 Tests Included

### Elements Section

- Text Box Feature

---

### ✅ Smoke Test

- Quick check to see if the application’s critical functions work.

---

### ✅ MAT (Minimal Acceptance Test)

- Submit form with minimum required valid data

---

### ✅ Acceptance Tests

- Validate required fields
- Validate successful submission
- Validate handling both expected and unexpected inputs

# 🚀 Future Roadmap

## 📌 Planned Improvements

### 🔍 Expand Coverage To:

- Alerts
- Forms
- Widgets

### 🧪 Testing Enhancements

- Add test reporting (**Allure** or HTML reports)
- Add screenshot capture on failure
- Add cross-browser execution
- Add API testing integration

### ⚙️ CI/CD & Automation

- Implement GitHub Actions CI pipeline

### 📊 Test Optimization

- Improve test data management
- Enhance selector strategy

```

```
