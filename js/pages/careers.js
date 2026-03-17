import { careerJobs } from "../data/data.js";

/* ----- Navigate to Job Details Page ----- */
function ViewJobPage(id) {
  window.location.href = `job.html?jobId=${id}`;
}

/* ----- Render Jobs List in Careers Page ----- */
function displayCareerJobs(jobs) {
  const jobsList = document.querySelector(".jobs-list");
  if (!jobsList) return;

  /* ----- Create Jobs Cards ----- */
  jobsList.innerHTML = jobs
    .map((job, i) => {
      return `
      <div id="${job.id}" class="job"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="${i * 200}">
        
        <div class="job-img">
          <img src="${job.img}" alt="${job.JobName}" loading="lazy">
        </div>

        <div class="job-description">
            <h3>${job.JobName}</h3>
            <span>${job.location}</span>
            <p>${job.desc}</p>
        </div>

        <a class="apply-btn" href="#" aria-label="apply for ${job.JobName} job">Apply</a>
      </div>
    `;
    })
    .join("");

  /* ----- Handle Job Click (Navigate to Details Page) ----- */
  jobsList.addEventListener("click", function (e) {
    const job = e.target.closest(".job");
    if (!job) return;
    ViewJobPage(job.id);
  });
}

/* ----- Initialize Careers Page ----- */
export function initCareersPage() {
  displayCareerJobs(careerJobs);
}
