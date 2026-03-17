import { careerJobs } from "../data/data.js";

/* ----- Display Job Hero Section ----- */
function displayJobDetails(job) {
  const jobContainer = document.querySelector(".job-application");
  if (!jobContainer) return;

  const data = `
    <div class="job-data container" data-aos="fade-right">
      <p>Careers</p>
      <h1>${job.JobName}</h1>
      <div>
        <p>Location: ${job.location}</p>
        <p>Employment Type: ${job.emType}</p>
      </div>
      <button class="open-form" aria-label="apply now for this job">Apply Now</button>
    </div>
  `;
  jobContainer.insertAdjacentHTML("afterbegin", data);
}

/* -----  Render List Items ----- */
function renderList(items) {
  return items
    .map(
      (item) =>
        `<li><i class="ri-arrow-right-s-fill"></i> <span>${item}</span></li>`,
    )
    .join("");
}

/* ----- Display Job Description ----- */
function displayJobDescription(job) {
  const descContainer = document.querySelector(".job-description .container");
  if (!descContainer) return;

  descContainer.innerHTML = `
    <div>
      <h2 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200" data-aos-once="true">
        What You'll Do
      </h2>
      <ul data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
        ${renderList(job.whatYoullDo)}
      </ul>
    </div>
    <div>
      <h2 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200" data-aos-once="true">
        Who You Are
      </h2>
      <ul data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
        ${renderList(job.whoYouAre)}
      </ul>
    </div>
  `;
}

/* ----- Update Head meta data ----- */
function updateJobHead(job) {
  document.title = `${job.JobName} | Tripo Games`;
  document.getElementById("job-desc").content = job.metaDesc;
  document.getElementById("job-keywords").content =
    `${job.JobName}, jobs, hiring, careers`;
}

/* ----- Initialize Job Page ----- */
export function initJobPage() {
  const params = new URLSearchParams(window.location.search);
  const jobId = Number(params.get("jobId"));
  const selectedJob = careerJobs.find((job) => job.id === jobId);

  if (selectedJob) {
    updateJobHead(selectedJob);
    displayJobDetails(selectedJob);
    displayJobDescription(selectedJob);
  }
}
