import austin from '../assets/austin-arensberg.jpg';
import jackson from '../assets/jackson-cummings.jpg';
import morgan from '../assets/morgan-mahlock.jpg';
import laurens from '../assets/laurens-van-der-maaten.png';
import fatemehsadat from '../assets/fatemehsadat-mireshghallah.jpg';
import daniel from '../assets/daniel-escudero.jpg';
import kritika from '../assets/kritika-prakash.jpg';
import alan from '../assets/alan-aboudib.jpg';
import suha from '../assets/suha-sabi-hussain.jpg';

const pixelate = (url) => {
  // Canvas, context, and image
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const img = new Image();
  const value = 24;

  img.src = url;
  img.onload = () => {
    canvas.width = img.width;
    canvas.height = img.height;

    // Calculate the factor
    var fw = (img.width / value) | 0,
      fh = (img.height / value) | 0;

    // Turn off image smoothing (prefixed in some browsers)
    ctx.imageSmoothingEnabled = ctx.mozImageSmoothingEnabled = ctx.msImageSmoothingEnabled = ctx.webkitImageSmoothingEnabled = false;

    // Draw mini-version of image
    ctx.drawImage(img, 0, 0, fw, fh);

    // Draw the mini-version back up, voila, pixelated
    ctx.drawImage(canvas, 0, 0, fw, fh, 0, 0, img.width, img.height);
  };

  return canvas;
};

export const getSpeakerByName = (input) => speakers.filter(({ name }) => name === input)[0];

