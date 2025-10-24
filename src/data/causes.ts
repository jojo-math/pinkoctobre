import { Cause } from "../interfaces/cause";

export const CAUSES: Cause[] = [
  {
    id: "genetique",
    nom: "Prédisposition génétique (BRCA1/2)",
    image: require("@/assets/images/BRCA12.png"),
    description:
      "Les mutations des gènes BRCA1 et BRCA2 augmentent significativement le risque de cancer du sein et de l’ovaire.",
    dateDecouverte: "1994-1995",
    preventions: [
      "Conseil génétique et dépistage ciblé",
      "Surveillance médicale accrue",
      "Adoption d’un mode de vie sain",
    ],
  },
  {
    id: "alcool",
    nom: "Consommation d’alcool",
    image: require("@/assets/images/man-69287_640.jpg"),
    description:
      "L’alcool accroît les niveaux d’œstrogènes et d’autres hormones associées au cancer du sein.",
    dateDecouverte: "XXe siècle",
    preventions: [
      "Limiter la consommation d’alcool",
      "Équilibrer son alimentation",
      "Boire beaucoup d’eau et pratiquer une activité physique",
    ],
  },
  {
    id: "hormonaux",
    nom: "Facteurs hormonaux",
    image: require("@/assets/images/influencer-5229646_640.jpg"),
    description:
      "Une exposition prolongée aux hormones œstrogènes et progestérones peut stimuler la croissance de cellules cancéreuses.",
    preventions: [
      "Suivi médical pour tout traitement hormonal",
      "Allaitement conseillé",
      "Activité physique régulière",
    ],
  },
  {
    id: "sedentarite",
    nom: "Sédentarité",
    image: require("@/assets/images/soldier-2676559_640.png"),
    description:
      "Le manque d’activité physique favorise la prise de poids et les déséquilibres hormonaux.",
    preventions: [
      "Faire au moins 30 min d’exercice quotidien",
      "Réduire le temps passé assis",
      "Privilégier la marche et le vélo",
    ],
  },
  {
    id: "obesite",
    nom: "Surpoids et obésité",
    image: require("@/assets/images/obesity-3114559_640.png"),
    description:
      "L’excès de tissu adipeux augmente la production d’œstrogènes, favorisant le développement tumoral après la ménopause.",
    preventions: [
      "Contrôler son poids par une alimentation équilibrée",
      "Pratiquer une activité physique régulière",
    ],
  },
  {
    id: "age",
    nom: "Âge avancé",
    image: require("@/assets/images/elderly-man-8533488_640.png"),
    description:
      "Le risque de cancer du sein augmente avec l’âge, particulièrement après 50 ans.",
    preventions: [
      "Dépistage régulier dès 40 ans",
      "Suivi médical annuel",
    ],
  },
  {
    id: "menarche-precoce",
    nom: "Premières règles précoces",
    image: require("@/assets/images/sanitary-9558672_640.png"),
    description:
      "Une puberté précoce entraîne une exposition plus longue aux hormones féminines.",
    preventions: [
      "Encourager un mode de vie sain dès l’enfance",
      "Limiter l’obésité infantile",
    ],
  },
  {
    id: "menopause-tardive",
    nom: "Ménopause tardive",
    image: require("@/assets/images/25265317_7036030.jpg"),
    description:
      "La prolongation de l’exposition hormonale naturelle augmente le risque de tumeur hormonodépendante.",
    preventions: [
      "Suivi médical périodique après 45 ans",
      "Dépistage par mammographie",
    ],
  },
  {
    id: "irradiation",
    nom: "Exposition aux radiations",
    image: require("@/assets/images/2148777438.jpg"),
    description:
      "Les radiations ionisantes endommagent l’ADN et favorisent les mutations cellulaires.",
    preventions: [
      "Limiter les expositions médicales inutiles",
      "Éviter les zones à forte radiation",
    ],
  },
  {
    id: "tabac",
    nom: "Tabagisme actif ou passif",
    image: require("@/assets/images/1930.jpg"),
    description:
      "Les toxines du tabac créent des mutations dans les cellules mammaires, augmentant le risque de cancer.",
    preventions: [
      "Arrêt complet du tabac",
      "Éviter les environnements enfumés",
    ],
  }
];
