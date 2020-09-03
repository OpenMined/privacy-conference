import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import duration from 'dayjs/plugin/duration';
import { getSpeakerByName } from './speakers';

dayjs.extend(utc);
dayjs.extend(duration);

// NOTE: Could do this recursively and be a lot more efficient... but... YOLO
const groupSchedule = (schedule) => {
  let agenda = [];

  schedule = schedule.sort((a, b) => (a.datetime.isBefore(b.datetime) ? -1 : 1));

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
      'In this session, we will hear from several of the world\'s foremost privacy experts talking about the latest in their privacy research at the world\'s largest tech institutions. This is the research that protects the data sitting in your pocket right now.'
  },
  'keynote-1': {
    title: 'Keynote',
    description:
      'In this keynote, we will hear from a legend of the privacy community - whose groundbreaking philosophical research has defined what "privacy" really is to both layman and academic. Her pivotal work is the foundation upon which our technical advancements rest.'
  },
  'roadmap': {
    title: 'Privacy Technology Roadmap - What\'s Coming Next?',
    description:
      'We have fancy privacy technologies. We know the privacy-preserving world we want. This series of talks seeks to answer the question, "How do we get there?" and "What privacy-preserving products should we build first?"'
  },
  'philanthropy': {
    title: 'Change Begins with a Gift: The Role of Philanthropy in Privacy Tech',
    description:
      'The first movers in any great revolution are those willing to make investments even in extremely uncertain and risky strategies. Such is the role of the great philanthropies throughout history. In this session, you will hear from a few of the leading privacy tech charities about how they support the development of privacy-enhancing infrastructure.'
  },
  'real-world-deployments-1': {
    title: 'Real World Deployment Series: What is it Like to Deploy Privacy Today?',
    description:
      'In this session, you\'ll hear from leading privacy-tech startups deploying state-of-the-art privacy tech at scale. This should help you understand the current state of the technology straight from the champions on the front line!'
  },
  'investing': {
    title: 'Privacy is Profit: why are VCs Investing in Privacy-enhancing Tech?',
    description:
      'In a world where many view privacy as an opponent to innovation, these thought-leaders in the Venture Capital space see things differently. Come and hear why privacy-enhancing startups are going to outperform the previous generation on both ethics and economics.'
  },
  'research-lightning-1': {
    title: 'Research Lightning: Hot-off-the-press Privacy Research',
    description:
      'In this session, you\'ll hear 10 minute lightning talks about ongoing and recently published privacy research from some of the brightest minds in the field.'
  },
  'closing-session-1': {
    title: 'Closing Session',
    description:
      'In this session, we\'ll hear a grounding perspective on the gap between what society needs and what we, the privacy community, have yet to provide. This is the mountain we have yet to climb.'
  },
  'teams': {
    title: 'Where Do I Fit In?',
    description:
      'The first session on Sunday gives you a closer look at the organisational structure of OpenMined and will help you find where you can make impact among our thriving teams.'
  },
  'keynote-2': {
    title: 'Keynote',
    description:
      'Stay tuned to find out who our exciting day 2 keynote speaker is...'
  },
  'in-the-research-lab-2': {
    title: 'In The Research Lab',
    description:
      'In this session, we will hear from several of the world\'s foremost privacy experts talking about the latest in their privacy research at the world\'s largest tech institutions. This is the research that protects the data sitting in your pocket right now.'
  },
  'research-lightning-2': {
    title: 'Research Lightning: Hot-off-the-press Privacy Research',
    description:
      'In this session, you\'ll hear 10 minute lightning talks about ongoing and recently published privacy research from some of the brightest minds in the field.'
  },
  'tutorials': {
    title: 'Tutorial Breakout Sessions',
    description:
      'Learn by doing! These hour-long tutorial sessions will all run in parallel. On the day, simply pick a session that interests you most and dive in!'
  },
  'real-world-deployments-2': {
    title: 'Real World Deployment Series: What is it Like to Deploy Privacy Today?',
    description:
      'In this session, you\'ll hear from leading privacy-tech startups deploying state-of-the-art privacy tech at scale. This should help you understand the current state of the technology straight from the champions on the front line!'
  },
  'closing-session-2': {
    title: 'Closing Session',
    description:
      'Andrew recaps the highlights from the conference.'
  }
};

