const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);
    const log = console.log;

    /**
     * Represents a resume with personal information, skills, experience, awards, and education.
     * @typedef {Object} Resume
     * @property {string} fName - The first name of the individual.
     * @property {string} lName - The last name of the individual.
     * @property {string} name - The full name of the individual.
     * @property {string} title - The professional title of the individual.
     * @property {string} location - The location of the individual.
     * @property {string} phone - The phone number of the individual.
     * @property {string} email - The email address of the individual.
     * @property {string} summary - A brief summary of the individual's professional background.
     * @property {string[]} skills - A list of skills possessed by the individual.
     * @property {Object[]} experience - A list of work experiences.
     * @property {string} experience[].title - The job title.
     * @property {string} experience[].company - The company name.
     * @property {string} experience[].location - The location of the job.
     * @property {string} experience[].startDate - The start date of the job.
     * @property {string} experience[].endDate - The end date of the job.
     * @property {string[]} experience[].description - Bullet points describing the role.
     * @property {string[]} awards - A list of awards received by the individual.
     * @property {Object[]} education - A list of educational qualifications.
     * @property {string} education[].degree - The degree obtained.
     * @property {string} education[].major - The major or field of study.
     * @property {string} education[].school - The name of the school.
     * @property {string} education[].location - The location of the school.
     * @property {string} education[].startDate - The start date of the education.
     * @property {string} education[].endDate - The end date of the education.
     */
    const resume = {
      fName: 'Thomas',
      lName: 'Overstreet',
      name: 'Thomas Overstreet',
      title: 'Servant Leader | Proud U.S. Army Veteran',
      location: 'Yukon, OK',
      phone: '903-268-3537',
      email: 'tommygoverstreet@gmail.com',
      summary: 'Vehicle Sales Manager with 20+ years across commercial transportation — from Army mechanic and maintenance leadership to parts and procurement. Now selling class 5-8 trucks at Ryder Vehicle Sales in Oklahoma City, pairing deep product and shop-floor knowledge with relationship-driven selling to match fleets with the right spec.',
      skills: ['Commercial Vehicle Sales', 'Fleet Relationship Management', 'Negotiation & Closing', 'Class 5-8 Truck Spec\'ing', 'Prospecting & Lead Development', 'Customer Retention', 'Transportation Management', 'Maintenance Operations', 'Team Leadership', 'Safety & Regulatory Compliance', 'Budget Management', 'Process Optimization'],
      experience: [
        {
          title: 'Vehicle Sales Manager',
          company: 'Ryder Vehicle Sales',
          location: 'Oklahoma City, OK',
          startDate: 'FEB 2025',
          endDate: 'Present',
          description: [
            'Build a retail sales network through prospecting, cold calls, walk-ins, sales events, and referral development to drive class 5-8 truck sales',
            'Pre-sell surplus and incoming inventory to minimize holding time and maximize gains on each unit',
            'Enforce pricing strategy and promote financing options to shorten time-to-sale',
            'Partner with the shop and district maintenance to ensure every unit meets Road Ready condition before sale',
            'Feed market intelligence — local demand, pricing, out-service quality — back to asset management to guide buying and pricing',
            'Manage roughly 100 units of on-site inventory, including bills of sale, titles, and warranty documentation'
          ]
        },
        {
          title: 'Maintenance Manager',
          company: 'RWTL Capacity Solutions (Western Flyer Express)',
          location: 'Oklahoma City, OK',
          startDate: 'JUN 2020',
          endDate: 'DEC 2021',
          description: [
            'Directed daily operations of the maintenance and parts departments supporting an expedited truckload fleet',
            'Ran the preventive maintenance program to cut road calls, breakdowns, and equipment downtime',
            'Controlled shop P&L — labor, parts purchasing, inventory, and outsourced repairs — against budget',
            'Negotiated vendor contracts and managed warranty claim processing and documentation',
            'Coached and developed technicians while enforcing DOT/FMCSA and OSHA compliance across the shop'
          ]
        },
        {
          title: 'Regional Parts and Procurement Manager',
          company: 'Paragon Leasing (Stevens Transport)',
          location: 'Dallas, TX',
          startDate: 'MAY 2012',
          endDate: 'NOV 2019',
          description: [
            'Owned regional purchasing strategy for parts and supplies across multiple branches',
            'Negotiated vendor contracts and managed supplier performance on cost, quality, and on-time delivery',
            'Drove down excess and dead inventory while keeping branches stocked with the right parts to protect uptime',
            'Built regional inventory and spend reports to guide purchasing decisions and surface savings',
            'Resolved invoice discrepancies and enforced purchase order compliance with vendors'
          ]
        },
        {
          title: 'Customer Service Representative',
          company: 'Ryder Truck Rental',
          location: 'Farmers Branch, TX',
          startDate: 'OCT 2010',
          endDate: 'APR 2012',
          description: [
            'Served as the customer-facing link between rental/lease customers and the shop at a location with 450+ domicile units',
            'Managed PM scheduling, breakdown communication, and vehicle status updates to protect customer satisfaction',
            'Created repair orders, planned technician workflow, and scheduled current and future shifts',
            'Coordinated parts ordering, receiving, and inventory levels to keep repairs moving',
            'Handled incoming shop calls and resolved driver issues in person and by phone'
          ]
        },
        {
          title: 'Light Wheeled Vehicle Mechanic',
          company: 'United States Army',
          location: 'Fort Hood, TX',
          startDate: 'MAR 2005',
          endDate: 'NOV 2007',
          description: [
            'Deployed to Iraq from October 2006 to September 2007, performing field-level maintenance and recovery operations in a designated imminent danger area',
            'Performed field-level maintenance and recovery operations on light and heavy wheeled vehicles, trailers, and material handling equipment',
            'Diagnosed and repaired powertrain, brake, steering, suspension, hydraulic, and electrical systems including wiring harnesses and starting/charging systems',
            'Conducted in-process inspections and troubleshooting during engine, transmission, and major assembly overhauls',
            'Supervised and mentored junior soldiers, enforcing technical manual compliance and shop safety standards'
          ]
        }
      ],
      awards: ['Iraq Campaign Medal', 'Global War on Terrorism Service Medal', 'National Defense Service Medal', 'Army Service Ribbon', 'Overseas Service Ribbon', 'Driver and Mechanic Badge'],
      education: [
        {
          degree: 'Associate of Applied Science',
          major: 'Business Administration',
          school: 'Colorado Technical University',
          location: 'Colorado Springs, CO',
          startDate: '2018',
          endDate: '2021'
        }
      ],
    };

    // Header
    const header = {
      heading: resume.name,
      subHeading: resume.title,
      location: resume.location,
      phone: resume.phone,
      email: resume.email,
      render: function () {
        $('.header').innerHTML = `<header class="header-grid"><div class="header-main"><h1 id="heading" class="h1">${resume.fName} <span class="text-primary">${resume.lName}</span></h1><p id="subHeading"><strong>${this.subHeading}</strong></p></div><div class="header-contact"><p><i class="fa fa-map-marker-alt"></i>${this.location}</p><p><i class="fa fa-phone"></i>${this.phone}</p><p><a href="mailto:${this.email}"><i class="fa fa-envelope"></i>${this.email}</a></p></div></header>`;
      }
    };

    // Summary
    const summary = {
      heading: 'Summary',
      content: resume.summary,
      render: function () {
        $('#summary').innerHTML = `<div><h2 class="h2">${this.heading}</h2><p class="summary-text">${this.content}</p></div>`;
      }
    };

    // Experience
    const experience = {
      heading: 'Experience',
      render: function () {
        $('#experience').innerHTML = `<div><h2 class="h2">${this.heading}</h2>${resume.experience.map((exp) => `<article class="exp-item"><div class="exp-head"><h3>${exp.title}</h3><span class="date-badge"><strong>${exp.startDate}</strong> - <strong>${exp.endDate}</strong></span></div><p class="exp-company"><strong>${exp.company}</strong> <span class="exp-location">| ${exp.location}</span></p><ul class="exp-list">${exp.description.map((d) => `<li>${d}</li>`).join('')}</ul></article>`).join('')}</div>`;
      }
    };

    // Education
    const education = {
      heading: 'Education',
      render: function () {
        $('#education').innerHTML = `<div><h2 class="h2">${this.heading}</h2><ul class="plain-list">${resume.education.map((edu) => `<li><strong>${edu.degree}</strong> in ${edu.major}<br>${edu.school} | ${edu.location}<br><span class="muted">${edu.startDate} - ${edu.endDate}</span></li>`).join('')}</ul></div>`;
      }
    };

    // Skills
    const skills = {
      heading: 'Skills',
      render: function () {
        $('#skills').innerHTML = `<div><h2 class="h2">${this.heading}</h2><div class="skill-chips">${resume.skills.map((skill) => `<span class="skill-chip">${skill}</span>`).join('')}</div></div>`;
      }
    };

    // Awards
    const awards = {
      heading: 'Awards',
      render: function () {
        $('#awards').innerHTML = `<div><h2 class="h2">${this.heading}</h2><div class="skill-chips">${resume.awards.map((award) => `<span class="skill-chip">${award}</span>`).join('')}</div></div>`;
      }
    };


    header.render();
    summary.render();
    experience.render();
    education.render();
    skills.render();
    awards.render();

    // Function to print the resume (sets a clean filename for "Save as PDF")
    function printResume() {
      const originalTitle = document.title;
      document.title = 'Thomas Overstreet - Resume';
      window.print();
      setTimeout(() => { document.title = originalTitle; }, 500);
    }

    // Function to download the resume as a PDF.
    // Note: this renders the page to an image-based PDF (quick and pretty).
    // For ATS/recruiter submissions, use Print -> "Save as PDF" instead so the
    // text stays selectable.
    function downloadResume() {
      // Hide the action bar and FAQ while the exporter screenshots the DOM
      document.documentElement.classList.add('exporting-pdf');
      const element = document.getElementById('resume');
      const opt = {
        margin: [0.4, 0.5, 0.4, 0.5],
        filename: 'Thomas-Overstreet-Resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, logging: false },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
        // Respect CSS break-inside: avoid so sections aren't sliced mid-item
        pagebreak: { mode: ['css', 'legacy'] }
      };
      const done = () => document.documentElement.classList.remove('exporting-pdf');
      html2pdf().set(opt).from(element).save().then(done).catch(done);
    }
