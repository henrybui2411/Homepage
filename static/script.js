const data = {
      "2018" : {
        project: {
                title: "Roll dice game",
                date: "July 2018",
                content: [
                    ">> Created a small game between player and computer by using C++ programming language",
                    ">> Take turn to roll a dice, whoever get to 100 first is a winner"
                ],
            }
      },
     // "2018" : {
     //    project: [
     //        {
     //            title: "Roll dice game",
     //            date: "July 2018",
     //            content: [
     //                ">> Created a small game between player and computer by using C++ programming language",
     //                ">> Take turn to roll a dice, whoever get to 100 first is a winner"
     //            ]
     //        },
     //        {
     //            title: "C string",
     //            date: "July 2018",
     //            content: [
     //                ">> Created a small game between player and computer by using C++ programming language",
     //                ">> Take turn to roll a dice, whoever get to 100 first is a winner"
     //            ]
     //        }
     //    ]
     // },
      "2019" : {
      project: {
              title: "Hootsuite // High School Software Engineer Intern",
              date: "June 2019 - August 2019",
              content: [
                  ">> Implemented banners for Facebook Public Launch using React v.16.9",
                  ">> Worked on Scala microservices and API endpoints for @mention feature in Inbox",
                  ">> Database Improvement: restructured the double-storing message data and saved ~125-150 GB of memory in the database",
                  ">> Solved 3 customer-impact bugs that significantly improved the SLOs by over 20%",
                  ">> Refactored 714 performance and code style errors in GraphQL in the duration of my last 2 days"
              ],
              img: "./image/experiences/hootsuite2.jpg"
          },
          education: {
              school: "University of British Columbia (UBC)",
              grad_year: "September 2019 - June 2023",
              degree: ">> Degree: Bachelor of Science - BSc.",
              major: ">> Expected Major: Computer Science"
          },
          scholarships: [
              ">> Schulich Leader Scholarship Nomination",
              ">> BC Achievement Scholarship"
          ],
          clubs: [
              {
                  name: "UBC Launch Pad",
                  description: ">> A student-run software engineering team devoted to building software projects in a collaborative and professional environment. Our primary objective is to be the best space at UBC for students to meet other tech enthusiasts, build projects in a team setting, gain project with professional development tools and principles, and share their knowledge with others."
              },
              {
                  name: "UBC BizTech",
                  description: ">> Through workshops, panels, keynotes, showcases and many other events, BizTech provides value-adding and memorable experiences that focus on the integration of two of the world’s most powerful fields; technology and business"
              },
          ]
      },
      "2020" : {
      project: {
              title: "Google // STEP Software Engineer Intern",
              date: "May 2020 - August 2020",
              content: [
                  ">> Team: Firebase Backend @Waterloo, CA",
                  ">> TBA"
              ],
              img: "./image/experiences/google.jpeg"
          },
          courses: [
              {
                  name: "CPSC 210",
                  description: ">> Software Construction, where students learn about design, development, and analysis of robust software components such as software design, computational models, data structures, debugging, and testing using Java"
              },
              {
                  name: "CPSC 121",
                  description: ">> Models of Computation, where students learn about the physical and mathematical structures of computation such as boolean algebra and combinations logic circuits; proof techniques; functions and sequential circuits; sets and relations; finite state machines; sequential instruction execution"
              },
          ]
      }
  };
  
  const SECTION_STYLE = 'color: #9e0b00; font-weight: 1000;'; 
  const TITLE_STYLE = 'color: #d14d4d; font-weight: 700;';
  const DATE_STYLE = 'color: #4d4d4d; font-style: italic;';
  const CONTENT_STYLE = 'color: #666666;';
  const TIMELINE_STYLE = 'background-image: -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(';
  const IMG_STYLE = 'max-width: 100%; height: auto; border-radius: 30px';
  
  document.querySelectorAll(".range-step").forEach(function(step) {
      var input = step.querySelector('input');        
      input.oninput = function() { 
          colorizeTimeline(step, input.valueAsNumber);     
          colorizeBeforeNAfter(input);
          createPopup(step, input);
      };
      input.oninput();    
  });
  
  window.onresize = function(){
      document.querySelectorAll(".range").forEach(function(step) {
          var input = step.querySelector('input');    
          input.oninput();    
      });
  };
  
  function colorizeTimeline(step, inputValue) {
      step.querySelectorAll("li").forEach(li => {
          li.style.color = li.value <= inputValue ? 'red' : '#aaa';
      });
  }
  
  function colorizeBeforeNAfter(input) {
      var valPercent = (input.valueAsNumber  - parseInt(input.min)) / (parseInt(input.max) - parseInt(input.min));  
              
  
      var style = TIMELINE_STYLE + valPercent + ', red), color-stop(' + valPercent + ', #aaa));';
  
      input.style = style;
  }
  
  function createPopup(step, input) {
      const output = step.querySelector('output'); 
  
      if((' ' + step.className + ' ').indexOf(' ' + 'range-step-popup' + ' ') > -1) {
          var selectedOpt = step.querySelector('li[value="' + input.value + '"]');
          output.style.left = "50%"; 
          output.style.left = ((selectedOpt.offsetLeft + selectedOpt.offsetWidth/2) - output.offsetWidth/2) + 'px';
  
          document.getElementById("one").innerHTML = "";
          document.getElementById("two").innerHTML = "";
  
          pickContent(input.value);
      }   
  }
   
  function createDOM(element, content, parent, style) {
      const el = document.createElement(element);
      const c = document.createTextNode(content);
  
      el.appendChild(c);
  
      if (style !== null) {
          el.style = style;
      }
      
      const p = document.getElementById(parent);
      p.appendChild(el);
  }
  
  function createExperienceDOM(yearData) {
        //   for(var pro of project){
        //     createDOM("h2", "PROJECT", "one", SECTION_STYLE);
        //     createDOM("h3", yearData.pro.title, "one", TITLE_STYLE);
        //     createDOM("h4", yearData.pro.date, "one", DATE_STYLE);
        //     yearData.pro.content.map(str => {
        //         createDOM("h5", str, "one", CONTENT_STYLE);
        //     })
        //   }
      createDOM("h2", "PROJECT", "one", SECTION_STYLE);
      createDOM("h3", yearData.project.title, "one", TITLE_STYLE);
      createDOM("h4", yearData.project.date, "one", DATE_STYLE);
      yearData.project.content.map(str => {
          createDOM("h5", str, "one", CONTENT_STYLE);
      })
  }
  
  function createAwardDOM(yearData) {
      createDOM("h2", "AWARDS", "two", SECTION_STYLE);
      yearData.awards.map(a => {
          createDOM("h3", a.title, "two", TITLE_STYLE);
          createDOM("h4", a.date, "two", DATE_STYLE);
          a.content.map(c => {
              createDOM("h5", c, "two", CONTENT_STYLE);
          })
          createDOM("br", "", "two", null);
      })
  }
  
  function createEductionDOM() {
      createDOM("h2", "EDUCATION", "two", SECTION_STYLE);
      createDOM("h3", data[2019].education.school, "two", TITLE_STYLE);
      createDOM("h4", data[2019].education.grad_year, "two", DATE_STYLE);
      createDOM("h5", data[2019].education.degree, "two", CONTENT_STYLE);
      createDOM("h5", data[2019].education.major, "two", CONTENT_STYLE);
  }
  
  function createSimpleSectionDOM(content, data) {
      createDOM("h2", content, "two", SECTION_STYLE);
      data.map(c => {
          createDOM("h3", c.name, "two", TITLE_STYLE);
          createDOM("h5", c.description, "two", CONTENT_STYLE);
          createDOM("br", "", "two", null);
      })
  }
  
  function createBreakDOM(el) {
      createDOM("br", "", el, null);
      createDOM("br", "", el, null);
  }
  
  function pickContent(year) {
      const img = document.createElement("img");
      img.style = IMG_STYLE;
      const one = document.getElementById("one");
  
      switch(year) {
          case "2017": {
              createExperienceDOM(data[2017]);
  
              createBreakDOM("one");
  
              img.src = data[2017].project.img;
  
              createAwardDOM(data[2017]);
  
              createBreakDOM("two");
  
              createSimpleSectionDOM("SELF-TAUGHT COURSES", data[2017].courses);
          }
          break;
          case "2018": {
              createExperienceDOM(data[2018]);
  
              createBreakDOM("one");
  
              img.src = data[2018].project.img;
  
              createAwardDOM(data[2018]);
          }
          break;
          case "2019": {
              createExperienceDOM(data[2019]);
  
              createBreakDOM("one");
  
              img.src = data[2019].project.img;
  
              createEductionDOM();
  
              createBreakDOM("two");
  
              createDOM("h2", "SCHOLARSHIPS", "two", SECTION_STYLE);
              data[2019].scholarships.map(s => {
                  createDOM("h5", s, "two", CONTENT_STYLE);
              })
  
              createBreakDOM("two");
  
              createSimpleSectionDOM("CLUBS", data[2019].clubs);
          }
          break;
          case "2020": {
              createExperienceDOM(data[2020]);
              createBreakDOM("one");
  
              img.src = data[2020].project.img;
              createSimpleSectionDOM("UBC COURSES", data[2020].courses);
          }
      break;
        default: break;
      }
  
      one.appendChild(img);
  }