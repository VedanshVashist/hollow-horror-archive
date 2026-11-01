"use strict";

const stories = [
  {
    id: "001",
    title: "The House That Listened",
    location: "Greywick, Maine",
    time: "3:17 AM",
    datetime: "03:17",
    scene: "manor",
    caption: "A house with all its windows awake.",
    copy: "The first rule was not to answer the knocking. The second was not to count it. By the third night, Mara understood the house wasn't knocking at all. It was using her own hands to tap from the inside of the walls.",
    sky: ["#111720", "#414641"],
    moon: "#d7ceaa",
    glow: "#d58a58",
  },
  {
    id: "002",
    title: "The Tree at Mile Marker Nine",
    location: "Old Bracken Road",
    time: "12:04 AM",
    datetime: "00:04",
    scene: "forest",
    caption: "Something is already standing in the trees.",
    copy: "At mile marker nine, the road bends around a tree that isn't on any map. Every night, its shadow reaches farther across the asphalt. Tonight, someone left a second set of footprints in the back seat.",
    sky: ["#15171d", "#41413b"],
    moon: "#c9c6a5",
    glow: "#c7774d",
  },
  {
    id: "003",
    title: "The Names Beneath the Snow",
    location: "Saint Orra's Churchyard",
    time: "1:52 AM",
    datetime: "01:52",
    scene: "graveyard",
    caption: "The newest grave has your name on it.",
    copy: "Fresh snow covered every headstone except one. Eli brushed the frost from its face and found his own name, carved deep in the granite. A warm hand closed around his shoulder. The church bell rang once, though the tower had fallen years ago.",
    sky: ["#11181e", "#54544f"],
    moon: "#ccd4d0",
    glow: "#c58259",
  },
  {
    id: "004",
    title: "The Light That Turned Inland",
    location: "Northpoint Lighthouse",
    time: "2:41 AM",
    datetime: "02:41",
    scene: "lighthouse",
    caption: "The beacon is looking for someone on shore.",
    copy: "For eighty years, the Northpoint lamp swept the empty sea. Then one winter night it stopped, turned toward town, and settled on the bedroom window of the lighthouse keeper's daughter. She hadn't been born yet.",
    sky: ["#101820", "#475351"],
    moon: "#d8d3b8",
    glow: "#e1b576",
  },
  {
    id: "005",
    title: "The Bell With No Rope",
    location: "Blackmere Parish",
    time: "11:38 PM",
    datetime: "23:38",
    scene: "church",
    caption: "The bell has been ringing from the wrong tower.",
    copy: "Blackmere's bell tower has been empty since the fire. No bell. No rope. Still, every night at eleven thirty-eight, something calls the name of whoever is listening closest. Tonight, the sound came from the cellar.",
    sky: ["#17151d", "#46434a"],
    moon: "#d8c9aa",
    glow: "#bd7257",
  },
  {
    id: "006",
    title: "What the Well Kept",
    location: "The Low Orchard",
    time: "4:06 AM",
    datetime: "04:06",
    scene: "well",
    caption: "The echo came back a few seconds too early.",
    copy: "The well had been dry since the orchard died. Nia dropped a stone and waited for the echo. It came back before the splash, whispering a lullaby her mother had never sung. Something below asked if she brought her brother, too.",
    sky: ["#171820", "#494741"],
    moon: "#c9c6a9",
    glow: "#c87d52",
  },
  {
    id: "007",
    title: "The Last Train to Anywhere",
    location: "Harrowgate Platform",
    time: "12:00 AM",
    datetime: "00:00",
    scene: "station",
    caption: "A train arrived with every window lit.",
    copy: "The timetable ended at midnight. So did the station lights. So did the town. When the train came through anyway, every passenger pressed a face to the glass. They all looked exactly like June, only older and much, much colder.",
    sky: ["#12171a", "#3f4743"],
    moon: "#d2c7a9",
    glow: "#d3905a",
  },
  {
    id: "008",
    title: "The Reflection Stayed Behind",
    location: "Glasswater Lake",
    time: "3:33 AM",
    datetime: "03:33",
    scene: "lake",
    caption: "The reflection waved after the person left.",
    copy: "At dawn, the lake showed an empty shore. At dusk, it showed a cabin with a candle burning in the window. By midnight, the reflection had its hands pressed to the water, as though the lake were a pane of glass and someone on the other side wanted out.",
    sky: ["#121b1e", "#4b514c"],
    moon: "#d6d0ac",
    glow: "#d18b5b",
  },
];

