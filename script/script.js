// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');
console.log(header)
window.onscroll = function () {
    const top = window.scrollY;
    if (top >= 100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
// collapse navbar after click on small devices
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})

document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    var name = document.getElementsByName("name")[0].value;
    var email = document.getElementsByName("email")[0].value;
    var message = document.getElementsByName("message")[0].value;

    // Prepare email data
    var subject = "Portfolio Contact Form Submission";
    var body = "Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message;

    // Construct mailto link
    var mailtoLink = "mailto:bittukumar1181.com?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);

    // Open default email client
    window.location.href = mailtoLink;
});


const lines = ["Competitive Programmer", "Web Developer", "Subject Matter Expert"];
const interval = 2000; // Interval in milliseconds
const delayAtStart = 1000; // Delay at the start of each line

let index = 0;
const textElement = document.getElementById("text");

function animateText() {
  const line = lines[index];
  let animatedText = '';

  setTimeout(() => {
    for (let i = 0; i < line.length; i++) {
      const letter = line[i];
      const span = `<span style="transition-delay: ${i * 100}ms">${letter}</span>`;
      animatedText += span;
    }

    textElement.innerHTML = animatedText;

    const letters = textElement.getElementsByTagName("span");
    for (let i = 0; i < letters.length; i++) {
      const letter = letters[i];
      setTimeout(() => {
        letter.style.opacity = 0;
      }, (i * 100) + delayAtStart);
    }

    index = (index + 1) % lines.length;
    setTimeout(animateText, line.length * 100 + (delayAtStart * 2));
  }, delayAtStart);
}

animateText();

