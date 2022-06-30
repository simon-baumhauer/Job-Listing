let allJobs = async () => {
  let url = "data.json";
  let JobList = await fetch(url);
  let JobListAsJson = await JobList.json();
  console.log(JobListAsJson);
  rederJobsList(JobListAsJson);
};

let element = "";

let rederJobsList = (JobListAsJson) => {
  JobCardContainer = document.getElementById("JobCardContainer");

  for (let i = 0; i < JobListAsJson.length; i++) {
    element = JobListAsJson[i];
    JobCardContainer.innerHTML += `
    <div class="card">
   
    <div class="job-description"> 
    <div><img src="${element.logo}"></div>
    <div class="display-flex">
    <div id="jobPostingFristRow${i}" class="company"> ${element.company}</div> 
    <div class="job-position">${element.position}</div> 
    <div class="job-conditons">
    <span>${element.postedAt}</span>
    <span  class="dot">.</span>
    <span>${element.contract}</span>
    <span  class="dot">.</span>
    <span>${element.location}</span>
    </div> 
    
    
    
    </div>
   
    </div>

    <div class="requirements"  id="requiredSkills${i}">
    <span class="languages" id="languages${i}"></span>
    <span class="skills">${element.role}</span>
    <span class="skills">${element.level}</span>
    <span id="tools${i}" ></span>
    </div>
    </div>`;
    rederNew(
      i,
      element.featured,
      element.new,
      element.languages,
      element.tools
    );
  }
};

let rederNew = (i, feat, neww, languages, tools) => {
  newJob = document.getElementById(`jobPostingFristRow${i}`);
  languagesId = document.getElementById(`languages${i}`);
  toolsId = document.getElementById(`tools${i}`);

  if (feat === true) {
    newJob.innerHTML += "<span class='feature' >feature</span>";
  }
  if (neww === true) {
    newJob.innerHTML += "<span class='new' >new</span>";
  }

  for (let i = 0; i < languages.length; i++) {
    const languageTyp = languages[i];
    languagesId.innerHTML += `<span style = "margin-right: 5px;">${languageTyp}</span>`;
  }
  if (tools) {
    for (let i = 0; i < tools.length; i++) {
      const toolTyp = tools[i];
      toolsId.innerHTML += `<span class="skills" style = "margin-right: 5px;">${toolTyp}</span>`;
    }
  }
};
