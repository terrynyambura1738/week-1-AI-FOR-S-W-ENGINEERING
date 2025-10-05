const courses = [
    {
        id: 1,
        title: "Web Development Fundamentals",
        description: "Learn HTML, CSS, and JavaScript from scratch. Build your first responsive website and understand the core concepts of web development.",
        icon: "🌐",
        duration: "8 weeks",
        lessons: 24,
        completed: false,
        content: `
            <h3>Course Overview</h3>
            <p>Welcome to Web Development Fundamentals! This comprehensive course will take you from complete beginner to confident web developer.</p>
            
            <h3>What You'll Learn</h3>
            <p><strong>HTML (HyperText Markup Language):</strong> The backbone of every website. You'll learn how to structure content, create forms, embed media, and use semantic HTML5 elements to build accessible websites.</p>
            
            <p><strong>CSS (Cascading Style Sheets):</strong> Transform plain HTML into beautiful, responsive designs. Master selectors, the box model, Flexbox, Grid, animations, and responsive design principles.</p>
            
            <p><strong>JavaScript:</strong> Bring your websites to life with interactivity. Learn variables, functions, DOM manipulation, event handling, and modern ES6+ features.</p>
            
            <h3>Course Structure</h3>
            <p>This 8-week course includes 24 comprehensive lessons, each building upon the previous one. You'll complete hands-on projects including a personal portfolio, a responsive landing page, and an interactive web application.</p>
            
            <h3>Prerequisites</h3>
            <p>No prior programming experience required! Just bring your curiosity and willingness to learn. All you need is a computer and a text editor.</p>
            
            <h3>Career Opportunities</h3>
            <p>Upon completion, you'll be prepared for entry-level positions as a Junior Web Developer, Frontend Developer, or you can continue learning advanced frameworks like React, Vue, or Angular.</p>
        `,
        lessonList: [
            { title: "Introduction to HTML", duration: "45 min" },
            { title: "HTML Elements and Structure", duration: "60 min" },
            { title: "CSS Basics and Selectors", duration: "50 min" },
            { title: "CSS Layout with Flexbox", duration: "70 min" },
            { title: "CSS Grid System", duration: "65 min" },
            { title: "JavaScript Fundamentals", duration: "80 min" },
            { title: "DOM Manipulation", duration: "75 min" },
            { title: "Events and Event Handling", duration: "60 min" }
        ]
    },
    {
        id: 2,
        title: "Python Programming",
        description: "Master Python programming with hands-on projects. From basic syntax to advanced concepts like OOP and data structures.",
        icon: "🐍",
        duration: "10 weeks",
        lessons: 30,
        completed: false,
        content: `
            <h3>Course Overview</h3>
            <p>Python is one of the most popular and versatile programming languages in the world. This course will teach you everything from basic syntax to advanced programming concepts.</p>
            
            <h3>Why Python?</h3>
            <p>Python is used everywhere: web development, data science, artificial intelligence, automation, game development, and more. Its simple, readable syntax makes it perfect for beginners, while its powerful libraries make it ideal for professionals.</p>
            
            <h3>What You'll Master</h3>
            <p><strong>Python Basics:</strong> Variables, data types, operators, and control flow. Understand how to write clean, efficient Python code following PEP 8 style guidelines.</p>
            
            <p><strong>Data Structures:</strong> Lists, tuples, dictionaries, and sets. Learn when and how to use each data structure effectively in real-world applications.</p>
            
            <p><strong>Object-Oriented Programming:</strong> Classes, objects, inheritance, polymorphism, and encapsulation. Build reusable, maintainable code using OOP principles.</p>
            
            <p><strong>File Handling & Error Management:</strong> Read and write files, handle exceptions gracefully, and debug your code effectively.</p>
            
            <h3>Projects You'll Build</h3>
            <p>You'll create practical projects including a calculator app, a file organizer, a web scraper, and a data analysis tool using pandas and matplotlib.</p>
            
            <h3>Career Path</h3>
            <p>Python developers are in high demand across industries. This course prepares you for roles in software development, data analysis, automation engineering, and machine learning.</p>
        `,
        lessonList: [
            { title: "Python Setup and First Program", duration: "40 min" },
            { title: "Variables and Data Types", duration: "55 min" },
            { title: "Control Flow and Loops", duration: "70 min" },
            { title: "Functions and Modules", duration: "65 min" },
            { title: "Lists and Dictionaries", duration: "60 min" },
            { title: "Object-Oriented Programming", duration: "90 min" },
            { title: "File Handling", duration: "50 min" },
            { title: "Error Handling and Debugging", duration: "55 min" }
        ]
    },
    {
        id: 3,
        title: "Digital Marketing Essentials",
        description: "Understand SEO, social media marketing, content strategy, and analytics to grow your online presence effectively.",
        icon: "📱",
        duration: "6 weeks",
        lessons: 18,
        completed: false,
        content: `
            <h3>Course Overview</h3>
            <p>In today's digital world, understanding online marketing is essential for any business or personal brand. This course covers all the fundamental strategies you need to succeed online.</p>
            
            <h3>Course Modules</h3>
            <p><strong>Search Engine Optimization (SEO):</strong> Learn how to rank your website on Google. Master keyword research, on-page optimization, link building, and technical SEO to drive organic traffic.</p>
            
            <p><strong>Content Marketing:</strong> Discover how to create compelling content that attracts and engages your target audience. Learn content planning, copywriting, storytelling, and content distribution strategies.</p>
            
            <p><strong>Social Media Marketing:</strong> Build a strong presence on platforms like Facebook, Instagram, LinkedIn, and Twitter. Learn how to create engaging posts, run campaigns, and grow your following organically.</p>
            
            <p><strong>Email Marketing:</strong> Build and nurture email lists, create effective campaigns, write compelling subject lines, and automate your email marketing for maximum ROI.</p>
            
            <p><strong>Analytics & Measurement:</strong> Use Google Analytics and other tools to track your performance, understand user behavior, and make data-driven decisions to improve your marketing efforts.</p>
            
            <h3>What You'll Achieve</h3>
            <p>By the end of this course, you'll be able to create and execute a complete digital marketing strategy, measure its success, and continuously optimize for better results.</p>
            
            <h3>Who Should Take This Course</h3>
            <p>Perfect for entrepreneurs, small business owners, marketing professionals, or anyone looking to build their digital marketing skills from the ground up.</p>
        `,
        lessonList: [
            { title: "Introduction to Digital Marketing", duration: "45 min" },
            { title: "SEO Fundamentals", duration: "70 min" },
            { title: "Content Marketing Strategy", duration: "60 min" },
            { title: "Social Media Marketing", duration: "65 min" },
            { title: "Email Marketing Campaigns", duration: "55 min" },
            { title: "Google Analytics Setup", duration: "50 min" },
            { title: "PPC Advertising Basics", duration: "60 min" },
            { title: "Marketing Metrics and ROI", duration: "50 min" }
        ]
    },
    {
        id: 4,
        title: "Data Science with R",
        description: "Dive into data analysis, visualization, and statistical modeling using R. Perfect for aspiring data scientists.",
        icon: "📊",
        duration: "12 weeks",
        lessons: 36,
        completed: false,
        content: `
            <h3>Course Overview</h3>
            <p>R is the premier language for statistical computing and data science. This comprehensive course will transform you into a proficient data analyst capable of extracting insights from complex datasets.</p>
            
            <h3>Why Learn R?</h3>
            <p>R is the preferred language for statisticians, data scientists, and researchers worldwide. Its vast ecosystem of packages makes it incredibly powerful for data manipulation, statistical analysis, and creating publication-ready visualizations.</p>
            
            <h3>What You'll Learn</h3>
            <p><strong>R Programming Fundamentals:</strong> Master R syntax, data types, vectors, matrices, data frames, and lists. Learn to write efficient, reproducible R code.</p>
            
            <p><strong>Data Manipulation:</strong> Use dplyr and tidyr to clean, transform, and reshape data. Learn to handle missing values, merge datasets, and perform complex data transformations.</p>
            
            <p><strong>Data Visualization:</strong> Create stunning visualizations with ggplot2. Master bar charts, line graphs, scatter plots, heatmaps, and custom themes to tell compelling data stories.</p>
            
            <p><strong>Statistical Analysis:</strong> Understand descriptive statistics, probability distributions, hypothesis testing, correlation, and regression analysis. Apply statistical methods to real-world problems.</p>
            
            <p><strong>Machine Learning:</strong> Introduction to predictive modeling, classification, clustering, and model evaluation. Build your first machine learning models in R.</p>
            
            <h3>Projects & Case Studies</h3>
            <p>Work on real-world datasets from various domains including healthcare, finance, and social sciences. Complete a capstone project analyzing a dataset of your choice.</p>
            
            <h3>Career Opportunities</h3>
            <p>Data scientists are among the most sought-after professionals. This course prepares you for roles as a Data Analyst, Statistical Analyst, Business Intelligence Analyst, or Data Scientist.</p>
        `,
        lessonList: [
            { title: "R Programming Basics", duration: "60 min" },
            { title: "Data Structures in R", duration: "70 min" },
            { title: "Data Import and Cleaning", duration: "65 min" },
            { title: "Data Visualization with ggplot2", duration: "80 min" },
            { title: "Statistical Analysis", duration: "75 min" },
            { title: "Linear Regression Models", duration: "85 min" },
            { title: "Machine Learning Basics", duration: "90 min" },
            { title: "Final Project: Real-world Analysis", duration: "120 min" }
        ]
    }
];

