# bbachhal.github.io

Personal engineering portfolio for Birinder Bachhal.
B.S. Mechanical Engineering, Boston University, Class of 2028.

Live at <https://bbachhal.github.io>

## Structure

Plain static HTML. No build step, no Jekyll (`.nojekyll` is present).

```
index.html                     homepage
assets/style.css               all styling; change --blue to recolor the site
projects/*.html                project writeups
projects/<project>/*.png       figures for that project
resume.pdf                     current resume
```

## Editing

- The four numbers under the statement live in the `.spec` block of `index.html`.
- To add a project, copy any file in `projects/`, replace the content, and add a
  row to the `.idx` block in `index.html`.
- The "Seeking Summer 2027 internship" line is in the `.tblock` at the bottom of
  `<header class="mast">` in `index.html`.
- Figure numbers on project pages are generated at build time and hard-coded in
  the HTML; renumber by hand if you insert a figure.
