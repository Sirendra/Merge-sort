# Merge & sort

> Merges three sorted arrays into one sorted array in ascending order **without using `sort()`**.

---

## 📋 Description

This TypeScript project implements a function that merges three arrays into a single sorted array:

- `collection_1` is sorted in **descending** order (may include negative values)
- `collection_2` and `collection_3` are sorted in **ascending** order (with values ≥ 0)
- The output is a new array sorted in **ascending** order
- 🔥 No built-in `Array.prototype.sort()` is used in the merging logic
- User can edit `test-data.ts` file to provide specific arrays;
- otherwise, the code generates random values (0-20) of random length (5-10)

---

## 📦 Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- Optional (for development):
  - VS Code with ESLint & Prettier extensions
- Pull code 
  - ```bash
    git clone https://github.com/Sirendra/Merge-sort.git
    cd Merge-sort/
    ```

---

## 🚀 Getting Started

### 1. 📥 Install dependencies

---

```bash
npm install
```

---

### 2. 🔨 Build the project

```bash
npm run build
```

---

### 3. ▶️ Run code

```bash
node dist/src/merge-sort.js
```

---

### 4. 🧪 Run Unit Tests

```bash
npm run test
```

---

### 5. 🗂 Project Structure
```bash
.
├── src/
│ └── merge-sort.ts
│ └── test-data.ts
├── test/
│ └── merge-sort.spec.ts
├── dist/
├── package.json
└── tsconfig.json
```
---
