# Contributing to The Hollow

Thanks for helping keep the archive alive. Contributions are welcome all year, whether this is your first open-source project or your hundredth.

## Ways to help

- Write an original short horror story.
- Draw a new SVG scene for a story.
- Improve the reading experience, accessibility, or phone layout.
- Fix a bug, clarify the docs, or add a useful contribution template.

## Before you start

- Search existing issues and pull requests to avoid duplicate work.
- For a large feature or a change to the visual direction, open an issue first so we can agree on the shape of the work.
- Small fixes and documentation updates can go straight into a pull request.

## Local setup

The site has no package installation or build step. With Python installed, run:

```bash
python -m http.server 4173
```

Open [http://localhost:4173](http://localhost:4173) in your browser. You can also open `index.html` directly.

## Add a story

Stories live in the `stories` array near the top of `script.js`. Add an object with a unique three-digit `id`, an original `title` and `copy`, a `location`, a `time`, a `scene`, a short `caption`, and colors for `sky`, `moon`, and `glow`. Use an existing scene name (`manor`, `forest`, `graveyard`, `lighthouse`, `church`, `well`, `station`, or `lake`) to reuse an illustration.

Keep stories short enough to read comfortably on a phone. Aim for suspense and an unsettling detail instead of graphic violence. Check that the caption describes the scene clearly.

## Add a scene

Add a branch to `hauntedLandmark()` in `script.js`. Use inline SVG shapes, match the existing view box (`1000 × 660`), and use the story's `glow` color for small lights. Avoid remote images so the archive still works offline and has no third-party asset dependency.

## Pull request checklist

- [ ] The change is focused and explained in the pull request description.
- [ ] Stories and illustrations are original or have an explicitly compatible license.
- [ ] The page remains usable with reduced motion enabled.
- [ ] New controls have a visible focus style and an accessible name.
- [ ] The layout still works at a narrow phone width.
- [ ] No secrets, tracking scripts, or unnecessary runtime dependencies were added.

## Community expectations

Be kind, patient, and specific in reviews. Critique the change, not the person. If a conversation gets uncomfortable, pause and ask a maintainer to help.
