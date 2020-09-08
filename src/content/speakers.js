import austin from '../assets/austin-arensberg.jpg';
import jackson from '../assets/jackson-cummings.jpg';
import morgan from '../assets/morgan-mahlock.jpg';
import laurens from '../assets/laurens-van-der-maaten.jpg';
import awni from '../assets/awni-hannun.jpg';
import fatemehsadat from '../assets/fatemehsadat-mireshghallah.jpg';
import daniel from '../assets/daniel-escudero.jpg';
import kritika from '../assets/kritika-prakash.jpg';
import alan from '../assets/alan_aboudib.jpg';
import suha from '../assets/suha-sabi-hussain.jpg';
import pranav from '../assets/pranav-subramani.jpg';
import borja from '../assets/borja-balle.jpg';
import kartik from '../assets/kartik-chopra.jpg';
import sadegh from '../assets/m-sadegh-riazi.jpg';
import nicolas from '../assets/nicolas-papernot.jpg';
import lucile from '../assets/lucile-saulnier.jpg';
import dmitrii from '../assets/dmitrii-usynin.jpg';
import zarreen from '../assets/zarreen-reza.jpg';
import sasi from '../assets/sasi-kumar-murakonda.jpg';
import georgios from '../assets/georgios-kaissis.jpg';
import madeleine from '../assets/maddie-shang.jpg';
import krzysztof from '../assets/krzysztof-ostrowski.jpg';
import jason from '../assets/jason-mancuso.jpg';
import andrew from '../assets/andrew-trask.jpg';
import tbc from '../assets/default-speaker.jpg';
import peter from '../assets/default-speaker.jpg';
import nick from '../assets/nick-rose.jpg';
import ronnie from '../assets/default-speaker.jpg';
import pia from '../assets/default-speaker.jpg';
import nathan from '../assets/default-speaker.jpg';
import sachin from '../assets/sachin-deshpande.jpg';
import ken from '../assets/kenneth-cukier.jpg';
import amber from '../assets/amber-trask.jpg';
import miguel from '../assets/miguel-guevara.jpg';
import kristin from '../assets/kristin-lauter.jpg';
import sameer from '../assets/sameer-wagh.jpg';
import mayank from '../assets/default-speaker.jpg';
import varun from '../assets/varun-khare.jpg';
import eric from '../assets/default-speaker.jpg';
import robin from '../assets/robin-roehm.jpg';
import pavlos from '../assets/pavlos-papadopoulos.jpg';
import adam from '../assets/default-speaker.jpg';
import hadrien from '../assets/hadrien-lautraite.jpg';
import patrick from '../assets/patrick-mesana.jpg';
import alex from '../assets/alex-ziller.jpg';
import jonathan from '../assets/jonathan-passerat-palmbach.jpg';
import jim from '../assets/default-speaker.jpg';
import john from '../assets/default-speaker.jpg'
import emily from '../assets/default-speaker.jpg';

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
    title: 'PhD Student at UC San Diego',
    about: [
      'Fatemehsadat is a 3rd year CS Ph.D. student at UC San Diego. She is a recipient of the National Center for Women & IT (NCWIT) Aspirations in Computing Collegiate award in 2020, for her work on light-weight privacy-preserving DNN inference. She received her B.Sc. in Computer Engineering with honors from Sharif University of Technology in 2018. She works at the intersection of ML, Systems Privacy, and fairness. She has interned with Microsoft Research AI and Western Digital.'
    ],
    social: []
  },
  {
    image: daniel,
    pixelImage: pixelate(daniel),
    name: 'Daniel Escudero',
    title: 'PhD Student at Aarhus University, Denmark',
    about: [
      'Daniel is a PhD student at Aarhus University, Denmark, working on Multiparty Computation (MPC) and related technologies. He enjoys applying these techniques to solve real-world problems, including the task of privacy-preserving machine learning, a field he has been exploring recently. Daniel is looking forward to meeting the OpenMined community in order to share thoughts and ideas.'
    ],
    social: []
  },
  {
    image: kritika,
    pixelImage: pixelate(kritika),
    name: 'Kritika Prakash',
    title: 'MSc student at IIIT Hyderabad & Differential Privacy Research Team Lead at OpenMined',
    about: [
      "Kritika leads the Differential Privacy Research Team at OpenMined. She is a Masters' student at the Machine Learning Lab, IIIT Hyderabad. Her areas of interest are Deep Learning and DIfferential Privacy."
    ],
    social: []
  },
  {
    image: lucile,
    pixelImage: pixelate(lucile),
    name: 'Lucile Saulnier',
    title: 'Data Scientist at Arkhn',
    about: [
      "After her engineering studies at Ecole Centrale Paris, Lucile is about to specialize in data science research with the MVA master's degree in Applied Mathematics at ENS Paris Saclay. She is also a Data Scientist at Arkhn where she works on medical data valorization projects. Her interest being naturally focused on the field of privacy-preserving machine learning, she actively contributes, among others, to a project of the OpenMined community, pj_dp_fl_demo, of which she is the team lead."
    ],
    social: []
  },
  {
    image: dmitrii,
    pixelImage: pixelate(dmitrii),
    name: 'Dmitrii Usynin',
    title: 'PhD Student at Technical University of Munich & Imperial College London',
    about: [
      'Dmitrii has just graduated from Imperial College London with a distinguished masters project on privacy-preserving machine learning in the medical domain. He is about to start his PhD on a joint program between Imperial College London and Technical University of Munich, specializing in private federated learning in oncology. His interests are privacy engineering, attacks on machine learning models and collaborative machine learning.'
    ],
    social: []
  },
  {
    image: zarreen,
    pixelImage: pixelate(zarreen),
    name: 'Zarreen Naowal Reza',
    title: 'Data Scientist at Thales Canada',
    about: [
      'Zarreen is working as a Data Scientist, with keen interest in privacy-preserving machine learning in the field of healthcare and NLP. She has been an active part of different teams in OpenMined including the writing team, education and learning team and Differential Privacy and Federated Learning research team.'
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
    social: [{ type: 'twitter', url: 'https://twitter.com/PranavSubramani' }]
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
      'Sadegh is a computer scientist working on the intersection of secure computation, machine learning, and computer architecture. Throughout his research, he has contributed to different cryptography-based and hardware-based solutions for privacy-preserving computation including the first privacy-preserving content-addressable memory in 2017. Sadegh has received the best B.Sc. thesis award from the Sharif University of Technology in 2014 based on his work on Brain-Computer Interfaces. He has received his M.Sc. degree from Rice University in 2016 where he worked on large-scale privacy-preserving matching and search. He received the best Ph.D. thesis award from University of California San Diego (UCSD) in 2020. He is a fellow of the Institute for the Global Entrepreneur at UCSD and recipient of Richard Newton Young fellow award and William Marshal Rice Fellowship.'
    ],
    social: []
  },
  {
    image: nicolas,
    pixelImage: pixelate(nicolas),
    name: 'Nicolas Papernot',
    title: 'Assistant Professor at University of Toronto',
    about: [
      "Nicolas is an Assistant Professor in the Department of Electrical and Computer Engineering and the Department of Computer Science at the University of Toronto. He is also a faculty member at the Vector Institute where he holds a Canada CIFAR AI Chair, and a faculty affiliate at the Schwartz Reisman Institute. His research interests span the security and privacy of machine learning. Nicolas is a Connaught Researcher and was previously a Google PhD Fellow. His work on differentially private machine learning received a best paper award at ICLR 2017. He serves on the program committees of several conferences including ACM CCS, IEEE S&P, and USENIX Security. He is also the co-author of CleverHans and TensorFlow Privacy, two open-source libraries widely adopted in the technical community to benchmark the security and privacy of machine learning. He earned his Ph.D. at the Pennsylvania State University, working with Prof. Patrick McDaniel. Upon graduating, he spent a year as a research scientist at Google Brain in Úlfar Erlingsson's group."
    ],
    social: [{ type: 'twitter', url: 'https://twitter.com/NicolasPapernot' }]
  },
  {
    image: sasi,
    pixelImage: pixelate(sasi),
    name: 'Sasi Kumar Murakonda',
    title:
      'Research Assistant at National University of Singapore Data Privacy and Trustworthy ML Research Lab',
    about: [
      "Sasi is a research assistant at the National University of Singapore's Data Privacy and Trustworthy ML Research Lab. His work focuses on analysing and quantifying the privacy risks of learning algorithms. He also studies the trade-offs between fairness and robustness in machine learning systems."
    ],
    social: []
  },
  {
    image: georgios,
    pixelImage: pixelate(georgios),
    name: 'Georgios Kaissis',
    title:
      'Post-doctoral Researcher at Technical University of Munich/Imperial College London & OpenMined Research Scientist',
    about: [
      'Georgios is a senior postdoctoral researcher at the Technical University of Munich, Imperial College London and a research scientist at OpenMined. His research is centred around biomedical image analysis with a special focus on probabilistic methods, differentiable programming and on the design and deployment of robust, secure, fair and transparent machine learning algorithms to medical imaging workflows using next-generation privacy-preserving machine learning methods.'
    ],
    social: []
  },
  {
    image: madeleine,
    pixelImage: pixelate(madeleine),
    name: 'Madeleine Shang',
    title: 'Recommender Systems Team Lead at OpenMined',
    about: [
      'Madeleine is currently focused on deep probabilistic models for unsupervised knowledge representation and meta reinforcement learning. Her research interests also include ML for healthy community / marketplace growth. When not working towards interactive and reasoning machines, She is working on diversity and inclusion in tech / entrepreneurship, advises startups and goes on adventures in the wilderness and pilots airplanes. Madeleine founded, built and scaled Women Who Code Data Science from 0 to 2k+ global data professional members in 1yr and is leading the bootcamp efforts at OpenMined Education.  She is also a frequent guest speaker on AI topics for Microsoft. Prior to turning her focus on ML, she studied Mathematics at University of Waterloo, completed CFA Level III, taught herself programming and worked in tech as a VC, 2x Founder and Blockchain engineer.'
    ],
    social: []
  },
  {
    image: krzysztof,
    pixelImage: pixelate(krzysztof),
    name: 'Krzysztof Ostrowski',
    title: 'Research Scientist at Google',
    about: [
      'Krzysztof is a Research Scientist at Google, where he is leading the TensorFlow Federated (TFF) team. Before joining Google, he did his Ph.D. and postdoc in distributed systems and programming languages at Cornell University.'
    ],
    social: []
  },
  {
    image: jason,
    pixelImage: pixelate(jason),
    name: 'Jason Mancuso',
    title: 'Research Engineer at Cape Privacy',
    about: [
      'Jason is a research engineer working on pragmatic deployment of PPML at Cape Privacy. He lives in New York City.'
    ],
    social: []
  },
  {
    image: andrew,
    pixelImage: pixelate(andrew),
    name: 'Andrew Trask',
    title: 'Leader at OpenMined',
    about: [
      'Andrew leads the OpenMined community. He is a doctoral candidate in computer science at the University of Oxford, a Senior Research Scientist at DeepMind, a Research Affiliate at Oxford\'s Centre for the Governance of AI, and a member of the United Nations Privacy Task Force. He is also the author of "Grokking Deep Learning" (Manning, 2019).'
    ],
    social: [{ type: 'twitter', url: 'https://twitter.com/iamtrask' }]
  },
  {
    image: peter,
    pixelImage: pixelate(peter),
    name: 'Peter Kairouz',
    title: 'Google',
    about: ['TBC'],
    social: []
  },
  {
    image: nick,
    pixelImage: pixelate(nick),
    name: 'Nick Rose',
    title: 'Product Manager at Google and OpenMined',
    about: ['Nick is a product manager at OpenMined with a degree in Computer Science from UC Berkeley. He also works as a product manager at Google on YouTube. He loves to talk about space exploration, artificial general intelligence, fundamental physics, and sustainable energy. Find him making lattes, surfing, and skiing in his free time.'],
    social: []
  },
  {
    image: ronnie,
    pixelImage: pixelate(ronnie),
    name: 'Ronnie Falcon',
    title: 'OpenMined',
    about: ['TBC'],
    social: []
  },
  {
    image: pia,
    pixelImage: pixelate(pia),
    name: 'Pia Mancini',
    title: 'Open Collective',
    about: ['TBC'],
    social: []
  },
  {
    image: nathan,
    pixelImage: pixelate(nathan),
    name: 'Nathan Benaich',
    title: '',
    about: ['TBC'],
    social: []
  },
  {
    image: sachin,
    pixelImage: pixelate(sachin),
    name: 'Sachin Deshpande',
    title: '',
    about: ['TBC'],
    social: []
  },
  {
    image: ken,
    pixelImage: pixelate(ken),
    name: 'Kenneth Cukier',
    title: 'Senior Editor at The Economist',
    about: ['Kenneth is a senior editor at The Economist and host of its weekly tech podcast, Babbage. He is the coauthor of the New York Times bestselling book “Big Data” with Viktor Mayer-Schönberger, translated in over 20 languages. Kenn is a board director of Chatham House, and an associate fellow at Oxford’s Saïd Business School. He is a member of the Council on Foreign Relations.'],
    social: []
  },
  {
    image: amber,
    pixelImage: pixelate(amber),
    name: 'Amber Trask',
    title: 'OpenMined',
    about: ['TBC'],
    social: []
  },
  {
    image: miguel,
    pixelImage: pixelate(miguel),
    name: 'Miguel Guevara',
    title: 'Product Manager at Google',
    about: [
      "Miguel is Google's Product Manager for Differential Privacy. In this capacity, Miguel has helped envision Google's DP infrastructure that was open-sourced last year. As part of his work, Miguel tries to understand internal and external use-cases of DP, and define requirements, while providing strategic direction to the overall effort. Miguel also works on the ML aspects of DP alongside the TensorFlow Privacy team. Finally, Miguel contributes to Google's Transparency Report, by managing the reports pertaining to freedom of speech and human rights."
    ],
    social: []
  },
  {
    image: kristin,
    pixelImage: pixelate(kristin),
    name: 'Kristin Lauter',
    title: 'Principal Researcher and Partner Research Manager at Microsoft Research',
    about: [
      'Kristin is a Principal Researcher and Partner Research Manager at Microsoft Research. She leads the Cryptography and Privacy Research group, and the Urban Innovation team with projects on “Private AI” and “AI for Cities”. She works at the interface between Machine Learning and Cryptography, with a focus on cloud security and health and genomic privacy. She is particularly known for her work on homomorphic encryption, elliptic curve cryptography, and for introducing supersingular isogeny graphs as a solution for post-quantum cryptography.'
    ],
    social: []
  },
  {
    image: sameer,
    pixelImage: pixelate(sameer),
    name: 'Sameer Wagh',
    title: 'Postdoctoral Researcher at University of California, Berkeley',
    about: ['Sameer is a postdoctoral researcher at University of California, Berkeley and received his PhD from Princeton University. His research is in the area of privacy enhancing technologies, with a common goal to make these technologies practical and deployed within our current digital infrastructure. His research has been a finalist for the best dissertation award and received awards from organizations such as Qualcomm and Facebook. Before joining Princeton, Sameer graduated with B.Tech. with Honors in Engineering Physics from IIT Madras.'],
    social: []
  },
  {
    image: mayank,
    pixelImage: pixelate(mayank),
    name: 'Mayank Varia',
    title: '',
    about: ['TBC'],
    social: []
  },
  {
    image: varun,
    pixelImage: pixelate(varun),
    name: 'Varun Khare',
    title: 'KotlinSyft Core Developer at OpenMined',
    about: ['Varun is an Al enthusiast trying to decipher the principles behind cognition while ensuring the privacy and safety of the people. He graduated in computer science from IIT Kanpur and since then has worked in multiple research labs in neuroscience, program synthesis and computer vision. At OpenMined, he is primarily responsible for leading the development of Kotlin Syft which is the android worker for secure on device learning.'],
    social: []
  },
  {
    image: eric,
    pixelImage: pixelate(eric),
    name: 'Eric Verner',
    title: '',
    about: ['TBC'],
    social: []
  },
  {
    image: robin,
    pixelImage: pixelate(robin),
    name: 'Robin Roehm',
    title: 'Co-founder & CEO at Apheris AI',
    about: ['Robin is the co-founder and CEO of Apheris - a company that empowers large enterprise customers to collaborate and analyse data securely without compromising privacy. Robin has studied Medicine, Philosophy and Mathematics, has been trained in global banking and is a successful serial entrepreneur.'],
    social: []
  },
  {
    image: pavlos,
    pixelImage: pixelate(pavlos),
    name: 'Pavlos Papadopoulos',
    title: 'PhD Student at Edinburgh Napier University & Researcher at Apheris AI',
    about: ['Pavlos is currently a PhD student in Privacy-Preserving Systems around Trust and Identity at Edinburgh Napier University. Pavlos is also a researcher at Apheris AI and a member of OpenMined Security & Identity team. His research interests include Cybersecurity, Distributed Ledger Technology and Privacy-Preserving Machine Learning.'],
    social: []
  },
  {
    image: adam,
    pixelImage: pixelate(adam),
    name: 'Adam Hall',
    title: 'OpenMined',
    about: ['TBC'],
    social: []
  },
  {
    image: hadrien,
    pixelImage: pixelate(hadrien),
    name: 'Hadrien Lautraite',
    title: 'Data Scientist at National Bank of Canada',
    about: [
      'Hadrien is a data scientist at National Bank of Canada. He graduated from HEC Montreal with a Msc. Business Intelligence. At National Bank of Canada, Hadrien applies state of the art machine learning techniques to various real-word problems in different units of the bank. He is very curious on how to better protect the bank customers’ data and started a project with his colleague Patrick on generating transactional profiles using deep learning techniques.'
    ],
    social: []
  },
  {
    image: patrick,
    pixelImage: pixelate(patrick),
    name: 'Patrick Mesana',
    title: 'Data Science Manager at National Bank of Canada',
    about: [
      'Patrick is a data science manager for National Bank of Canada. He has a Software Engineering degree and graduated from HEC Montreal with a Msc. Business Analytics. At National Bank of Canada, Patrick manages a team of data scientists and data engineers, solving various real-word problems in different units of the bank. He is passionate about data privacy and wants to understand how to better protect the bank’s data using innovations such as generating transactional profile using deep learning techniques.'
    ],
    social: []
  },
  {
    image: alex,
    pixelImage: pixelate(alex),
    name: 'Alex Ziller',
    title: 'PhD Student at Technical University of Munich & Research Scientist at OpenMined',
    about: [
      "Alex is a Ph.D. student at the Institute for Radiology and the Institute of Data Science and Artificial Intelligence in Healthcare at the Technical University of Munich. Furthermore he's a Research Scientist at OpenMined. His research interests include developing novel AI methods in cancer diagnostics and survival prediction as well as secure and private AI in Healthcare."
    ],
    social: []
  },
  {
    image: jonathan,
    pixelImage: pixelate(jonathan),
    name: 'Jonathan Passerat-Palmbach',
    title: 'Research Scientist at ConsenSys Health, Imperial College London & OpenMined',
    about: [
      'Jonathan is a research scientist at ConsenSys Health, Imperial College London and OpenMined. His current research focuses on privacy preserving machine learning and decentralisation. Jonathan is exploring the potential of bringing together techniques such as Federated Learning, Secure Computing (Trusted Execution Environments - TEEs, MPC, FHE), Verifiable Computing (TEEs, Zero-Knowledge Proofs) and Blockchains to build a new generation of healthcare systems. '
    ],
    social: []
  },
  {
    image: jim,
    pixelImage: pixelate(jim),
    name: "Jim O'Leary",
    title: 'VP of Engineering at Signal',
    about: [
      'TBC'
    ],
    social: []
  },
  {
    image: john,
    pixelImage: pixelate(john),
    name: "John Farkas",
    title: 'CEO at Golden Spiral',
    about: [
      'TBC'
    ],
    social: []
  },
  {
    image: emily,
    pixelImage: pixelate(emily),
    name: "Emily Glanz",
    title: 'Google',
    about: [
      'TBC'
    ],
    social: []
  },
  {
    image: tbc,
    pixelImage: pixelate(tbc),
    name: 'TBC',
    title: '',
    about: [
      'TBC'
    ],
    social: []
  }
];
