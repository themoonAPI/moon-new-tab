function updateTime() {
    let now = new Date();
    let time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    document.getElementById('time').innerText = time;
}
setInterval(updateTime, 1000);
updateTime();
