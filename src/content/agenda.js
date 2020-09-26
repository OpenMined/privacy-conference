import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import duration from 'dayjs/plugin/duration';
import { getSpeakerByName } from './speakers';

dayjs.extend(utc);
dayjs.extend(duration);

// NOTE: Could do this recursively and be a lot more efficient... but... YOLO
const groupSchedule = (schedule) => {
  let agenda = [];

  schedule.forEach(({ datetime }) => {
    let match = false;

    for (let day = 0; day < agenda.length; day++) {
      if (datetime.isSame(agenda[day].datetime, 'day')) {
        match = true;
        break;
      }
    }

    if (!match) agenda.push({ datetime, events: [] });
  });

  schedule.forEach((item) => {
    for (let day = 0; day < agenda.length; day++) {
      if (item.datetime.isSame(agenda[day].datetime, 'day')) {
        agenda[day].events.push(item);
        break;
      }
    }
  });

  return agenda;
};

export const groups = {
  'opening-session': {
    title: 'Opening Session',
    description:
      'After the welcome message, the keynote speaker will talk about their first-hand account of the biggest privacy revolution of the 20th century: how it happened, what we should learn from it, and what we need to do today.'
  },
  'in-the-research-lab-1': {
    title: 'In The Research Lab',
    description:
      "Several of the world's foremost privacy experts talk about the latest in their privacy research at the world's largest tech firms. This is the innovation that protects the data sitting in your pocket right now."
  },
  'keynote-1': {
    title: 'Keynote',
    description:
      'Hear from a legend of the privacy community — whose groundbreaking philosophical research has defined what "privacy" really is to both layman and academic. Her pivotal work is the foundation upon which our technical advancements rest.'
  },
  roadmap: {
    title: "Privacy Technology Roadmap — What's Coming Next?",
    description:
      'We have fancy privacy technologies. We know the privacy-preserving world we want. This series of talks seeks to answer the question, "How do we get there?" and "What privacy-preserving products should we build first?"'
  },
  philanthropy: {
    title: 'Change Begins with a Gift: The Role of Philanthropy in Privacy Tech',
    description:
      'The first movers in any great revolution are those willing to make investments even in extremely uncertain and risky strategies. Such is the role of the great philanthropies throughout history. In this session, you will hear from a few of the leading privacy tech charities about how they support the development of privacy-enhancing infrastructure.'
  },
  'real-world-deployments-1': {
    title: 'Real World Deployment Series: What is it Like to Deploy Privacy Today?',
    description:
      'Hear from leading privacy-tech startups deploying state-of-the-art privacy tech at scale. This should help you understand the current state of the technology straight from the champions on the front line!'
  },
  investing: {
    title: 'Privacy is Profit: why are VCs Investing in Privacy-enhancing Tech?',
    description:
      'In a world where many view privacy as an opponent to innovation, these thought-leaders in the Venture Capital space see things differently. Come and hear why privacy-enhancing startups are going to outperform the previous generation on both ethics and economics.'
  },
  'research-lightning-1': {
    title: 'Research Lightning: Hot-off-the-press Privacy Research',
    description:
      '10 minute lightning talks about ongoing and recently published privacy research from some of the brightest minds in the field.'
  },
  'closing-session-1': {
    title: 'Closing Session',
    description:
      'Hear a grounding perspective on the gap between what society needs and what we, the privacy community, have yet to provide. This is the mountain we have yet to climb.'
  },
  teams: {
    title: 'Where Do I Fit In?',
    description:
      'A closer look at the organisational structure of OpenMined and will help you find where you can make impact among our thriving teams.'
  },
  networking: {
    title: 'Networking',
    description:
      'Use this hour to network on our Gather platform with speakers, OpenMined community members and others interested in privacy technology.'
  },
  'in-the-research-lab-2': {
    title: 'In The Research Lab',
    description:
      "Several of the world's foremost privacy experts talk about the latest in their privacy research at the world's largest tech firms. This is the innovation that protects the data sitting in your pocket right now."
  },
  'research-lightning-2': {
    title: 'Research Lightning: Hot-off-the-press Privacy Research',
    description:
      '10 minute lightning talks about ongoing and recently published privacy research from some of the brightest minds in the field.'
  },
  tutorials: {
    title: 'Tutorial Breakout Sessions',
    description:
      'Learn by doing! These hour-long tutorial sessions will all run in parallel. On the day, simply pick a session that interests you most and dive in!'
  },
  'real-world-deployments-2': {
    title: 'Real World Deployment Series: What is it Like to Deploy Privacy Today?',
    description:
      'Hear from leading privacy-tech startups deploying state-of-the-art privacy tech at scale. This should help you understand the current state of the technology straight from the champions on the front line!'
  },
  'closing-session-2': {
    title: 'Closing Session',
    description: 'Andrew recaps the highlights from the conference.'
  }
};

