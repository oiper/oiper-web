## Project

- CHECK linting errors and warnings (`nr lint` or `nr lint<file>`) in the code before submitting any changes; fix all issues to ensure a clean codebase.

## Styling

- NEVER add pills or badges to the UI; eg: on top of a heading.
- Use only Tailwind utility classes inside JSX; never create or modify any CSS files (`*.css`).

## Layout

- Section alignment must strictly alternate between **left** and **center**; no two adjacent sections may share the same alignment, and no other alignments are allowed.

## Animation

- Primary content (headings, main text, key foreground elements) must remain completely static and instantly visible—no transitions, hover effects, scroll reveals, fades, or motion—while animations are allowed only on non-essential elements (backgrounds, decorative layers, abstractions, illustrations).
