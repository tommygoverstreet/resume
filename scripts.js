/* =====================================================================
   THOMAS OVERSTREET — PORTFOLIO SITE
   ---------------------------------------------------------------------
   HOW TO UPDATE THIS SITE:
   Everything you see on the page lives in the `profile` object below.
   Edit the text, add a role, swap a skill — save, push to GitHub, and
   Netlify redeploys the site automatically. You don't need to touch
   the rendering code underneath.

   RESUME (one page): each experience entry has `highlights` — short,
   punchy bullets used ONLY on the one-page resume sheet. Keep them to
   2 per role (3 max for the current role) so the sheet stays one page.
   The portfolio timeline below uses the full `bullets` list.
   ===================================================================== */

const $ = document.querySelector.bind(document);

const profile = {
  // ---- Identity -------------------------------------------------------
  name: 'Thomas Overstreet',
  firstName: 'Thomas',
  lastName: 'Overstreet',
  tagline: 'Vehicle Sales Manager · U.S. Army Veteran',
  heroIntro: '20+ years in commercial transportation — now matching fleets with the right class 5–8 trucks at Ryder Vehicle Sales.',
  location: 'Yukon, OK',
  workLocation: 'Oklahoma City, OK',
  phone: '903-268-3537',
  email: 'tommygoverstreet@gmail.com',

  // ---- Hero stats ------------------------------------------------------
  stats: [
    { value: '20+', label: 'Years in transportation' },
    { value: '~100', label: 'Units managed on-site' },
    { value: '6', label: 'Military decorations' }
  ],

  // ---- About ------------------------------------------------------------
  summary: 'Vehicle Sales Manager with 20+ years across commercial transportation — from Army mechanic and maintenance leadership to parts and procurement. Now selling class 5-8 trucks at Ryder Vehicle Sales in Oklahoma City, pairing deep product and shop-floor knowledge with relationship-driven selling to match fleets with the right spec.',
  facts: [
    { label: 'Current role', value: 'Vehicle Sales Manager, Ryder Vehicle Sales' },
    { label: 'Based in', value: 'Yukon, OK — serving Oklahoma City' },
    { label: 'Focus', value: 'Class 5–8 commercial truck sales' },
    { label: 'Background', value: 'Maintenance · Parts & Procurement · U.S. Army' }
  ],

  // ---- Experience --------------------------------------------------------
  experience: [
    {
      title: 'Vehicle Sales Manager',
      company: 'Ryder Vehicle Sales',
      location: 'Oklahoma City, OK',
      startDate: 'Feb 2025',
      endDate: 'Present',
      bullets: [
        'Build a retail sales network through prospecting, cold calls, walk-ins, sales events, and referral development to drive class 5-8 truck sales',
        'Pre-sell surplus and incoming inventory to minimize holding time and maximize gains on each unit',
        'Enforce pricing strategy and promote financing options to shorten time-to-sale',
        'Partner with the shop and district maintenance to ensure every unit meets Road Ready condition before sale',
        'Feed market intelligence — local demand, pricing, out-service quality — back to asset management to guide buying and pricing',
        'Manage roughly 100 units of on-site inventory, including bills of sale, titles, and warranty documentation'
      ],
      highlights: [
        'Build retail sales network through prospecting, cold calls, walk-ins, and sales events to drive class 5–8 truck sales',
        'Pre-sell surplus inventory to minimize holding time and maximize per-unit gains; enforce pricing strategy and promote financing to shorten time-to-sale',
        'Partner with shop and district maintenance to certify Road Ready condition; manage ~100 units of on-site inventory'
      ]
    },
    {
      title: 'Maintenance Manager',
      company: 'RWTL Capacity Solutions (Western Flyer Express)',
      location: 'Oklahoma City, OK',
      startDate: 'Jun 2020',
      endDate: 'Dec 2021',
      bullets: [
        'Directed daily operations of the maintenance and parts departments supporting an expedited truckload fleet',
        'Ran the preventive maintenance program to cut road calls, breakdowns, and equipment downtime',
        'Controlled shop P&L — labor, parts purchasing, inventory, and outsourced repairs — against budget',
        'Negotiated vendor contracts and managed warranty claim processing and documentation',
        'Coached and developed technicians while enforcing DOT/FMCSA and OSHA compliance across the shop'
      ],
      highlights: [
        'Directed maintenance and parts operations for an expedited truckload fleet; ran PM program to cut road calls and downtime',
        'Controlled shop P&L against budget; negotiated vendor contracts and managed warranty claims'
      ]
    },
    {
      title: 'Regional Parts and Procurement Manager',
      company: 'Paragon Leasing (Stevens Transport)',
      location: 'Dallas, TX',
      startDate: 'May 2012',
      endDate: 'Nov 2019',
      bullets: [
        'Owned regional purchasing strategy for parts and supplies across multiple branches',
        'Negotiated vendor contracts and managed supplier performance on cost, quality, and on-time delivery',
        'Drove down excess and dead inventory while keeping branches stocked with the right parts to protect uptime',
        'Built regional inventory and spend reports to guide purchasing decisions and surface savings',
        'Resolved invoice discrepancies and enforced purchase order compliance with vendors'
      ],
      highlights: [
        'Owned regional parts purchasing across multiple branches; negotiated vendor contracts on cost, quality, and delivery',
        'Cut excess and dead inventory while protecting uptime; built spend reports that surfaced savings'
      ]
    },
    {
      title: 'Customer Service Representative',
      company: 'Ryder Truck Rental',
      location: 'Farmers Branch, TX',
      startDate: 'Oct 2010',
      endDate: 'Apr 2012',
      bullets: [
        'Served as the customer-facing link between rental/lease customers and the shop at a location with 450+ domicile units',
        'Managed PM scheduling, breakdown communication, and vehicle status updates to protect customer satisfaction',
        'Created repair orders, planned technician workflow, and scheduled current and future shifts',
        'Coordinated parts ordering, receiving, and inventory levels to keep repairs moving',
        'Handled incoming shop calls and resolved driver issues in person and by phone'
      ],
      highlights: [
        'Customer-facing link between rental/lease customers and the shop at a 450+ unit location',
        'Managed PM scheduling, breakdown communication, repair orders, and parts inventory'
      ]
    },
    {
      title: 'Light Wheeled Vehicle Mechanic (91B)',
      company: 'United States Army',
      location: 'Fort Hood, TX',
      startDate: 'Mar 2005',
      endDate: 'Nov 2007',
      bullets: [
        'Deployed to Iraq from October 2006 to September 2007, performing field-level maintenance and recovery operations in a designated imminent danger area',
        'Performed field-level maintenance and recovery operations on light and heavy wheeled vehicles, trailers, and material handling equipment',
        'Diagnosed and repaired powertrain, brake, steering, suspension, hydraulic, and electrical systems including wiring harnesses and starting/charging systems',
        'Conducted in-process inspections and troubleshooting during engine, transmission, and major assembly overhauls',
        'Supervised and mentored junior soldiers, enforcing technical manual compliance and shop safety standards'
      ],
      highlights: [
        '91B Wheeled Vehicle Mechanic; deployed to Iraq (Oct 2006 – Sep 2007) in a designated imminent danger area',
        'Field-level maintenance and recovery on wheeled vehicles, trailers, and material handling equipment'
      ]
    }
  ],

  // ---- Skills -------------------------------------------------------------
  skills: ['Commercial Vehicle Sales', 'Fleet Relationship Management', 'Negotiation & Closing', 'Class 5-8 Truck Spec\'ing', 'Prospecting & Lead Development', 'Customer Retention', 'Transportation Management', 'Maintenance Operations', 'Team Leadership', 'Safety & Regulatory Compliance', 'Budget Management', 'Process Optimization'],

  // Compact skill line for the one-page resume (keep to ~2 lines)
  resumeSkills: 'Commercial Vehicle Sales · Fleet Relationship Management · Negotiation & Closing · Class 5–8 Truck Spec\'ing · Prospecting & Lead Development · DOT/FMCSA Compliance · Budget Management · Vendor Negotiation',

  // ---- Military service ------------------------------------------------------
  service: {
    branch: 'United States Army',
    role: 'Light Wheeled Vehicle Mechanic (91B)',
    dates: 'Mar 2005 – Nov 2007',
    deployment: 'Deployed to Iraq, Oct 2006 – Sep 2007',
    awards: ['Iraq Campaign Medal', 'Global War on Terrorism Service Medal', 'National Defense Service Medal', 'Army Service Ribbon', 'Overseas Service Ribbon', 'Driver and Mechanic Badge']
  },

  // ---- Education ------------------------------------------------------------------
  education: [
    {
      degree: 'Associate of Applied Science',
      major: 'Business Administration',
      school: 'Colorado Technical University',
      location: 'Colorado Springs, CO',
      dates: '2018 – 2021'
    }
  ]
};

