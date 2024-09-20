(() => {
    // let t = null;
    const dc = document.querySelectorAll('span');
    if (!Boolean(window.DeviceMotionEvent)) {
        alert("No Accelerometer");
    }
    else {
        // const accelerometerUpdate = e => {
        //     // if (t !== null) clearTimeout(t);
        //     // t = setTimeout(() => {
        //     setTimeout(() => {
        //         dc[0].innerText = (e.accelerationIncludingGravity.x * 1).toFixed(1);
        //         dc[1].innerText = (e.accelerationIncludingGravity.y * 1).toFixed(1);
        //         dc[2].innerText = (e.accelerationIncludingGravity.z * 1).toFixed(1);
        //         t = null;
        //     }, 2500);
        // }
        // window.addEventListener("devicemotion", accelerometerUpdate, true);

        const acl = new Accelerometer({ frequency: 2 });
        acl.addEventListener("reading", () => {
            dc[0].innerText = (+acl.x).toFixed(1);
            dc[1].innerText = (+acl.y).toFixed(1);
            dc[2].innerText = (+acl.z).toFixed(1);
        });
        acl.start();
    }
})();