export const title = 'Agenda';
const timeFormat = 'YYYY-MM-DD|HH:mm:ss';
export const schedule = [
  // SATURDAY
  {
    datetime: dayjs.utc('2020-09-26|13:55:00', timeFormat),
    speakers: [getSpeakerByName('Andrew Trask')],
    title: 'Welcome Talk and Conference Overview',
    group: groups['opening-session'],
    description: 'TBC',
    duration: dayjs.duration({ minutes: 15 })
  },
  {
    datetime: dayjs.utc('2020-09-26|14:10:00', timeFormat),
    speakers: [getSpeakerByName('Peter Eckersley')],
    title: 'Is Privacy Enhancing Technology Actually Possible?',
    group: groups['opening-session'],
    description:
      "The Web, smartphones, social networking and modern machine learning methods have on the whole been incredibly useful to humans, but they have hugely increased the ability of governments, corporations, and nosey individuals to know about the details of most people's lives. Privacy is endangered, but humans are clearly unwilling to let it go extinct. Privacy enhancing technologies are one field of efforts to restore some of the confidentiality that was readily available before the last three decades of digital progress, and in some cases to make it possible to build new applications that use huge amounts of personal or sensitive information, without gathering it in one place or revealing it to anyone. This is the “encrypt your cake and eat it too” approach to privacy. This talk will examine a range of applications of this approach, from reducing surveillance of the Web and instant messaging through to COVID-19 contact tracing and the design of social media feeds. In some of these domains we have successes or grounds for optimism, but in others, optimism is simply not justified - we don't even have good stories for how privacy should work let alone good designs for software to get us there.To grapple with the hard cases, we'll go back to the philosophical and political question of why different groups may want or need privacy in the first place, and try to assess technical developments as being useful (or not) in these terms. Which types of privacy do we still need in 2020, and how can we possibly get them?",
    duration: dayjs.duration({ minutes: 20 })
  },
  {
    datetime: dayjs.utc('2020-09-26|14:30:00', timeFormat),
    speakers: [getSpeakerByName('Laurens van der Maaten'), getSpeakerByName('Awni Hannun')],
    title: 'The Trade-Offs of Private Prediction',
    group: groups['in-the-research-lab-1'],
    description:
      'This talk presents recent empirical results on the performance trade-offs of differentially private prediction techniques.',
    duration: dayjs.duration({ minutes: 15 })
  },
  {
    datetime: dayjs.utc('2020-09-26|14:45:00', timeFormat),
    speakers: [getSpeakerByName('Peter Kairouz')],
    title: 'Advances and Open Problems in Federated Learning ',
    group: groups['in-the-research-lab-1'],
    description:
      'Motivated by the explosive growth in federated learning research, 22 Google researchers and 36 academics from 24 institutions collaborated on a paper titled Advances and Open Problems in Federated Learning. This talk briefly touches on the main advances and open problems surveyed in the paper, emphasizing the privacy challenges and overviewing recent results in the shuffled model of federated learning and privacy amplification via random check-ins.',
    duration: dayjs.duration({ minutes: 15 })
  },
  {
    datetime: dayjs.utc('2020-09-26|15:00:00', timeFormat),
    speakers: [getSpeakerByName('Borja Balle')],
    title: 'Towards Federated Learning with Assumption-Free Differential Privacy Guarantees',
    group: groups['in-the-research-lab-1'],
    description:
      'Combining differential privacy and federated learning enables training ML models with on-device data while providing formal privacy guarantees for all users contributing data to the final model. In this talk the speaker will: (1) Discuss some important limitations that arise when trying to translate the strong privacy guarantees of DP-SGD obtained via subsampling/shuffling in the central model to the federated scenario; (2) Propose privacy accounting techniques tailored to federated learning based on replacements of privacy amplification by subsampling/shuffling which only leverage client-side randomness. The talk will focus on the high-level picture and will not assume familiarity with the mathematical analysis of DP-SGD. This talk is based on joint work with P. Kairouz, H. B. McMahan, O. Thakkar, and A. Thakurta.',
    duration: dayjs.duration({ minutes: 15 })
  },
  {
    datetime: dayjs.utc('2020-09-26|15:15:00', timeFormat),
    speakers: [getSpeakerByName('Nicolas Papernot')],
    title: 'Tempered Sigmoid Activations for Deep Learning with Differential Privacy',
    group: groups['in-the-research-lab-1'],
    description:
      'Because learning sometimes involves sensitive data, machine learning algorithms have been extended to offer privacy for training data. In practice, this has been mostly an afterthought, with privacy-preserving models obtained by re-running training with a different optimizer, but using the model architectures that already performed well in a non-privacy-preserving setting. This approach leads to less than ideal privacy/utility tradeoffs, as the speaker shows in this talk. Instead, the speaker propose that model architectures are chosen ab initio explicitly for privacy-preserving training. To provide guarantees under the gold standard of differential privacy, one must bound as strictly as possible how individual training points can possibly affect model updates. In this work, the speaker observes that the choice of activation function is central to bounding the sensitivity of privacy-preserving deep learning. The speaker demonstrates analytically and experimentally how a general family of bounded activation functions, the tempered sigmoids, consistently outperform unbounded activation functions like ReLU. Using this paradigm, we achieve new state-of-the-art accuracy on MNIST, FashionMNIST, and CIFAR10 without any modification of the learning procedure fundamentals or differential privacy analysis.',
    duration: dayjs.duration({ minutes: 15 })
  },
  {
    datetime: dayjs.utc('2020-09-26|15:30:00', timeFormat),
    speakers: [getSpeakerByName('Helen Nissenbaum')],
    title: 'Privacy, Contextual Integrity, and Obfuscation',
    group: groups['keynote-1'],
    description: 'TBC',
    duration: dayjs.duration({ minutes: 30 })
  },
  {
    datetime: dayjs.utc('2020-09-26|16:00:00', timeFormat),
    speakers: [getSpeakerByName('Andrew Trask')],
    title: 'OpenMined High Level Roadmap',
    group: groups['roadmap'],
    description: 'TBC',
    duration: dayjs.duration({ minutes: 45 })
  },
  {
    datetime: dayjs.utc('2020-09-26|16:45:00', timeFormat),
    speakers: [getSpeakerByName('Nick Rose')],
    title: 'OpenMined Science Roadmap',
    group: groups['roadmap'],
    description:
      'This talk presents the OpenMined vision & roadmap for how we want to help accelerate science by solving privacy. The talk provides details on the problems faced by data scientists and researchers, a possible solution, and a path forward to achieving that solution.',
    duration: dayjs.duration({ minutes: 15 })
  },
  {
    datetime: dayjs.utc('2020-09-26|17:00:00', timeFormat),
    speakers: [getSpeakerByName('Ronnie Falcon')],
    title: 'Governance Roadmap',
    group: groups['roadmap'],
    description: "This talk presents OpenMined's vision & roadmap to the Economies and Governance verticals. The speaker demonstrates how changes in the way we store and manage personal data can incentivize Businesses and Governments to serve us, their consumers, better.",
    duration: dayjs.duration({ minutes: 35 })
  },
  {
    datetime: dayjs.utc('2020-09-26|17:35:00', timeFormat),
    speakers: [getSpeakerByName('Pia Mancini'), getSpeakerByName('Andrew Trask'), getSpeakerByName('Nathan Benaich'), getSpeakerByName('Sarah Aoun')],
    title: 'Privacy Philanthropy Panel',
    group: groups['philanthropy'],
    description: 'TBC',
    duration: dayjs.duration({ minutes: 40 })
  },
  {
    datetime: dayjs.utc('2020-09-26|18:15:00', timeFormat),
    speakers: [getSpeakerByName('Bob Rogers')],
    title: 'BeeKeeperAI: Accelerating Deployment of Healthcare AI by 1000x',
    group: groups['real-world-deployments-1'],
    description:
      'This talk identifies the data access challenges that block the development of dependable healthcare AI.  The speaker will explain how the BeeKeeperAI platform is leveraging privacy-preserving computing technology to allow healthcare AI developers to validate and train algorithms on multiple, diverse data sets without ever sharing or moving data.',
    duration: dayjs.duration({ minutes: 15 })
  },

  {
    datetime: dayjs.utc('2020-09-26|18:30:00', timeFormat),
    speakers: [getSpeakerByName('Georgios Kaissis')],
    title:
      'End-to-end Privacy Preserving Deep Learning on Multi-institutional Medical Imaging Data',
    group: groups['real-world-deployments-1'],
    description:
      'This talk describes the process of creating a library enabling PPML on medical imaging from experimentation to deployment. The speaker shows how CLI tools integrating the state of the art from PySyft, PyGrid and CrypTen, alongside technical developments from his work (decentralised hyperparameter tuning, federated averaging, secure aggregation, privacy-enhancing decentralised data augmentation, catastrophic forgetting prevention etc.) for federated learning and the provision of encrypted inference as a service on medical images. The talk concludes with a large-scale real-world case study with multi-institutional medical imaging data to test and validate the results.',
    duration: dayjs.duration({ minutes: 15 })
  },
  {
    datetime: dayjs.utc('2020-09-26|18:45:00', timeFormat),
    speakers: [getSpeakerByName("Jim O'Leary")],
    title: 'Powering the World’s Private Communications',
    group: groups['real-world-deployments-1'],
    description:
      'Signal is a 501c3 non-profit organization committed to providing open-source private and secure communication tools to the world. You may know them best from Signal Protocol, which currently provides end-to-end encrypted messaging for billions of people worldwide. Join the speaker for some quick, recent tales of developing and deploying technology that protects free expression and enables global communication.',
    duration: dayjs.duration({ minutes: 15 })
  },
  {
    datetime: dayjs.utc('2020-09-26|19:00:00', timeFormat),
    speakers: [getSpeakerByName('Nathan Benaich')],
    title: 'Building an AI-first, Privacy-preserving Technology Company',
    group: groups['investing'],
    description:
      'In this talk, the speaker addresses the opportunity for building privacy-preserving software products with a focus on AI-first products. The speaker discusses both headwinds and tailwinds for privacy-preserving products, the use case contexts in which it makes sense to build in such a fashion, and how to consider value creation and value capture. This talk is targeted at those interested in building startups using privacy-preserving technology.',
    duration: dayjs.duration({ minutes: 20 })
  },
  {
    datetime: dayjs.utc('2020-09-26|19:20:00', timeFormat),
    speakers: [
      getSpeakerByName('Austin Arensberg'),
      getSpeakerByName('Jackson Cummings'),
      getSpeakerByName('Morgan Mahlock')
    ],
    title: 'Why VCs are Interested in Privacy Investing Now',
    group: groups['investing'],
    description:
      'This talk poses the question "Can VCs make money in privacy startups?" Increasingly the answer is yes - but entirely new business models need to be examined. This talk details how the tide has changed and how privacy is now a hot new area of investing.',
    duration: dayjs.duration({ minutes: 20 })
  },
  {
    datetime: dayjs.utc('2020-09-26|19:40:00', timeFormat),
    speakers: [
      getSpeakerByName('Sachin Deshpande'),
      getSpeakerByName('Théo Ryffel'),
      getSpeakerByName('Michael Geer')
    ],
    title: 'Privacy AI Startups & the OpenMined Open-source Community',
    group: groups['investing'],
    description:
      'OpenMined has built vibrant relationships with numerous startups, who are leveraging privacy AI technologies as a core part of their offering. This panel will discuss these symbiotic relationships, and how they are likely to grow in the future.',
    duration: dayjs.duration({ minutes: 20 })
  },
  {
    datetime: dayjs.utc('2020-09-26|20:00:00', timeFormat),
    speakers: [getSpeakerByName('Fatemehsadat Mireshghallah')],
    title: 'Privacy-preserving Natural Language Processing',
    group: groups['research-lightning-1'],
    description:
      'The work presented explains the differences between correlated and correlated data, and the challenges that exist in protecting correlated data, which is normally in the format of sequences, and how differential privacy cannot always be used there. This talk introduces some papers in this topic, such as papers that introduce privacy preserving mechanisms for sensor data and location. The talk will conclude with a short introduction to pufferfish framework, which is normally used for correlated data.',
    duration: dayjs.duration({ minutes: 10 })
  },
  {
    datetime: dayjs.utc('2020-09-26|20:10:00', timeFormat),
    speakers: [
      getSpeakerByName('Kritika Prakash'),
      getSpeakerByName('Lucile Saulnier'),
      getSpeakerByName('Dmitrii Usynin'),
      getSpeakerByName('Zarreen Naowal Reza')
    ],
    title:
      'Private Deep Learning of Medical Data for Hospitals using Federated Learning + Differential Privacy',
    group: groups['research-lightning-1'],
    description:
      'This talk presents an entire architecture & pipeline on how to use differential privacy & federated learning for machine learning prediction on medical data, with a focus on deep neural networks',
    duration: dayjs.duration({ minutes: 10 })
  },
  {
    datetime: dayjs.utc('2020-09-26|20:20:00', timeFormat),
    speakers: [getSpeakerByName('Madeleine Shang')],
    title: 'AI Powered UX with OpenMined',
    group: groups['research-lightning-1'],
    description:
      'The talk demonstrates how a website can learn to optimize its own UI based on static federated learning. This is acheived using syft.js, pygrid and the python worker. This work shows how to perform a simple version of reinforcement learning in browser that learns from user interactions and will gradually show the UIs / options that the users prefer.',
    duration: dayjs.duration({ minutes: 10 })
  },
  {
    datetime: dayjs.utc('2020-09-26|20:30:00', timeFormat),
    speakers: [getSpeakerByName('Suha Sabi Hussain')],
    title: 'PrivacyRaven: Comprehensive Privacy Testing for Deep Learning',
    group: groups['research-lightning-1'],
    description:
      'Deep learning systems, particularly neural networks, have proliferated in a wide range of applications, including privacy-sensitive use cases such as facial recognition and medical diagnoses. However, these models are vulnerable to privacy attacks that target both the intellectual property of the model and the confidentiality of the training data. Recent literature has seen an arms race between privacy attacks and defenses on various systems. And until now, engineers and researchers have not had the privacy analysis tools they need to rival this trend. Hence, this talk presents PrivacyRaven: a comprehensive, practical privacy testing suite for deep learning systems optimized for usability and efficiency. In this talk, the speaker discusses how users can determine the susceptibility of a model to privacy attacks; systematically evaluate different privacy preserving machine learning techniques; develop novel privacy metrics and attacks; and repurpose attacks for data provenance and other use cases. This talk also demonstrates how model extraction, membership inference, model inversion, and other privacy attacks and metric calculations can be quickly prototyped and launched in PrivacyRaven, which leverages a modular design to facilitate flexible experimentation.',
    duration: dayjs.duration({ minutes: 10 })
  },
  {
    datetime: dayjs.utc('2020-09-26|20:40:00', timeFormat),
    speakers: [getSpeakerByName('Daniel Escudero')],
    title: 'Primal: A Framework for Secure Evaluation of Neural Networks',
    group: groups['research-lightning-1'],
    description:
      'In this talk, Primal is presented,  a lightweight Python framework for PRIvate MAchine Learning that enables secure evaluation and experimentation of a wide variety of Neural Networks in an efficient and usable way. Primal is written with extensibility and flexibility in mind. The goal of this framework is to provide practitioners and researchers with the ability of experimenting with a wide variety of neural networks and MPC protocols, easily performing changes and analyzing their effects in both accuracy and performance. Primal allows loading a vast amount of network types, which can be then later modified to explore different accuracy-performance tradeoffs. Furthermore, different MPC protocols can be easily implemented, which allows researchers to determine the best MPC protocol for a particular use-case. Additionally, Primal, in spite of being written completely in Python and using only lightweight dependencies such as numpy, achieves considerable efficiency thanks to a simple yet powerful modular design and a careful implementation of both its computation and communication components. This talk discusses what is currently implemented in Primal, its architectural design, and a set of examples of its capabilities, including plain secure inference of pre-trained models, experimentation with different truncation protocols, and debugging useful information on runtime.',
    duration: dayjs.duration({ minutes: 10 })
  },
  {
    datetime: dayjs.utc('2020-09-26|20:50:00', timeFormat),
    speakers: [getSpeakerByName('Sasi Kumar Murakonda')],
    title:
      'ML Privacy Meter: Aiding Regulatory Compliance by Quantifying the Privacy Risks of Machine Learning',
    group: groups['research-lightning-1'],
    description:
      "When building machine learning models using sensitive data, organizations should ensure that the data processed in such systems is adequately protected. For projects involving machine learning on personal data, Article 35 of the GDPR mandates it to perform a Data Protection Impact Assessment (DPIA). In addition to the threats of illegitimate access to data through security breaches, machine learning models pose an additional privacy risk to the data by indirectly revealing about it through the model predictions and parameters. Guidances released by the Information Commissioner's Office (UK) and the National Institute of Standards and Technology (US) emphasize on the threat to data from models and recommend organizations to account for and estimate these risks to comply with data protection regulations. Hence, there is an immediate need for a tool that can quantify the privacy risk to data from models.  The speaker presents ML Privacy Meter, a tool that can quantify the privacy risk to data from models through state of the art membership inference attack techniques. This talk will discuss how this tool can help practitioners in compliance with data protection regulations, when deploying machine learning models.",
    duration: dayjs.duration({ minutes: 10 })
  },
  {
    datetime: dayjs.utc('2020-09-26|21:00:00', timeFormat),
    speakers: [getSpeakerByName('Kenneth Cukier')],
    title:
      'The Contact-Tracing Tragedy: A Failure of Technology and the State to Save Lives While Preserving Privacy',
    group: groups['closing-session-1'],
    description:
      "At the outset of the pandemic, many countries wanted to do digital contact tracing to improve on manual systems. But they basically failed -- not because of technology but privacy, and public health suffered. So shame on technologists, policymakers and media. Let's start a nuanced conversation on how to overcome the challenges so society can have both contact-tracing and privacy.",
    duration: dayjs.duration({ minutes: 25 })
  },

  // SUNDAY
  {
    datetime: dayjs.utc('2020-09-27|14:00:00', timeFormat),
    speakers: [getSpeakerByName('Amber Trask')],
    title: 'Where Do You Fit Within Our Community?',
    group: groups['teams'],
    description: 'TBC',
    duration: dayjs.duration({ minutes: 80 })
  },
  {
    datetime: dayjs.utc('2020-09-27|15:20:00', timeFormat),
    speakers: [],
    title: 'Break',
    group: groups['teams'],
    description: 'Short 10 minute break',
    duration: dayjs.duration({ minutes: 10 })
  },
  {
    datetime: dayjs.utc('2020-09-27|15:30:00', timeFormat),
    speakers: [],
    title: 'Networking Session',
    group: groups['networking'],
    description: 'A networking session on our Gather conference platform',
    duration: dayjs.duration({ minutes: 75 })
  },
  {
    datetime: dayjs.utc('2020-09-27|16:45:00', timeFormat),
    speakers: [getSpeakerByName('Zachary Charles')],
    title: 'Adaptive Federated Optimization',
    group: groups['in-the-research-lab-2'],
    description:
      'TBC',
    duration: dayjs.duration({ minutes: 15 })
  },
  {
    datetime: dayjs.utc('2020-09-27|17:00:00', timeFormat),
    speakers: [getSpeakerByName('Miguel Guevara')],
    title: 'Building Differential Privacy at Scale',
    group: groups['in-the-research-lab-2'],
    description:
      'Differential Privacy has long been recognized as a golden standard in privacy. While the theory has existed for years, it was only recently that it started gaining ground in industry applications. Google first used DP in its Chrome browser. More recently, Google started developing strong primitives for DP. Similar to cryptography, there are many ways in which DP can go wrong. This talk will give an overview of the years-long journey that Google engineers embarked on to develop DP infrastructure at scale.',
    duration: dayjs.duration({ minutes: 15 })
  },
  {
    datetime: dayjs.utc('2020-09-27|17:15:00', timeFormat),
    speakers: [getSpeakerByName('Krzysztof Ostrowski')],
    title: 'TensorFlow Federated',
    group: groups['in-the-research-lab-2'],
    description:
      'This talk presents TensorFlow Federated (TFF), an OSS platform for computations on decentralized data, and discusses its relationship to the OpenMined ecosystem.',
    duration: dayjs.duration({ minutes: 15 })
  },
  {
    datetime: dayjs.utc('2020-09-27|17:30:00', timeFormat),
    speakers: [getSpeakerByName('Kristin Lauter')],
    title: 'Private AI: Machine Learning on Encrypted Data',
    group: groups['in-the-research-lab-2'],
    description: "As the world adopts Artificial Intelligence, the privacy risks are many.  AI can improve our lives, but may leak or misuse our private data.  Private AI is based on Homomorphic Encryption (HE), a new encryption paradigm which allows the cloud to operate on private data in encrypted form, without ever decrypting it, enabling private training and private prediction.  The speaker's 2016 ICML CryptoNets paper showed for the first time that it was possible to evaluate neural nets on homomorphically encrypted data, and opened new research directions combining machine learning and cryptography. The security of Homomorphic Encryption is based on hard problems in mathematics involving lattices, a candidate for post-quantum cryptography.  This talk will explain Homomorphic Encryption, Private AI, and show demos of HE in action.",
    duration: dayjs.duration({ minutes: 15 })
  },
  {
    datetime: dayjs.utc('2020-09-27|17:45:00', timeFormat),
    speakers: [getSpeakerByName('M Sadegh Riazi')],
    title: 'From Homomorphic Encryption to Silicon',
    group: groups['in-the-research-lab-2'],
    description:
      'In this presentation, the speaker will be talking about about a new computing architecture for homomorphic encryption, called HEAX. HEAX outperforms all modern CPUs and datacenter GPUs by up to two-orders-of-magnitude. The proof-of-concept of this architecture is implemented on Microsoft Azure using Field Programmable Gate Arrays (FPGAs).',
    duration: dayjs.duration({ minutes: 15 })
  },
  {
    datetime: dayjs.utc('2020-09-27|18:00:00', timeFormat),
    speakers: [getSpeakerByName('Pranav Subramani')],
    title: 'Superfast Differential Privacy',
    group: groups['research-lightning-2'],
    description:
      'Machine learning has seen a tremendous amount of improvement in recent years, primarily attributable to the ongoing success of deep neural networks. In the age of big data and powerful learning algorithms, privacy is of paramount importance to prevent the leakage of information. Differential privacy is one such approach, however it suffers from the drawback of being slow on most modern architectures. The work in this talk proposes an approach to this by combining differential privacy with existing software frameworks that yield massive speedups in the domain of differential privacy. The primary algorithm focused on is Differentially Private Stochastic Gradient Descent (DPSGD) since it is the most commonly used optimization technique for deep neural networks. Furthermore, the work describes a thorough set of experiments ranging from vision to text and elucidate the drastic improvements in the speed. The speaker hopes that the evaluation allows for a wider adoption of privacy-preserving machine learning techniques and takes a step towards practical differential privacy. This talk is based on joint work with Gautam Kamath.',
    duration: dayjs.duration({ minutes: 10 })
  },
  {
    datetime: dayjs.utc('2020-09-27|18:10:00', timeFormat),
    speakers: [getSpeakerByName('Jason Mancuso')],
    title: 'Pragmatic Security for Collaborative Learning',
    group: groups['research-lightning-2'],
    description:
      'Traditional operational security practices have been used to secure deployments of machine learning in industry, largely viewing ML models as "just another microservice" in a larger infrastructure. This talk revisits this in the context of collaborative learning, motivating the need for a more privacy-preserving machine learning (PPML) practice from foundational security engineering principles. After reviewing well-known ML privacy primitives in this context, the speaker explores a gap between their theory and practice. The speaker argues that in order to address this gap and support broad industry adoption, the community must unify PPML techniques into a common analytical framework for securing end-to-end machine learning workflows.',
    duration: dayjs.duration({ minutes: 10 })
  },
  {
    datetime: dayjs.utc('2020-09-27|18:20:00', timeFormat),
    speakers: [getSpeakerByName('Sameer Wagh')],
    title: 'Falcon: Honest-Majority Maliciously Secure Framework for Private Deep Learning',
    group: groups['research-lightning-2'],
    description:
      'In this talk, the speaker briefly describes Falcon, a new multi-party computation based framework for privacy-preserving machine learning. The talk outlines the key contributions of Falcon before showcasing some of the important results of the work.',
    duration: dayjs.duration({ minutes: 10 })
  },
  {
    datetime: dayjs.utc('2020-09-27|18:30:00', timeFormat),
    speakers: [getSpeakerByName('Mayank Varia')],
    title: 'Scalable and Accessible Secure Multi-Party Computation',
    group: groups['research-lightning-2'],
    description:
      'This talk describes the experience of deploying a web application that securely analyzes the salary data of more than 100,000 employees to compute the gender wage gap. Additionally, the speaker will discuss recent efforts to improve the scalability of cryptographically protected computing in the datacenter.',
    duration: dayjs.duration({ minutes: 10 })
  },
  {
    datetime: dayjs.utc('2020-09-27|18:40:00', timeFormat),
    speakers: [getSpeakerByName('Luca Belli')],
    title: 'Challenges in Building the RecSys2020 Dataset',
    group: groups['research-lightning-2'],
    description:
      'This talk touches on the issues that Twitter encountered when building the dataset for the RecSys 2020 challenge. In particular the speaker shows how Twitter kept privacy top of mind, while at the same time having a dataset that is useful for research purposes.',
    duration: dayjs.duration({ minutes: 10 })
  },
  {
    datetime: dayjs.utc('2020-09-27|18:50:00', timeFormat),
    speakers: [],
    title: 'Break',
    group: groups['research-lightning-2'],
    description: 'Short 10 minute break',
    duration: dayjs.duration({ minutes: 10 })
  },
  {
    datetime: dayjs.utc('2020-09-27|19:00:00', timeFormat),
    speakers: [getSpeakerByName('Emily Glanz'), getSpeakerByName('Weikang Song')],
    title: 'TensorFlow Federated (pre-recorded tutorial)',
    group: groups['tutorials'],
    description:
      'In this tutorial you will learn how you can use TensorFlow Federated, an open-source framework for machine learning and other computations on decentralized data, to explore federated learning. You will walk through several classic machine learning problems while learning about the unique advantages and challenges of the federated setting. You will also see examples of how TFF can be used to enable new research. After this tutorial, you will be equipped to further experiment with federated learning on your own.',
    duration: dayjs.duration({ minutes: 60 })
  },
  {
    datetime: dayjs.utc('2020-09-27|19:00:00', timeFormat),
    speakers: [getSpeakerByName('Alan Aboudib')],
    title: 'SyferText 0.1.0: Privacy-preserving NLP Over PyGrid',
    group: groups['tutorials'],
    description:
      'This tutorial session presents SyferText 0.1.0 - its vision, with hands-on examples on how to create a pipeline (including pre-processing component + PySyft model), deploy it to PyGrid, load it, and use it.',
    duration: dayjs.duration({ minutes: 60 })
  },
  {
    datetime: dayjs.utc('2020-09-27|19:00:00', timeFormat),
    speakers: [getSpeakerByName('Varun Khare')],
    title: 'Deploying Federated Learning on Android with KotlinSyft',
    group: groups['tutorials'],
    description:
      'In this interactive session, the speakers will perform a code walkthrough of the mobile federated learning ecosystem developed at OpenMined that is PySyft, PyGrid and KotlinSyft.The talk will start with creating neural networks in PySyft and deploying them on PyGrid with JSON Web Token authentication. The speakers show how to build an android application to train the hosted model on privately held data using KotlinSyft. Diving deeper, the talk will go through the various features of KotlinSyft like change detection, wifi detection and RX support. The session will end with the new features that are in progress and will soon be added to KotlinSyft like peer to peer SMPC protocols.',
    duration: dayjs.duration({ minutes: 60 })
  },
  {
    datetime: dayjs.utc('2020-09-27|19:00:00', timeFormat),
    speakers: [getSpeakerByName('Nick Rose'), getSpeakerByName('Andrew Trask')],
    title: 'Duet Demo — How to Do Data Science on Data Owned by a Different Organization',
    group: groups['tutorials'],
    description: 'TBC',
    duration: dayjs.duration({ minutes: 60 })
  },
  {
    datetime: dayjs.utc('2020-09-27|19:00:00', timeFormat),
    speakers: [getSpeakerByName('Eric Verner')],
    title: 'COINSTAC: A Decentralized, Differentially Private Application for Neuroimaging',
    group: groups['tutorials'],
    description:
      'Data sharing is beneficial for science in that it enables researchers to find smaller effects and create more generalized machine learning models. However, data sharing is in some cases difficult or outright impossible because of barriers such as privacy laws, negotiating data usage agreements, infrastructure limitations, or lack of trust. The Collaborative Informatics and Neuroimaging Suite Toolkit for Anonymous Computation (COINSTAC) solves these problems by offering a platform for decentralized and differentially private analyses for neuroimaging researchers. Developed since 2015 by the Joint GSU, Georgia Tech, and Emory Center for Translational Research in Neuroimaging and Data Science (TReNDS) in Atlanta, GA, COINSTAC is a free and open source application in which algorithm developers have implemented various forms of linear regression, classification, and visualization to suit a variety of neuroimaging modalities. COINSTAC enables decentralized regression as well as advanced multivariate and machine learning tools and also enhanced privacy preservation tools such as differential privacy. COINSTAC is an Electron application written in JavaScript that utilizes Docker containers to encapsulate complex neuroimaging and machine learning pipelines. This tutorial will provide an overview of COINSTAC and show a demonstration of a COINSTAC computation.',
    duration: dayjs.duration({ minutes: 60 })
  },
  {
    datetime: dayjs.utc('2020-09-27|19:00:00', timeFormat),
    speakers: [getSpeakerByName('Robin Roehm'), getSpeakerByName('Pavlos Papadopoulos')],
    title: 'Privacy Preserving Vertically Distributed Machine Learning',
    group: groups['tutorials'],
    description:
      'The speakers present PyVertical - a system to train machine learning models on vertically distributed data. In a first step, vertically distributed data is linked without exposing membership using Private Set Intersection. Then a Split Neural Network is trained such that privacy is preserved throughout the entire process',
    duration: dayjs.duration({ minutes: 60 })
  },
  {
    datetime: dayjs.utc('2020-09-27|19:00:00', timeFormat),
    speakers: [getSpeakerByName('Mariya Georgieva'), getSpeakerByName('Nicolas Gama')],
    title: 'Introduction to TFHE and Some Applications',
    group: groups['tutorials'],
    description:
      'Homomorphic encryption is a privacy preserving technique allowing a single public cloud to operate on secret data without leaking anything on the data. In this presentation, the speakers recall the capabilities of homomorphic encryption, and its security model. Then they detail the TFHE library, whose API supports efficiently various plaintext computation models, like arbitrary boolean circuits, arithmetic circuits with discrete and continuous logic, and other computational models like deterministic automata or lookup tables. They first demonstrate a few tutorial examples. In the second part of this talk the speakers describe two applications for private genomic studies: private GWAS and private genome imputation (which won the 1st place at Idash 2019), where methods for secure computation have shown significant performance improvements over the last several years, and in particular fully homomorphic encryption becomes a critical path technology for innovative, life-saving research to positively and equally impact the global population.',
    duration: dayjs.duration({ minutes: 60 })
  },
  {
    datetime: dayjs.utc('2020-09-27|19:00:00', timeFormat),
    speakers: [
      getSpeakerByName('Adam Hall'),
      getSpeakerByName('Lohan Spies'),
      getSpeakerByName('Tom Titcombe'),
      getSpeakerByName('Will Abramson')
    ],
    title: 'Opus and PryVote: The Brave New World of Self Sovereign Identity (SSI)',
    group: groups['tutorials'],
    description:
      'This session will demonstrate our new SSI standard development kit. The speakers will discuss the need for decentralised identity and trust, the technologies involved and two flagship SSI applications; Opus and PryVote.',
    duration: dayjs.duration({ minutes: 60 })
  },
  {
    datetime: dayjs.utc('2020-09-27|19:00:00', timeFormat),
    speakers: [
      getSpeakerByName('Georgios Kaissis'),
      getSpeakerByName('Alex Ziller'),
      getSpeakerByName('Jonathan Passerat-Palmbach')
    ],
    title:
      'Privacy-preserving Medical Imaging Analysis with OpenMined PriMIA. A Sneak Peek at Features and Concepts',
    group: groups['tutorials'],
    description:
      'This session will provide a first look at the design and features of PriMIA, a library for privacy-preserving deep learning for medical imaging, jointly developed by the Technical University of Munich, Imperial College London and OpenMined. A brief introduction to the project will be given (ca. 10 minutes), after which participants will be given insight into how PriMIA performs federated learning and encrypted inference, as well as be introduced to the challenges of medical image analysis in a real-life environment using actual medical images and the Jupyter Notebook environment. (ca. 20 minutes). Lastly, opportunity will be provided for dicussion and participant questions (ca. 15 minutes).',
    duration: dayjs.duration({ minutes: 60 })
  },
  {
    datetime: dayjs.utc('2020-09-27|19:00:00', timeFormat),
    speakers: [getSpeakerByName('Davide Testuggine')],
    title: 'Differentially Private Model Training With Opacus',
    group: groups['tutorials'],
    description:
      'In this session, the speaker will go over the DP-SGD technique to train differentially private models and will then show how to train your own private model using Opacus, a PyTorch lib for fast and accessible DP-SGD training.',
    duration: dayjs.duration({ minutes: 60 })
  },
  {
    datetime: dayjs.utc('2020-09-27|19:00:00', timeFormat),
    speakers: [getSpeakerByName('Chinmay Shah')],
    title: 'Differential Privacy Using PyDP',
    group: groups['tutorials'],
    description:
      'This tutorial aims to provide a brief overview of differential privacy. Further, it will cover the new PyDP vision as well as applying differential privacy using PyDP.',
    duration: dayjs.duration({ minutes: 60 })
  },
  {
    datetime: dayjs.utc('2020-09-27|20:00:00', timeFormat),
    speakers: [getSpeakerByName('Hadrien Lautraite'), getSpeakerByName('Patrick Mesana')],
    title: 'Generating Credit Card Transactional Profiles with GANs',
    group: groups['real-world-deployments-2'],
    description:
      "While being of great value, financial institution's data contain particularly sensitive information. Transactional data are a key example for this matter, they can be used for numerous valuable applications (fraud detection, customer profile clustering, consumption behavior) while representing an important privacy matter. Even if anonymized, such data can be used to extract sensitive information about someone. There is a natural struggle between data science team that want access to a large volume of data in order to train their model and security team which is concerned by the risk of massive data breach. The speakers propose to resolve this problem by using deep learning techniques to generate fake transactional profiles (amount of money spent monthly in particular industries) with similar distribution as the original one. One of the key issues with transactional profiles is its sparseness. The speakers show that Generative Adversarial Networks can generate valuable synthetic data and lead to better results than Variable Auto Encoders when working with such sparse data. The speakers measure the usefulness of synthetic data by comparing some known statistics and basic insights used by the bank on both the original and generated datasets. Finally, the speakers compare the training with and without Differential Privacy.",
    duration: dayjs.duration({ minutes: 15 })
  },
  {
    datetime: dayjs.utc('2020-09-27|20:15:00', timeFormat),
    speakers: [getSpeakerByName('Kartik Chopra')],
    title: 'Secure AI for National Security',
    group: groups['real-world-deployments-2'],
    description:
      'The goal for this presentation will be to increase awareness of the audience and research community on the viability of secure machine learning for national security purposes. The speaker shares deployment strategies of ML models that prevent adversarial attacks from the most challenging nation state actors, and how to preserve the privacy of underlying data during the model development phase. Specifically, the speaker discusses use cases, mission criteria, and teams (what type of engineers, managers and leaders) that are required to tackle these issues for the front line of countries. The speaker also suggests open source frameworks, libraries and technologies that have been leveraged in these environments to really safeguard the models, as well as promoting the work of OpenMined to show how you are democratizing these methods for data scientists in entrenched industries.',
    duration: dayjs.duration({ minutes: 15 })
  },
  {
    datetime: dayjs.utc('2020-09-27|20:30:00', timeFormat),
    speakers: [getSpeakerByName('John Farkas')],
    title: 'Making Privacy A Brand Asset',
    group: groups['real-world-deployments-2'],
    description:
      "In the new world shaped by GDPR, organizations often see privacy as a hurdle, NOT a brand opportunity. As new technologies afford the ability to harvest insight from private data without compromising privacy, a clear opportunity is emerging to build trust into your brand. What privacy story is your organization telling? How can you create a culture and a brand narrative that brings the preservation of your customers' privacy to the forefront and showcases your respect and regard for them? This talk explores the opportunity and teaches why now is the right time to make it happen.",
    duration: dayjs.duration({ minutes: 15 })
  },
  {
    datetime: dayjs.utc('2020-09-27|20:45:00', timeFormat),
    speakers: [getSpeakerByName('Nick Elledge')],
    title: 'Crossing the Chasm: Driving Enterprise Adoption of Federated Learning and Differential Privacy in Healthcare, Banking, and Retail',
    group: groups['real-world-deployments-2'],
    description:
      "Why aren’t privacy-enhancing technologies (PETs) being adopted faster in business and government? This talk illustrates what is needed beyond technology to get PETs working, provides six criteria for how enterprise buyers evaluate private AI software, and discusses case studies of real-world deployments of differential privacy, federated learning, and homomorphic encryption. The speaker offers use cases within public policy and international development, drawing on the speaker's experience in Africa.",
    duration: dayjs.duration({ minutes: 15 })
  },
  {
    datetime: dayjs.utc('2020-09-27|21:00:00', timeFormat),
    speakers: [getSpeakerByName('Andrew Trask')],
    title: 'Closing Ceremony',
    group: groups['closing-session-2'],
    description: 'TBC',
    duration: dayjs.duration({ minutes: 5 })
  }
];

const sortedSchedule = schedule.sort((a, b) => (a.datetime.isBefore(b.datetime) ? -1 : 1));

export const hasConferenceStarted = dayjs().isAfter(sortedSchedule[0].datetime);
export const agenda = groupSchedule(sortedSchedule);
