# The Hollow

**An interactive midnight archive of original ghost stories and hand-drawn haunted scenes.**

Open a random door to reveal a new story and illustration. Watch the night move around the page, then scroll deeper into the archive. The project is built for the web's oldest ghosts: plain HTML, CSS, and JavaScript.

## Features

- Eight original, bite-sized horror stories. Each visit to **Summon another story** picks a different one.
- Locally generated SVG scenes—no image service, API key, external asset host, or tracking script.
- Slow-moving bats and pumpkins, a foreground spider, drifting fog, and scroll-triggered reveals.
- A motion pause button and support for the device's reduced-motion setting.
- Responsive layout, keyboard focus styles, skip navigation, and screen-reader announcements.
- No build step and no runtime dependencies.

## Run locally

You can open `index.html` directly, or serve the files locally for the most reliable browser behavior:

```bash
python -m http.server 4173
```

Then visit [http://localhost:4173](http://localhost:4173). Stop the server with `Ctrl+C`.

## Deploy to Vercel

1. Push this repository to GitHub.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Keep the project at the repository root. Vercel will detect a static site; leave the build command empty.
4. Choose **Deploy**. The site has no environment variables to configure.

## Contribute

Story ideas, new SVG scenes, accessibility improvements, responsive fixes, and documentation are welcome. Read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request. You can also start with the bug and feature-request templates under `.github/ISSUE_TEMPLATE/`.

Good first contributions include:

- Add a story in `script.js` and give it one of the existing scene types.
- Add a new scene to `hauntedLandmark()` in `script.js` and pair it with an original story.
- Improve a small-screen layout or a keyboard/screen-reader interaction in `styles.css` and `index.html`.
- Improve the contribution guide or add a new issue template.

Keep stories original, keep the page usable without motion, and keep the project dependency-free unless a change has a clear reason.

## Project files

| File | Purpose |
| --- | --- |
| `index.html` | Page structure and accessible controls |
| `styles.css` | Theme, responsive layout, and animation |
| `script.js` | Story selection and SVG scene generation |
| `favicon.svg` | Project icon |
| `vercel.json` | Static Vercel deployment settings |

## License

The project is released under the [MIT License](LICENSE).
