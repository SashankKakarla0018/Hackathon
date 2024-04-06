const urlParams = new URLSearchParams(window.location.search);
const specialty = urlParams.get('specialty');
const doctorList = JSON.parse(urlParams.get('doctorList'));

const bodyPartElement = document.getElementById('body-part');
const doctorDetailsContainer = document.querySelector('.doctor-details-container');

bodyPartElement.innerHTML = `
  <div class="body-part-item" data-specialty="${specialty}">
    <div class="body-part-name">${specialty}</div>
    <a href="#" class="body-part-btn">View Details</a>
  </div>
`;

bodyPartElement.addEventListener('click', getDoctorDetails);

function getDoctorDetails(e) {
  e.preventDefault();
  if (e.target.classList.contains('body-part-btn')) {
    showDoctorDetails(doctorList);
  }
}

function showDoctorDetails(doctors) {
  let html = '';
  for (let doctor of doctors) {
    html += `
      <div class="doctor-detail-box">
        <div class="doctor-name">${doctor.name}</div>
        <div class="doctor-specialty">${specialty}</div>
        <div class="doctor-contact">Experience: ${doctor.experience}, Contact: ${doctor.contact}</div>
      </div>
    `;
  }
  doctorDetailsContainer.innerHTML = html;
  doctorDetailsContainer.parentElement.classList.add('showDoctorDetails');
}