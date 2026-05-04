// Header scroll effect
const header = document.querySelector('.header');
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileNav = document.querySelector('.mobile-nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile menu toggle
mobileMenuButton.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
});

// Close mobile menu when clicking a link
mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
    });
});

// Timeline data
const timelineData = [
    {
        date: "January 30, 2026",
        title: "Applications Open",
        description: "Apply for the Fund. Don't forget that every nomination requires a donation."
    },
    {
        date: "March 29, 2026",
        title: "Applications Closed",
        description: "Make sure to have submitted your nomination by end of day on March 29, Sunday."
    },
    {
        date: "April 2, 2026",
        title: "Voting Opens",
        description: "Vote for your preferred applicant for the Fund. You will be able to read their presentation."
    },
    {
        date: "April 30, 2026",
        title: "Voting closed at end of day",
        description: "Voting closes and winner is shortly announced on the website and in groups."
    },
    {
        date: "May 5, 2026",
        title: "Winner announced",
        active: true,
        description: "The new EFF delegate is announced."
    },
    {
        date: "July 2, 2026",
        title: "Metropolcon/Eurocon 2026 begins in Berlin, Germany",
        description: "The EFF delegate participates in the Eurocon."
    }
];

// Create timeline items
const timelineGrid = document.querySelector('.timeline-grid');

timelineData.forEach((item, index) => {
    const timelineItem = document.createElement('div');
    timelineItem.className = item.active ? 'timeline-item active' : 'timeline-item';
    timelineItem.style.marginLeft = index % 2 === 0 ? '-10px' : 'calc(50% + 10px)';

    timelineItem.innerHTML = `
        <div class="timeline-content">
            <span class="date">${item.date}</span>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
        </div>
    `;

    timelineGrid.appendChild(timelineItem);
});

// Intersection Observer for timeline animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.timeline-item').forEach(item => {
    observer.observe(item);
});

// Voting logic

let transactionId = null, currencyCode = null, amount = null, email = null;
let paymentStarted = false, voteProcessed = false;

const formContainer = document.getElementById('vote-form');

const SALT = "eff_2026";

async function hash(input) {
  const encoder = new TextEncoder();
  const data = encoder.encode(input);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map(b => b.toString(16).padStart(2, "0"))
    .join("");
}

function enableVoting(tx) {
  // document.getElementById('candidate-1').classList.remove('disabled');
  // document.getElementById('candidate-2').classList.remove('disabled');
  // document.getElementById('candidate-3').classList.remove('disabled');
  // document.getElementById('candidate-4').classList.remove('disabled');
  // document.getElementById('candidate-5').classList.remove('disabled');

  formContainer.innerHTML = `
        <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSc-Dgz3Kq8_E7VJYM1Yfu7-ws-ltBy0JxLdnBqvQD98vbloWg/viewform?usp=pp_url&entry.1722688789=${tx}&embedded=true"
            width="640"
            height="800"
            frameborder="0">
        </iframe>`;

  localStorage.setItem('voted', 'true');
}

window.onload = function () {

  //voting closed
    return;

  if (localStorage.getItem('canVote') === 'true') {
    enableVoting();
    transactionId = localStorage.getItem('tx');
  }

  if (localStorage.getItem('voted') === 'true') {
    document.getElementById('cards').innerHTML =
      "<h3 class='success'>✅ You already voted</h2>";
    formContainer.innerHTML = '';
    document.getElementById('vote-donate').innerHTML =
        "<h3 class='success'>✅ You already voted</h2>";
  } else {
    const params = new URLSearchParams(window.location.search);
    const tx = params.get('tx');
    const status = params.get('st');

    if (tx && status === "Completed") {
        donationDone({id: tx, amount: params.get('amt'), currency: params.get('cc')}, "return");
    }
  }
};

function donationDone(details, src) {
      // transactionId = details.tx;
      // currencyCode = details.cc;
      // amount = details.amt;
      // email = details.email || "unknown";

      localStorage.setItem('canVote', 'true');
      localStorage.setItem('tx', transactionId);

      if (localStorage.getItem('voted') === 'true') return;

      document.getElementById('status').innerText =
        "✅ Payment successful! You can now vote.";

      enableVoting(details.tx);
}

PayPal.Donation.Button({
    env:'production',
    hosted_button_id:'LKBQWYWD6Z7CA',
    image: {
        src:'button-nobg.png',
        width: '150px',
        alt:'Donate with PayPal button',
        title:'Support the EFF and cast your vote',
    },
    amount: "3.00",
    currency: "EUR",
    enable_funding: ["card", "applepay", "googlepay"],
    onClick: function() { paymentStarted = true; },
    onComplete: function(details) { donationDone(details, "approved"); }
}).render('#paypal-button');

// paypal.Buttons({

//   style: {
//     layout: 'vertical',
//     shape: 'pill',
//     label: 'pay'
//   }

//   createOrder: function (data, actions) {
//     return actions.order.create({
//       purchase_units: [{
//         description: "Support the EFF",
//         amount: {
//             currencyCode: "EUR",
//             value: '3.00'
//         }
//       }],
//       application_context: {
//         shipping_preference: "NO_SHIPPING",
//         user_action: "PAY_NOW"
//       }
//     });
//   },

//   onApprove: function (data, actions) {
//     return actions.order.capture().then(function (details) {

//       transactionId = details.id;
//       currencyCode = details.purchase_units[0].payments.captures[0].amount.currency_code;
//       amount = details.purchase_units[0].payments.captures[0].amount.value;
//       email = details.payer.email_address || "unknown";

//       localStorage.setItem('canVote', 'true');
//       localStorage.setItem('tx', transactionId);

//       enableVoting();

//       document.getElementById('status').innerText =
//         "✅ Payment successful! You can now vote.";
//     });
//   }

// }).render('#paypal-button');

async function submitVote(choice) {

  if (localStorage.getItem('voted') === 'true') return;

  const signature = await hash(transactionId + SALT);

  fetch("https://script.google.com/macros/s/AKfycbzdbKeb-F0JlhYR4vkqlFdkak32pVvELGKcDaVV3DkTJ8jUjdbXgSTZEJgg0soyIYtq/exec", {
    method: "POST",
    body: JSON.stringify({
      transactionId: transactionId,
      currency: currencyCode,
      amount: amount,
      email: email,
      vote: choice,
      secret: SALT,
      signature: signature
    })
  })
  .then(res => res.text())
  .then(res => {

    if (res.includes("duplicate")) {
      //alert("Vote already made.");
        document.getElementById('status').innerText =
         "✅ Vote already made.";
      return;
    }

    localStorage.setItem('voted', 'true');

    document.getElementById('cards').innerHTML =
      "<h3 class='success'>🎉 Thanks for voting!</h3>";

    document.getElementById('status').innerText =
      "✅ Vote recorded successfully.";

  })
  .catch(() => {
    document.getElementById('status').innerText =
      "Error submitting vote.";
  });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});