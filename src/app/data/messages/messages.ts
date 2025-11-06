// usado no componente messages da página principal

interface Messages {
  he?: string;
  she?: string;
  hour: string;
}

const messages: Array<Messages> = [
  { he: "Oii, aqui é o primo do Lucas 😅", hour: "15:31" },
  { she: "Oii! Ele comentou de você kkkkk", hour: "15:33" },
  { she: "Sou a Raoni, prazer!", hour: "15:33" },
  { he: "Prazer, sou o José kkkkk", hour: "15:39" },
  { she: "Tudo bem por aí?", hour: "15:53" },
  { he: "Tudo ótimo, e com você?", hour: "16:00" },
];

export default messages;