let currentCourse = null;
const completedCourses = JSON.parse(localStorage.getItem('completedCourses')) || [];

function initializeCourses() {
    courses.forEach(course => {
        if (completedCourses.includes(course.id)) {
            course.completed = true;
        }
    });
}

function renderCourses() {
    const grid = document.getElementById('courseGrid');
    grid.innerHTML = '';

    courses.forEach(course => {
        const card = document.createElement('div');
        card.className = `course-card ${course.completed ? 'completed' : ''}`;

        card.innerHTML = `
            ${course.completed ? '<div class="completed-badge">✓ Completed</div>' : ''}
            <div class="course-icon">${course.icon}</div>
            <h3 class="course-title">${course.title}</h3>
            <p class="course-description">${course.description}</p>
            <div class="course-meta">
                <span>📚 ${course.lessons} lessons</span>
                <span>⏱️ ${course.duration}</span>
            </div>
            <button class="card-complete-btn ${course.completed ? 'completed' : ''}" onclick="event.stopPropagation(); markCourseComplete(${course.id})">
                ${course.completed ? '✓ Completed' : 'Mark Complete'}
            </button>
        `;

        // Add click event to view details (but not on the button)
        card.addEventListener('click', (e) => {
            if (!e.target.classList.contains('card-complete-btn')) {
                showCourseDetail(course.id);
            }
        });

        grid.appendChild(card);
    });
}

