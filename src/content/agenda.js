import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { getSpeakerByName } from './speakers';

dayjs.extend(utc);

// NOTE: Could do this recursively and be a lot more efficient... but... YOLO
const groupSchedule = (schedule) => {
  const agenda = [];

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

// TODO: Dates
export const title = 'Agenda';
const timeFormat = 'YYYY-MM-DD|HH:mm:ss';
export const schedule = [
  // SATURDAY
  {
    datetime: dayjs.utc('2020-09-26|14:30:00', timeFormat),
    speakers: [getSpeakerByName('Laurens van der Maaten'), getSpeakerByName('Awni Hannun')],
    title: 'The Trade-Offs of Private Prediction',
    description:
      'This talk presents recent empirical results on the performance trade-offs of differentially private prediction techniques.'
  },
  {
    datetime: dayjs.utc('2020-09-26|15:00:00', timeFormat),
    speakers: [getSpeakerByName('Borja Balle')],
    title: 'Towards Federated Learning with Assumption-Free Differential Privacy Guarantees',
    description:
      'Combining differential privacy and federated learning enables training ML models with on-device data while providing formal privacy guarantees for all users contributing data to the final model. In this talk the speaker will: (1) Discuss some important limitations that arise when trying to translate the strong privacy guarantees of DP-SGD obtained via subsampling/shuffling in the central model to the federated scenario; (2) Propose privacy accounting techniques tailored to federated learning based on replacements of privacy amplification by subsampling/shuffling which only leverage client-side randomness. The talk will focus on the high-level picture and will not assume familiarity with the mathematical analysis of DP-SGD. This talk is based on joint work with P. Kairouz, H. B. McMahan, O. Thakkar, and A. Thakurta.'
  },
  {
    datetime: dayjs.utc('2020-09-26|15:15:00', timeFormat),
    speakers: [getSpeakerByName('Nicolas Papernot')],
    title: 'Tempered Sigmoid Activations for Deep Learning with Differential Privacy',
    description:
      'Because learning sometimes involves sensitive data, machine learning algorithms have been extended to offer privacy for training data. In practice, this has been mostly an afterthought, with privacy-preserving models obtained by re-running training with a different optimizer, but using the model architectures that already performed well in a non-privacy-preserving setting. This approach leads to less than ideal privacy/utility tradeoffs, as the speaker shows in this talk. Instead, the speaker propose that model architectures are chosen ab initio explicitly for privacy-preserving training. To provide guarantees under the gold standard of differential privacy, one must bound as strictly as possible how individual training points can possibly affect model updates. In this work, the speaker observes that the choice of activation function is central to bounding the sensitivity of privacy-preserving deep learning. The speaker demonstrates analytically and experimentally how a general family of bounded activation functions, the tempered sigmoids, consistently outperform unbounded activation functions like ReLU. Using this paradigm, we achieve new state-of-the-art accuracy on MNIST, FashionMNIST, and CIFAR10 without any modification of the learning procedure fundamentals or differential privacy analysis.'
  },
  {
    datetime: dayjs.utc('2020-09-26|18:15:00', timeFormat),
    speakers: [getSpeakerByName('Kartik Chopra')],
    title: 'Secure AI for National Security',
    description:
      'The goal for this presentation will be to increase awareness of the audience and research community on the viability of secure machine learning for national security purposes. The speaker shares deployment strategies of ML models that prevent adversarial attacks from the most challenging nation state actors, and how to preserve the privacy of underlying data during the model development phase. Specifically, the speaker discusses use cases, mission criteria, and teams (what type of engineers, managers and leaders) that are required to tackle these issues for the front line of countries. The speaker also suggests open source frameworks, libraries and technologies that have been leveraged in these environments to really safeguard the models, as well as promoting the work of OpenMined to show how you are democratizing these methods for data scientists in entrenched industries.'
  },
  {
    datetime: dayjs.utc('2020-09-26|18:30:00', timeFormat),
    speakers: [getSpeakerByName('Georgios Kaissis')],
    title:
      'End-to-end Privacy Preserving Deep Learning on Multi-institutional Medical Imaging Data',
    description:
      'This talk describes the process of creating a library enabling PPML on medical imaging from experimentation to deployment. The speaker shows how CLI tools integrating the state of the art from PySyft, PyGrid and CrypTen, alongside technical developments from his work (decentralised hyperparameter tuning, federated averaging, secure aggregation, privacy-enhancing decentralised data augmentation, catastrophic forgetting prevention etc.) for federated learning and the provision of encrypted inference as a service on medical images. The talk concludes with a large-scale real-world case study with multi-institutional medical imaging data to test and validate the results.'
  },
  {
    datetime: dayjs.utc('2020-09-26|19:20:00', timeFormat),
    speakers: [
      getSpeakerByName('Austin Arensberg'),
      getSpeakerByName('Jackson Cummings'),
      getSpeakerByName('Morgan Mahlock')
    ],
    title: 'Why VCs are Interested in Privacy Investing Now',
    description:
      'This talk poses the question "Can VCs make money in privacy startups?" Increasingly the answer is yes - but entirely new business models need to be examined. This talk details how the tide has changed and how privacy is now a hot new area of investing.'
  },
  {
    datetime: dayjs.utc('2020-09-26|20:00:00', timeFormat),
    speakers: [getSpeakerByName('Fatemehsadat Mireshghallah')],
    title: 'Privacy-preserving Natural Language Processing',
    description:
      'The work presented explains the differences between correlated and correlated data, and the challenges that exist in protecting correlated data, which is normally in the format of sequences, and how differential privacy cannot always be used there. This talk introduces some papers in this topic, such as papers that introduce privacy preserving mechanisms for sensor data and location. The talk will conclude with a short introduction to pufferfish framework, which is normally used for correlated data.'
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
    description:
      'This talk presents an entire architecture & pipeline on how to use differential privacy & federated learning for machine learning prediction on medical data, with a focus on deep neural networks'
  },
  {
    datetime: dayjs.utc('2020-09-26|20:20:00', timeFormat),
    speakers: [getSpeakerByName('Madeleine Shang')],
    title: 'AI Powered UX with OpenMined',
    description:
      "The talk demonstrates how a website can learn to optimize its own UI based on static federated learning. This is acheived using syft.js, pygrid and the python worker. This work shows how to perform a simple version of reinforcement learning in browser that learns from user interactions and will gradually show the UIs / options that the users prefer."
  },
  {
    datetime: dayjs.utc('2020-09-26|20:30:00', timeFormat),
    speakers: [getSpeakerByName('Suha Sabi Hussain')],
    title: 'PrivacyRaven: Comprehensive Privacy Testing for Deep Learning',
    description:
      'Deep learning systems, particularly neural networks, have proliferated in a wide range of applications, including privacy-sensitive use cases such as facial recognition and medical diagnoses. However, these models are vulnerable to privacy attacks that target both the intellectual property of the model and the confidentiality of the training data. Recent literature has seen an arms race between privacy attacks and defenses on various systems. And until now, engineers and researchers have not had the privacy analysis tools they need to rival this trend. Hence, this talk presents PrivacyRaven: a comprehensive, practical privacy testing suite for deep learning systems optimized for usability and efficiency. In this talk, the speaker discusses how users can determine the susceptibility of a model to privacy attacks; systematically evaluate different privacy preserving machine learning techniques; develop novel privacy metrics and attacks; and repurpose attacks for data provenance and other use cases. This talk also demonstrates how model extraction, membership inference, model inversion, and other privacy attacks and metric calculations can be quickly prototyped and launched in PrivacyRaven, which leverages a modular design to facilitate flexible experimentation.'
  },
  {
    datetime: dayjs.utc('2020-09-26|20:40:00', timeFormat),
    speakers: [getSpeakerByName('Daniel Escudero')],
    title: 'Primal: A Framework for Secure Evaluation of Neural Networks',
    description:
      'In this talk, Primal is presented,  a lightweight Python framework for PRIvate MAchine Learning that enables secure evaluation and experimentation of a wide variety of Neural Networks in an efficient and usable way. Primal is written with extensibility and flexibility in mind. The goal of this framework is to provide practitioners and researchers with the ability of experimenting with a wide variety of neural networks and MPC protocols, easily performing changes and analyzing their effects in both accuracy and performance. Primal allows loading a vast amount of network types, which can be then later modified to explore different accuracy-performance tradeoffs. Furthermore, different MPC protocols can be easily implemented, which allows researchers to determine the best MPC protocol for a particular use-case. Additionally, Primal, in spite of being written completely in Python and using only lightweight dependencies such as numpy, achieves considerable efficiency thanks to a simple yet powerful modular design and a careful implementation of both its computation and communication components. This talk discusses what is currently implemented in Primal, its architectural design, and a set of examples of its capabilities, including plain secure inference of pre-trained models, experimentation with different truncation protocols, and debugging useful information on runtime.'
  },
  {
    datetime: dayjs.utc('2020-09-26|20:50:00', timeFormat),
    speakers: [getSpeakerByName('Sasi Kumar Murakonda')],
    title: 'ML Privacy Meter: Aiding Regulatory Compliance by Quantifying the Privacy Risks of Machine Learning',
    description:
      "When building machine learning models using sensitive data, organizations should ensure that the data processed in such systems is adequately protected. For projects involving machine learning on personal data, Article 35 of the GDPR mandates it to perform a Data Protection Impact Assessment (DPIA). In addition to the threats of illegitimate access to data through security breaches, machine learning models pose an additional privacy risk to the data by indirectly revealing about it through the model predictions and parameters. Guidances released by the Information Commissioner's Office (UK) and the National Institute of Standards and Technology (US) emphasize on the threat to data from models and recommend organizations to account for and estimate these risks to comply with data protection regulations. Hence, there is an immediate need for a tool that can quantify the privacy risk to data from models.  The speaker presents ML Privacy Meter, a tool that can quantify the privacy risk to data from models through state of the art membership inference attack techniques. This talk will discuss how this tool can help practitioners in compliance with data protection regulations, when deploying machine learning models."
  },

  // SUNDAY
  {
    datetime: dayjs.utc('2020-09-27|17:15:00', timeFormat),
    speakers: [getSpeakerByName('Krzysztof Ostrowski')],
    title: 'TensorFlow Federated',
    description:
      'This talk presents TensorFlow Federated (TFF), an OSS platform for computations on decentralized data, and discusses its relationship to the OpenMined ecosystem.'
  },
  {
    datetime: dayjs.utc('2020-09-27|17:45:00', timeFormat),
    speakers: [getSpeakerByName('M Sadegh Riazi')],
    title: 'From Homomorphic Encryption to Silicon',
    description:
      'In this presentation, the speaker will be talking about about a new computing architecture for homomorphic encryption, called HEAX. HEAX outperforms all modern CPUs and datacenter GPUs by up to two-orders-of-magnitude. The proof-of-concept of this architecture is implemented on Microsoft Azure using Field Programmable Gate Arrays (FPGAs).'
  },
  {
    datetime: dayjs.utc('2020-09-27|18:00:00', timeFormat),
    speakers: [getSpeakerByName('Pranav Subramani')],
    title: 'Superfast Differential Privacy',
    description:
      'Machine learning has seen a tremendous amount of improvement in recent years, primarily attributable to the ongoing success of deep neural networks. In the age of big data and powerful learning algorithms, privacy is of paramount importance to prevent the leakage of information. Differential privacy is one such approach, however it suffers from the drawback of being slow on most modern architectures. The work in this talk proposes an approach to this by combining differential privacy with existing software frameworks that yield massive speedups in the domain of differential privacy. The primary algorithm focused on is Differentially Private Stochastic Gradient Descent (DPSGD) since it is the most commonly used optimization technique for deep neural networks. Furthermore, the work describes a thorough set of experiments ranging from vision to text and elucidate the drastic improvements in the speed. The speaker hopes that the evaluation allows for a wider adoption of privacy-preserving machine learning techniques and takes a step towards practical differential privacy. This talk is based on joint work with Gautam Kamath.'
  },
  {
    datetime: dayjs.utc('2020-09-27|19:00:00', timeFormat),
    speakers: [getSpeakerByName('Alan Aboudib')],
    title: 'TUTORIAL: SyferText 0.1.0: Privacy-preserving NLP over PyGrid',
    description:
      'This tutorial session presents SyferText 0.1.0 - its vision, with hands-on examples on how to create a pipeline (including pre-processing component + PySyft model), deploy it to PyGrid, load it, and use it.'
  }
];

export const agenda = groupSchedule(schedule);
