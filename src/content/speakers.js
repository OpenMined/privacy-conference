import austin from '../assets/austin-arensberg.jpg';
import jackson from '../assets/jackson-cummings.jpg';
import morgan from '../assets/morgan-mahlock.jpg';
import laurens from '../assets/laurens-van-der-maaten.jpg';
import awni from '../assets/awni-hannun.jpg';
import fatemehsadat from '../assets/fatemehsadat-mireshghallah.jpg';
import daniel from '../assets/daniel-escudero.jpg';
import kritika from '../assets/kritika-prakash.jpg';
import alan from '../assets/alan-aboudib.jpg';
import suha from '../assets/suha-sabi-hussain.jpg';
import pranav from '../assets/default-speaker.jpg';
import borja from '../assets/borja-balle.jpg';
import kartik from '../assets/default-speaker.jpg';
import sadegh from '../assets/default-speaker.jpg';

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
export const titleLink = 'Submit a Talk →';
export const speakers = [
  {
    image: austin,
    pixelImage: pixelate(austin),
    name: 'Austin Arensberg',
    title: 'Director at Okta Ventures',
    about: [
      'Austin serves as Director of Okta Ventures, overseeing startup investments in privacy, identity, and security. Okta has invested in startups such as Datagrail, Hunters, VNDLY, Ockam, Productiv, and Openpath. Austin spent over 10 years of his career investing around the world. In the past 4 years he has spent time in early stage technology venture capital in San Francisco. Austin is passionate about international exchange and outreach, serves on the Board of the Princeton in Asia Fellowship program, is a Kauffman Fellow, and was also a Marshall Memorial Fellow.'
    ],
    social: [{ type: 'linkedin', url: 'https://www.linkedin.com/in/austinarensberg/' }]
  },
  {
    image: jackson,
    pixelImage: pixelate(jackson),
    name: 'Jackson Cummings',
    title: 'Investor at Salesforce Ventures',
    about: [
      'Jackson is an investor at Salesforce Ventures - Salesforce’s strategic investment arm that invests in innovative enterprise cloud companies. While at Salesforce Ventures, Jackson has worked on or led a number of deals including Forter, RunaHR, Narvar, BigID, Outreach, Ureeka and PerimeterX. Previously, Jackson was an investor at Top Tier Capital Partners, a global venture-focused Fund of Funds. Jackson graduated from Stanford University with a B.S. in Science, Technology and Society and was a member of the varsity football team. Jackson is a Kauffman Fellow and works with various non-profits including BLCK VC.'
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
      "Laurens is a Research Director at Facebook AI Research in New York. He leads FAIR's New York site. Prior, he worked as an Assistant Professor at Delft University of Technology (The Netherlands) and as a post-doctoral researcher at University of California, San Diego. He received his PhD from Tilburg University (The Netherlands) in 2009. With collaborators from Cornell University, he won the Best Paper Award at CVPR 2017. He is an editorial board member of IEEE Transactions of Pattern Analysis and Machine Intelligence and is regularly serving as area chair for the NeurIPS, ICML, and CVPR conferences. Laurens is interested in a variety of topics in machine learning and computer vision, including privacy, security, and robustness of machine-learning systems."
    ],
    social: []
  },
  {
    image: awni,
    pixelImage: pixelate(awni),
    name: 'Awni Hannun',
    title: 'Research Scientist at Facebook AI Research',
    about: [
      "Awni is a Research Scientist at Facebook AI Research working on machine learning algorithms, privacy and security in machine learning and applications in speech and audio processing. Prior, he spent two years as a research scientist in Baidu's Silicon Valley AI Lab where he lead the Deep Speech projects. He completed a PhD in computer science at Stanford University."
    ],
    social: []
  },
  {
    image: fatemehsadat,
    pixelImage: pixelate(fatemehsadat),
    name: 'Fatemehsadat Mireshghallah',
    title: 'PhD student at UC San Diego',
    about: [
      'Fatemehsadat is a 3rd year CS Ph.D. student at UC San Diego. She is a recipient of the National Center for Women & IT (NCWIT) Aspirations in Computing Collegiate award in 2020, for her work on light-weight privacy-preserving DNN inference. She received her B.Sc. in Computer Engineering with honors from Sharif University of Technology in 2018. She works at the intersection of ML, Systems Privacy, and fairness. She has interned with Microsoft Research AI and Western Digital.'
    ],
    social: []
  },
  {
    image: daniel,
    pixelImage: pixelate(daniel),
    name: 'Daniel Escudero',
    title: 'PhD student at Aarhus University, Denmark',
    about: [
      'Daniel is a PhD student at Aarhus University, Denmark, working on Multiparty Computation (MPC) and related technologies. He enjoys applying these techniques to solve real-world problems, including the task of privacy-preserving machine learning, a field he has been exploring recently. Daniel is looking forward to meeting the OpenMined community in order to share thoughts and ideas.'
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
      'Alan leads the NLP team at OpenMined, focusing on building SyferText, a privacy preserving NLP library. He obtained a PhD in computer vision from Télécom Bretagne in France and he is currently the Head of Computer Vision at The Contillery; a Parisian startup aiming at providing quantitative metrics for evaluating the engaging power of visual social advertisement content. He is passionate about studying the role of visual attention in video action recognition, a project he had started as a post-doctoral researcher at Collège de France in 2018.'
    ],
    social: []
  },
  {
    image: suha,
    pixelImage: pixelate(suha),
    name: 'Suha Sabi Hussain',
    title: 'Security Engineering Intern at Trail of Bits',
    about: [
      'Suha is a security engineering intern at Trail of Bits, primarily interested in trustworthy machine learning, applied cryptography and program analysis. She is presently pursuing a BS in Computer Science at Georgia Tech where she also conducts research at the Institute for Information Security and Privacy. Her academic specializations are in theoretical computer science and human-computer interaction. In addition, she is a member of the RoboJackets RoboNav team and has previously worked at the NYU Center for Cybersecurity and Vengo Labs.'
    ],
    social: [{ type: 'twitter', url: 'https://twitter.com/suhackerr' }]
  },
  {
    image: pranav,
    pixelImage: pixelate(pranav),
    name: 'Pranav Subramani',
    title: 'Graduate at University Of Waterloo',
    about: [
      'Pranav is a recent graduate from the University Of Waterloo in Computer Science and Combinatorics and Optimization. He is interested in the area of Differential Privacy, in particular with issues surrounding practical implementations of privacy preserving machine learning models.'
    ],
    social: []
  },
  {
    image: borja,
    pixelImage: pixelate(borja),
    name: 'Borja Balle',
    title: 'Senior Research Scientist at DeepMind',
    about: [
      'Borja is a Senior Research Scientist at DeepMind. He received his PhD from Universitat Politècnica de Catalunya in 2013, and then spent two years as a postdoctoral fellow at McGill University. Before joining DeepMind in 2019, Borja held positions at Amazon Research Cambridge and Lancaster University. His current research focuses on the foundations of privacy-preserving data analysis and machine learning, a topic he approaches from multiple angles, including differential privacy and secure multi-party computation.'
    ],
    social: []
  },
  {
    image: kartik,
    pixelImage: pixelate(kartik),
    name: 'Kartik Chopra',
    title: 'Staff Officer at United States Federal Government',
    about: [
      "Kartik is a former Intelligence Officer with a background in Computer Science and Quantitative Economics. He's spent almost a decade in National Security, Machine Learning and Edge Computing where he has successfully grown and led teams, delivered products and democratizes advanced AI methodologies. Kartik's focus has been in computer vision, specifically image based recommendation systems - while preserving the privacy of the underlying data, to include classified and consumer financial data."
    ],
    social: [{ type: 'linkedin', url: 'https://www.linkedin.com/in/kartik-chopra-85bb5487' }]
  },
  {
    image: sadegh,
    pixelImage: pixelate(sadegh),
    name: 'M Sadegh Riazi',
    title: 'Fellow of the Institute for the Global Entrepreneur at UC San Diego',
    about: [
      "Sadegh is a computer scientist working on the intersection of secure computation, machine learning, and computer architecture. Throughout his research, he has contributed to different cryptography-based and hardware-based solutions for privacy-preserving computation including the first privacy-preserving content-addressable memory in 2017. Sadegh has received the best B.Sc. thesis award from the Sharif University of Technology in 2014 based on his work on Brain-Computer Interfaces. He has received his M.Sc. degree from Rice University in 2016 where he worked on large-scale privacy-preserving matching and search. He received the best Ph.D. thesis award from University of California San Diego (UCSD) in 2020. He is a fellow of the Institute for the Global Entrepreneur at UCSD and recipient of Richard Newton Young fellow award and William Marshal Rice Fellowship."
    ],
    social: []
  }
];
