# Playwright Automation for TodoMVC

---

## 📌 Project Overview  
This repository contains end-to-end (E2E) tests for the **TodoMVC React App** using Playwright.  

### 📜 *Acceptance Criteria (AC)*  
- `The acceptance criteria can be found in the [Story Directory](https://github.com/CSPInGithub/todoassessment/blob/main/story/todo_ac.txt).
 

### 🛠️ *Implementation Strategy*  
- `The implementation strategy can be found in the [Strategy](https://github.com/CSPInGithub/todoassessment/blob/main/strategy.txt).

---

## 🚀 *How to Set Up and Execute Locally*  

### 1️⃣ *Clone the Repository*  
```sh
git clone https://github.com/CSPInGithub/todoassessment.git
cd todoassessment
```
➡️ Clones the repo and navigates into the project folder.  

### 2️⃣ *Install Dependencies*  
```sh
npm install
```
➡️ Installs all required Node.js dependencies.  

### 3️⃣ *Install Playwright Browsers*  
```sh
npx playwright install --with-deps
```
➡️ Installs Playwright and its required browser binaries.  

### 4️⃣ *Run All Tests*  
```sh
npx playwright test
```
➡️ Executes all Playwright test cases in **headless mode**.  

### 5️⃣ *View Test Report*  
```sh
npx playwright show-report
```
➡️ Opens the detailed **test report** in a browser.  

---

## 🏗️ *How to Execute Using GitHub Actions*  

### 📌 *Running Tests Manually in GitHub Actions*  
1. Go to **GitHub Repository → Actions**  
2. Select **"Playwright Tests"**  
3. Click **"Run workflow"**  

### 📜 *Access Excution Report...*  
1. After workflow execution complete
   access ....[ExecutionReport](https://cspingithub.github.io/todoassessment/playwright/)

---


