/**
 * ✨ EDIT THIS FILE to customize the birthday greeting! ✨
 *
 * This is the ONLY file you need to modify.
 * No need to touch HTML, CSS, or any other JavaScript files.
 *
 * AVAILABLE SECTION TYPES:
 *   "greeting"      → Opening greeting with recipient's name
 *   "announcement"  → Birthday announcement text
 *   "chatbox"       → Chat message with typing animation
 *   "ideas"         → Sequential text reveals, one by one
 *   "quote"         → Styled quote card with optional author
 *   "countdown"     → Animated 3-2-1 countdown
 *   "stars"         → Twinkling stars background
 *   "fireworks"     → Colorful firework sparks burst
 *   "balloons"      → Floating balloon animation
 *   "profile"       → Profile photo with birthday wish
 *   "confetti"      → Confetti burst animation
 *   "closing"       → Closing message with replay button
 *
 * HOW TO USE:
 *   REMOVE a section  → Delete its object from the sections array
 *   DUPLICATE          → Copy-paste any section object
 *   REORDER            → Move the section object up/down in the array
 *   EDIT TEXT          → Change the string values
 */

const CONFIG = {
  // ── Recipient Info ────────────────────────────────────────────
  name: "maloktyyy",
  photo: "img/IMG_8737.JPG",       // Place your photo in the img/ folder
  music: "sound/Albumaty.Com_ramy_sbri_kl_snt.mp3",      // Place your music in the music/ folder

  // ── Theme Colors ──────────────────────────────────────────────
  // A toggle button lets the viewer switch between dark & light mode.
  colors: {
    primary: "#ff69b4",           // Main accent color (rose pink)
    accent: "#ff69b4",            // Secondary accent color (sky blue)
    dark: {
      background: "#111111",      // Slate 900
      text: "#eeeeee",            // Slate 100
    },
    light: {
      background: "#fffdfd",      // Stone 50
      text: "#222222",            // Slate 800
    },
  },

  // ── Default Color Mode ────────────────────────────────────────
  // Options: "dark" or "light"
  defaultMode: "dark",

  // ── Sections ──────────────────────────────────────────────────
  // Add, remove, duplicate, or reorder as you wish!
  sections: [
    {
      type: "greeting",
      title: "Hi",
      subtitle: "my wife",
    },
    {
      type: "countdown",
      from: 3,                    // Countdown from this number
      goText: "🎉",              // Text shown after countdown ends
    },
    {
      type: "announcement",
      text: "It's your birthday my wife",
    },
    {
      type: "chatbox",
      message:
        "Happy birthday my love may you live a million years and may we always be together",
      buttonText: "Send",
    },
    {
      type: "ideas",
      lines: [
        "That's what I was going to do",
        "But then I stopped",
        "I realised I wanted to do something <strong>special</strong>",
        "Because",
        "You are Special <span>:)</span>",
      ],
      bigLetters: "SO",
    },
    {
      type: "quote",
      text: "feel so lucky to have you in my life Every moment with you is a treasure and you make my world brighter just by being in it I hope this year brings you as much happiness, love and laughter as you bring to me every day I love you more than words can ever say",
      author: "yayouyk",
    },
    {
      type: "stars",
      count: 40,
    },
    {
      type: "balloons",
      count: 25,
    },
    {
      type: "profile",
      wishTitle: "Happy Birthday!",
      wishText: "And in the end, I love you more than you can imagine, my beautiful girl, and my heart chose you from the very first moment it saw you 💕🌸",
    },
    {
      type: "fireworks",
      count: 24,
    },
    {
      type: "confetti",
      count: 9,
    },
    // {
    //   type: "closing",
    //   text: "Okay, now come back and tell me if you liked it.",
    //   replayText: "Or click, if you want to watch it again.",
    // },
  ],
};
