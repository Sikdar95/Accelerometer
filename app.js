(() => {
    if (!Boolean(Accelerometer)) {
        document.querySelector('#main').innerHTML = `<h1>Your device/browser does not have/support an accelerometer</h1>`
    }
    else {
        const dc = document.querySelectorAll('span');
        const acl = new Accelerometer({ frequency: 2 });
        acl.addEventListener("reading", () => {
            dc[0].innerText = (+acl.x).toFixed(1);
            dc[1].innerText = (+acl.y).toFixed(1);
            dc[2].innerText = (+acl.z).toFixed(1);
        });
        acl.start();
    }
})();