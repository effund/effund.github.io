// Header scroll effect
const header = document.querySelector('.header');
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileNav = document.querySelector('.mobile-nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile menu toggle
mobileMenuButton.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
});

// Close mobile menu when clicking a link
mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
    });
});

// Timeline data
const timelineData = [
    {
        date: "January 26, 2026",
        title: "Applications Open",
        active: true,
        description: "Apply for the Fund. Don't forget that every nomination requires a donation."
    },
    {
        date: "March 15, 2026",
        title: "Applications Closed",
        description: "Make sure to have submitted your nomination by end of day on March 15, Sunday."
    },
    {
        date: "March 23, 2026",
        title: "Voting Opens",
        description: "Vote for your preferred applicant for the Fund. You will be able to read their presentation."
    },
    {
        date: "April 30, 2026",
        title: "Voting closed at end of day",
        description: "Voting closes and winner is shortly announced on the website and in groups."
    },
    {
        date: "July 2, 2026",
        title: "Metropolcon/Eurocon 2026 begins in Berlin, Germany",
        description: "The EFF delegate "
    }
];

// Create timeline items
const timelineGrid = document.querySelector('.timeline-grid');

timelineData.forEach((item, index) => {
    const timelineItem = document.createElement('div');
    timelineItem.className = item.active ? 'timeline-item active' : 'timeline-item';
    timelineItem.style.marginLeft = index % 2 === 0 ? '-10px' : 'calc(50% + 10px)';

    timelineItem.innerHTML = `
        <div class="timeline-content">
            <span class="date">${item.date}</span>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
        </div>
    `;

    timelineGrid.appendChild(timelineItem);
});

// Intersection Observer for timeline animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.timeline-item').forEach(item => {
    observer.observe(item);
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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