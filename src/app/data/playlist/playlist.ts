// usado no carousel de músicas da página principal

export interface PlaylistData {
  name: string
  artist: string
  quote: string[]
  track_id: string
  cover:string
}

const playlist: PlaylistData[] = [
  {
    name: "Diamonds",
    artist: "Danger Incorporated",
    quote: [
      "I got diamonds below me",
      "You don't even know me",
      "But you my fucking homie, hey",
      "You my fucking homie, hey..."
    ],
    track_id: "6ImNTJH4BqGfcx45IueM38",
    cover:"https://cdn-images.dzcdn.net/images/cover/d73bb2c320bd15f3e09182cb59d84837/1900x1900-000000-80-0-0.jpg"
  },
  {
    name: "Recado a minha amada",
    artist: "Katinguelê",
    quote: [
      "Lua vai",
      "Iluminar os pensamentos dela",
      "Fala pra ela, que sem ela, eu não vivo",
      "Viver sem ela, é o meu pior castigo"
    ],
    track_id: "6oDfRqEbg2gOf64XSwgfCF",
    cover:"https://i.scdn.co/image/ab67616d0000b27313c5340cfd4dd5b8282bdc03"
  },
  {
    name: "Rosas e rimas",
    artist: "Sain",
    quote: [
      "Eu vi no seu olhar tudo aquilo que eu procurava",
      "Vi que amor era tudo que eu precisava",
      "A vida é foda, eu sei, tem coisa que não passa",
      "Mas me beija agora e me faz sentir em casa"
    ],
    track_id: "1lg7G5zyf8apcquXJ7iPYR",
    cover:"https://i.scdn.co/image/ab67616d0000b27321683710a81f19ce8ea24752"
  },
  {
    name: "Enigma",
    artist: "Yago OPróprio",
    quote: [
      "Antes de você tava perdido sem saber",
      "Nem entender nada que tava acontecendo",
      "Tava tão pronto que eu já não tinha mais pressa",
      "E ocê chegou pra traduzir todo o meu jeito, sujeito"
    ],
    track_id: "1QD3t3zkwFUdEbMBTApeiZ",
    cover:"https://i1.sndcdn.com/artworks-mgY6h2vYNWmQ-0-t500x500.jpg"
  },
  {
    name: "Papoulas",
    artist: "Yago OPróprio",
    quote: [
      "Eu mato, eu passo, eu quebro, eu chuto",
      "Eu vandalizo os obstáculos",
      "Que me impedem poder te ver passar",
      "Eu rasgo, eu cuspo, espanco, escarro",
      "Deixo a sola do sapato em quem tentar te atrasar",
      "Meu bem"
    ],
    track_id: "4pjqWL23sQ2gGQIbyw8lXL",
    cover:"https://i1.sndcdn.com/artworks-mgY6h2vYNWmQ-0-t500x500.jpg"
  },
  {
    name: "Como eu te quero",
    artist: "Black Alien",
    quote: [
      "Cê é minha mulher e me pede o que quer",
      "Eu farei o que eu puder pra realizar o seu desejo",
      "Te acordar e te cobrir de beijo, assim que eu vejo",
      "Café na cama com suquinho, pão, geléia e queijo"
    ],
    track_id: "5JX81dHdlOVfTXim2itZKw",
    cover:"https://i.scdn.co/image/ab67616d0000b27399b0df5e23d3c54b9616d294"
  }
]

export default playlist
