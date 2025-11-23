# Step-by-Step Guide: Create & Deploy React Vite App to GitHub Pages

## 1. Create the Project

```
npm create vite@latest flashcards -- --template react
cd flashcards
```

## 2. Initialize Git & Push to GitHub

```
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/cthow83/flashcards.git
git push -u origin main
```

## 3. Install Dependencies

```
npm install
```

## 4. Install gh-pages

```
npm install --save-dev gh-pages
```

## 5. Update `package.json`

- Add the following scripts:
  ```json
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
  ```
- Set the homepage:
  ```json
  "homepage": "https://cthow83.github.io/flashcards/"
  ```

## 6. Update `vite.config.js`

Add the base path:

```js
export default defineConfig({
  base: "/flashcards/",
  plugins: [react()],
});
```

## 7. Build and Deploy

```
npm run deploy
```

## 8. View Your Site

Go to: https://cthow83.github.io/flashcards/

---

**Tip:** If you change your repo name, update both the `homepage` in `package.json` and the `base` in `vite.config.js`.

## Page location

https://cthow83.github.io/flashcards/
