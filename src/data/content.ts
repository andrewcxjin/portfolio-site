// NOTE: You can split this file into multiple files if you want to, especially as you add more content.

export const personalInfo = {
  name: "Andrew Jin",
  title: "Undergraduate Student @ Duke University",
  imageUrl: "/profile.jpeg",
  about: "I am currently a rising senior majoring in Biomedical Engineering at Duke University. I will be pursuing an accelerated Master of Engineering in Artificial Intelligence post-graduation. I also do neurobiology research in hearing and communcation of mice, particularly in neural mechanisms. Some of my hobbies include travel, badminton, and golf.",
  contact: {
    email: "andrewcxjin@gmail.com",
    github: "https://github.com/andrewcxjin",
    linkedin: "https://linkedin.com/in/andrewcxjin"
  }
};

export const skills = [
  {
    name: "Programming",
    items: ["Python", "MATLAB", "Java", "C++"],
  },
  {
    name: "AI/ML",
    items: ["PyTorch", "TensorFlow", "Transformers", "Computer Vision", "NLP"],
  },
  {
    name: "Cloud & MLOps",
    items: ["AWS", "Azure ML", "Docker"],
  },
  {
    name: "Data Science",
    items: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Jupyter"],
  },
  {
    name: "Tools",
    items: ["Git", "VS Code", "Jupyter Lab"],
  },
  {
    name: "Web Development",
    items: ["Next.js"],
  },
];

export const experience = [
  {
    title: "Medical Device Engineer",
    company: "L&Z US Inc",
    location: "Norwood, NJ",
    period: "June 2024 - August 2024",
    description: [
      "Collaborated with engineering team to assemble, check quality of, package, and ship 10,000+ central venous catheters",
      "Learned and adhered to FDA protocols during the manufacturing process, ensuring compliance with regulatory standards"
    ],
  },
  {
    title: "Researcher",
    company: "Duke Mooney Neurobiology Lab",
    location: "Durham, NC",
    period: "August 2022 - Present",
    description: [
      "Trained and used neural network to recognize common sounds made by 80 hearing-impaired and hearing-enabled mice",
      "Performed neurosurgery on lab mice to understand anatomical plasticity in hearing and deaf mice for a research paper",
      "Conducted auditory brainstem response recordings to assess auditory functions of 50+ mice for future investigations"
    ],
  },
  {
    title: "Marketing Intern",
    company: "J Lyee Health Co. Ltd",
    location: "Nagoya, Japan",
    period: "November 2022 - January 2024",
    description: [
      "Wrote and delivered an investor presentation resulting in a new strategic international partnership",
      "Reviewed and edited 5+ marketing presentations for the introduction of health products to customers"
    ],
  },
  {
    title: "Educational Consultant",
    company: "Sound Communication Consulting Inc",
    location: "Vancouver, Canada",
    period: "September 2015 - Present",
    description: [
      "Initiated and established a mentorship program for 20+ hard-of-hearing children across 5 different schools",
      "Trained 20+ school teachers to use specialized microphone equipment and facilitate optimal classroom environments"
    ],
  },
];

export const education = [
  {
    degree: "M.Eng. in Artificial Intelligence for Product Innovation",
    school: "Duke University",
    location: "Durham, NC",
    period: "2025 - 2026"
  },
  {
    degree: "B.S. in Biomedical Engineering",
    school: "Duke University",
    location: "Durham, NC",
    period: "2021 - 2025"
  },
]; 

export const projects = [
    {
      title: "Characterizing Anatomical Plasticity in the Auditory Cortex of Deaf Mice",
      description: "Imaged brain slices from hearing and deaf transgenic mice injected with a viral vector to label neurons connected to the auditory cortex, which were processed with the QUINT workflow to analyze neuron count distribution to the auditory cortext.",
      technologies: ["Python", "MATLAB", "QUINT"],
      internalLink: "",
      externalLink: "",
      image: "/projects/mice/neuron.png",
    }
  ];