(() => {
    if (!Boolean(window.DeviceMotionEvent)) {
        alert("No Accelerometer");
    }
    else {
        const accelerometerUpdate = e => {
            const dc = document.querySelectorAll('h3');
            dc[0].innerText = (e.accelerationIncludingGravity.x * 1).toFixed(3);
            dc[1].innerText = (e.accelerationIncludingGravity.y * 1).toFixed(3);
            dc[2].innerText = (e.accelerationIncludingGravity.z * 1).toFixed(3);
        }
        window.addEventListener("devicemotion", accelerometerUpdate, true);
    }
})();