# 🎓 Mini E-Learning Platform

## 📖 Project Overview
This project is a **mini e-learning platform prototype** built using **HTML, CSS, and JavaScript**. It allows learners to browse available courses, view detailed course information, and mark courses as completed.  
The focus is on functionality, interactivity, and clean design — not a full production-ready system.

---

## 🧠 Features
✅ **Course List:** Displays a grid of available courses (at least 3).  
✅ **Course Details:** When a course is clicked, learners can view detailed content and lesson lists.  
✅ **Mark as Completed:** Users can mark courses as completed and see their progress.  
✅ **Progress Persistence:** Completion status is saved using **localStorage**, so progress remains even after refreshing the page.  
✅ **Dynamic Rendering:** All course data is stored in a JavaScript array and rendered dynamically.  
✅ **Simple UI & Hover Effects:** Clean, minimal design with interactive hover states for buttons and cards.

---

## 🗂️ Course Data
Courses are stored in a JavaScript array named `courses` inside `script.js`.  
Each course object includes:
- `id`: Unique identifier  
- `title`: Course name  
- `description`: Short overview  
- `icon`: Visual emoji icon  
- `duration`: Duration of the course  
- `lessons`: Number of lessons  
- `completed`: Boolean for completion status  
- `content`: Detailed HTML description  
- `lessonList`: Array of lessons with titles and durations  

---

## 🧩 Technologies Used
- **HTML5** – for structure  
- **CSS3** – for styling and layout  
- **JavaScript (ES6)** – for interactivity and data handling  
- **LocalStorage** – for saving completion progress  

---

## 🖥️ How It Works
1. The **home page** displays a grid of available courses.  
2. Clicking on a course opens its **detail page** with course content and lesson list.  
3. The learner can **start** the course or **mark it as completed**.  
4. Completed courses show a green badge and remain marked even after page refresh (thanks to localStorage).  
5. The user can navigate back to the home page anytime.

---

## 🧑‍💻 Optional Extensions
If you want to expand it later, you can add:
- **User login / sign-up system** using browser storage or Firebase.  
- **Lesson progress tracking** per course.  
- **Search or filter feature** for courses.  
- **Responsive design improvements** for mobile devices.

---

## 🚀 How to Run
1. Download or clone the project folder.  
2. Open the `index.html` file in any browser.  
3. Explore the platform, view courses, and mark them as completed.

---

## 🌐 Live Demo
🔗 **View the live project here:**  
👉 [Mini E-Learning Platform](https://terrynyambura1738.github.io/week-1-AI-FOR-S-W-ENGINEERING/)

---

## 👩‍🎓 Developer
**Name:** Mugure Terry Nyambura  
**Course:** Web Technologies (PLP Academy)  
**Technologies:** HTML, CSS, JavaScript
