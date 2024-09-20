(() => {
    // let t = null;
    if (!Boolean(window.DeviceMotionEvent)) {
        alert("No Accelerometer");
    }
    else {
        const dc = document.querySelectorAll('span');
        const accelerometerUpdate = e => {
            // if (t !== null) clearTimeout(t);
            // t = setTimeout(() => {
            setTimeout(() => {
                dc[0].innerText = (e.accelerationIncludingGravity.x * 1).toFixed(2);
                dc[1].innerText = (e.accelerationIncludingGravity.y * 1).toFixed(2);
                dc[2].innerText = (e.accelerationIncludingGravity.z * 1).toFixed(2);
                t = null;
            }, 5000);
        }
        window.addEventListener("devicemotion", accelerometerUpdate, true);
    }
})();