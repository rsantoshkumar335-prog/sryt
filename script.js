const card = document.getElementById('tilt-card');

// 1. 3D Tilt Effect on Mouse Move (For PC/Laptops)
document.addEventListener('mousemove', (e) => {
    if(window.innerWidth > 768) {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 40;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 40;
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    }
});

document.addEventListener('mouseleave', () => {
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    card.style.transition = `transform 0.5s ease`;
});

document.addEventListener('mouseenter', () => {
    card.style.transition = `none`;
});

// 2. YouTube Native App Deep Linking Logic
const ytButton = document.getElementById('yt-link');

ytButton.addEventListener('click', function(event) {
    event.preventDefault(); // Default website loading ko roko

    // Aapka channel id
    const channelId = "@sryt-y";
    const webUrl = "https://www.youtube.com/" + channelId;
    
    // User konsa device use kar raha hai detect karo
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Agar iPhone / iPad hai
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        // iOS app open karne ka code
        window.location.href = "vnd.youtube://www.youtube.com/" + channelId;
        // Agar app nahi hai toh thodi der me browser me khol do
        setTimeout(function () { window.location.href = webUrl; }, 1000);
    } 
    // Agar Android hai
    else if (/android/i.test(userAgent)) {
        // Android me intent forcefully app kholta hai (bypassing Instagram Webview)
        window.location.href = "intent://www.youtube.com/" + channelId + "#Intent;package=com.google.android.youtube;scheme=https;end";
        
        setTimeout(function () { window.location.href = webUrl; }, 1000);
    } 
    // Agar PC (Windows/Mac) hai
    else {
        window.open(webUrl, "_blank");
    }
});