const stars = [
  [71, 66, 1.3], [146, 107, 1], [232, 54, 1.5], [305, 128, 0.8], [385, 74, 1],
  [468, 102, 1.2], [570, 48, 0.8], [650, 119, 1.1], [748, 70, 1.4], [821, 115, 0.8],
  [908, 50, 1.2], [958, 151, 1], [117, 206, 0.9], [278, 175, 0.8], [706, 188, 0.8],
];

function starsMarkup() {
  return stars.map(([x, y, radius], index) =>
    `<circle cx="${x}" cy="${y}" r="${radius}" fill="#dedac7" opacity="${index % 3 === 0 ? 0.8 : 0.45}" />`,
  ).join("");
}

function treeSilhouette(side = "left", opacity = 1) {
  const mirror = side === "right" ? "translate(1000 0) scale(-1 1)" : "";
  return `<g transform="${mirror}" opacity="${opacity}" fill="none" stroke="#111513" stroke-linecap="round" stroke-linejoin="round">
    <path d="M6 672C46 560 64 458 73 351c3-36-4-92-16-148M65 421c-28-48-45-99-48-157m57 174c25-46 49-86 85-112M49 326c-26-29-41-64-44-111m108 242c12-77 36-143 68-195" stroke-width="30" />
    <path d="M14 253C2 201 4 150 17 115m7 107c28-36 53-73 69-116m-41 233c2-46-7-86-27-124m105 104c30-35 66-56 103-68" stroke-width="10" />
    <path d="M31 183c-5-42 0-75 18-105m34 32c10-35 25-62 50-80m-105 166C11 164 4 135 0 108m173 238c25-35 53-59 83-76" stroke-width="5" opacity=".8" />
  </g>`;
}

