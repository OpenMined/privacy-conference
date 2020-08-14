import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { getSpeakerByName } from './speakers';

dayjs.extend(utc);

// NOTE: Could do this recursively and be a lot more efficient... but... YOLO
const groupSchedule = (schedule) => {
  const agenda = [];

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
  {
    datetime: dayjs.utc('2020-09-26|08:00:00', timeFormat),
    speaker: getSpeakerByName('Austin Arensberg'),
    title: 'Why VCs are interested in privacy investing now',
    description:
      'Can VCs make money in privacy startups? Increasingly the answer is yes - but entirely new business models need to be examined. The tide has changed and now privacy is a hot new area of investing.'
  },
  {
    datetime: dayjs.utc('2020-09-26|12:00:00', timeFormat),
    speaker: getSpeakerByName('Jackson Cummings'),
    title: 'Why VCs are interested in privacy investing now',
    description:
      'Can VCs make money in privacy startups? Increasingly the answer is yes - but entirely new business models need to be examined. The tide has changed and now privacy is a hot new area of investing.'
  },
  {
    datetime: dayjs.utc('2020-09-26|18:00:00', timeFormat),
    speaker: getSpeakerByName('Morgan Mahlock'),
    title: 'Why VCs are interested in privacy investing now',
    description:
      'Can VCs make money in privacy startups? Increasingly the answer is yes - but entirely new business models need to be examined. The tide has changed and now privacy is a hot new area of investing.'
  },
  {
    datetime: dayjs.utc('2020-09-27|08:00:00', timeFormat),
    speaker: getSpeakerByName('Laurens van der Maaten'),
    title: 'The Trade-Offs of Private Prediction',
    description:
      'The talk gives an overview of our recent empirical of the performance trade-offs of differentially private prediction techniques.'
  },
  {
    datetime: dayjs.utc('2020-09-28|08:00:00', timeFormat),
    speaker: getSpeakerByName('Fatemehsadat Mireshghallah'),
    title: 'Privacy for Correlated Data',
    description:
      'In this talk I will explain the differences between correlated and correlated data, and the challenges that exist in protecting correlated data, which is normally in the format of sequences, and how differential privacy cannot always be used there. I will then introduce some papers in this topic, like papers that introduce privacy preserving mechanisms for sensor data and location. I will also give a short introduction to pufferfish framework, which is normally used for correlated data. '
  },
  {
    datetime: dayjs.utc('2020-09-28|18:00:00', timeFormat),
    speaker: getSpeakerByName('Daniel Escudero'),
    title: 'Primal: A Framework for Secure Evaluation of Neural Networks',
    description:
      'We present Primal, a lightweight Python framework for PRIvate MAchine Learning that enables secure evaluation and experimentation of a wide variety of Neural Networks in an efficient and usable way. Primal is written with extensibility and flexibility in mind. The goal of this framework is to provide practicioners and researchers with the ability of experimenting with a wide variety of neural networks and MPC protocols, easily performing changes and analyzing their effects in both accuracy and performance. Primal allows loading a vast amount of network types, which can be then later modified to explore different accuracy-performance tradeoffs. Furthermore, different MPC protocols can be easily implemented, which allows researchers to determine the best MPC protocol for a particular use-case. Additionally, Primal, in spite of being written completely in Python and using only lightweight dependencies such as numpy, achieves considerable efficiency thanks to a simple yet powerful modular design and a careful implementation of both its computation and communication components. In our talk, we will discuss what is currently implemented in Primal, its architectural design, and a set of examples of its capabilities, including plain secure inference of pre-trained models, experimentation with different truncation protocols, and debugging useful information on runtime.'
  },
  {
    datetime: dayjs.utc('2020-09-28|18:00:00', timeFormat),
    speaker: getSpeakerByName('Kritika Prakash'),
    title:
      'Private Deep Learning of Medical Data for Hospitals using Federated Learning + Differential Privacy',
    description:
      'Presenting an entire architecture + pipeline on how to use DP & FL for Machine Learning Prediction for medical data, with focus on Deep Neural Networks.'
  },
  {
    datetime: dayjs.utc('2020-09-28|18:00:00', timeFormat),
    speaker: getSpeakerByName('Alan Aboudib'),
    title: 'SyferText 0.1.0: Privacy-preserving NLP over PyGrid',
    description:
      'In This talk, I will present SyferText 0.1.0, its vision, with hands-on examples on how to create a pipeline (including pre-processing component + PySyft model), deploy it to PyGrid, Load it, Use it.'
  },
  {
    datetime: dayjs.utc('2020-09-28|18:00:00', timeFormat),
    speaker: getSpeakerByName('Suha Sabi Hussain'),
    title: 'PrivacyRaven: Comprehensive Privacy Testing for Deep Learning',
    description:
      'Deep learning systems, particularly neural networks, have proliferated in a wide range of applications, including privacy-sensitive use cases such as facial recognition and medical diagnoses. However, these models are vulnerable to privacy attacks that target both the intellectual property of the model and the confidentiality of the training data. Recent literature has seen an arms race between privacy attacks and defenses on various systems. And until now, engineers and researchers have not had the privacy analysis tools they need to rival this trend. Hence, we present PrivacyRaven: a comprehensive, practical privacy testing suite for deep learning systems optimized for usability and efficiency. In this talk, we’ll discuss how users can determine the susceptibility of a model to privacy attacks; systematically evaluate different privacy preserving machine learning techniques; develop novel privacy metrics and attacks; and repurpose attacks for data provenance and other use cases. We’ll also demonstrate how model extraction, membership inference, model inversion, and other privacy attacks and metric calculations can be quickly prototyped and launched in PrivacyRaven, which leverages a modular design to facilitate flexible experimentation.'
  }
];

export const agenda = groupSchedule(schedule);