/* =====================================================================
   RENDERING — you shouldn't need to edit below this line.
   ===================================================================== */

// Hero stats
$('#hero-stats').innerHTML = profile.stats.map(s =>
  `<div class="stat"><span class="stat-value">${s.value}</span><span class="stat-label">${s.label}</span></div>`
).join('');

// About
$('#about-summary').textContent = profile.summary;
$('#about-facts').innerHTML = profile.facts.map(f =>
  `<div class="fact"><span class="fact-label">${f.label}</span><span class="fact-value">${f.value}</span></div>`
).join('');

// Experience timeline (full bullets)
$('#experience-timeline').innerHTML = profile.experience.map(exp => `
  <article class="timeline-item">
    <div class="timeline-marker"></div>
    <div class="timeline-card">
      <div class="timeline-head">
        <h3>${exp.title}</h3>
        <span class="date-badge">${exp.startDate} – ${exp.endDate}</span>
      </div>
      <p class="timeline-company"><strong>${exp.company}</strong> <span class="muted">| ${exp.location}</span></p>
      <ul class="check-list">${exp.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
    </div>
  </article>`).join('');

// Skills
$('#skills-chips').innerHTML = profile.skills.map(s => `<span class="skill-chip">${s}</span>`).join('');

// Military service
$('#service-awards').innerHTML = profile.service.awards.map(a => `<span class="skill-chip">${a}</span>`).join('');

