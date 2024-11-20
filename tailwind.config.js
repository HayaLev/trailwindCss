module.exports = {
  content: ["./src/**/*.{html,js}"], // Définit où Tailwind doit chercher les classes utilisées
  theme: {
    extend: {
      // Utilisé pour ajouter des personnalisations au thème par défaut
      colors: {
        green1: "hsl(148, 38%, 91%)",
        green2: "hsl(169, 82%, 27%)",
        green3: "hsl(169, 83%, 14%)",
      },
      fontFamily: {
        karla: ["Karla", "sans-serif"], // Assurez-vous que "Karla" est correctement orthographié avec une majuscule
      },
    },
  },
  plugins: [], // Utilisé pour ajouter des plugins optionnels
};