function hauntedLandmark(kind, glow) {
  if (kind === "manor") {
    return `<g class="landmark">
      <path d="M296 471V305l42 17v-61l145-111 150 111v61l44-17v166Z" fill="#191c19" stroke="#343833" stroke-width="3" />
      <path d="m323 278 160-127 162 127-12 10-150-117-149 117Z" fill="#141715" stroke="#353832" stroke-width="3" />
      <path d="M458 186v-42h47v43m-133 82v-45h39v45m103 0v-45h39v45" fill="#222520" stroke="#3b3b32" stroke-width="2" />
      <path d="M353 364h52v107h-52zm102 0h51v107h-51zm100 0h52v107h-52z" fill="#111311" stroke="#363832" stroke-width="3" />
      <path class="lit-window" d="M365 377h27v67h-27zm101 0h25v67h-25zm98 0h28v67h-28z" fill="${glow}" opacity=".82" />
      <path d="M473 469v-50q10-24 22 0v50" fill="#101210" stroke="#39392f" stroke-width="2" />
      <circle cx="347" cy="351" r="3" fill="${glow}"/><circle cx="610" cy="351" r="3" fill="${glow}"/>
      <path d="M296 470h382" stroke="#101210" stroke-width="9" />
    </g>`;
  }

  if (kind === "forest") {
    return `<g class="landmark">
      <path d="M704 661c-10-120-18-261-3-397 5-55 18-124 37-178 20 64 26 116 30 176 10 145 3 280 14 399Z" fill="#171a17" />
      <path d="M726 214c-55-45-90-105-100-170m128 202c66-69 104-133 119-200m-162 150c-70-12-117-45-162-93m182 113c66-20 129-55 180-105" fill="none" stroke="#171a17" stroke-linecap="round" stroke-width="25" />
      <path d="M716 384q20-43 49 0v79h-49Z" fill="#0d100e" />
      <ellipse cx="731" cy="406" rx="5" ry="3" fill="${glow}"/><ellipse cx="750" cy="406" rx="5" ry="3" fill="${glow}"/>
      <path d="M404 506c23-49 60-70 98-57 25 9 40 35 42 72l-14 4c-1-30-15-51-31-55-26-7-45 14-56 46Z" fill="#242822" />
      <path d="M471 494v-31q10-19 20 0v30" fill="#101311" />
      <circle cx="477" cy="475" r="2" fill="${glow}"/><circle cx="485" cy="475" r="2" fill="${glow}"/>
    </g>`;
  }

  if (kind === "graveyard") {
    return `<g class="landmark">
      <path d="M619 477v-122q0-63 60-63t60 63v122Z" fill="#222622" stroke="#45473f" stroke-width="3" />
      <path d="M647 478v-117q0-33 32-33t32 33v117Z" fill="#131714" stroke="#49473e" stroke-width="2" />
      <path d="M670 477v-71q9-25 18 0v71" fill="${glow}" opacity=".8" />
      <path d="M650 286 679 206l31 80" fill="#1c201c" stroke="#44453d" stroke-width="3" />
      <path d="M191 477v-71q0-23 30-23t30 23v71Zm90 0v-57q0-18 24-18t24 18v57Zm409 0v-60q0-18 24-18t24 18v60Z" fill="#292c27" stroke="#474840" stroke-width="2" />
      <path d="M214 407v-35h12v35m-20-21h28m67 36v-27h10v27m-17-16h24" stroke="#55574d" stroke-width="5" />
      <path d="m351 477 5-46q14-21 28 0l5 46Zm66 0 4-34q11-17 23 0l4 34Z" fill="#20241f" stroke="#42453e" stroke-width="2" />
      <path d="M360 451h24m53 6h17" stroke="#747267" stroke-width="2" opacity=".6" />
      <path d="M520 478v-69m-12 14h24m-12-20 1-14" stroke="#242822" stroke-width="5" />
    </g>`;
  }

  if (kind === "lighthouse") {
    return `<g class="landmark">
      <path d="M0 459q84-30 176 0t178 0q89-33 183 0t184 0q94-32 279 0v201H0Z" fill="#1b2424" />
      <path d="M0 511q80-28 167 0t171 0q92-27 183 0t177 0q92-26 302 0v149H0Z" fill="#141b1b" />
      <path d="M581 454 622 222h82l43 232Z" fill="#282c27" stroke="#5b5848" stroke-width="3" />
      <path d="m611 291 20-97h60l23 97Z" fill="#c9c0a6" />
      <path d="M620 256h63l8 34h-78Z" fill="#d29b60" opacity=".84" />
      <path d="m620 204 42-31 42 31v13h-84Z" fill="#252923" stroke="#55564d" stroke-width="3" />
      <path d="M649 173v-21h27v21" fill="#202420" stroke="#54564b" stroke-width="3" />
      <path d="M635 246h45m-52 94h63m-79 101h94" stroke="#57584d" stroke-width="3" />
      <path d="M638 299 410 342m264-45 168 45" stroke="${glow}" stroke-width="5" opacity=".16" />
      <path d="M243 538q41-20 83 0m75 38q34-17 72 0m165-40q44-18 85 0m-305-3q30-12 58 0" fill="none" stroke="#60706b" stroke-width="3" opacity=".52" />
    </g>`;
  }

  if (kind === "church") {
    return `<g class="landmark">
      <path d="M304 475V304h71V231h38v73h105v-73h37v73h73v171Z" fill="#1d211d" stroke="#41443c" stroke-width="3" />
      <path d="m357 305 85-66 94 66m20 0 40-38 54 38" fill="#171a17" stroke="#4a4a40" stroke-width="3" />
      <path d="M417 241v-91h100v91l-50-44Z" fill="#1c201c" stroke="#44463e" stroke-width="3" />
      <path d="M456 151v-38h21v38m-10-50v21m-13-11h26" stroke="#55564b" stroke-width="5" />
      <path d="M451 316q15-37 31 0v39h-31Zm-108 8q14-31 28 0v39h-28Zm216 0q14-31 28 0v39h-28Z" fill="#101411" stroke="#4c4d44" stroke-width="2" />
      <path class="lit-window" d="M458 320q8-22 17 0v28h-17Z" fill="${glow}" opacity=".85" />
      <path d="M430 475v-55q25-51 50 0v55" fill="#101310" stroke="#4a493e" stroke-width="3" />
      <path d="M298 475h388" stroke="#121512" stroke-width="9" />
    </g>`;
  }

  if (kind === "well") {
    return `<g class="landmark">
      <path d="M689 658c-3-121 8-246 23-374 5-46 2-127-1-183 37 39 64 98 75 163 23 132 35 263 47 394Z" fill="#181c18" />
      <path d="M741 274c-58-34-98-82-125-144m168 186c61-57 104-102 133-160m-175 79c-60-4-111-24-167-64" fill="none" stroke="#181c18" stroke-linecap="round" stroke-width="23" />
      <ellipse cx="469" cy="490" rx="130" ry="35" fill="#4b473b" />
      <path d="M339 487v70q127 69 260 0v-70" fill="#292c27" stroke="#635d4c" stroke-width="4" />
      <ellipse cx="469" cy="486" rx="130" ry="35" fill="#393a32" stroke="#726a56" stroke-width="5" />
      <ellipse cx="469" cy="483" rx="95" ry="20" fill="#111716" />
      <path d="M380 453v-92m177 92v-92m-185 11h191" stroke="#4a463b" stroke-width="9" />
      <path d="M466 363v109" stroke="#5b5546" stroke-width="3" />
      <path d="M385 508q84 34 168 0" fill="none" stroke="${glow}" stroke-width="3" opacity=".55" />
      <circle cx="453" cy="477" r="2.5" fill="${glow}"/><circle cx="482" cy="477" r="2.5" fill="${glow}"/>
    </g>`;
  }

  if (kind === "station") {
    return `<g class="landmark">
      <path d="M151 463h698v18H151z" fill="#292a24" />
      <path d="M158 458v-86h251v86" fill="#1b201d" stroke="#46473e" stroke-width="3" />
      <path d="m145 374 139-86 140 86" fill="#191c19" stroke="#4b4a40" stroke-width="4" />
      <path d="M215 397h41v48h-41zm73 0h41v48h-41zm73 0h33v48h-33z" fill="${glow}" opacity=".42" />
      <path d="M487 421V340q0-51 56-51h139q43 0 64 39l26 50v55H487Z" fill="#20241f" stroke="#49493f" stroke-width="4" />
      <path d="M564 308h113q28 0 42 27l19 39H564Z" fill="#bcc0a8" opacity=".17" />
      <path d="M524 319h34v49h-34zm52-2h34v49h-34zm52 0h34v49h-34z" fill="${glow}" opacity=".73" />
      <circle cx="557" cy="437" r="25" fill="#111411" stroke="#514d42" stroke-width="7" />
      <circle cx="725" cy="437" r="25" fill="#111411" stroke="#514d42" stroke-width="7" />
      <path d="M793 424h67m-630 74 200 95m61-95-109 100m216-100 111 100m41-100 198 94" fill="none" stroke="#4b4940" stroke-width="5" />
      <path d="M234 500h510M315 534h345M401 568h174" stroke="#252923" stroke-width="4" />
      <path d="M766 391q30-26 64-6m-67 17q29-19 64-1" fill="none" stroke="#e3d8bd" stroke-width="4" opacity=".22" />
    </g>`;
  }

  return `<g class="landmark">
    <path d="M0 463q111-34 237 0t233 0q131-36 257 0t273 0v197H0Z" fill="#1a2320" />
    <path d="M613 456V325l89-64 99 64v132Z" fill="#20241f" stroke="#4c4c40" stroke-width="3" />
    <path d="m590 330 111-88 123 88-10 12-113-80-99 80Z" fill="#171a17" stroke="#514d41" stroke-width="3" />
    <path d="M653 456v-76q0-27 28-27t28 27v76m38 0v-74q0-24 26-24t26 24v74" fill="#111411" stroke="#494a41" stroke-width="3" />
    <path class="lit-window" d="M659 385q22-39 44 0v52h-44Zm92 0q20-33 41 0v52h-41Z" fill="${glow}" opacity=".75" />
    <path d="M0 494q130 19 253-5t247 3q132 27 252-1t248 0v169H0Z" fill="#111817" opacity=".93" />
    <path d="M611 514q91 26 201 2m-749 28q176 31 324-1m61 41q155 26 313-3m-698 8q112 15 209-2" fill="none" stroke="#63706a" stroke-width="3" opacity=".34" />
    <path d="M701 460v96m45-89v83" stroke="${glow}" stroke-width="5" opacity=".23" />
  </g>`;
}

