import { Cause } from "../interfaces/cause";

export const CAUSES: Cause[] = [
    {
        id: "genetique",
    nom: "Prédisposition génétique (BRCA1/2)",
    image: "https://images.unsplash.com/photo-1580294644034-1b6a5c2a3b86",
    description: "Mutations héréditaires augmentant le risque de cancer du sein.",
    preventions: ["Conseil génétique", "Surveillance accrue", "Mode de vie sain"]
    },
    {
    id: "alcool",
    nom: "Consommation d’alcool",
    image: "https://images.unsplash.com/photo-1532635225-6f3cb05f57c7",
    description: "L’alcool augmente le risque de cancer du sein.",
    preventions: ["Limiter l’alcool", "Faire du sport", "Alimentation équilibrée"]
  }];