const messages = [
    "soy batman",
    "enviado",
    "control de version",
    "gato loco pancho!",
    "un mundo dominado por gatos locos, es lo que el gato loco quiere!",
    "vive tu vida como si fueras a morir mañana",
    "mementomori",
    "la vida es una no dos",
    "juega con los gatos locos y dale tu comida",
    "los gatos comen carne frita",
    "viva el gato loco pancho",
    "pancho dice soy batman",
  ];
  
  const funnyCommit = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(`\x1b[34m${message}\x1b[89m`);
  }
  module.exports = {
    funnyCommit
  };
  