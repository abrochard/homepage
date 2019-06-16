import App from './components/App.svelte';

const projects = [
  {title: 'Blog', description: 'Personal dev blog', url: 'https://blog.abrochard.com'},
  {title: 'KarmaJS', description: 'Play Karma card game in your browser', url: 'https://karmajs.abrochard.com'},
  {title: 'Game Timeline', description: 'View an interactive timeline of all the games I played', url: 'https://game-timeline.abrochard.com'},
  {title: 'Spotify Gaming', description: 'Explore video game soundtracks on Spotify', url: 'https://spotify-gaming.abrochard.com'}
];

const socialMedias = [
  {title: 'GitHub', url: 'https://github.com/abrochard'},
  {title: 'Twitter', url: 'https://twitter.com/abrochard'}
];


const app = new App({
  target: document.body,
  props: {projects, socialMedias}
});
