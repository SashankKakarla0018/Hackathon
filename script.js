const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search-input');

const bodyPartData = {
  eye: 'Ophthalmologist',
  teeth: 'Dentist',
  heart: 'Cardiologist',
  'skin,hair,nails': 'Dermatologist',
  'nerve system': 'Neurologist',
  cancer: 'Oncologist',
  bones: 'Orthopedist',
  'surgical procedures': 'General Surgeon',
  'mental health': 'Psychiatrist',
  genes: 'Geneticist'
};



const doctorDetails = {
  Ophthalmologist: [
    {
      name: 'Dr. Rajesh Gupta',
      experience: '20 years',
      contact: '+91-98765-43210'
    },
    {
      name: 'Dr. Priya Sharma',
      experience: '15 years',
      contact: '+91-87654-32109'
    },
    {
      name: 'Dr. Anand Patel',
      experience: '12 years',
      contact: '+91-76543-21098'
    },
    {
      name: 'Dr. Sneha Desai',
      experience: '18 years',
      contact: '+91-65432-10987'
    },
    {
      name: 'Dr. Nisha Verma',
      experience: '10 years',
      contact: '+91-54321-09876'
    }
  ],
  Dentist: [
    {
      name: 'Dr. Sanjay Kumar',
      experience: '25 years',
      contact: '+91-98765-43210'
    },
    {
      name: 'Dr. Sunita Singh',
      experience: '18 years',
      contact: '+91-87654-32109'
    },
    {
      name: 'Dr. Rohit Sharma',
      experience: '15 years',
      contact: '+91-76543-21098'
    },
    {
      name: 'Dr. Meena Patel',
      experience: '12 years',
      contact: '+91-65432-10987'
    },
    {
      name: 'Dr. Arjun Reddy',
      experience: '10 years',
      contact: '+91-54321-09876'
    }
  ],
  Cardiologist: [
    {
      name: 'Dr. Aakash Gupta',
      experience: '25 years',
      contact: '+91-98765-43210'
    },
    {
      name: 'Dr. Renuka Singh',
      experience: '18 years',
      contact: ' +91-87654-32109'
    },
    {
      name: 'Dr. Vivek Sharma',
      experience: '15 years',
      contact: '+91-76543-21098'
    },
    {
      name: 'Dr. Kiran Patel',
      experience: '12 years',
      contact: '+91-65432-10987'
    },
    {
      name: 'Dr. Deepa Verma',
      experience: '10 years',
      contact: '+91-54321-09876'
    }
  ],
  Dermatologist: [
    {
      name: 'Dr. Ananya Kapoor',
      experience: '25 years',
      contact: '+91-98765-43210'
    },
    {
      name: 'Dr. Rahul Malhotra',
      experience: '18 years',
      contact: ' +91-87654-32109'
    },
    {
      name: 'Dr. Nidhi Patel',
      experience: '15 years',
      contact: '+91-76543-21098'
    },
    {
      name: 'Dr. Vikram Sharma',
      experience: '12 years',
      contact: '+91-65432-10987'
    },
    {
      name: 'Dr. Priya Reddy',
      experience: '10 years',
      contact: '+91-54321-09876'
    }
  ],
  Neorologist: [
    {
      name: 'Dr. Arjun Kumar',
      experience: '25 years',
      contact: '+91-98765-43210'
    },
    {
      name: 'Dr. Swati Singh',
      experience: '18 years',
      contact: ' +91-87654-32109'
    },
    {
      name: 'Dr. Deepak Verma',
      experience: '15 years',
      contact: '+91-76543-21098'
    },
    {
      name: 'Dr. Priya Gupta',
      experience: '12 years',
      contact: '+91-65432-10987'
    },
    {
      name: 'Dr. Vikas Sharma',
      experience: '10 years',
      contact: '+91-54321-09876'
    }
  ],
  Oncologist: [
    {
      name: 'Dr. Anusha Rao',
      experience: '25 years',
      contact: '+91-98765-43210'
    },
    {
      name: 'Dr. Sameer Patel',
      experience: '18 years',
      contact: ' +91-87654-32109'
    },
    {
      name: 'Dr. Neha Singh',
      experience: '15 years',
      contact: '+91-76543-21098'
    },
    {
      name: 'Dr. Rahul Sharma',
      experience: '12 years',
      contact: '+91-65432-10987'
    },
    {
      name: 'Dr. Anjali Verma',
      experience: '10 years',
      contact: '+91-54321-09876'
    }
  ],

  Orthopedist: [
    {
      name: 'Dr. Ajay Gupta',
      experience: '25 years',
      contact: '+91-98765-43210'
    },
    {
      name: 'Dr. Shalini Sharma',
      experience: '18 years',
      contact: ' +91-87654-32109'
    },
    {
      name: 'Dr. Mohan Patel',
      experience: '15 years',
      contact: '+91-76543-21098'
    },
    {
      name: 'Dr. Deepika Reddy',
      experience: '12 years',
      contact: '+91-65432-10987'
    },
    {
      name: 'Dr. Rajesh Kumar',
      experience: '10 years',
      contact: '+91-54321-09876'
    }
  ],

  General: [
    {
      name: 'Dr. Vivek Gupta',
      experience: '25 years',
      contact: '+91-98765-43210'
    },
    {
      name: 'Dr. Preeti Sharma',
      experience: '18 years',
      contact: ' +91-87654-32109'
    },
    {
      name: 'Dr. Ankit Patel',
      experience: '15 years',
      contact: '+91-76543-21098'
    },
    {
      name: 'Dr. Nisha Reddy',
      experience: '12 years',
      contact: '+91-65432-10987'
    },
    {
      name: 'Dr. Rajiv Kumar',
      experience: '10 years',
      contact: '+91-54321-09876'
    }
  ],

  Psychiatrist: [
    {
      name: 'Dr. Ananya Patil',
      experience: '25 years',
      contact: '+91-98765-43210'
    },
    {
      name: 'Dr. Rohan Patel',
      experience: '18 years',
      contact: ' +91-87654-32109'
    },
    {
      name: 'Dr. Priyanka Sharma',
      experience: '15 years',
      contact: '+91-76543-21098'
    },
    {
      name: 'Dr. Sameera Gupta',
      experience: '12 years',
      contact: '+91-65432-10987'
    },
    {
      name: 'Dr. Rahul Reddy',
      experience: '10 years',
      contact: '+91-54321-09876'
    }
  ],

  Geneticist: [
    {
      name: 'Dr. Rakesh Kumar',
      experience: '25 years',
      contact: '+91-98765-43210'
    },
    {
      name: 'Dr. Sonali Sharma',
      experience: '18 years',
      contact: ' +91-87654-32109'
    },
    {
      name: 'Dr. Akash Patel',
      experience: '15 years',
      contact: '+91-76543-21098'
    },
    {
      name: 'Dr. Neha Reddy',
      experience: '12 years',
      contact: '+91-65432-10987'
    },
    {
      name: 'Dr. Vikrant Singh',
      experience: '10 years',
      contact: '+91-54321-09876'
    }
  ],

  // Add the rest of the doctor details here
  
};

searchBtn.addEventListener('click', handleSearch);

function handleSearch() {
  let searchInputTxt = searchInput.value.trim().toLowerCase();
  if (bodyPartData.hasOwnProperty(searchInputTxt)) {
    let specialty = bodyPartData[searchInputTxt];
    let doctorList = doctorDetails[specialty];
    window.location.href = `search-results.html?specialty=${specialty}&doctorList=${JSON.stringify(doctorList)}`;
  } else {
    alert(`Sorry, we didn't find any specialists for the body part "${searchInputTxt}"`);
  }
}

