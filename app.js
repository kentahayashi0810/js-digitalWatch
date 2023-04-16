function showtime() {
  const currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();
  let session = "AM";

  if (hours == 12) {
    hours = 0;
  }
  if (hours > 12) {
    hours -= 12;
    session = "PM";
  }
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  const time = `${hours} : ${minutes} : ${seconds} ${session}`;

  const watch = document.getElementById("watch");
  watch.innerText = time;

  setTimeout(showtime, 1000);
}

showtime();
