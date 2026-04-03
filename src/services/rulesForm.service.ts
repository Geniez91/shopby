export const emailRule = [
  (v: string) => !!v || "L'email est requis",
  (v: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || 'Email invalide'
]

export const phoneRule = [
  (v: string) => !!v || 'Le numéro de téléphone est requis',
  (v: string) => {
    const cleaned = v.replace(/\s/g, '')
    return /^0[1-9]\d{8}$/.test(cleaned) || 'Numéro français invalide'
  }
]

export const textRule = [
  (v: string) => !!v || 'Ce champ est requis',
  (v: string) =>
  /^[a-zA-ZÀ-ÿ\s-]+$/.test(v) || 'Pas de chiffres autorisés'
]

export const passwordRule = [
  (v: string) => !!v || 'Le mot de passe est requis',
  (v: string) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(v) ||
    'Minimum 8 caractères, avec majuscule, minuscule et chiffre'
]
export const requiredRule = [
  (v: string) => !!v || 'Ce champ est requis'
]

export const numberRule = [
  (v: string) => !!v || 'Champ requis',
  (v: string) => /^[0-9]$/.test(v) || 'Uniquement des chiffres'
]