// TODO: Copy
export const title = 'Speakers';
export const speakers = [
  {
    image: austin,
    pixelImage: pixelate(austin),
    name: 'Austin Arensberg',
    title: 'Director at Okta Ventures',
    about: [
      'Austin serves as Director of Okta Ventures, overseeing startup investments in privacy, identity, and security. Okta has invested in startups such as Datagrail, Hunters, VNDLY, Ockam, Productiv, and Openpath. Austin spent over 10 years of his career investing around the world. The past 4 years have been spent in early stage technology venture capital in San Francisco. Austin is passionate about international exchange and outreach, serves on the Board of the Princeton in Asia Fellowship program, is a Kauffman Fellow, and was also a Marshall Memorial Fellow.'
    ],
    social: [{ type: 'linkedin', url: 'https://www.linkedin.com/in/austinarensberg/' }]
  },
  {
    image: jackson,
    pixelImage: pixelate(jackson),
    name: 'Jackson Cummings',
    title: 'Investor at Salesforce Ventures',
    about: [
      'Jackson is an investor at Salesforce Ventures, Salesforce’s strategic investment arm that invests in innovative enterprise cloud companies. While at Salesforce Ventures, Jackson has worked on or led a number of deals including Forter, RunaHR, Narvar, BigID, Outreach, Ureeka and PerimeterX. Previously, Jackson was an investor at Top Tier Capital Partners, a global venture-focused Fund of Funds. Jackson graduated from Stanford University with a B.S. in Science, Technology and Society and was a member of the varsity football team. Jackson is a Kauffman Fellow and works with various non-profits including BLCK VC.'
    ],
    social: [{ type: 'linkedin', url: 'https://www.linkedin.com/in/jackson-cummings/' }]
  },
  {
    image: morgan,
    pixelImage: pixelate(morgan),
    name: 'Morgan Mahlock',
    title: 'Investor at In-Q-Tel',
    about: [
      'Morgan is an investor at In-Q-Tel, the non-profit strategic investor supporting the U.S. intelligence and national security community. Morgan previously spent time at the NFL and at Lockheed Martin. She graduated from Stanford University with a BS in Product Design and MS in Management Science and Engineering, where she was on the lightweight rowing team and started Stanford Women in Design. She works with a variety of nonprofit organizations including BLCK VC and EVCA.'
    ],
    social: [{ type: 'linkedin', url: 'https://www.linkedin.com/in/mmahlock/' }]
  },
  {
    image: laurens,
    pixelImage: pixelate(laurens),
    name: 'Laurens van der Maaten',
    title: 'Research Director at Facebook AI Research',
    about: [
      "Laurens van der Maaten is a Research Director at Facebook AI Research in New York. He leads FAIR's New York site. Prior, he worked as an Assistant Professor at Delft University of Technology (The Netherlands) and as a post-doctoral researcher at University of California, San Diego. He received his PhD from Tilburg University (The Netherlands) in 2009. With collaborators from Cornell University, he won the Best Paper Award at CVPR 2017. He is an editorial board member of IEEE Transactions of Pattern Analysis and Machine Intelligence and is regularly serving as area chair for the NeurIPS, ICML, and CVPR conferences. Laurens is interested in a variety of topics in machine learning and computer vision, including privacy, security, and robustness of machine-learning systems."
    ],
    social: []
  },
  {
    image: fatemehsadat,
    pixelImage: pixelate(fatemehsadat),
    name: 'Fatemehsadat Mireshghallah',
    title: 'PhD student at UC San Diego',
    about: [
      'Fatemehsadat Mireshghallah is a 3rd year CS Ph.D. student at UC San Diego. She is a recipient of the National Center for Women & IT (NCWIT) Aspirations in Computing Collegiate award in 2020, for her work on light-weight privacy-preserving DNN inference. She received her B.Sc. in Computer Engineering with honors from Sharif University of Technology in 2018. She works at the intersection of ML, Systems Privacy, and fairness. She has interned with Microsoft Research AI and Western Digital.'
    ],
    social: []
  },
  {
    image: daniel,
    pixelImage: pixelate(daniel),
    name: 'Daniel Escudero',
    title: 'PhD student at Aarhus University, Denmark',
    about: [
      'Daniel is a PhD student at Aarhus University, Denmark, working on Multiparty Computation (MPC) and related technologies. One of the things he really enjoys is applying these techniques to solve real-world problems, and a very appealing one is the task of privacy-preserving machine learning, a field he has been exploring recently. Daniel is looking forward to meeting the OpenMined community in order to share thoughts and ideas!'
    ],
    social: []
  },
  {
    image: kritika,
    pixelImage: pixelate(kritika),
    name: 'Kritika Prakash',
    title: 'MSc student at IIIT Hyderabad & Differential Privacy Research Ream Lead at OpenMined',
    about: [
      "Kritika leads the Differential Privacy Research Team at OpenMined. She is a Masters' student at the Machine Learning Lab, IIIT Hyderabad. Her areas of interest are Deep Learning and DIfferential Privacy."
    ],
    social: []
  },
  {
    image: alan,
    pixelImage: pixelate(alan),
    name: 'Alan Aboudib',
    title: 'Head of Computer Vision at The Contillery & OpenMined NLP team lead',
    about: [
      'Alan is leading the NLP team at OpenMined, focusing on building SyferText, a privacy preserving NLP library. He obtained a PhD in computer vision from Télécom Bretagne in France and he is currently the Head of Computer Vision at The Contillery; a Parisian startup aiming at providing quantitative metrics for evaluating the engaging power of visual social advertisement content. He is passionate about studying the role of visual attention in video action recognition, a project he had started as a post-doctoral researcher at Collège de France in 2018.'
    ],
    social: []
  },
  {
    image: suha,
    pixelImage: pixelate(suha),
    name: 'Suha Sabi Hussain',
    title: 'Security Engineering Intern at Trail of Bits',
    about: [
      'Suha S. Hussain is a security engineering intern at Trail of Bits primarily interested in trustworthy machine learning, applied cryptography, and program analysis. She is presently pursuing a BS in Computer Science at Georgia Tech where she also conducts research at the Institute for Information Security and Privacy. Her academic specializations are in theoretical computer science and human-computer interaction. In addition, she is a member of the RoboJackets RoboNav team and has previously worked at the NYU Center for Cybersecurity and Vengo Labs.'
    ],
    social: [{ type: 'twitter', url: 'https://twitter.com/suhackerr' }]
  }
];
