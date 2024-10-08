 const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);
    const log = console.log;

    const resume = {
      fName: 'Thomas',
      lName: 'Overstreet',
      name: this.fName + ' ' + this.lName,
      title: 'Servant Leader | Proud U.S Army Veteran',
      location: 'Yukon, OK',
      phone: '903-268-3537',
      email: 'tommygoverstreet@gmail.com',
      summary: 'Experienced Transportation Manager with over 20 years of expertise in managing and overseeing maintenance operations. Proven track record of enhancing efficiency, reducing downtime, and optimizing processes to ensure operational excellence.',
      skills: ['Transportation Management', 'Maintenance Operations', 'Process Optimization', 'Team Leadership', 'Safety Compliance', 'Regulatory Compliance', 'Budget Management', 'Logistics Management', 'Strategic Planning', 'Problem Solving'],
      experience: [
        {
          title: 'Truck Sales Representative',
          company: 'Ryder Vehicle Sales',
          location: 'Oklahoma City, OK',
          startDate: 'MAR 2022',
          endDate: 'Present',
          description: 'Develop and maintain relationships with customers to drive sales growth. Identify customer needs and provide solutions to meet those needs. Collaborate with internal teams to ensure customer satisfaction and retention. Inspect and examine vehicles to ensure quality and safety standards are met.'
        },
        {
          title: 'Maintenance Manager',
          company: 'RWTL Capacity Solutions (Western Flyer Express)',
          location: 'Oklahoma City, OK',
          startDate: 'JUN 2020',
          endDate: 'DEC 2021',
          description: 'Managed daily operations of maintenance and parts departments. Oversaw maintenance of fleet vehicles to ensure compliance with safety and regulatory standards. Developed and implemented maintenance schedules to optimize vehicle performance and reduce downtime. Conducted regular inspections and audits to identify areas for improvement. Reviewed repair orders and invoices to ensure accuracy and compliance with budgetary constraints. Assisted with comparison analytics to determine cost-effective solutions for maintenance, repairs, and new truck purchasing.'
        },
        {
          title: 'Regional Parts and Procurement Manager',
          company: 'Paragon Leasing (Stevens Transport)',
          location: 'Dallas, TX',
          startDate: 'MAY 2012',
          endDate: 'NOV 2019',
          description: 'Managed a team of drivers and dispatchers to ensure timely delivery of goods. Developed and implemented strategies to optimize transportation operations and reduce costs. Oversaw maintenance of fleet vehicles to ensure compliance with safety and regulatory standards. Conducted regular inspections and audits to identify areas for improvement. Reviewed repair orders and invoices to ensure accuracy and compliance with budgetary constraints. Assisted with comparison analytics to determine cost-effective solutions for maintenance, repairs, and new truck purchasing.'
        },
        {
          title: 'Customer Service Representative',
          company: 'Ryder Truck Rental',
          location: 'Farmers Branch, TX',
          startDate: 'OCT 2010',
          endDate: 'APR 2012',
          description: 'Provided exceoptional customer service to rental and lease customers. Assisted in person and over the phone with driver issues, scheduling, and maintenance needs. Coordinated with maintenance team to ensure timely repairs and maintenance. Monitored technician workloads and scheduled repairs for current and future shifts. Assisted with parts procurement and inventory management.'
        },
        {
          title: 'Light Wheeled Vehicle Mechanic | Soldier',
          company: 'United States Army',
          location: 'Fort Hood, TX',
          startDate: 'MAR 2005',
          endDate: 'NOV 2007',
          description: 'Performed maintenance and repairs on military vehicles and equipment. Conducted regular inspections and audits to identify areas for improvement. Reviewed repair orders and invoices to ensure accuracy and compliance with budgetary constraints. Assisted with comparison analytics to determine cost-effective solutions for maintenance, repairs, and new truck purchasing. Trained and mentored junior mechanics on proper maintenance procedures and safety protocols.'
        }
      ],
      awards: ['National Defense Service Medal', 'Global War on Terrorism Service Medal', 'Army Service Ribbon', 'Overseas Service Ribbon', 'Driver and Mechanic Badge'],
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
        $('.header').innerHTML = `<!--Header Grid--><header class="grid-2"><!--Left--><div class="grid-item-1"><h1 id="heading" class="h1">${resume.fName} <span class="text-primary">${resume.lName}</span></h1><p id="subHeading"><strong>${this.subHeading}</strong></p></div><!--Right--><div class="grid-item-2"><p><i class="fa fa-map mr-1"></i>${this.location}</p><p><i class="fa fa-phone mr-1"></i>${this.phone}</p><p><a href="mailto:${this.email}"><i class="fa fa-envelope mr-1"></i>${this.email}</a></p></div></header><!---------------------------------->`;
      }
    };

    // Summary
    const summary = {
      heading: 'Summary',
      content: resume.summary,
      render: function () {
        $('#summary').innerHTML = `<!--Summary--><div><h2 class="h2">${this.heading}</h2><p>${this.content}</p></div><!--Experience-->`;
      }
    };

    // Experience
    const experience = {
      heading: 'Experience',
      render: function () {
        $('#experience').innerHTML = `<!--Experience--><div><h2 class="h2">${this.heading}</h2><!--Experience Items-->${resume.experience.map((exp) => `<div class="exp-item"><h3>${exp.title}</h3><p><strong>${exp.company}</strong> | ${exp.location}</p><p class="badge badge-primary p-2"><strong>${exp.startDate}</strong> - <strong>${exp.endDate}</strong></p><p>${exp.description}</p></div>`).join('')}</div><!--Contact-->`;
      }
    };

    // Education
    const education = {
      heading: 'Education',
      render: function () {
        $('#education').innerHTML = `<!--Education--><div><h2 class="h2">${this.heading}</h2><ul>${resume.education.map((edu) => `<li><strong>${edu.degree}</strong> in ${edu.major} | ${edu.school} | ${edu.location} | ${edu.startDate} - ${edu.endDate}</li>`).join('')}</ul></div><!--Skills-->`;
      }
    };

    // Skills
    const skills = {
      heading: 'Skills',
      render: function () {
        $('#skills').innerHTML = `<!--Skills--><div><h2 class="h2">${this.heading}</h2><ul>${resume.skills.map((skill) => `<li>${skill}</li>`).join('')}</ul></div><!--Awards-->`;
      }
    };

    // Awards
    const awards = {
      heading: 'Awards',
      render: function () {
        $('#awards').innerHTML = `<!--Awards--><div><h2 class="h2">${this.heading}</h2><ul>${resume.awards.map((award) => `<li>${award}</li>`).join('')}</ul></div>`;
      }
    };


    header.render();
    summary.render();
    experience.render();
    education.render();
    skills.render();
    awards.render();

    // Function to print the resume
    function printResume() {
      window.print();
    }

    // Function to download the resume as a PDF
    function downloadResume() {
      const element = document.getElementById('resume');
      html2pdf(element);
    }
