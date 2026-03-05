// Initialize AOS Animation Library
AOS.init({
    duration: 800,
    once: true,
    offset: 100,
    easing: 'ease-in-out'
});

// Navigation active state on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
    
    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.8)';
        navbar.style.boxShadow = 'none';
    }
});

// Mobile menu toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    });
}

// Service detail modal functionality
const modal = document.getElementById('service-modal');
const modalContent = document.getElementById('modal-content-area');
const closeBtn = document.querySelector('.modal-close');

const serviceDetails = {
    cleaning: {
        title: 'Data Cleaning & Validation',
        description: 'I ensure your data is accurate, consistent, and ready for analysis. Using R, Python, and Excel, I identify and handle missing values, outliers, and inconsistencies. This foundational step saves time and ensures reliable results.',
        tools: ['R', 'Excel', 'OpenRefine', 'Python'],
        process: 'I follow a systematic approach: data auditing, missing value treatment, outlier detection, standardization, and validation against source systems.'
    },
    analysis: {
        title: 'Statistical Analysis',
        description: 'Leveraging advanced statistical tools including R, SPSS, Minitab, and Excel for deep statistical insights. I perform regression analysis, ANOVA, time series forecasting, and multivariate analysis.',
        tools: ['R', 'SPSS', 'Minitab', 'Excel', 'Python'],
        process: 'I select appropriate statistical methods based on your data structure and business questions, ensuring rigorous assumptions testing and validation.'
    },
    hypothesis: {
        title: 'Hypothesis Testing',
        description: 'Rigorous statistical testing to validate your business assumptions. I design experiments, determine sample sizes, and apply appropriate tests (t-tests, chi-square, ANOVA, etc.) to draw reliable conclusions.',
        tools: ['R', 'SPSS', 'Minitab', 'Python'],
        process: 'I help formulate null and alternative hypotheses, select significance levels, conduct power analysis, and interpret p-values in context.'
    },
    eda: {
        title: 'Exploratory Data Analysis',
        description: 'Uncovering hidden patterns and trends in complex datasets. I use visualization and statistical techniques to understand data structure, identify relationships, and generate hypotheses for further analysis.',
        tools: ['R (ggplot2)', 'Power BI', 'Tableau', 'Python (matplotlib/seaborn)'],
        process: 'I create comprehensive visual summaries, calculate summary statistics, identify correlations, and document initial insights.'
    },
    visualization: {
        title: 'Visualization & Reporting',
        description: 'Clear, impactful visualizations and comprehensive reports that communicate complex findings to diverse audiences. I transform numbers into narratives.',
        tools: ['Power BI', 'R (ggplot2)', 'Excel', 'Tableau', 'Canva'],
        process: 'I design dashboards and reports tailored to your audience, highlighting key insights and providing actionable recommendations.'
    },
    mande: {
        title: 'M&E & Budget Planning',
        description: 'County-level project evaluation and financial insights. I contributed to Nakuru County development planning, budget processes, and project monitoring.',
        tools: ['Excel', 'SPSS', 'R', 'Budget Analysis Tools'],
        process: 'I participated in county planning, analyzed demographic data for resource allocation, and contributed to monitoring and evaluation frameworks.'
    }
};

function showServiceDetail(service) {
    const detail = serviceDetails[service];
    if (!detail) return;
    
    modalContent.innerHTML = `
        <h2 style="color: var(--burgundy-rich); margin-bottom: 20px;">${detail.title}</h2>
        <p style="margin-bottom: 20px;">${detail.description}</p>
        <div style="margin-bottom: 20px;">
            <h4 style="color: var(--gold-warm); margin-bottom: 10px;">Tools Used:</h4>
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                ${detail.tools.map(tool => `<span style="background: rgba(201,163,106,0.1); color: var(--burgundy-rich); padding: 4px 12px; border-radius: 50px; font-size: 0.9rem;">${tool}</span>`).join('')}
            </div>
        </div>
        <div>
            <h4 style="color: var(--gold-warm); margin-bottom: 10px;">My Approach:</h4>
            <p>${detail.process}</p>
        </div>
    `;
    
    modal.classList.add('show');
}

if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('show');
    });
}

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('show');
    }
});

// CV Download functionality
document.getElementById('download-cv')?.addEventListener('click', function(e) {
    e.preventDefault();
    alert('To add your CV PDF: Save your CV as "cv.pdf" and upload it to the same folder. This link will then download it automatically.');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission handling (for InfinityFree - use Formspree)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Simple validation
        if (!data.name || !data.email || !data.message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Show success message (since actual form submission requires backend)
        alert('Thank you for your message! (Note: For actual email functionality, replace form action with your Formspree endpoint)');
        
        // Optional: clear form
        this.reset();
    });
}