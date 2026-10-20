
## Overview

This project is a single-page UI component that displays a user's test results. The left panel highlights the overall score, and the right panel lists the score for each category with a "Continue" button.

**Live demo:** [https://wekae.github.io/frontend-mentor-challenge-results-summary-component/](https://wekae.github.io/frontend-mentor-challenge-results-summary-component/)

## Features

- Responsive layout for mobile and desktop screens
- Overall score and per-category score breakdown
- Category data rendered dynamically with JavaScript
- Hover and focus states for interactive elements
- Styles written in Sass and compiled directly in the browser


- Semantic HTML5
- [Sass](https://sass-lang.com/) (compiled in the browser via CDN)
- Vanilla JavaScript
- CSS Flexbox / Grid
- Mobile-first workflow


## Why Sass via CDN?

The project is a single HTML page, so setting up a full build pipeline (Node, npm, a bundler or the Sass CLI) felt like unnecessary overhead. Instead, Sass is loaded from a CDN and compiled **in the page at runtime**.

**Benefits**

- No installation or build step — just open the HTML file
- Still get Sass features such as variables, nesting and mixins
- Keeps the project small and easy to share
- Still show cases the objective of the challenge


**Trade-offs**

- Sass is compiled in the browser on every page load, which adds a small delay before styles appear
- Not recommended for production; a larger project should precompile Sass to CSS
- Requires an internet connection to load the Sass compiler


## Getting Started

No build tools are required.

1. Clone the repository:
```bash
   git clone https://github.com/wekae/frontend-mentor-challenge-results-summary-component.git results-summary-component
```

2. Open the project folder:
```bash
   cd results-summary-component
```

3. Open `index.html` in your browser.
> **Tip:** If the browser blocks loading local files (for example when JavaScript fetches `data.json`), serve the folder with a simple local server, such as the VS Code **Live Server** extension or `npx serve`:
>
> ```bash
> npx serve .
> ```

## Project Structure

```
results-summary-component/
├── index.html      # Markup, Sass (compiled in-browser) and script references
├── script.js       # Renders the score data
├── data.json       # Category scores (if used)
├── assets/         # Icons, images and fonts
└── README.md
```

## What I Learned

- Compiling Sass in the browser without a build setup
- Rendering UI elements dynamically from data with JavaScript
- Building a responsive card layout with a mobile-first approach

## Possible Improvements
- Precompile Sass to CSS for faster load times
- Add animations for the score counter
- Improve accessibility testing with screen readers

## Author
- GitHub: [@wekae](https://github.com/wekae)
- Frontend Mentor: [@wekae](https://www.frontendmentor.io/profile/wekae)