// Contact
$('#contact-cards').innerHTML = `
  <a class="contact-card" href="tel:+19032683537"><i class="fas fa-phone"></i><span class="contact-label">Phone</span><span class="contact-value">${profile.phone}</span></a>
  <a class="contact-card" href="mailto:${profile.email}"><i class="fas fa-envelope"></i><span class="contact-label">Email</span><span class="contact-value">${profile.email}</span></a>
  <div class="contact-card"><i class="fas fa-map-marker-alt"></i><span class="contact-label">Location</span><span class="contact-value">${profile.location}</span></div>`;

// ---- One-page resume sheet (condensed) ----
$('#resume-sheet').innerHTML = `
  <div class="rs-head">
    <h1>${profile.name}</h1>
    <p class="rs-tagline">${profile.tagline}</p>
    <p class="rs-contact">${profile.location} · ${profile.phone} · ${profile.email}</p>
  </div>
  <div class="rs-section">
    <h2>Summary</h2>
    <p>${profile.summary}</p>
  </div>
  <div class="rs-section">
    <h2>Experience</h2>
    ${profile.experience.map(exp => `
      <div class="rs-job">
        <div class="rs-job-head"><strong>${exp.title}</strong> — ${exp.company}, ${exp.location} <span class="rs-dates">${exp.startDate} – ${exp.endDate}</span></div>
        <ul>${(exp.highlights || exp.bullets.slice(0, 2)).map(h => `<li>${h}</li>`).join('')}</ul>
      </div>`).join('')}
  </div>
  <div class="rs-section">
    <h2>Skills</h2>
    <p>${profile.resumeSkills}</p>
  </div>
  <div class="rs-section rs-two-col">
    <div>
      <h2>Education</h2>
      ${profile.education.map(e => `<p><strong>${e.degree}</strong>, ${e.major}<br>${e.school}, ${e.location} · ${e.dates}</p>`).join('')}
    </div>
    <div>
      <h2>Military Service</h2>
      <p><strong>${profile.service.branch}</strong> · ${profile.service.role}<br>${profile.service.dates} · ${profile.service.deployment}<br><span class="muted">${profile.service.awards.join(' · ')}</span></p>
    </div>
  </div>`;

// ---- Print & PDF ----
// The Download button needs html2pdf.js v0.10+ (worker API). It is loaded
// from CDN in index.html. If the library is missing/blocked, we fall back
// to the print dialog so the user can still save a PDF.
function printResume() {
  const originalTitle = document.title;
  document.title = 'Thomas Overstreet - Resume';
  window.print();
  setTimeout(() => { document.title = originalTitle; }, 500);
}

function downloadResume() {
  const element = document.getElementById('resume-sheet');
  const done = () => document.documentElement.classList.remove('exporting-pdf');
  if (typeof html2pdf === 'undefined') { printResume(); return; }
  let worker;
  try { worker = html2pdf(); } catch (e) { printResume(); return; }
  if (!worker || typeof worker.set !== 'function') { printResume(); return; }
  // Export ONLY the one-page resume sheet (not the portfolio)
  document.documentElement.classList.add('exporting-pdf');
  const opt = {
    margin: [0.4, 0.45, 0.4, 0.45],
    filename: 'Thomas-Overstreet-Resume.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true, logging: false },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    pagebreak: { mode: ['css', 'legacy'] }
  };
  try {
    worker.set(opt).from(element).save().then(done).catch(done);
  } catch (e) { done(); printResume(); }
}