function showCourseDetail(courseId) {
    console.log('Clicked course:', courseId);
    currentCourse = courses.find(c => c.id === courseId);
    console.log('Current course:', currentCourse);
    
    document.getElementById('detailTitle').textContent = currentCourse.title;
    document.getElementById('detailDescription').textContent = currentCourse.description;
    document.getElementById('detailMeta').innerHTML = `
        <span>📚 ${currentCourse.lessons} lessons</span>
        <span>⏱️ ${currentCourse.duration}</span>
    `;

    const progress = currentCourse.completed ? 100 : 0;
    document.getElementById('progressFill').style.width = progress + '%';

    // Display course content
    const contentSection = document.getElementById('courseContent');
    console.log('Content section element:', contentSection);
    console.log('Course content:', currentCourse.content);
    
    if (contentSection && currentCourse.content) {
        contentSection.innerHTML = currentCourse.content;
    } else {
        console.error('Content section not found or content is empty');
    }

    const lessonsList = document.getElementById('lessonsList');
    lessonsList.innerHTML = '';
    currentCourse.lessonList.forEach((lesson, index) => {
        const lessonItem = document.createElement('div');
        lessonItem.className = 'lesson-item';
        lessonItem.innerHTML = `
            <div class="lesson-number">${index + 1}</div>
            <div class="lesson-title">${lesson.title}</div>
            <div class="lesson-duration">${lesson.duration}</div>
        `;
        lessonsList.appendChild(lessonItem);
    });

    const completeBtn = document.getElementById('completeBtn');
    if (currentCourse.completed) {
        completeBtn.textContent = '✓ Completed';
        completeBtn.className = 'btn btn-completed';
        completeBtn.disabled = true;
    } else {
        completeBtn.textContent = 'Mark as Completed';
        completeBtn.className = 'btn btn-success';
        completeBtn.disabled = false;
    }

    document.getElementById('homeView').classList.remove('active');
    document.getElementById('detailView').classList.add('active');
}

function showHome() {
    document.getElementById('detailView').classList.remove('active');
    document.getElementById('homeView').classList.add('active');
    currentCourse = null;
}

function toggleComplete() {
    if (!currentCourse) return;

    currentCourse.completed = true;

    if (!completedCourses.includes(currentCourse.id)) {
        completedCourses.push(currentCourse.id);
    }
    document.getElementById('progressFill').style.width = '100%';

    localStorage.setItem('completedCourses', JSON.stringify(completedCourses));

    const completeBtn = document.getElementById('completeBtn');
    completeBtn.textContent = '✓ Completed';
    completeBtn.className = 'btn btn-completed';
    completeBtn.disabled = true;

    renderCourses();
    
    // Show success message
    alert('🎉 Congratulations! You have completed this course!');
}

function startCourse() {
    alert(`Starting "${currentCourse.title}"!\n\nThis would typically launch the first lesson. For this prototype, it's a demonstration of functionality.`);
}

function markCourseComplete(courseId) {
    const course = courses.find(c => c.id === courseId);
    if (!course) return;

    course.completed = !course.completed;

    if (course.completed) {
        if (!completedCourses.includes(course.id)) {
            completedCourses.push(course.id);
        }
    } else {
        const index = completedCourses.indexOf(course.id);
        if (index > -1) {
            completedCourses.splice(index, 1);
        }
    }

    localStorage.setItem('completedCourses', JSON.stringify(completedCourses));
    renderCourses();
}

// Make functions globally accessible
window.showCourseDetail = showCourseDetail;
window.showHome = showHome;
window.toggleComplete = toggleComplete;
window.startCourse = startCourse;
window.markCourseComplete = markCourseComplete;

// Initialize the app when the page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded, initializing...');
    initializeCourses();
    renderCourses();
});