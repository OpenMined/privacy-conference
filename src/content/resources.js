export const title = 'Resources';
export const description = 'Links and resources referenced during talks and tutorials';

export const resources = [
  {
    title: 'Tutorial breakout sessions (Links will be live from 7pm - 8pm UTC on Sunday September 27th)',
    talks: [
      {
        title: 'SyferText 0.1.0: Privacy-preserving NLP over PyGrid',
        description: 'This tutorial session presents SyferText 0.1.0 - its vision, with hands-on examples on how to create a pipeline (including pre-processing component + PySyft model), deploy it to PyGrid, load it, and use it.',
        links: [
          {
            title: 'Go to the live tutorial',
            link: 'https://us02web.zoom.us/j/84665866671'
          },
        ]
      },
      {
        title: 'Duet Demo - How to Do Data Science on Data Owned by a Different Organization',
        description: '',
        links: [
          {
            title: 'Go to the live tutorial',
            link: 'https://zoom.us/j/98559827753'
          },
        ]
      },
      {
        title: 'Deploying Federated Learning on Android with KotlinSyft',
        description: 'In this interactive session, the speakers will perform a code walkthrough of the mobile federated learning ecosystem developed at OpenMined that is PySyft, PyGrid and KotlinSyft.The talk will start with creating neural networks in PySyft and deploying them on PyGrid with JSON Web Token authentication. The speakers show how to build an android application to train the hosted model on privately held data using KotlinSyft. Diving deeper, the talk will go through the various features of KotlinSyft like change detection, wifi detection and RX support. The session will end with the new features that are in progress and will soon be added to KotlinSyft like peer to peer SMPC protocols.',
        links: [
          {
            title: 'Go to the live tutorial',
            link: 'https://us02web.zoom.us/j/86168750865'
          },
        ]
      },
      {
        title: 'COINSTAC: A Decentralized, Differentially Private Application for Neuroimaging',
        description: 'Data sharing is beneficial for science in that it enables researchers to find smaller effects and create more generalized machine learning models. However, data sharing is in some cases difficult or outright impossible because of barriers such as privacy laws, negotiating data usage agreements, infrastructure limitations, or lack of trust. The Collaborative Informatics and Neuroimaging Suite Toolkit for Anonymous Computation (COINSTAC) solves these problems by offering a platform for decentralized and differentially private analyses for neuroimaging researchers. Developed since 2015 by the Joint GSU, Georgia Tech, and Emory Center for Translational Research in Neuroimaging and Data Science (TReNDS) in Atlanta, GA, COINSTAC is a free and open source application in which algorithm developers have implemented various forms of linear regression, classification, and visualization to suit a variety of neuroimaging modalities. COINSTAC enables decentralized regression as well as advanced multivariate and machine learning tools and also enhanced privacy preservation tools such as differential privacy. COINSTAC is an Electron application written in JavaScript that utilizes Docker containers to encapsulate complex neuroimaging and machine learning pipelines. This tutorial will provide an overview of COINSTAC and show a demonstration of a COINSTAC computation.',
        links: [
          {
            title: 'Go to the live tutorial',
            link: 'https://us02web.zoom.us/j/89250032365'
          },
          {
            title: 'Tutorial slides',
            link: 'https://doi.org/10.5281/zenodo.4053026'
          },
        ]
      },
      {
        title: 'Privacy Preserving Vertically Distributed Machine Learning (Apheris)',
        description: 'The speakers present PyVertical - a system to train machine learning models on vertically distributed data. In a first step, vertically distributed data is linked without exposing membership using Private Set Intersection. Then a Split Neural Network is trained such that privacy is preserved throughout the entire process',
        links: [
          {
            title: 'Go to the live tutorial',
            link: 'https://us02web.zoom.us/j/86762433956'
          },
          {
            title: 'Tutorial Notebook',
            link: 'https://github.com/OpenMined/PyVertical/blob/master/examples/PyVertical%20Example.ipynb'
          },

        ]
      },
      {
        title: 'Introduction to TFHE and Some Applications (Inpher)',
        description: 'Homomorphic encryption is a privacy preserving technique allowing a single public cloud to operate on secret data without leaking anything on the data. In this presentation, the speakers recall the capabilities of homomorphic encryption, and its security model. Then they detail the TFHE library, whose API supports efficiently various plaintext computation models, like arbitrary boolean circuits, arithmetic circuits with discrete and continuous logic, and other computational models like deterministic automata or lookup tables. They first demonstrate a few tutorial examples. In the second part of this talk the speakers describe two applications for private genomic studies: private GWAS and private genome imputation (which won the 1st place at Idash 2019), where methods for secure computation have shown significant performance improvements over the last several years, and in particular fully homomorphic encryption becomes a critical path technology for innovative, life-saving research to positively and equally impact the global population.',
        links: [
          {
            title: 'Go to the live tutorial',
            link: 'https://us02web.zoom.us/j/83521611553'
          },
        ]
      },
      {
        title: 'Opus and PryVote: The Brave New World of Self Sovereign Identity (SSI)',
        description: 'This session will demonstrate our new SSI standard development kit. The speakers will discuss the need for decentralised identity and trust, the technologies involved and two flagship SSI applications; Opus and PryVote.',
        links: [
          {
            title: 'Go to the live tutorial',
            link: 'https://us02web.zoom.us/j/85933285403'
          },
        ]
      },
      {
        title: 'Privacy-preserving Medical Imaging Analysis with OpenMined PriMIA. A sneak peek at features and concepts',
        description: 'This session will provide a first look at the design and features of PriMIA, a library for privacy-preserving deep learning for medical imaging, jointly developed by the Technical University of Munich, Imperial College London and OpenMined. A brief introduction to the project will be given (ca. 10 minutes), after which participants will be given insight into how PriMIA performs federated learning and encrypted inference, as well as be introduced to the challenges of medical image analysis in a real-life environment using actual medical images and the Jupyter Notebook environment. (ca. 20 minutes). Lastly, opportunity will be provided for dicussion and participant questions (ca. 15 minutes).',
        links: [
          {
            title: 'Go to the live tutorial',
            link: 'https://us02web.zoom.us/j/87644502325'
          },
        ]
      },
      {
        title: 'TensorFlow Federated (pre-recorded)',
        description: 'In this tutorial you will learn how you can use TensorFlow Federated, an open-source framework for machine learning and other computations on decentralized data, to explore federated learning. You will walk through several classic machine learning problems while learning about the unique advantages and challenges of the federated setting. You will also see examples of how TFF can be used to enable new research. After this tutorial, you will be equipped to further experiment with federated learning on your own.',
        links: [
          {
            title: 'Go to the pre-recorded session',
            link: 'https://www.youtube.com/watch?v=_EWiCRSdDr0'
          },
          {
            title: 'Tutorial Notebook',
            link: 'https://github.com/tensorflow/federated/blob/master/docs/openmined2020/openmined_conference_2020.ipynb'
          },
        ]
      },
      {
        title: 'Differentially Private Model Training With Opacus',
        description: 'In this session, the speaker will go over the DP-SGD technique to train differentially private models and will then show how to train your own private model using Opacus, a PyTorch lib for fast and accessible DP-SGD training.',
        links: [
          {
            title: 'Go to the live tutorial',
            link: 'https://zoom.us/j/98598605607'
          },
        ]
      },
      {
        title: 'Differential Privacy Using PyDP',
        description: 'This tutorial aims to provide a brief overview of differential privacy. Further, it will cover the new PyDP vision as well as applying differential privacy using PyDP.',
        links: [
          {
            title: 'Go to the live tutorial',
            link: 'https://us02web.zoom.us/j/82885504399'
          },
          {
            title: 'Tutorial slides and notebook',
            link: 'https://github.com/chinmayshah99/pricon20/tree/master'
          }
        ]
      }
    ]
  }
];
