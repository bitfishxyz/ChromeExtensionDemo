let interval = setInterval(() => {
  document.getElementById("localTime")
    .innerText = new Date().toString()
}, 1000);