export const title = 'Agenda';
const timeFormat = 'YYYY-MM-DD|HH:mm:ss';
export const schedule = [
  // SATURDAY
  {
    datetime: dayjs.utc('2020-09-26|14:00:00', timeFormat),
    speakers: [getSpeakerByName('Andrew Trask')],
    title: 'Welcome Talk and Conference Overview',
    group: groups['opening-session'],
    description: 'TBC',
    duration: dayjs.duration({ minutes: 10 })
  },
  {
    datetime: dayjs.utc('2020-09-26|14:10:00', timeFormat),
    speakers: [getSpeakerByName('TBC')],
    title: 'Keynote',
    group: groups['opening-session'],
    description: 'TBC',
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
    title: 'TBC',
    group: groups['in-the-research-lab-1'],
    description: 'TBC',
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
    speakers: [getSpeakerByName('TBC')],
    title: 'Keynote',
    group: groups['keynote-1'],
    description: 'TBC',
    duration: dayjs.duration({ minutes: 60 })
  },
  {
    datetime: dayjs.utc('2020-09-26|16:30:00', timeFormat),
    speakers: [getSpeakerByName('Andrew Trask')],
    title: 'OpenMined High Level Roadmap',
    group: groups['roadmap'],
    description: 'TBC',
    duration: dayjs.duration({ minutes: 20 })
  },
  {
    datetime: dayjs.utc('2020-09-26|16:50:00', timeFormat),
    speakers: [getSpeakerByName('Nick Rose')],
    title: 'OpenMined Science Roadmap',
    group: groups['roadmap'],
    description: 'This talk presents the OpenMined vision & roadmap for how we want to help accelerate science by solving privacy. The talk provides details on the problems faced by data scientists and researchers, a possible solution, and a path forward to achieving that solution.',
    duration: dayjs.duration({ minutes: 20 })
  },
  {
    datetime: dayjs.utc('2020-09-26|17:10:00', timeFormat),
    speakers: [getSpeakerByName('Ronnie Falcon')],
    title: 'Governance Roadmap',
    group: groups['roadmap'],
    description: 'TBC',
    duration: dayjs.duration({ minutes: 20 })
  },
  {
    datetime: dayjs.utc('2020-09-26|17:30:00', timeFormat),
    speakers: [getSpeakerByName('Pia Mancini')],
    title: 'TBC',
    group: groups['philanthropy'],
    description: 'TBC',
    duration: dayjs.duration({ minutes: 30 })
  },
  {
    datetime: dayjs.utc('2020-09-26|18:00:00', timeFormat),
    speakers: [getSpeakerByName('TBC')],
    title: 'TBC',
    group: groups['real-world-deployments-1'],
    description: 'TBC',
    duration: dayjs.duration({ minutes: 15 })
  },
  {
    datetime: dayjs.utc('2020-09-26|18:15:00', timeFormat),
    speakers: [getSpeakerByName('Kartik Chopra')],
    title: 'Secure AI for National Security',
    group: groups['real-world-deployments-1'],
    description:
      'The goal for this presentation will be to increase awareness of the audience and research community on the viability of secure machine learning for national security purposes. The speaker shares deployment strategies of ML models that prevent adversarial attacks from the most challenging nation state actors, and how to preserve the privacy of underlying data during the model development phase. Specifically, the speaker discusses use cases, mission criteria, and teams (what type of engineers, managers and leaders) that are required to tackle these issues for the front line of countries. The speaker also suggests open source frameworks, libraries and technologies that have been leveraged in these environments to really safeguard the models, as well as promoting the work of OpenMined to show how you are democratizing these methods for data scientists in entrenched industries.',
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
    speakers: [getSpeakerByName('TBC')],
    title: 'TBC',
    group: groups['real-world-deployments-1'],
    description: 'TBC',
    duration: dayjs.duration({ minutes: 15 })
  },
  {
    datetime: dayjs.utc('2020-09-26|19:00:00', timeFormat),
    speakers: [getSpeakerByName('Nathan Benaich')],
    title: 'TBC',
    group: groups['investing'],
    description: 'TBC',
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
    speakers: [getSpeakerByName('Sachin Deshpande')],
    title: 'TBC',
    group: groups['investing'],
    description: 'TBC',
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
      'Shame on All of Us: How Technologists, Privacy Advocates, Government and Business Failed the Public for COVID Contact-tracing — and Better Not Fail Again',
    group: groups['closing-session-1'],
    description: 'TBC',
    duration: dayjs.duration({ minutes: 15 })
  },

  // SUNDAY
  {
    datetime: dayjs.utc('2020-09-27|14:00:00', timeFormat),
    speakers: [getSpeakerByName('Amber Trask')],
    title: 'Where Do You Fit Within Our Community?',
    group: groups['teams'],
    description: 'TBC',
    duration: dayjs.duration({ minutes: 120 })
  },
  {
    datetime: dayjs.utc('2020-09-27|16:00:00', timeFormat),
    speakers: [getSpeakerByName('TBC')],
    title: 'Keynote',
    group: groups['keynote-2'],
    description: 'TBC',
    duration: dayjs.duration({ minutes: 60 })
  },
  {
    datetime: dayjs.utc('2020-09-27|17:00:00', timeFormat),
    speakers: [getSpeakerByName('Miguel Guevara')],
    title: 'Building Differential Privacy at Scale',
    group: groups['in-the-research-lab-2'],
    description: 'Differential Privacy has long been recognized as a golden standard in privacy. While the theory has existed for years, it was only recently that it started gaining ground in industry applications. Google first used DP in its Chrome browser. More recently, Google started developing strong primitives for DP. Similar to cryptography, there are many ways in which DP can go wrong. This talk will give an overview of the years-long journey that Google engineers embarked on to develop DP infrastructure at scale.',
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
    title: 'TBC',
    group: groups['in-the-research-lab-2'],
    description: 'TBC',
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
    description: 'In this talk, the speaker briefly describes Falcon, a new multi-party computation based framework for privacy-preserving machine learning. The talk outlines the key contributions of Falcon before showcasing some of the important results of the work.',
    duration: dayjs.duration({ minutes: 10 })
  },
  {
    datetime: dayjs.utc('2020-09-27|18:30:00', timeFormat),
    speakers: [getSpeakerByName('Mayank Varia')],
    title: 'TBC',
    group: groups['research-lightning-2'],
    description: 'TBC',
    duration: dayjs.duration({ minutes: 10 })
  },
  {
    datetime: dayjs.utc('2020-09-27|18:40:00', timeFormat),
    speakers: [getSpeakerByName('TBC')],
    title: 'TBC',
    group: groups['research-lightning-2'],
    description: 'TBC',
    duration: dayjs.duration({ minutes: 10 })
  },
  {
    datetime: dayjs.utc('2020-09-27|18:50:00', timeFormat),
    speakers: [getSpeakerByName('TBC')],
    title: 'TBC',
    group: groups['research-lightning-2'],
    description: 'TBC',
    duration: dayjs.duration({ minutes: 10 })
  },
  {
    datetime: dayjs.utc('2020-09-27|19:00:00', timeFormat),
    speakers: [getSpeakerByName('Alan Aboudib')],
    title: 'SyferText 0.1.0: Privacy-preserving NLP over PyGrid',
    group: groups['tutorials'],
    description:
      'This tutorial session presents SyferText 0.1.0 - its vision, with hands-on examples on how to create a pipeline (including pre-processing component + PySyft model), deploy it to PyGrid, load it, and use it.',
    duration: dayjs.duration({ minutes: 60 })
  },
  {
    datetime: dayjs.utc('2020-09-27|19:00:00', timeFormat),
    speakers: [getSpeakerByName('Varun Khare')],
    title: 'How to Build a Federated Learning Android App',
    group: groups['tutorials'],
    description: 'TBC',
    duration: dayjs.duration({ minutes: 60 })
  },
  {
    datetime: dayjs.utc('2020-09-27|19:00:00', timeFormat),
    speakers: [getSpeakerByName('Vova Manannikov')],
    title: 'How to Build a Federated Learning Website',
    group: groups['tutorials'],
    description: 'TBC',
    duration: dayjs.duration({ minutes: 60 })
  },
  {
    datetime: dayjs.utc('2020-09-27|19:00:00', timeFormat),
    speakers: [getSpeakerByName('Nick Rose'), getSpeakerByName('Andrew Trask')],
    title: 'Duet Demo - How to Do Data Science on Data Owned by a Different Organization',
    group: groups['tutorials'],
    description: 'TBC',
    duration: dayjs.duration({ minutes: 60 })
  },
  {
    datetime: dayjs.utc('2020-09-27|19:00:00', timeFormat),
    speakers: [getSpeakerByName('Eric Verner')],
    title: 'COINSTAC',
    group: groups['tutorials'],
    description: 'TBC',
    duration: dayjs.duration({ minutes: 60 })
  },
  {
    datetime: dayjs.utc('2020-09-27|19:00:00', timeFormat),
    speakers: [getSpeakerByName('Robin Rohm'), getSpeakerByName('Pavlos Papaduopoulos')],
    title: 'Apheris AI Vertical Federated Learning with PySyft and PyVertical',
    group: groups['tutorials'],
    description: 'TBC',
    duration: dayjs.duration({ minutes: 60 })
  },
  {
    datetime: dayjs.utc('2020-09-27|19:00:00', timeFormat),
    speakers: [getSpeakerByName('Adam Hall')],
    title: 'OpenMined Security and Identity Demo',
    group: groups['tutorials'],
    description: 'TBC',
    duration: dayjs.duration({ minutes: 60 })
  },
  {
    datetime: dayjs.utc('2020-09-27|19:00:00', timeFormat),
    speakers: [getSpeakerByName('Georgios Kaissis')],
    title: 'PriMIA demo',
    group: groups['tutorials'],
    description: 'TBC',
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
    speakers: [getSpeakerByName('TBC')],
    title: 'TBC',
    group: groups['real-world-deployments-2'],
    description: 'TBC',
    duration: dayjs.duration({ minutes: 15 })
  },
  {
    datetime: dayjs.utc('2020-09-27|20:30:00', timeFormat),
    speakers: [getSpeakerByName('TBC')],
    title: 'TBC',
    group: groups['real-world-deployments-2'],
    description: 'TBC',
    duration: dayjs.duration({ minutes: 15 })
  },
  {
    datetime: dayjs.utc('2020-09-27|20:45:00', timeFormat),
    speakers: [getSpeakerByName('TBC')],
    title: 'TBC',
    group: groups['real-world-deployments-2'],
    description: 'TBC',
    duration: dayjs.duration({ minutes: 15 })
  },
  {
    datetime: dayjs.utc('2020-09-27|21:00:00', timeFormat),
    speakers: [getSpeakerByName('Andrew Trask')],
    title: 'Closing ceremony',
    group: groups['closing-session-2'],
    description: 'TBC',
    duration: dayjs.duration({ minutes: 5 })
  }
];

export const agenda = groupSchedule(schedule);
