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
                dc[0].innerText = (e.accelerationIncludingGravity.x * 1).toFixed(1);
                dc[1].innerText = (e.accelerationIncludingGravity.y * 1).toFixed(1);
                dc[2].innerText = (e.accelerationIncludingGravity.z * 1).toFixed(1);
                t = null;
            }, 2500);
        }
        window.addEventListener("devicemotion", accelerometerUpdate, true);

        const acl = new Accelerometer({ frequency: 10 });
        acl.addEventListener("reading", () => {
            dc[3].innerText = acl.x;
            dc[4].innerText = acl.y;
            dc[5].innerText = acl.z;
        });
        acl.start();
    }
})();