const section = document.getElementById('services');
const progress = document.getElementById('timeline-progress');
const items = document.querySelectorAll('.timeline-item');

window.addEventListener('scroll', () => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionBottom = section.getBoundingClientRect().bottom;
    const viewportCenter = window.innerHeight * 0.5;

    let activeIndex = -1;

    items.forEach((item, index) => {
        const dot = item.querySelector('.timeline-dot');
        const card = item.querySelector('.timeline-card');
        const itemTop = item.getBoundingClientRect().top;

        if (itemTop < viewportCenter) {
            activeIndex = index;

            dot.classList.add('border-blue-500', 'text-blue-500');
            dot.classList.remove('border-gray-300');

            card.classList.remove('opacity-0', 'translate-y-6');
            card.classList.add('opacity-100', 'translate-y-0');
        } else {
            dot.classList.remove('border-blue-500', 'text-blue-500');
            dot.classList.add('border-gray-300');

            card.classList.add('opacity-0', 'translate-y-6');
            card.classList.remove('opacity-100', 'translate-y-0');
        }
    });

    if (activeIndex >= 0) {
        const activeDot = items[activeIndex].querySelector('.timeline-dot');
        const timelineTop = progress.parentElement.getBoundingClientRect().top;
        const dotCenter =
            activeDot.getBoundingClientRect().top +
            activeDot.offsetHeight / 2;

        const height = dotCenter - timelineTop;
        progress.style.height = `${height}px`;
    } else {
        progress.style.height = '0px';
    }
});

const popup = document.getElementById('seo-popup');
const closeBtn = document.getElementById('close-popup');
const form = document.getElementById('seo-form');

document.querySelectorAll('.seo-audit-btn').forEach(btn => {
    btn.addEventListener('click', e => {
        e.preventDefault();
        popup.classList.remove('hidden');
        popup.classList.add('flex');
    });
});

closeBtn.addEventListener('click', () => {
    popup.classList.add('hidden');
    popup.classList.remove('flex');
});

form.addEventListener('submit', e => {
    e.preventDefault();
    const website = document.getElementById('website-link').value.trim();
    if (!website) return;
    const message = `Hi! I'd like a free SEO audit for my website: ${website}`;
    const whatsappLink = `https://wa.me/212701971272?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
    popup.classList.add('hidden');
    popup.classList.remove('flex');
});

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const elements = section.querySelectorAll('.animate-in');

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    elements.forEach((el, index) => {
                        setTimeout(() => {
                            el.classList.add('active');
                        }, index * 150);
                    });
                    observer.unobserve(section);
                }
            });
        }, {
            threshold: 0.2
        });

        observer.observe(section);
    });
});