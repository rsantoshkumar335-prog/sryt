const card = document.getElementById('tilt-card');

// 3D Tilt Effect on Mouse Move
document.addEventListener('mousemove', (e) => {
    // Only apply on larger screens
    if(window.innerWidth > 768) {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 40;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 40;
        
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    }
});

// Reset tilt on mouse out of window
document.addEventListener('mouseleave', () => {
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    card.style.transition = `transform 0.5s ease`;
});

// Remove transition while moving for smoothness
document.addEventListener('mouseenter', () => {
    card.style.transition = `none`;
});
