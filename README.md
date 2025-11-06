<h1 align="center">💌 Amor em Código</h1>
---

## ✨ Visão Geral

**Amor em Código** é um projeto interativo feito em **Next.js** para eternizar uma história de amor através da web.  
Foi desenvolvido como um **presente de aniversário para a minha namorada** — unindo afeto e programação, todas as informações do site são fictícias.

O site apresenta:

- 💬 Mensagens trocadas entre o casal  
- 💌 Uma carta de amor personalizada  
- 🎵 Playlist com músicas especiais  
- 🖼️ Galeria de fotos com carrossel animado  
- 🕒 Contadores com o tempo juntos  

Cada seção foi feita com cuidado para representar momentos únicos da relação. 💜

---

## 🧠 Tecnologias

- Next.js  
- React  
- TypeScript  
- TailwindCSS  
- Framer Motion  
- Embla Carousel  
- Bootstrap Icons  
- Vercel  

---


## 🧩 Estrutura do Projeto

📦 app/
┣ 📂 components/
┃ ┣ 📂 navbar/ → Barra de navegação superior
┃ ┣ 📂 musics/ → Player de músicas com integração Spotify
┃ ┣ 📂 messages/ → Componente de mensagens trocadas
┃ ┣ 📂 carousel/ → Galeria de fotos (carrossel)
┃ ┣ 📂 counter/ → Contadores de tempo (ex: tempo juntos)
┃ ┗ 📂 blob/ → Efeito visual animado de fundo
┣ 📂 data/
┃ ┣ 📜 playlist/playlist.ts → Dados das músicas da playlist
┃ ┗ 📜 messages/messages.ts → Conteúdo das conversas
┣ 📜 page.tsx → Página inicial
┣ 📜 galeria/page.tsx → Galeria de fotos
┣ 📜 carta/page.tsx → Carta de amor
┣ 📜 mensagens/page.tsx → Conversas

---

## 🛠️ Personalização

Para transformar o site em **sua própria história de amor**, basta editar alguns arquivos:

### 💬 Mensagens
📁 `app/data/messages/messages.ts`  
Altere as mensagens, horários e nomes (`he`, `she`, `hour`, `day`).

### 💖 Carta
📁 `app/carta/page.tsx`  
Troque o título e o texto para escrever sua própria carta.

### 🎵 Playlist
📁 `app/data/playlist/playlist.ts`  
Substitua os IDs das músicas, artistas e citações pelas suas preferidas.

### 🖼️ Galeria
📁 `public/imagens/carousel/`  
Coloque suas fotos pessoais.  
O carrossel lê automaticamente todas as imagens da pasta.

### 🕒 Contadores
📁 `app/page.tsx`  
Altere as datas dos contadores (`Counter`) para refletir o tempo juntos.

### 🌐 Navbar
📁 `app/components/navbar/Navbar.tsx`  
Edite os links e ícones do menu principal, incluindo o link para a sua playlist e as iniciais do casal.

---

## 💻 Como Rodar Localmente

```bash
# Clone o repositório
git clone https://github.com/seuusuario/amor-em-codigo.git

# Acesse a pasta
cd amor-em-codigo

# Instale as dependências
npm install

# Execute o projeto
npm run dev

```

0 projeto estará disponível em:
👉 http://localhost:3000

---

🌐 Deploy

Hospede facilmente na Vercel:

npm run build
vercel --prod


Link de deploy (exemplo):
🔗 https://amor-em-codigo.vercel.app/

🧡 Créditos

Desenvolvido com amor por Victor Kiss,
como um presente especial de aniversário para Anna 💜

“O amor é a linha de código mais bonita que já escrevi.”

💡 Dica Extra

Quer transformar este projeto em um presente personalizado?
Basta substituir as imagens, textos e músicas — todo o design, animações e estrutura já estão prontos.
Em poucos minutos, você cria um site inesquecível e cheio de emoção.

<p align="center"> 💖 Feito com <code>npm run love</code> e muito carinho 💖 </p> ```