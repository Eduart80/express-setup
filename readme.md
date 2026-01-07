# Basic Express.js Server

## 📋 Overview
A basic Express.js web server that serves static HTML pages and demonstrates fundamental routing concepts.

---

## 🛠️ Tech Stack
- **Node.js** with **Express.js 5.2.1**
- Static HTML pages
- Port: **3004**

---

## 📂 Project Structure
```
express-setup/
├── server.js           # Main server file
├── package.json        # Dependencies
└── public/             # Static files
    ├── index.html      # Home page
    └── contactUs.html  # Contact page
```

---

## 🚀 Features

### 1. Static File Serving
- Serves all files from the `public` folder automatically
- Access home page at: `http://localhost:3004/`

### 2. API Endpoint
- **Route**: `/api`
- **Response**: `"Welcome, this is my API page"`

### 3. Contact Page
- **Route**: `/contactUs/`
- **Response**: Serves the Contact Us HTML page

---

## 🏃 How to Run
```bash
npm install
npm start
```
Server runs on `http://localhost:3004`

---

## 🌐 Available Routes

| Route | Description |
|-------|-------------|
| `/` | Home page (The Daily Grind) |
| `/api` | API welcome message |
| `/contactUs/` | Contact Us page |

---

## 💡 Key Concepts Demonstrated
- Express middleware (`express.static`)
- Route handling (`app.get()`)
- Path module for cross-platform file paths
- Serving static files vs. sending text responses

---

## 📚 Reflections

### 1. What is the difference between `res.send()` and `res.sendFile()`? When would you use one over the other?

- **`res.send()`**: Sends a response with various types of data (string, object, array). 
  - Example: `res.send('Welcome to myPage')` or `res.send({ message: 'Hello' })`

- **`res.sendFile()`**: Sends a file as an HTTP response, for example HTML, CSS, images, or other static files.
  - Example: `res.sendFile(path.join(__dirname, 'public', 'index.html'))`

**When to use one over the other:**
- Use `res.send()` simple text or JSON data
- Use `res.sendFile()` when you need a display of HTML pages 

---

## 2. Why is the path module necessary when serving files? What could go wrong if you just used a relative path like 'public/index.html'?

The `path` module is necessary for creating **absolute paths**
Best practice will be : `res.send(path.join(__dirname, 'public', 'index.html'))`
Where directory declare the root position and file to look into

**Cross-Platform Compatibility**: Different operators use path separators  like (Windows: `\`, Unix/Linux/Mac: `/`). The `path.join()` method handles this automatically.

**Best Practice:**
```javascript
path.join(__dirname, 'public', 'index.html')
```
- `__dirname` gives the absolute path of the current file's directory
- Ensures the path works regardless of where the server is executed from

---

## 3. How would you add a third page (e.g., a menu page) to this server? What steps would you take?

**Answer:**

**Steps to add a menu page:**

1. **Create the HTML file**: Create `menu.html` in the `public` folder:
   ```html
   <!DOCTYPE html>
   <html>
   <head><title>Menu</title></head>
   <body><h1>Our Menu</h1></body>
   </html>
   ```

2. **Add a route in server.js**:
   ```javascript
   app.get('/menu', (req, res) => {
       res.sendFile(path.join(__dirname, 'public', 'menu.html'));
   });
   ```

3. **Alternatively** :
   ```javascript
   app.use(express.static(path.join(__dirname, 'public')));
   ```
   With this, `menu.html` is automatically accessible at `http://localhost:3004/menu.html`

4. Stop and restart the server to apply changes.

5. **Test**: Visit `http://localhost:3004/menu` or `http://localhost:3004/menu.html` in your browser.