function drawScene(story) {
  const [skyTop, skyBottom] = story.sky;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 660" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
    <defs>
      <linearGradient id="sky" x2="0" y2="1"><stop stop-color="${skyTop}"/><stop offset="1" stop-color="${skyBottom}"/></linearGradient>
      <radialGradient id="moon-glow"><stop stop-color="${story.moon}" stop-opacity=".19"/><stop offset="1" stop-color="${story.moon}" stop-opacity="0"/></radialGradient>
      <linearGradient id="mist" x2="0" y2="1"><stop stop-color="#d3d0b5" stop-opacity="0"/><stop offset=".5" stop-color="#d3d0b5" stop-opacity=".15"/><stop offset="1" stop-color="#d3d0b5" stop-opacity="0"/></linearGradient>
      <filter id="soft-glow"><feGaussianBlur stdDeviation="10"/></filter>
      <filter id="grain"><feTurbulence type="fractalNoise" baseFrequency=".7" numOctaves="3" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/></filter>
    </defs>
    <rect width="1000" height="660" fill="url(#sky)"/>
    <circle cx="${story.scene === "lighthouse" ? 798 : story.scene === "forest" ? 223 : 738}" cy="${story.scene === "station" ? 174 : 157}" r="124" fill="url(#moon-glow)"/>
    <circle cx="${story.scene === "lighthouse" ? 798 : story.scene === "forest" ? 223 : 738}" cy="${story.scene === "station" ? 174 : 157}" r="${story.scene === "station" ? 52 : 43}" fill="${story.moon}" opacity=".83"/>
    <path d="M0 257q86-59 195-19t220-9q107-52 213 4t197 5q91-41 175 2v103H0Z" fill="#56554c" opacity=".16"/>
    <g>${starsMarkup()}</g>
    <path d="M0 430q112-91 250-28t246 0q139-76 263-2t241 16v244H0Z" fill="#272c26" opacity=".58"/>
    ${treeSilhouette("left", story.scene === "lighthouse" || story.scene === "station" ? 0.58 : 0.95)}
    ${hauntedLandmark(story.scene, story.glow)}
    ${story.scene === "manor" || story.scene === "church" ? treeSilhouette("right", 0.94) : ""}
    <path d="M0 489q151-36 294 4t287-4q139-31 231 2t188 1v168H0Z" fill="#121512" opacity=".76"/>
    <g class="fog-drift-a" fill="url(#mist)">
      <ellipse cx="239" cy="489" rx="236" ry="26"/><ellipse cx="687" cy="504" rx="330" ry="33"/>
    </g>
    <g class="fog-drift-b" fill="url(#mist)">
      <ellipse cx="410" cy="541" rx="346" ry="24"/><ellipse cx="889" cy="472" rx="209" ry="21"/>
    </g>
    <rect width="1000" height="660" filter="url(#grain)" opacity=".06" style="mix-blend-mode:soft-light"/>
  </svg>`;
}

const sceneCard = document.getElementById("scene-card");
const sceneIllustration = document.getElementById("scene-illustration");
const sceneNumber = document.getElementById("scene-number");
const sceneCaption = document.getElementById("scene-caption");
const storyNumber = document.getElementById("story-number");
const storyLocation = document.getElementById("story-location");
const storyTime = document.getElementById("story-time");
const storyTitle = document.getElementById("story-title");
const storyCopy = document.getElementById("story-copy");
const announcement = document.getElementById("announcement");
const storyCard = document.querySelector(".story-card");
const archive = document.getElementById("archive");
const page = document.documentElement;
let currentStoryIndex = 0;
let changeTimer;

function showStory(index, announce = true) {
  const story = stories[index];
  currentStoryIndex = index;
  window.clearTimeout(changeTimer);
  storyCard.classList.add("is-changing");
  sceneCard.classList.add("is-changing");

  window.requestAnimationFrame(() => {
    sceneIllustration.innerHTML = drawScene(story);
    sceneIllustration.setAttribute("aria-label", `An illustrated scene: ${story.caption}`);
    sceneNumber.textContent = `PLATE ${story.id} / 008`;
    sceneCaption.textContent = story.caption;
    storyNumber.textContent = story.id;
    storyLocation.textContent = story.location.toUpperCase();
    storyTime.textContent = story.time;
    storyTime.dateTime = story.datetime;
    storyTitle.textContent = story.title;
    storyCopy.textContent = story.copy;

    changeTimer = window.setTimeout(() => {
      storyCard.classList.remove("is-changing");
      sceneCard.classList.remove("is-changing");
    }, 260);
  });

  if (announce) {
    announcement.textContent = `Story ${Number(story.id)} of ${stories.length}: ${story.title}, from ${story.location}.`;
  }
}

function summonStory() {
  if (stories.length < 2) return;
  let nextIndex = currentStoryIndex;
  while (nextIndex === currentStoryIndex) {
    nextIndex = Math.floor(Math.random() * stories.length);
  }
  showStory(nextIndex);
}

document.getElementById("hero-reveal").addEventListener("click", () => {
  summonStory();
  archive.scrollIntoView({ behavior: "smooth", block: "start" });
});

document.getElementById("next-story").addEventListener("click", summonStory);

document.getElementById("copy-story").addEventListener("click", async () => {
  const story = stories[currentStoryIndex];
  const text = `${story.title}\n\n${story.copy}\n\n— ${story.location}, ${story.time}\nA story from The Hollow`;

  try {
    await window.navigator.clipboard.writeText(text);
    announcement.textContent = "Story copied. Keep a light on.";
  } catch {
    announcement.textContent = "Clipboard access isn't available here. You can still read or share this story from the archive.";
  }
});

const motionToggle = document.getElementById("motion-toggle");
const motionLabel = document.getElementById("motion-label");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if (reducedMotion.matches) {
  page.dataset.motion = "reduced";
  motionToggle.hidden = true;
} else {
  page.dataset.motion = "on";
  motionToggle.addEventListener("click", () => {
    const isPaused = page.dataset.motion === "paused";
    page.dataset.motion = isPaused ? "on" : "paused";
    motionToggle.setAttribute("aria-pressed", String(!isPaused));
    motionLabel.textContent = isPaused ? "Motion on" : "Motion paused";
    motionToggle.setAttribute("aria-label", isPaused ? "Pause decorative motion" : "Resume decorative motion");
  });
}

const revealItems = document.querySelectorAll(".reveal-on-scroll");
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-in-view");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.13, rootMargin: "0px 0px -35px 0px" });

  document.documentElement.classList.add("js-ready");
  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-in-view"));
}

const progressBar = document.getElementById("read-progress");
let progressPending = false;

function updateScrollProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0;
  progressBar.style.width = `${progress * 100}%`;
  progressPending = false;
}

window.addEventListener("scroll", () => {
  if (progressPending) return;
  progressPending = true;
  window.requestAnimationFrame(updateScrollProgress);
}, { passive: true });

showStory(0, false);
updateScrollProgress();
