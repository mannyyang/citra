export const bootstrapCss = `
@charset "UTF-8";
/*!
 * Bootstrap v5.1.0 (https://getbootstrap.com/)
 * Copyright 2011-2021 The Bootstrap Authors
 * Copyright 2011-2021 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
:root {
  --ntvb-bs-blue: #0d6efd;
  --ntvb-bs-indigo: #6610f2;
  --ntvb-bs-purple: #6f42c1;
  --ntvb-bs-pink: #d63384;
  --ntvb-bs-red: #dc3545;
  --ntvb-bs-orange: #fd7e14;
  --ntvb-bs-yellow: #ffc107;
  --ntvb-bs-green: #198754;
  --ntvb-bs-teal: #20c997;
  --ntvb-bs-cyan: #0dcaf0;
  --ntvb-bs-white: #fff;
  --ntvb-bs-gray: #6c757d;
  --ntvb-bs-gray-dark: #343a40;
  --ntvb-bs-gray-100: #f8f9fa;
  --ntvb-bs-gray-200: #e9ecef;
  --ntvb-bs-gray-300: #dee2e6;
  --ntvb-bs-gray-400: #ced4da;
  --ntvb-bs-gray-500: #adb5bd;
  --ntvb-bs-gray-600: #6c757d;
  --ntvb-bs-gray-700: #495057;
  --ntvb-bs-gray-800: #343a40;
  --ntvb-bs-gray-900: #212529;
  --ntvb-bs-primary: #0d6efd;
  --ntvb-bs-secondary: #6c757d;
  --ntvb-bs-success: #198754;
  --ntvb-bs-info: #0dcaf0;
  --ntvb-bs-warning: #ffc107;
  --ntvb-bs-danger: #dc3545;
  --ntvb-bs-light: #f8f9fa;
  --ntvb-bs-dark: #212529;
  --ntvb-bs-primary-rgb: 13, 110, 253;
  --ntvb-bs-secondary-rgb: 108, 117, 125;
  --ntvb-bs-success-rgb: 25, 135, 84;
  --ntvb-bs-info-rgb: 13, 202, 240;
  --ntvb-bs-warning-rgb: 255, 193, 7;
  --ntvb-bs-danger-rgb: 220, 53, 69;
  --ntvb-bs-light-rgb: 248, 249, 250;
  --ntvb-bs-dark-rgb: 33, 37, 41;
  --ntvb-bs-white-rgb: 255, 255, 255;
  --ntvb-bs-black-rgb: 0, 0, 0;
  --ntvb-bs-body-rgb: 33, 37, 41;
  --ntvb-bs-font-sans-serif: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --ntvb-bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  --ntvb-bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));
  --ntvb-bs-body-font-family: var(--ntvb-bs-font-sans-serif);
  --ntvb-bs-body-font-size: 1rem;
  --ntvb-bs-body-font-weight: 400;
  --ntvb-bs-body-line-height: 1.5;
  --ntvb-bs-body-color: #212529;
  --ntvb-bs-body-bg: #fff;
}

.ntvb-h6, .ntvb-h5, .ntvb-h4, .ntvb-h3, .ntvb-h2, .ntvb-h1 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
}

.ntvb-h1 {
  font-size: calc(1.375rem + 1.5vw);
}
@media (min-width: 1200px) {
  .ntvb-h1 {
    font-size: 2.5rem;
  }
}

.ntvb-h2 {
  font-size: calc(1.325rem + 0.9vw);
}
@media (min-width: 1200px) {
  .ntvb-h2 {
    font-size: 2rem;
  }
}

.ntvb-h3 {
  font-size: calc(1.3rem + 0.6vw);
}
@media (min-width: 1200px) {
  .ntvb-h3 {
    font-size: 1.75rem;
  }
}

.ntvb-h4 {
  font-size: calc(1.275rem + 0.3vw);
}
@media (min-width: 1200px) {
  .ntvb-h4 {
    font-size: 1.5rem;
  }
}

.ntvb-h5 {
  font-size: 1.25rem;
}

.ntvb-h6 {
  font-size: 1rem;
}

/*
p {
  margin-top: 0;
  margin-bottom: 1rem;
}

abbr[title],
abbr[data-bs-original-title] {
  -webkit-text-decoration: underline dotted;
  text-decoration: underline dotted;
  cursor: help;
  -webkit-text-decoration-skip-ink: none;
  text-decoration-skip-ink: none;
}

address {
  margin-bottom: 1rem;
  font-style: normal;
  line-height: inherit;
}

ol,
ul {
  padding-left: 2rem;
}

ol,
ul,
dl {
  margin-top: 0;
  margin-bottom: 1rem;
}

ol ol,
ul ul,
ol ul,
ul ol {
  margin-bottom: 0;
}

dt {
  font-weight: 700;
}

dd {
  margin-bottom: 0.5rem;
  margin-left: 0;
}

blockquote {
  margin: 0 0 1rem;
}

b,
strong {
  font-weight: bolder;
}
*/

.ntvb-small {
  font-size: 0.875em;
}

.ntvb-mark {
  padding: 0.2em;
  background-color: #fcf8e3;
}

/*
sub,
sup {
  position: relative;
  font-size: 0.75em;
  line-height: 0;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

a {
  color: #0d6efd;
  text-decoration: underline;
}
a:hover {
  color: #0a58ca;
}

a:not([href]):not([class]), a:not([href]):not([class]):hover {
  color: inherit;
  text-decoration: none;
}


pre,
code,
kbd,
samp {
  font-family: var(--ntvb-bs-font-monospace);
  font-size: 1em;
  direction: ltr;
  unicode-bidi: bidi-override;
}

pre {
  display: block;
  margin-top: 0;
  margin-bottom: 1rem;
  overflow: auto;
  font-size: 0.875em;
}
pre code {
  font-size: inherit;
  color: inherit;
  word-break: normal;
}

code {
  font-size: 0.875em;
  color: #d63384;
  word-wrap: break-word;
}
a > code {
  color: inherit;
}

kbd {
  padding: 0.2rem 0.4rem;
  font-size: 0.875em;
  color: #fff;
  background-color: #212529;
  border-radius: 0.2rem;
}
kbd kbd {
  padding: 0;
  font-size: 1em;
  font-weight: 700;
}

figure {
  margin: 0 0 1rem;
}

img,
svg {
  vertical-align: middle;
}

table {
  caption-side: bottom;
  border-collapse: collapse;
}

caption {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  color: #6c757d;
  text-align: left;
}

th {
  text-align: inherit;
  text-align: -webkit-match-parent;
}

thead,
tbody,
tfoot,
tr,
td,
th {
  border-color: inherit;
  border-style: solid;
  border-width: 0;
}

label {
  display: inline-block;
}

button {
  border-radius: 0;
}

button:focus:not(:focus-visible) {
  outline: 0;
}

input,
button,
select,
optgroup,
textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

button,
select {
  text-transform: none;
}

[role=button] {
  cursor: pointer;
}

select {
  word-wrap: normal;
}
select:disabled {
  opacity: 1;
}

[list]::-webkit-calendar-picker-indicator {
  display: none;
}

button,
[type=button],
[type=reset],
[type=submit] {
  -webkit-appearance: button;
}
button:not(:disabled),
[type=button]:not(:disabled),
[type=reset]:not(:disabled),
[type=submit]:not(:disabled) {
  cursor: pointer;
}

::-moz-focus-inner {
  padding: 0;
  border-style: none;
}

textarea {
  resize: vertical;
}

fieldset {
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0;
}

legend {
  float: left;
  width: 100%;
  padding: 0;
  margin-bottom: 0.5rem;
  font-size: calc(1.275rem + 0.3vw);
  line-height: inherit;
}
@media (min-width: 1200px) {
  legend {
    font-size: 1.5rem;
  }
}
legend + * {
  clear: left;
}

::-webkit-datetime-edit-fields-wrapper,
::-webkit-datetime-edit-text,
::-webkit-datetime-edit-minute,
::-webkit-datetime-edit-hour-field,
::-webkit-datetime-edit-day-field,
::-webkit-datetime-edit-month-field,
::-webkit-datetime-edit-year-field {
  padding: 0;
}

::-webkit-inner-spin-button {
  height: auto;
}

[type=search] {
  outline-offset: -2px;
  -webkit-appearance: textfield;
}
*/

/* rtl:raw:
[type="tel"],
[type="url"],
[type="email"],
[type="number"] {
  direction: ltr;
}
*/

/*
::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-color-swatch-wrapper {
  padding: 0;
}

::file-selector-button {
  font: inherit;
}

::-webkit-file-upload-button {
  font: inherit;
  -webkit-appearance: button;
}


output {
  display: inline-block;
}

iframe {
  border: 0;
}

summary {
  display: list-item;
  cursor: pointer;
}

progress {
  vertical-align: baseline;
}

[hidden] {
  display: none !important;
}
*/

.ntvb-lead {
  font-size: 1.25rem;
  font-weight: 300;
}

.ntvb-display-1 {
  font-size: calc(1.625rem + 4.5vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .ntvb-display-1 {
    font-size: 5rem;
  }
}

.ntvb-display-2 {
  font-size: calc(1.575rem + 3.9vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .ntvb-display-2 {
    font-size: 4.5rem;
  }
}

.ntvb-display-3 {
  font-size: calc(1.525rem + 3.3vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .ntvb-display-3 {
    font-size: 4rem;
  }
}

.ntvb-display-4 {
  font-size: calc(1.475rem + 2.7vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .ntvb-display-4 {
    font-size: 3.5rem;
  }
}

.ntvb-display-5 {
  font-size: calc(1.425rem + 2.1vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .ntvb-display-5 {
    font-size: 3rem;
  }
}

.ntvb-display-6 {
  font-size: calc(1.375rem + 1.5vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .ntvb-display-6 {
    font-size: 2.5rem;
  }
}

.ntvb-list-unstyled {
  padding-left: 0;
  list-style: none;
}

.ntvb-list-inline {
  padding-left: 0;
  list-style: none;
}

.ntvb-list-inline-item {
  display: inline-block;
}
.ntvb-list-inline-item:not(:last-child) {
  margin-right: 0.5rem;
}

.ntvb-initialism {
  font-size: 0.875em;
  text-transform: uppercase;
}

.ntvb-blockquote {
  margin-bottom: 1rem;
  font-size: 1.25rem;
}
.ntvb-blockquote > :last-child {
  margin-bottom: 0;
}

.ntvb-blockquote-footer {
  margin-top: -1rem;
  margin-bottom: 1rem;
  font-size: 0.875em;
  color: #6c757d;
}
.ntvb-blockquote-footer::before {
  content: "— ";
}

.ntvb-img-fluid {
  max-width: 100%;
  height: auto;
}

.ntvb-img-thumbnail {
  padding: 0.25rem;
  background-color: #fff;
  border: 1px solid #dee2e6;
  border-radius: 0.25rem;
  max-width: 100%;
  height: auto;
}

.ntvb-figure {
  display: inline-block;
}

.ntvb-figure-img {
  margin-bottom: 0.5rem;
  line-height: 1;
}

.ntvb-figure-caption {
  font-size: 0.875em;
  color: #6c757d;
}

.ntvb-container,
.ntvb-container-fluid,
.ntvb-container-xxl,
.ntvb-container-xl,
.ntvb-container-lg,
.ntvb-container-md,
.ntvb-container-sm {
  width: 100%;
  padding-right: var(--ntvb-bs-gutter-x, 0.75rem);
  padding-left: var(--ntvb-bs-gutter-x, 0.75rem);
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 576px) {
  .ntvb-container-sm, .ntvb-container {
    max-width: 540px;
  }
}
@media (min-width: 768px) {
  .ntvb-container-md, .ntvb-container-sm, .ntvb-container {
    max-width: 720px;
  }
}
@media (min-width: 992px) {
  .ntvb-container-lg, .ntvb-container-md, .ntvb-container-sm, .ntvb-container {
    max-width: 960px;
  }
}
@media (min-width: 1200px) {
  .ntvb-container-xl, .ntvb-container-lg, .ntvb-container-md, .ntvb-container-sm, .ntvb-container {
    max-width: 1140px;
  }
}
@media (min-width: 1400px) {
  .ntvb-container-xxl, .ntvb-container-xl, .ntvb-container-lg, .ntvb-container-md, .ntvb-container-sm, .ntvb-container {
    max-width: 1320px;
  }
}
.ntvb-row {
  --ntvb-bs-gutter-x: 1.5rem;
  --ntvb-bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(var(--ntvb-bs-gutter-y) * -1);
  margin-right: calc(var(--ntvb-bs-gutter-x) * -.5);
  margin-left: calc(var(--ntvb-bs-gutter-x) * -.5);
}
.ntvb-row > * {
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
  padding-right: calc(var(--ntvb-bs-gutter-x) * .5);
  padding-left: calc(var(--ntvb-bs-gutter-x) * .5);
  margin-top: var(--ntvb-bs-gutter-y);
}

.ntvb-col {
  flex: 1 0 0%;
}

.ntvb-row-cols-auto > * {
  flex: 0 0 auto;
  width: auto;
}

.ntvb-row-cols-1 > * {
  flex: 0 0 auto;
  width: 100%;
}

.ntvb-row-cols-2 > * {
  flex: 0 0 auto;
  width: 50%;
}

.ntvb-row-cols-3 > * {
  flex: 0 0 auto;
  width: 33.3333333333%;
}

.ntvb-row-cols-4 > * {
  flex: 0 0 auto;
  width: 25%;
}

.ntvb-row-cols-5 > * {
  flex: 0 0 auto;
  width: 20%;
}

.ntvb-row-cols-6 > * {
  flex: 0 0 auto;
  width: 16.6666666667%;
}

.ntvb-col-auto {
  flex: 0 0 auto;
  width: auto;
}

.ntvb-col-1 {
  flex: 0 0 auto;
  width: 8.33333333%;
}

.ntvb-col-2 {
  flex: 0 0 auto;
  width: 16.66666667%;
}

.ntvb-col-3 {
  flex: 0 0 auto;
  width: 25%;
}

.ntvb-col-4 {
  flex: 0 0 auto;
  width: 33.33333333%;
}

.ntvb-col-5 {
  flex: 0 0 auto;
  width: 41.66666667%;
}

.ntvb-col-6 {
  flex: 0 0 auto;
  width: 50%;
}

.ntvb-col-7 {
  flex: 0 0 auto;
  width: 58.33333333%;
}

.ntvb-col-8 {
  flex: 0 0 auto;
  width: 66.66666667%;
}

.ntvb-col-9 {
  flex: 0 0 auto;
  width: 75%;
}

.ntvb-col-10 {
  flex: 0 0 auto;
  width: 83.33333333%;
}

.ntvb-col-11 {
  flex: 0 0 auto;
  width: 91.66666667%;
}

.ntvb-col-12 {
  flex: 0 0 auto;
  width: 100%;
}

.ntvb-offset-1 {
  margin-left: 8.33333333%;
}

.ntvb-offset-2 {
  margin-left: 16.66666667%;
}

.ntvb-offset-3 {
  margin-left: 25%;
}

.ntvb-offset-4 {
  margin-left: 33.33333333%;
}

.ntvb-offset-5 {
  margin-left: 41.66666667%;
}

.ntvb-offset-6 {
  margin-left: 50%;
}

.ntvb-offset-7 {
  margin-left: 58.33333333%;
}

.ntvb-offset-8 {
  margin-left: 66.66666667%;
}

.ntvb-offset-9 {
  margin-left: 75%;
}

.ntvb-offset-10 {
  margin-left: 83.33333333%;
}

.ntvb-offset-11 {
  margin-left: 91.66666667%;
}

.ntvb-g-0,
.ntvb-gx-0 {
  --ntvb-bs-gutter-x: 0;
}

.ntvb-g-0,
.ntvb-gy-0 {
  --ntvb-bs-gutter-y: 0;
}

.ntvb-g-1,
.ntvb-gx-1 {
  --ntvb-bs-gutter-x: 0.25rem;
}

.ntvb-g-1,
.ntvb-gy-1 {
  --ntvb-bs-gutter-y: 0.25rem;
}

.ntvb-g-2,
.ntvb-gx-2 {
  --ntvb-bs-gutter-x: 0.5rem;
}

.ntvb-g-2,
.ntvb-gy-2 {
  --ntvb-bs-gutter-y: 0.5rem;
}

.ntvb-g-3,
.ntvb-gx-3 {
  --ntvb-bs-gutter-x: 1rem;
}

.ntvb-g-3,
.ntvb-gy-3 {
  --ntvb-bs-gutter-y: 1rem;
}

.ntvb-g-4,
.ntvb-gx-4 {
  --ntvb-bs-gutter-x: 1.5rem;
}

.ntvb-g-4,
.ntvb-gy-4 {
  --ntvb-bs-gutter-y: 1.5rem;
}

.ntvb-g-5,
.ntvb-gx-5 {
  --ntvb-bs-gutter-x: 3rem;
}

.ntvb-g-5,
.ntvb-gy-5 {
  --ntvb-bs-gutter-y: 3rem;
}

@media (min-width: 576px) {
  .ntvb-col-sm {
    flex: 1 0 0%;
  }

  .ntvb-row-cols-sm-auto > * {
    flex: 0 0 auto;
    width: auto;
  }

  .ntvb-row-cols-sm-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }

  .ntvb-row-cols-sm-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }

  .ntvb-row-cols-sm-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }

  .ntvb-row-cols-sm-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }

  .ntvb-row-cols-sm-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }

  .ntvb-row-cols-sm-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }

  .ntvb-col-sm-auto {
    flex: 0 0 auto;
    width: auto;
  }

  .ntvb-col-sm-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }

  .ntvb-col-sm-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }

  .ntvb-col-sm-3 {
    flex: 0 0 auto;
    width: 25%;
  }

  .ntvb-col-sm-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }

  .ntvb-col-sm-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }

  .ntvb-col-sm-6 {
    flex: 0 0 auto;
    width: 50%;
  }

  .ntvb-col-sm-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }

  .ntvb-col-sm-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }

  .ntvb-col-sm-9 {
    flex: 0 0 auto;
    width: 75%;
  }

  .ntvb-col-sm-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }

  .ntvb-col-sm-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }

  .ntvb-col-sm-12 {
    flex: 0 0 auto;
    width: 100%;
  }

  .ntvb-offset-sm-0 {
    margin-left: 0;
  }

  .ntvb-offset-sm-1 {
    margin-left: 8.33333333%;
  }

  .ntvb-offset-sm-2 {
    margin-left: 16.66666667%;
  }

  .ntvb-offset-sm-3 {
    margin-left: 25%;
  }

  .ntvb-offset-sm-4 {
    margin-left: 33.33333333%;
  }

  .ntvb-offset-sm-5 {
    margin-left: 41.66666667%;
  }

  .ntvb-offset-sm-6 {
    margin-left: 50%;
  }

  .ntvb-offset-sm-7 {
    margin-left: 58.33333333%;
  }

  .ntvb-offset-sm-8 {
    margin-left: 66.66666667%;
  }

  .ntvb-offset-sm-9 {
    margin-left: 75%;
  }

  .ntvb-offset-sm-10 {
    margin-left: 83.33333333%;
  }

  .ntvb-offset-sm-11 {
    margin-left: 91.66666667%;
  }

  .ntvb-g-sm-0,
.ntvb-gx-sm-0 {
    --ntvb-bs-gutter-x: 0;
  }

  .ntvb-g-sm-0,
.ntvb-gy-sm-0 {
    --ntvb-bs-gutter-y: 0;
  }

  .ntvb-g-sm-1,
.ntvb-gx-sm-1 {
    --ntvb-bs-gutter-x: 0.25rem;
  }

  .ntvb-g-sm-1,
.ntvb-gy-sm-1 {
    --ntvb-bs-gutter-y: 0.25rem;
  }

  .ntvb-g-sm-2,
.ntvb-gx-sm-2 {
    --ntvb-bs-gutter-x: 0.5rem;
  }

  .ntvb-g-sm-2,
.ntvb-gy-sm-2 {
    --ntvb-bs-gutter-y: 0.5rem;
  }

  .ntvb-g-sm-3,
.ntvb-gx-sm-3 {
    --ntvb-bs-gutter-x: 1rem;
  }

  .ntvb-g-sm-3,
.ntvb-gy-sm-3 {
    --ntvb-bs-gutter-y: 1rem;
  }

  .ntvb-g-sm-4,
.ntvb-gx-sm-4 {
    --ntvb-bs-gutter-x: 1.5rem;
  }

  .ntvb-g-sm-4,
.ntvb-gy-sm-4 {
    --ntvb-bs-gutter-y: 1.5rem;
  }

  .ntvb-g-sm-5,
.ntvb-gx-sm-5 {
    --ntvb-bs-gutter-x: 3rem;
  }

  .ntvb-g-sm-5,
.ntvb-gy-sm-5 {
    --ntvb-bs-gutter-y: 3rem;
  }
}
@media (min-width: 768px) {
  .ntvb-col-md {
    flex: 1 0 0%;
  }

  .ntvb-row-cols-md-auto > * {
    flex: 0 0 auto;
    width: auto;
  }

  .ntvb-row-cols-md-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }

  .ntvb-row-cols-md-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }

  .ntvb-row-cols-md-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }

  .ntvb-row-cols-md-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }

  .ntvb-row-cols-md-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }

  .ntvb-row-cols-md-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }

  .ntvb-col-md-auto {
    flex: 0 0 auto;
    width: auto;
  }

  .ntvb-col-md-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }

  .ntvb-col-md-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }

  .ntvb-col-md-3 {
    flex: 0 0 auto;
    width: 25%;
  }

  .ntvb-col-md-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }

  .ntvb-col-md-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }

  .ntvb-col-md-6 {
    flex: 0 0 auto;
    width: 50%;
  }

  .ntvb-col-md-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }

  .ntvb-col-md-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }

  .ntvb-col-md-9 {
    flex: 0 0 auto;
    width: 75%;
  }

  .ntvb-col-md-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }

  .ntvb-col-md-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }

  .ntvb-col-md-12 {
    flex: 0 0 auto;
    width: 100%;
  }

  .ntvb-offset-md-0 {
    margin-left: 0;
  }

  .ntvb-offset-md-1 {
    margin-left: 8.33333333%;
  }

  .ntvb-offset-md-2 {
    margin-left: 16.66666667%;
  }

  .ntvb-offset-md-3 {
    margin-left: 25%;
  }

  .ntvb-offset-md-4 {
    margin-left: 33.33333333%;
  }

  .ntvb-offset-md-5 {
    margin-left: 41.66666667%;
  }

  .ntvb-offset-md-6 {
    margin-left: 50%;
  }

  .ntvb-offset-md-7 {
    margin-left: 58.33333333%;
  }

  .ntvb-offset-md-8 {
    margin-left: 66.66666667%;
  }

  .ntvb-offset-md-9 {
    margin-left: 75%;
  }

  .ntvb-offset-md-10 {
    margin-left: 83.33333333%;
  }

  .ntvb-offset-md-11 {
    margin-left: 91.66666667%;
  }

  .ntvb-g-md-0,
.ntvb-gx-md-0 {
    --ntvb-bs-gutter-x: 0;
  }

  .ntvb-g-md-0,
.ntvb-gy-md-0 {
    --ntvb-bs-gutter-y: 0;
  }

  .ntvb-g-md-1,
.ntvb-gx-md-1 {
    --ntvb-bs-gutter-x: 0.25rem;
  }

  .ntvb-g-md-1,
.ntvb-gy-md-1 {
    --ntvb-bs-gutter-y: 0.25rem;
  }

  .ntvb-g-md-2,
.ntvb-gx-md-2 {
    --ntvb-bs-gutter-x: 0.5rem;
  }

  .ntvb-g-md-2,
.ntvb-gy-md-2 {
    --ntvb-bs-gutter-y: 0.5rem;
  }

  .ntvb-g-md-3,
.ntvb-gx-md-3 {
    --ntvb-bs-gutter-x: 1rem;
  }

  .ntvb-g-md-3,
.ntvb-gy-md-3 {
    --ntvb-bs-gutter-y: 1rem;
  }

  .ntvb-g-md-4,
.ntvb-gx-md-4 {
    --ntvb-bs-gutter-x: 1.5rem;
  }

  .ntvb-g-md-4,
.ntvb-gy-md-4 {
    --ntvb-bs-gutter-y: 1.5rem;
  }

  .ntvb-g-md-5,
.ntvb-gx-md-5 {
    --ntvb-bs-gutter-x: 3rem;
  }

  .ntvb-g-md-5,
.ntvb-gy-md-5 {
    --ntvb-bs-gutter-y: 3rem;
  }
}
@media (min-width: 992px) {
  .ntvb-col-lg {
    flex: 1 0 0%;
  }

  .ntvb-row-cols-lg-auto > * {
    flex: 0 0 auto;
    width: auto;
  }

  .ntvb-row-cols-lg-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }

  .ntvb-row-cols-lg-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }

  .ntvb-row-cols-lg-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }

  .ntvb-row-cols-lg-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }

  .ntvb-row-cols-lg-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }

  .ntvb-row-cols-lg-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }

  .ntvb-col-lg-auto {
    flex: 0 0 auto;
    width: auto;
  }

  .ntvb-col-lg-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }

  .ntvb-col-lg-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }

  .ntvb-col-lg-3 {
    flex: 0 0 auto;
    width: 25%;
  }

  .ntvb-col-lg-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }

  .ntvb-col-lg-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }

  .ntvb-col-lg-6 {
    flex: 0 0 auto;
    width: 50%;
  }

  .ntvb-col-lg-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }

  .ntvb-col-lg-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }

  .ntvb-col-lg-9 {
    flex: 0 0 auto;
    width: 75%;
  }

  .ntvb-col-lg-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }

  .ntvb-col-lg-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }

  .ntvb-col-lg-12 {
    flex: 0 0 auto;
    width: 100%;
  }

  .ntvb-offset-lg-0 {
    margin-left: 0;
  }

  .ntvb-offset-lg-1 {
    margin-left: 8.33333333%;
  }

  .ntvb-offset-lg-2 {
    margin-left: 16.66666667%;
  }

  .ntvb-offset-lg-3 {
    margin-left: 25%;
  }

  .ntvb-offset-lg-4 {
    margin-left: 33.33333333%;
  }

  .ntvb-offset-lg-5 {
    margin-left: 41.66666667%;
  }

  .ntvb-offset-lg-6 {
    margin-left: 50%;
  }

  .ntvb-offset-lg-7 {
    margin-left: 58.33333333%;
  }

  .ntvb-offset-lg-8 {
    margin-left: 66.66666667%;
  }

  .ntvb-offset-lg-9 {
    margin-left: 75%;
  }

  .ntvb-offset-lg-10 {
    margin-left: 83.33333333%;
  }

  .ntvb-offset-lg-11 {
    margin-left: 91.66666667%;
  }

  .ntvb-g-lg-0,
.ntvb-gx-lg-0 {
    --ntvb-bs-gutter-x: 0;
  }

  .ntvb-g-lg-0,
.ntvb-gy-lg-0 {
    --ntvb-bs-gutter-y: 0;
  }

  .ntvb-g-lg-1,
.ntvb-gx-lg-1 {
    --ntvb-bs-gutter-x: 0.25rem;
  }

  .ntvb-g-lg-1,
.ntvb-gy-lg-1 {
    --ntvb-bs-gutter-y: 0.25rem;
  }

  .ntvb-g-lg-2,
.ntvb-gx-lg-2 {
    --ntvb-bs-gutter-x: 0.5rem;
  }

  .ntvb-g-lg-2,
.ntvb-gy-lg-2 {
    --ntvb-bs-gutter-y: 0.5rem;
  }

  .ntvb-g-lg-3,
.ntvb-gx-lg-3 {
    --ntvb-bs-gutter-x: 1rem;
  }

  .ntvb-g-lg-3,
.ntvb-gy-lg-3 {
    --ntvb-bs-gutter-y: 1rem;
  }

  .ntvb-g-lg-4,
.ntvb-gx-lg-4 {
    --ntvb-bs-gutter-x: 1.5rem;
  }

  .ntvb-g-lg-4,
.ntvb-gy-lg-4 {
    --ntvb-bs-gutter-y: 1.5rem;
  }

  .ntvb-g-lg-5,
.ntvb-gx-lg-5 {
    --ntvb-bs-gutter-x: 3rem;
  }

  .ntvb-g-lg-5,
.ntvb-gy-lg-5 {
    --ntvb-bs-gutter-y: 3rem;
  }
}
@media (min-width: 1200px) {
  .ntvb-col-xl {
    flex: 1 0 0%;
  }

  .ntvb-row-cols-xl-auto > * {
    flex: 0 0 auto;
    width: auto;
  }

  .ntvb-row-cols-xl-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }

  .ntvb-row-cols-xl-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }

  .ntvb-row-cols-xl-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }

  .ntvb-row-cols-xl-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }

  .ntvb-row-cols-xl-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }

  .ntvb-row-cols-xl-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }

  .ntvb-col-xl-auto {
    flex: 0 0 auto;
    width: auto;
  }

  .ntvb-col-xl-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }

  .ntvb-col-xl-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }

  .ntvb-col-xl-3 {
    flex: 0 0 auto;
    width: 25%;
  }

  .ntvb-col-xl-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }

  .ntvb-col-xl-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }

  .ntvb-col-xl-6 {
    flex: 0 0 auto;
    width: 50%;
  }

  .ntvb-col-xl-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }

  .ntvb-col-xl-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }

  .ntvb-col-xl-9 {
    flex: 0 0 auto;
    width: 75%;
  }

  .ntvb-col-xl-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }

  .ntvb-col-xl-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }

  .ntvb-col-xl-12 {
    flex: 0 0 auto;
    width: 100%;
  }

  .ntvb-offset-xl-0 {
    margin-left: 0;
  }

  .ntvb-offset-xl-1 {
    margin-left: 8.33333333%;
  }

  .ntvb-offset-xl-2 {
    margin-left: 16.66666667%;
  }

  .ntvb-offset-xl-3 {
    margin-left: 25%;
  }

  .ntvb-offset-xl-4 {
    margin-left: 33.33333333%;
  }

  .ntvb-offset-xl-5 {
    margin-left: 41.66666667%;
  }

  .ntvb-offset-xl-6 {
    margin-left: 50%;
  }

  .ntvb-offset-xl-7 {
    margin-left: 58.33333333%;
  }

  .ntvb-offset-xl-8 {
    margin-left: 66.66666667%;
  }

  .ntvb-offset-xl-9 {
    margin-left: 75%;
  }

  .ntvb-offset-xl-10 {
    margin-left: 83.33333333%;
  }

  .ntvb-offset-xl-11 {
    margin-left: 91.66666667%;
  }

  .ntvb-g-xl-0,
.ntvb-gx-xl-0 {
    --ntvb-bs-gutter-x: 0;
  }

  .ntvb-g-xl-0,
.ntvb-gy-xl-0 {
    --ntvb-bs-gutter-y: 0;
  }

  .ntvb-g-xl-1,
.ntvb-gx-xl-1 {
    --ntvb-bs-gutter-x: 0.25rem;
  }

  .ntvb-g-xl-1,
.ntvb-gy-xl-1 {
    --ntvb-bs-gutter-y: 0.25rem;
  }

  .ntvb-g-xl-2,
.ntvb-gx-xl-2 {
    --ntvb-bs-gutter-x: 0.5rem;
  }

  .ntvb-g-xl-2,
.ntvb-gy-xl-2 {
    --ntvb-bs-gutter-y: 0.5rem;
  }

  .ntvb-g-xl-3,
.ntvb-gx-xl-3 {
    --ntvb-bs-gutter-x: 1rem;
  }

  .ntvb-g-xl-3,
.ntvb-gy-xl-3 {
    --ntvb-bs-gutter-y: 1rem;
  }

  .ntvb-g-xl-4,
.ntvb-gx-xl-4 {
    --ntvb-bs-gutter-x: 1.5rem;
  }

  .ntvb-g-xl-4,
.ntvb-gy-xl-4 {
    --ntvb-bs-gutter-y: 1.5rem;
  }

  .ntvb-g-xl-5,
.ntvb-gx-xl-5 {
    --ntvb-bs-gutter-x: 3rem;
  }

  .ntvb-g-xl-5,
.ntvb-gy-xl-5 {
    --ntvb-bs-gutter-y: 3rem;
  }
}
@media (min-width: 1400px) {
  .ntvb-col-xxl {
    flex: 1 0 0%;
  }

  .ntvb-row-cols-xxl-auto > * {
    flex: 0 0 auto;
    width: auto;
  }

  .ntvb-row-cols-xxl-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }

  .ntvb-row-cols-xxl-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }

  .ntvb-row-cols-xxl-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }

  .ntvb-row-cols-xxl-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }

  .ntvb-row-cols-xxl-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }

  .ntvb-row-cols-xxl-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }

  .ntvb-col-xxl-auto {
    flex: 0 0 auto;
    width: auto;
  }

  .ntvb-col-xxl-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }

  .ntvb-col-xxl-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }

  .ntvb-col-xxl-3 {
    flex: 0 0 auto;
    width: 25%;
  }

  .ntvb-col-xxl-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }

  .ntvb-col-xxl-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }

  .ntvb-col-xxl-6 {
    flex: 0 0 auto;
    width: 50%;
  }

  .ntvb-col-xxl-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }

  .ntvb-col-xxl-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }

  .ntvb-col-xxl-9 {
    flex: 0 0 auto;
    width: 75%;
  }

  .ntvb-col-xxl-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }

  .ntvb-col-xxl-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }

  .ntvb-col-xxl-12 {
    flex: 0 0 auto;
    width: 100%;
  }

  .ntvb-offset-xxl-0 {
    margin-left: 0;
  }

  .ntvb-offset-xxl-1 {
    margin-left: 8.33333333%;
  }

  .ntvb-offset-xxl-2 {
    margin-left: 16.66666667%;
  }

  .ntvb-offset-xxl-3 {
    margin-left: 25%;
  }

  .ntvb-offset-xxl-4 {
    margin-left: 33.33333333%;
  }

  .ntvb-offset-xxl-5 {
    margin-left: 41.66666667%;
  }

  .ntvb-offset-xxl-6 {
    margin-left: 50%;
  }

  .ntvb-offset-xxl-7 {
    margin-left: 58.33333333%;
  }

  .ntvb-offset-xxl-8 {
    margin-left: 66.66666667%;
  }

  .ntvb-offset-xxl-9 {
    margin-left: 75%;
  }

  .ntvb-offset-xxl-10 {
    margin-left: 83.33333333%;
  }

  .ntvb-offset-xxl-11 {
    margin-left: 91.66666667%;
  }

  .ntvb-g-xxl-0,
.ntvb-gx-xxl-0 {
    --ntvb-bs-gutter-x: 0;
  }

  .ntvb-g-xxl-0,
.ntvb-gy-xxl-0 {
    --ntvb-bs-gutter-y: 0;
  }

  .ntvb-g-xxl-1,
.ntvb-gx-xxl-1 {
    --ntvb-bs-gutter-x: 0.25rem;
  }

  .ntvb-g-xxl-1,
.ntvb-gy-xxl-1 {
    --ntvb-bs-gutter-y: 0.25rem;
  }

  .ntvb-g-xxl-2,
.ntvb-gx-xxl-2 {
    --ntvb-bs-gutter-x: 0.5rem;
  }

  .ntvb-g-xxl-2,
.ntvb-gy-xxl-2 {
    --ntvb-bs-gutter-y: 0.5rem;
  }

  .ntvb-g-xxl-3,
.ntvb-gx-xxl-3 {
    --ntvb-bs-gutter-x: 1rem;
  }

  .ntvb-g-xxl-3,
.ntvb-gy-xxl-3 {
    --ntvb-bs-gutter-y: 1rem;
  }

  .ntvb-g-xxl-4,
.ntvb-gx-xxl-4 {
    --ntvb-bs-gutter-x: 1.5rem;
  }

  .ntvb-g-xxl-4,
.ntvb-gy-xxl-4 {
    --ntvb-bs-gutter-y: 1.5rem;
  }

  .ntvb-g-xxl-5,
.ntvb-gx-xxl-5 {
    --ntvb-bs-gutter-x: 3rem;
  }

  .ntvb-g-xxl-5,
.ntvb-gy-xxl-5 {
    --ntvb-bs-gutter-y: 3rem;
  }
}
.ntvb-table {
  --ntvb-bs-table-bg: transparent;
  --ntvb-bs-table-accent-bg: transparent;
  --ntvb-bs-table-striped-color: #212529;
  --ntvb-bs-table-striped-bg: rgba(0, 0, 0, 0.05);
  --ntvb-bs-table-active-color: #212529;
  --ntvb-bs-table-active-bg: rgba(0, 0, 0, 0.1);
  --ntvb-bs-table-hover-color: #212529;
  --ntvb-bs-table-hover-bg: rgba(0, 0, 0, 0.075);
  width: 100%;
  margin-bottom: 1rem;
  color: #212529;
  vertical-align: top;
  border-color: #dee2e6;
}
.ntvb-table > :not(caption) > * > * {
  padding: 0.5rem 0.5rem;
  background-color: var(--ntvb-bs-table-bg);
  border-bottom-width: 1px;
  box-shadow: inset 0 0 0 9999px var(--ntvb-bs-table-accent-bg);
}
.ntvb-table > tbody {
  vertical-align: inherit;
}
.ntvb-table > thead {
  vertical-align: bottom;
}
.ntvb-table > :not(:last-child) > :last-child > * {
  border-bottom-color: currentColor;
}

.ntvb-caption-top {
  caption-side: top;
}

.ntvb-table-sm > :not(caption) > * > * {
  padding: 0.25rem 0.25rem;
}

.ntvb-table-bordered > :not(caption) > * {
  border-width: 1px 0;
}
.ntvb-table-bordered > :not(caption) > * > * {
  border-width: 0 1px;
}

.ntvb-table-borderless > :not(caption) > * > * {
  border-bottom-width: 0;
}

.ntvb-table-striped > tbody > tr:nth-of-type(odd) {
  --ntvb-bs-table-accent-bg: var(--ntvb-bs-table-striped-bg);
  color: var(--ntvb-bs-table-striped-color);
}

.ntvb-table-active {
  --ntvb-bs-table-accent-bg: var(--ntvb-bs-table-active-bg);
  color: var(--ntvb-bs-table-active-color);
}

.ntvb-table-hover > tbody > tr:hover {
  --ntvb-bs-table-accent-bg: var(--ntvb-bs-table-hover-bg);
  color: var(--ntvb-bs-table-hover-color);
}

.ntvb-table-primary {
  --ntvb-bs-table-bg: #cfe2ff;
  --ntvb-bs-table-striped-bg: #c5d7f2;
  --ntvb-bs-table-striped-color: #000;
  --ntvb-bs-table-active-bg: #bacbe6;
  --ntvb-bs-table-active-color: #000;
  --ntvb-bs-table-hover-bg: #bfd1ec;
  --ntvb-bs-table-hover-color: #000;
  color: #000;
  border-color: #bacbe6;
}

.ntvb-table-secondary {
  --ntvb-bs-table-bg: #e2e3e5;
  --ntvb-bs-table-striped-bg: #d7d8da;
  --ntvb-bs-table-striped-color: #000;
  --ntvb-bs-table-active-bg: #cbccce;
  --ntvb-bs-table-active-color: #000;
  --ntvb-bs-table-hover-bg: #d1d2d4;
  --ntvb-bs-table-hover-color: #000;
  color: #000;
  border-color: #cbccce;
}

.ntvb-table-success {
  --ntvb-bs-table-bg: #d1e7dd;
  --ntvb-bs-table-striped-bg: #c7dbd2;
  --ntvb-bs-table-striped-color: #000;
  --ntvb-bs-table-active-bg: #bcd0c7;
  --ntvb-bs-table-active-color: #000;
  --ntvb-bs-table-hover-bg: #c1d6cc;
  --ntvb-bs-table-hover-color: #000;
  color: #000;
  border-color: #bcd0c7;
}

.ntvb-table-info {
  --ntvb-bs-table-bg: #cff4fc;
  --ntvb-bs-table-striped-bg: #c5e8ef;
  --ntvb-bs-table-striped-color: #000;
  --ntvb-bs-table-active-bg: #badce3;
  --ntvb-bs-table-active-color: #000;
  --ntvb-bs-table-hover-bg: #bfe2e9;
  --ntvb-bs-table-hover-color: #000;
  color: #000;
  border-color: #badce3;
}

.ntvb-table-warning {
  --ntvb-bs-table-bg: #fff3cd;
  --ntvb-bs-table-striped-bg: #f2e7c3;
  --ntvb-bs-table-striped-color: #000;
  --ntvb-bs-table-active-bg: #e6dbb9;
  --ntvb-bs-table-active-color: #000;
  --ntvb-bs-table-hover-bg: #ece1be;
  --ntvb-bs-table-hover-color: #000;
  color: #000;
  border-color: #e6dbb9;
}

.ntvb-table-danger {
  --ntvb-bs-table-bg: #f8d7da;
  --ntvb-bs-table-striped-bg: #eccccf;
  --ntvb-bs-table-striped-color: #000;
  --ntvb-bs-table-active-bg: #dfc2c4;
  --ntvb-bs-table-active-color: #000;
  --ntvb-bs-table-hover-bg: #e5c7ca;
  --ntvb-bs-table-hover-color: #000;
  color: #000;
  border-color: #dfc2c4;
}

.ntvb-table-light {
  --ntvb-bs-table-bg: #f8f9fa;
  --ntvb-bs-table-striped-bg: #ecedee;
  --ntvb-bs-table-striped-color: #000;
  --ntvb-bs-table-active-bg: #dfe0e1;
  --ntvb-bs-table-active-color: #000;
  --ntvb-bs-table-hover-bg: #e5e6e7;
  --ntvb-bs-table-hover-color: #000;
  color: #000;
  border-color: #dfe0e1;
}

.ntvb-table-dark {
  --ntvb-bs-table-bg: #212529;
  --ntvb-bs-table-striped-bg: #2c3034;
  --ntvb-bs-table-striped-color: #fff;
  --ntvb-bs-table-active-bg: #373b3e;
  --ntvb-bs-table-active-color: #fff;
  --ntvb-bs-table-hover-bg: #323539;
  --ntvb-bs-table-hover-color: #fff;
  color: #fff;
  border-color: #373b3e;
}

.ntvb-table-responsive {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

@media (max-width: 575.98px) {
  .ntvb-table-responsive-sm {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
@media (max-width: 767.98px) {
  .ntvb-table-responsive-md {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
@media (max-width: 991.98px) {
  .ntvb-table-responsive-lg {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
@media (max-width: 1199.98px) {
  .ntvb-table-responsive-xl {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
@media (max-width: 1399.98px) {
  .ntvb-table-responsive-xxl {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
.ntvb-form-label {
  margin-bottom: 0.5rem;
}

.ntvb-col-form-label {
  padding-top: calc(0.375rem + 1px);
  padding-bottom: calc(0.375rem + 1px);
  margin-bottom: 0;
  font-size: inherit;
  line-height: 1.5;
}

.ntvb-col-form-label-lg {
  padding-top: calc(0.5rem + 1px);
  padding-bottom: calc(0.5rem + 1px);
  font-size: 1.25rem;
}

.ntvb-col-form-label-sm {
  padding-top: calc(0.25rem + 1px);
  padding-bottom: calc(0.25rem + 1px);
  font-size: 0.875rem;
}

.ntvb-form-text {
  margin-top: 0.25rem;
  font-size: 0.875em;
  color: #6c757d;
}

.ntvb-form-control {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .ntvb-form-control {
    transition: none;
  }
}
.ntvb-form-control[type=file] {
  overflow: hidden;
}
.ntvb-form-control[type=file]:not(:disabled):not([readonly]) {
  cursor: pointer;
}
.ntvb-form-control:focus {
  color: #212529;
  background-color: #fff;
  border-color: #86b7fe;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
.ntvb-form-control::-webkit-date-and-time-value {
  height: 1.5em;
}
.ntvb-form-control::-moz-placeholder {
  color: #6c757d;
  opacity: 1;
}
.ntvb-form-control::placeholder {
  color: #6c757d;
  opacity: 1;
}
.ntvb-form-control:disabled, .ntvb-form-control[readonly] {
  background-color: #e9ecef;
  opacity: 1;
}
.ntvb-form-control::file-selector-button {
  padding: 0.375rem 0.75rem;
  margin: -0.375rem -0.75rem;
  -webkit-margin-end: 0.75rem;
  margin-inline-end: 0.75rem;
  color: #212529;
  background-color: #e9ecef;
  pointer-events: none;
  border-color: inherit;
  border-style: solid;
  border-width: 0;
  border-inline-end-width: 1px;
  border-radius: 0;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .ntvb-form-control::file-selector-button {
    transition: none;
  }
}
.ntvb-form-control:hover:not(:disabled):not([readonly])::file-selector-button {
  background-color: #dde0e3;
}
.ntvb-form-control::-webkit-file-upload-button {
  padding: 0.375rem 0.75rem;
  margin: -0.375rem -0.75rem;
  -webkit-margin-end: 0.75rem;
  margin-inline-end: 0.75rem;
  color: #212529;
  background-color: #e9ecef;
  pointer-events: none;
  border-color: inherit;
  border-style: solid;
  border-width: 0;
  border-inline-end-width: 1px;
  border-radius: 0;
  -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .ntvb-form-control::-webkit-file-upload-button {
    -webkit-transition: none;
    transition: none;
  }
}
.ntvb-form-control:hover:not(:disabled):not([readonly])::-webkit-file-upload-button {
  background-color: #dde0e3;
}

.ntvb-form-control-plaintext {
  display: block;
  width: 100%;
  padding: 0.375rem 0;
  margin-bottom: 0;
  line-height: 1.5;
  color: #212529;
  background-color: transparent;
  border: solid transparent;
  border-width: 1px 0;
}
.ntvb-form-control-plaintext.ntvb-form-control-sm, .ntvb-form-control-plaintext.ntvb-form-control-lg {
  padding-right: 0;
  padding-left: 0;
}

.ntvb-form-control-sm {
  min-height: calc(1.5em + 0.5rem + 2px);
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  border-radius: 0.2rem;
}
.ntvb-form-control-sm::file-selector-button {
  padding: 0.25rem 0.5rem;
  margin: -0.25rem -0.5rem;
  -webkit-margin-end: 0.5rem;
  margin-inline-end: 0.5rem;
}
.ntvb-form-control-sm::-webkit-file-upload-button {
  padding: 0.25rem 0.5rem;
  margin: -0.25rem -0.5rem;
  -webkit-margin-end: 0.5rem;
  margin-inline-end: 0.5rem;
}

.ntvb-form-control-lg {
  min-height: calc(1.5em + 1rem + 2px);
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  border-radius: 0.3rem;
}
.ntvb-form-control-lg::file-selector-button {
  padding: 0.5rem 1rem;
  margin: -0.5rem -1rem;
  -webkit-margin-end: 1rem;
  margin-inline-end: 1rem;
}
.ntvb-form-control-lg::-webkit-file-upload-button {
  padding: 0.5rem 1rem;
  margin: -0.5rem -1rem;
  -webkit-margin-end: 1rem;
  margin-inline-end: 1rem;
}

textarea.ntvb-form-control {
  min-height: calc(1.5em + 0.75rem + 2px);
}
textarea.ntvb-form-control-sm {
  min-height: calc(1.5em + 0.5rem + 2px);
}
textarea.ntvb-form-control-lg {
  min-height: calc(1.5em + 1rem + 2px);
}

.ntvb-form-control-color {
  width: 3rem;
  height: auto;
  padding: 0.375rem;
}
.ntvb-form-control-color:not(:disabled):not([readonly]) {
  cursor: pointer;
}
.ntvb-form-control-color::-moz-color-swatch {
  height: 1.5em;
  border-radius: 0.25rem;
}
.ntvb-form-control-color::-webkit-color-swatch {
  height: 1.5em;
  border-radius: 0.25rem;
}

.ntvb-form-select {
  display: block;
  width: 100%;
  padding: 0.375rem 2.25rem 0.375rem 0.75rem;
  -moz-padding-start: calc(0.75rem - 3px);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.ntvb-w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 16px 12px;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
@media (prefers-reduced-motion: reduce) {
  .ntvb-form-select {
    transition: none;
  }
}
.ntvb-form-select:focus {
  border-color: #86b7fe;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
.ntvb-form-select[multiple], .ntvb-form-select[size]:not([size="1"]) {
  padding-right: 0.75rem;
  background-image: none;
}
.ntvb-form-select:disabled {
  background-color: #e9ecef;
}
.ntvb-form-select:-moz-focusring {
  color: transparent;
  text-shadow: 0 0 0 #212529;
}

.ntvb-form-select-sm {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: 0.5rem;
  font-size: 0.875rem;
}

.ntvb-form-select-lg {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  font-size: 1.25rem;
}

.ntvb-form-check {
  display: block;
  min-height: 1.5rem;
  padding-left: 1.5em;
  margin-bottom: 0.125rem;
}
.ntvb-form-check .ntvb-form-check-input {
  float: left;
  margin-left: -1.5em;
}

.ntvb-form-check-input {
  width: 1em;
  height: 1em;
  margin-top: 0.25em;
  vertical-align: top;
  background-color: #fff;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border: 1px solid rgba(0, 0, 0, 0.25);
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
}
.ntvb-form-check-input[type=checkbox] {
  border-radius: 0.25em;
}
.ntvb-form-check-input[type=radio] {
  border-radius: 50%;
}
.ntvb-form-check-input:active {
  filter: brightness(90%);
}
.ntvb-form-check-input:focus {
  border-color: #86b7fe;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
.ntvb-form-check-input:checked {
  background-color: #0d6efd;
  border-color: #0d6efd;
}
.ntvb-form-check-input:checked[type=checkbox] {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.ntvb-w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e");
}
.ntvb-form-check-input:checked[type=radio] {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.ntvb-w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e");
}
.ntvb-form-check-input[type=checkbox]:indeterminate {
  background-color: #0d6efd;
  border-color: #0d6efd;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.ntvb-w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e");
}
.ntvb-form-check-input:disabled {
  pointer-events: none;
  filter: none;
  opacity: 0.5;
}
.ntvb-form-check-input[disabled] ~ .ntvb-form-check-label, .ntvb-form-check-input:disabled ~ .ntvb-form-check-label {
  opacity: 0.5;
}

.ntvb-form-switch {
  padding-left: 2.5em;
}
.ntvb-form-switch .ntvb-form-check-input {
  width: 2em;
  margin-left: -2.5em;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.ntvb-w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e");
  background-position: left center;
  border-radius: 2em;
  transition: background-position 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .ntvb-form-switch .ntvb-form-check-input {
    transition: none;
  }
}
.ntvb-form-switch .ntvb-form-check-input:focus {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.ntvb-w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%2386b7fe'/%3e%3c/svg%3e");
}
.ntvb-form-switch .ntvb-form-check-input:checked {
  background-position: right center;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.ntvb-w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
}

.ntvb-form-check-inline {
  display: inline-block;
  margin-right: 1rem;
}

.ntvb-btn-check {
  position: absolute;
  clip: rect(0, 0, 0, 0);
  pointer-events: none;
}
.ntvb-btn-check[disabled] + .ntvb-btn, .ntvb-btn-check:disabled + .ntvb-btn {
  pointer-events: none;
  filter: none;
  opacity: 0.65;
}

.ntvb-form-range {
  width: 100%;
  height: 1.5rem;
  padding: 0;
  background-color: transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.ntvb-form-range:focus {
  outline: 0;
}
.ntvb-form-range:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 1px #fff, 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
.ntvb-form-range:focus::-moz-range-thumb {
  box-shadow: 0 0 0 1px #fff, 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
.ntvb-form-range::-moz-focus-outer {
  border: 0;
}
.ntvb-form-range::-webkit-slider-thumb {
  width: 1rem;
  height: 1rem;
  margin-top: -0.25rem;
  background-color: #0d6efd;
  border: 0;
  border-radius: 1rem;
  -webkit-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  -webkit-appearance: none;
  appearance: none;
}
@media (prefers-reduced-motion: reduce) {
  .ntvb-form-range::-webkit-slider-thumb {
    -webkit-transition: none;
    transition: none;
  }
}
.ntvb-form-range::-webkit-slider-thumb:active {
  background-color: #b6d4fe;
}
.ntvb-form-range::-webkit-slider-runnable-track {
  width: 100%;
  height: 0.5rem;
  color: transparent;
  cursor: pointer;
  background-color: #dee2e6;
  border-color: transparent;
  border-radius: 1rem;
}
.ntvb-form-range::-moz-range-thumb {
  width: 1rem;
  height: 1rem;
  background-color: #0d6efd;
  border: 0;
  border-radius: 1rem;
  -moz-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  -moz-appearance: none;
  appearance: none;
}
@media (prefers-reduced-motion: reduce) {
  .ntvb-form-range::-moz-range-thumb {
    -moz-transition: none;
    transition: none;
  }
}
.ntvb-form-range::-moz-range-thumb:active {
  background-color: #b6d4fe;
}
.ntvb-form-range::-moz-range-track {
  width: 100%;
  height: 0.5rem;
  color: transparent;
  cursor: pointer;
  background-color: #dee2e6;
  border-color: transparent;
  border-radius: 1rem;
}
.ntvb-form-range:disabled {
  pointer-events: none;
}
.ntvb-form-range:disabled::-webkit-slider-thumb {
  background-color: #adb5bd;
}
.ntvb-form-range:disabled::-moz-range-thumb {
  background-color: #adb5bd;
}

.ntvb-form-floating {
  position: relative;
}
.ntvb-form-floating > .ntvb-form-control,
.ntvb-form-floating > .ntvb-form-select {
  height: calc(3.5rem + 2px);
  line-height: 1.25;
}
.ntvb-form-floating > label {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  padding: 1rem 0.75rem;
  pointer-events: none;
  border: 1px solid transparent;
  transform-origin: 0 0;
  transition: opacity 0.1s ease-in-out, transform 0.1s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .ntvb-form-floating > label {
    transition: none;
  }
}
.ntvb-form-floating > .ntvb-form-control {
  padding: 1rem 0.75rem;
}
.ntvb-form-floating > .ntvb-form-control::-moz-placeholder {
  color: transparent;
}
.ntvb-form-floating > .ntvb-form-control::placeholder {
  color: transparent;
}
.ntvb-form-floating > .ntvb-form-control:not(:-moz-placeholder-shown) {
  padding-top: 1.625rem;
  padding-bottom: 0.625rem;
}
.ntvb-form-floating > .ntvb-form-control:focus, .ntvb-form-floating > .ntvb-form-control:not(:placeholder-shown) {
  padding-top: 1.625rem;
  padding-bottom: 0.625rem;
}
.ntvb-form-floating > .ntvb-form-control:-webkit-autofill {
  padding-top: 1.625rem;
  padding-bottom: 0.625rem;
}
.ntvb-form-floating > .ntvb-form-select {
  padding-top: 1.625rem;
  padding-bottom: 0.625rem;
}
.ntvb-form-floating > .ntvb-form-control:not(:-moz-placeholder-shown) ~ label {
  opacity: 0.65;
  transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
}
.ntvb-form-floating > .ntvb-form-control:focus ~ label,
.ntvb-form-floating > .ntvb-form-control:not(:placeholder-shown) ~ label,
.ntvb-form-floating > .ntvb-form-select ~ label {
  opacity: 0.65;
  transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
}
.ntvb-form-floating > .ntvb-form-control:-webkit-autofill ~ label {
  opacity: 0.65;
  transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
}

.ntvb-input-group {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
}
.ntvb-input-group > .ntvb-form-control,
.ntvb-input-group > .ntvb-form-select {
  position: relative;
  flex: 1 1 auto;
  width: 1%;
  min-width: 0;
}
.ntvb-input-group > .ntvb-form-control:focus,
.ntvb-input-group > .ntvb-form-select:focus {
  z-index: 3;
}
.ntvb-input-group .ntvb-btn {
  position: relative;
  z-index: 2;
}
.ntvb-input-group .ntvb-btn:focus {
  z-index: 3;
}

.ntvb-input-group-text {
  display: flex;
  align-items: center;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: center;
  white-space: nowrap;
  background-color: #e9ecef;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
}

.ntvb-input-group-lg > .ntvb-form-control,
.ntvb-input-group-lg > .ntvb-form-select,
.ntvb-input-group-lg > .ntvb-input-group-text,
.ntvb-input-group-lg > .ntvb-btn {
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  border-radius: 0.3rem;
}

.ntvb-input-group-sm > .ntvb-form-control,
.ntvb-input-group-sm > .ntvb-form-select,
.ntvb-input-group-sm > .ntvb-input-group-text,
.ntvb-input-group-sm > .ntvb-btn {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  border-radius: 0.2rem;
}

.ntvb-input-group-lg > .ntvb-form-select,
.ntvb-input-group-sm > .ntvb-form-select {
  padding-right: 3rem;
}

.ntvb-input-group:not(.ntvb-has-validation) > :not(:last-child):not(.ntvb-dropdown-toggle):not(.ntvb-dropdown-menu),
.ntvb-input-group:not(.ntvb-has-validation) > .ntvb-dropdown-toggle:nth-last-child(n+3) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.ntvb-input-group.ntvb-has-validation > :nth-last-child(n+3):not(.ntvb-dropdown-toggle):not(.ntvb-dropdown-menu),
.ntvb-input-group.ntvb-has-validation > .ntvb-dropdown-toggle:nth-last-child(n+4) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.ntvb-input-group > :not(:first-child):not(.ntvb-dropdown-menu):not(.ntvb-valid-tooltip):not(.ntvb-valid-feedback):not(.ntvb-invalid-tooltip):not(.ntvb-invalid-feedback) {
  margin-left: -1px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.ntvb-valid-feedback {
  display: none;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 0.875em;
  color: #198754;
}

.ntvb-valid-tooltip {
  position: absolute;
  top: 100%;
  z-index: 5;
  display: none;
  max-width: 100%;
  padding: 0.25rem 0.5rem;
  margin-top: 0.1rem;
  font-size: 0.875rem;
  color: #fff;
  background-color: rgba(25, 135, 84, 0.9);
  border-radius: 0.25rem;
}

.ntvb-was-validated :valid ~ .ntvb-valid-feedback,
.ntvb-was-validated :valid ~ .ntvb-valid-tooltip,
.ntvb-is-valid ~ .ntvb-valid-feedback,
.ntvb-is-valid ~ .ntvb-valid-tooltip {
  display: block;
}

.ntvb-was-validated .ntvb-form-control:valid, .ntvb-form-control.ntvb-is-valid {
  border-color: #198754;
  padding-right: calc(1.5em + 0.75rem);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.ntvb-w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right calc(0.375em + 0.1875rem) center;
  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}
.ntvb-was-validated .ntvb-form-control:valid:focus, .ntvb-form-control.ntvb-is-valid:focus {
  border-color: #198754;
  box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25);
}

.ntvb-was-validated textarea.ntvb-form-control:valid, textarea.ntvb-form-control.ntvb-is-valid {
  padding-right: calc(1.5em + 0.75rem);
  background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);
}

.ntvb-was-validated .ntvb-form-select:valid, .ntvb-form-select.ntvb-is-valid {
  border-color: #198754;
}
.ntvb-was-validated .ntvb-form-select:valid:not([multiple]):not([size]), .ntvb-was-validated .ntvb-form-select:valid:not([multiple])[size="1"], .ntvb-form-select.ntvb-is-valid:not([multiple]):not([size]), .ntvb-form-select.ntvb-is-valid:not([multiple])[size="1"] {
  padding-right: 4.125rem;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.ntvb-w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e"), url("data:image/svg+xml,%3csvg xmlns='http://www.ntvb-w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
  background-position: right 0.75rem center, center right 2.25rem;
  background-size: 16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}
.ntvb-was-validated .ntvb-form-select:valid:focus, .ntvb-form-select.ntvb-is-valid:focus {
  border-color: #198754;
  box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25);
}

.ntvb-was-validated .ntvb-form-check-input:valid, .ntvb-form-check-input.ntvb-is-valid {
  border-color: #198754;
}
.ntvb-was-validated .ntvb-form-check-input:valid:checked, .ntvb-form-check-input.ntvb-is-valid:checked {
  background-color: #198754;
}
.ntvb-was-validated .ntvb-form-check-input:valid:focus, .ntvb-form-check-input.ntvb-is-valid:focus {
  box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25);
}
.ntvb-was-validated .ntvb-form-check-input:valid ~ .ntvb-form-check-label, .ntvb-form-check-input.ntvb-is-valid ~ .ntvb-form-check-label {
  color: #198754;
}

.ntvb-form-check-inline .ntvb-form-check-input ~ .ntvb-valid-feedback {
  margin-left: 0.5em;
}

.ntvb-was-validated .ntvb-input-group .ntvb-form-control:valid, .ntvb-input-group .ntvb-form-control.ntvb-is-valid,
.ntvb-was-validated .ntvb-input-group .ntvb-form-select:valid,
.ntvb-input-group .ntvb-form-select.ntvb-is-valid {
  z-index: 1;
}
.ntvb-was-validated .ntvb-input-group .ntvb-form-control:valid:focus, .ntvb-input-group .ntvb-form-control.ntvb-is-valid:focus,
.ntvb-was-validated .ntvb-input-group .ntvb-form-select:valid:focus,
.ntvb-input-group .ntvb-form-select.ntvb-is-valid:focus {
  z-index: 3;
}

.ntvb-invalid-feedback {
  display: none;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 0.875em;
  color: #dc3545;
}

.ntvb-invalid-tooltip {
  position: absolute;
  top: 100%;
  z-index: 5;
  display: none;
  max-width: 100%;
  padding: 0.25rem 0.5rem;
  margin-top: 0.1rem;
  font-size: 0.875rem;
  color: #fff;
  background-color: rgba(220, 53, 69, 0.9);
  border-radius: 0.25rem;
}

.ntvb-was-validated :invalid ~ .ntvb-invalid-feedback,
.ntvb-was-validated :invalid ~ .ntvb-invalid-tooltip,
.ntvb-is-invalid ~ .ntvb-invalid-feedback,
.ntvb-is-invalid ~ .ntvb-invalid-tooltip {
  display: block;
}

.ntvb-was-validated .ntvb-form-control:invalid, .ntvb-form-control.ntvb-is-invalid {
  border-color: #dc3545;
  padding-right: calc(1.5em + 0.75rem);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.ntvb-w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right calc(0.375em + 0.1875rem) center;
  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}
.ntvb-was-validated .ntvb-form-control:invalid:focus, .ntvb-form-control.ntvb-is-invalid:focus {
  border-color: #dc3545;
  box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);
}

.ntvb-was-validated textarea.ntvb-form-control:invalid, textarea.ntvb-form-control.ntvb-is-invalid {
  padding-right: calc(1.5em + 0.75rem);
  background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);
}

.ntvb-was-validated .ntvb-form-select:invalid, .ntvb-form-select.ntvb-is-invalid {
  border-color: #dc3545;
}
.ntvb-was-validated .ntvb-form-select:invalid:not([multiple]):not([size]), .ntvb-was-validated .ntvb-form-select:invalid:not([multiple])[size="1"], .ntvb-form-select.ntvb-is-invalid:not([multiple]):not([size]), .ntvb-form-select.ntvb-is-invalid:not([multiple])[size="1"] {
  padding-right: 4.125rem;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.ntvb-w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e"), url("data:image/svg+xml,%3csvg xmlns='http://www.ntvb-w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
  background-position: right 0.75rem center, center right 2.25rem;
  background-size: 16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}
.ntvb-was-validated .ntvb-form-select:invalid:focus, .ntvb-form-select.ntvb-is-invalid:focus {
  border-color: #dc3545;
  box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);
}

.ntvb-was-validated .ntvb-form-check-input:invalid, .ntvb-form-check-input.ntvb-is-invalid {
  border-color: #dc3545;
}
.ntvb-was-validated .ntvb-form-check-input:invalid:checked, .ntvb-form-check-input.ntvb-is-invalid:checked {
  background-color: #dc3545;
}
.ntvb-was-validated .ntvb-form-check-input:invalid:focus, .ntvb-form-check-input.ntvb-is-invalid:focus {
  box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);
}
.ntvb-was-validated .ntvb-form-check-input:invalid ~ .ntvb-form-check-label, .ntvb-form-check-input.ntvb-is-invalid ~ .ntvb-form-check-label {
  color: #dc3545;
}

.ntvb-form-check-inline .ntvb-form-check-input ~ .ntvb-invalid-feedback {
  margin-left: 0.5em;
}

.ntvb-was-validated .ntvb-input-group .ntvb-form-control:invalid, .ntvb-input-group .ntvb-form-control.ntvb-is-invalid,
.ntvb-was-validated .ntvb-input-group .ntvb-form-select:invalid,
.ntvb-input-group .ntvb-form-select.ntvb-is-invalid {
  z-index: 2;
}
.ntvb-was-validated .ntvb-input-group .ntvb-form-control:invalid:focus, .ntvb-input-group .ntvb-form-control.ntvb-is-invalid:focus,
.ntvb-was-validated .ntvb-input-group .ntvb-form-select:invalid:focus,
.ntvb-input-group .ntvb-form-select.ntvb-is-invalid:focus {
  z-index: 3;
}

.ntvb-btn {
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .ntvb-btn {
    transition: none;
  }
}
.ntvb-btn:hover {
  color: #212529;
}
.ntvb-btn-check:focus + .ntvb-btn, .ntvb-btn:focus {
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
.ntvb-btn:disabled, .ntvb-btn.ntvb-disabled, fieldset:disabled .ntvb-btn {
  pointer-events: none;
  opacity: 0.65;
}

.ntvb-btn-primary {
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
}
.ntvb-btn-primary:hover {
  color: #fff;
  background-color: #0b5ed7;
  border-color: #0a58ca;
}
.ntvb-btn-check:focus + .ntvb-btn-primary, .ntvb-btn-primary:focus {
  color: #fff;
  background-color: #0b5ed7;
  border-color: #0a58ca;
  box-shadow: 0 0 0 0.25rem rgba(49, 132, 253, 0.5);
}
.ntvb-btn-check:checked + .ntvb-btn-primary, .ntvb-btn-check:active + .ntvb-btn-primary, .ntvb-btn-primary:active, .ntvb-btn-primary.ntvb-active, .ntvb-show > .ntvb-btn-primary.ntvb-dropdown-toggle {
  color: #fff;
  background-color: #0a58ca;
  border-color: #0a53be;
}
.ntvb-btn-check:checked + .ntvb-btn-primary:focus, .ntvb-btn-check:active + .ntvb-btn-primary:focus, .ntvb-btn-primary:active:focus, .ntvb-btn-primary.ntvb-active:focus, .ntvb-show > .ntvb-btn-primary.ntvb-dropdown-toggle:focus {
  box-shadow: 0 0 0 0.25rem rgba(49, 132, 253, 0.5);
}
.ntvb-btn-primary:disabled, .ntvb-btn-primary.ntvb-disabled {
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
}

.ntvb-btn-secondary {
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
}
.ntvb-btn-secondary:hover {
  color: #fff;
  background-color: #5c636a;
  border-color: #565e64;
}
.ntvb-btn-check:focus + .ntvb-btn-secondary, .ntvb-btn-secondary:focus {
  color: #fff;
  background-color: #5c636a;
  border-color: #565e64;
  box-shadow: 0 0 0 0.25rem rgba(130, 138, 145, 0.5);
}
.ntvb-btn-check:checked + .ntvb-btn-secondary, .ntvb-btn-check:active + .ntvb-btn-secondary, .ntvb-btn-secondary:active, .ntvb-btn-secondary.ntvb-active, .ntvb-show > .ntvb-btn-secondary.ntvb-dropdown-toggle {
  color: #fff;
  background-color: #565e64;
  border-color: #51585e;
}
.ntvb-btn-check:checked + .ntvb-btn-secondary:focus, .ntvb-btn-check:active + .ntvb-btn-secondary:focus, .ntvb-btn-secondary:active:focus, .ntvb-btn-secondary.ntvb-active:focus, .ntvb-show > .ntvb-btn-secondary.ntvb-dropdown-toggle:focus {
  box-shadow: 0 0 0 0.25rem rgba(130, 138, 145, 0.5);
}
.ntvb-btn-secondary:disabled, .ntvb-btn-secondary.ntvb-disabled {
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
}

.ntvb-btn-success {
  color: #fff;
  background-color: #198754;
  border-color: #198754;
}
.ntvb-btn-success:hover {
  color: #fff;
  background-color: #157347;
  border-color: #146c43;
}
.ntvb-btn-check:focus + .ntvb-btn-success, .ntvb-btn-success:focus {
  color: #fff;
  background-color: #157347;
  border-color: #146c43;
  box-shadow: 0 0 0 0.25rem rgba(60, 153, 110, 0.5);
}
.ntvb-btn-check:checked + .ntvb-btn-success, .ntvb-btn-check:active + .ntvb-btn-success, .ntvb-btn-success:active, .ntvb-btn-success.ntvb-active, .ntvb-show > .ntvb-btn-success.ntvb-dropdown-toggle {
  color: #fff;
  background-color: #146c43;
  border-color: #13653f;
}
.ntvb-btn-check:checked + .ntvb-btn-success:focus, .ntvb-btn-check:active + .ntvb-btn-success:focus, .ntvb-btn-success:active:focus, .ntvb-btn-success.ntvb-active:focus, .ntvb-show > .ntvb-btn-success.ntvb-dropdown-toggle:focus {
  box-shadow: 0 0 0 0.25rem rgba(60, 153, 110, 0.5);
}
.ntvb-btn-success:disabled, .ntvb-btn-success.ntvb-disabled {
  color: #fff;
  background-color: #198754;
  border-color: #198754;
}

.ntvb-btn-info {
  color: #000;
  background-color: #0dcaf0;
  border-color: #0dcaf0;
}
.ntvb-btn-info:hover {
  color: #000;
  background-color: #31d2f2;
  border-color: #25cff2;
}
.ntvb-btn-check:focus + .ntvb-btn-info, .ntvb-btn-info:focus {
  color: #000;
  background-color: #31d2f2;
  border-color: #25cff2;
  box-shadow: 0 0 0 0.25rem rgba(11, 172, 204, 0.5);
}
.ntvb-btn-check:checked + .ntvb-btn-info, .ntvb-btn-check:active + .ntvb-btn-info, .ntvb-btn-info:active, .ntvb-btn-info.ntvb-active, .ntvb-show > .ntvb-btn-info.ntvb-dropdown-toggle {
  color: #000;
  background-color: #3dd5f3;
  border-color: #25cff2;
}
.ntvb-btn-check:checked + .ntvb-btn-info:focus, .ntvb-btn-check:active + .ntvb-btn-info:focus, .ntvb-btn-info:active:focus, .ntvb-btn-info.ntvb-active:focus, .ntvb-show > .ntvb-btn-info.ntvb-dropdown-toggle:focus {
  box-shadow: 0 0 0 0.25rem rgba(11, 172, 204, 0.5);
}
.ntvb-btn-info:disabled, .ntvb-btn-info.ntvb-disabled {
  color: #000;
  background-color: #0dcaf0;
  border-color: #0dcaf0;
}

.ntvb-btn-warning {
  color: #000;
  background-color: #ffc107;
  border-color: #ffc107;
}
.ntvb-btn-warning:hover {
  color: #000;
  background-color: #ffca2c;
  border-color: #ffc720;
}
.ntvb-btn-check:focus + .ntvb-btn-warning, .ntvb-btn-warning:focus {
  color: #000;
  background-color: #ffca2c;
  border-color: #ffc720;
  box-shadow: 0 0 0 0.25rem rgba(217, 164, 6, 0.5);
}
.ntvb-btn-check:checked + .ntvb-btn-warning, .ntvb-btn-check:active + .ntvb-btn-warning, .ntvb-btn-warning:active, .ntvb-btn-warning.ntvb-active, .ntvb-show > .ntvb-btn-warning.ntvb-dropdown-toggle {
  color: #000;
  background-color: #ffcd39;
  border-color: #ffc720;
}
.ntvb-btn-check:checked + .ntvb-btn-warning:focus, .ntvb-btn-check:active + .ntvb-btn-warning:focus, .ntvb-btn-warning:active:focus, .ntvb-btn-warning.ntvb-active:focus, .ntvb-show > .ntvb-btn-warning.ntvb-dropdown-toggle:focus {
  box-shadow: 0 0 0 0.25rem rgba(217, 164, 6, 0.5);
}
.ntvb-btn-warning:disabled, .ntvb-btn-warning.ntvb-disabled {
  color: #000;
  background-color: #ffc107;
  border-color: #ffc107;
}

.ntvb-btn-danger {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}
.ntvb-btn-danger:hover {
  color: #fff;
  background-color: #bb2d3b;
  border-color: #b02a37;
}
.ntvb-btn-check:focus + .ntvb-btn-danger, .ntvb-btn-danger:focus {
  color: #fff;
  background-color: #bb2d3b;
  border-color: #b02a37;
  box-shadow: 0 0 0 0.25rem rgba(225, 83, 97, 0.5);
}
.ntvb-btn-check:checked + .ntvb-btn-danger, .ntvb-btn-check:active + .ntvb-btn-danger, .ntvb-btn-danger:active, .ntvb-btn-danger.ntvb-active, .ntvb-show > .ntvb-btn-danger.ntvb-dropdown-toggle {
  color: #fff;
  background-color: #b02a37;
  border-color: #a52834;
}
.ntvb-btn-check:checked + .ntvb-btn-danger:focus, .ntvb-btn-check:active + .ntvb-btn-danger:focus, .ntvb-btn-danger:active:focus, .ntvb-btn-danger.ntvb-active:focus, .ntvb-show > .ntvb-btn-danger.ntvb-dropdown-toggle:focus {
  box-shadow: 0 0 0 0.25rem rgba(225, 83, 97, 0.5);
}
.ntvb-btn-danger:disabled, .ntvb-btn-danger.ntvb-disabled {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}

.ntvb-btn-light {
  color: #000;
  background-color: #f8f9fa;
  border-color: #f8f9fa;
}
.ntvb-btn-light:hover {
  color: #000;
  background-color: #f9fafb;
  border-color: #f9fafb;
}
.ntvb-btn-check:focus + .ntvb-btn-light, .ntvb-btn-light:focus {
  color: #000;
  background-color: #f9fafb;
  border-color: #f9fafb;
  box-shadow: 0 0 0 0.25rem rgba(211, 212, 213, 0.5);
}
.ntvb-btn-check:checked + .ntvb-btn-light, .ntvb-btn-check:active + .ntvb-btn-light, .ntvb-btn-light:active, .ntvb-btn-light.ntvb-active, .ntvb-show > .ntvb-btn-light.ntvb-dropdown-toggle {
  color: #000;
  background-color: #f9fafb;
  border-color: #f9fafb;
}
.ntvb-btn-check:checked + .ntvb-btn-light:focus, .ntvb-btn-check:active + .ntvb-btn-light:focus, .ntvb-btn-light:active:focus, .ntvb-btn-light.ntvb-active:focus, .ntvb-show > .ntvb-btn-light.ntvb-dropdown-toggle:focus {
  box-shadow: 0 0 0 0.25rem rgba(211, 212, 213, 0.5);
}
.ntvb-btn-light:disabled, .ntvb-btn-light.ntvb-disabled {
  color: #000;
  background-color: #f8f9fa;
  border-color: #f8f9fa;
}

.ntvb-btn-dark {
  color: #fff;
  background-color: #212529;
  border-color: #212529;
}
.ntvb-btn-dark:hover {
  color: #fff;
  background-color: #1c1f23;
  border-color: #1a1e21;
}
.ntvb-btn-check:focus + .ntvb-btn-dark, .ntvb-btn-dark:focus {
  color: #fff;
  background-color: #1c1f23;
  border-color: #1a1e21;
  box-shadow: 0 0 0 0.25rem rgba(66, 70, 73, 0.5);
}
.ntvb-btn-check:checked + .ntvb-btn-dark, .ntvb-btn-check:active + .ntvb-btn-dark, .ntvb-btn-dark:active, .ntvb-btn-dark.ntvb-active, .ntvb-show > .ntvb-btn-dark.ntvb-dropdown-toggle {
  color: #fff;
  background-color: #1a1e21;
  border-color: #191c1f;
}
.ntvb-btn-check:checked + .ntvb-btn-dark:focus, .ntvb-btn-check:active + .ntvb-btn-dark:focus, .ntvb-btn-dark:active:focus, .ntvb-btn-dark.ntvb-active:focus, .ntvb-show > .ntvb-btn-dark.ntvb-dropdown-toggle:focus {
  box-shadow: 0 0 0 0.25rem rgba(66, 70, 73, 0.5);
}
.ntvb-btn-dark:disabled, .ntvb-btn-dark.ntvb-disabled {
  color: #fff;
  background-color: #212529;
  border-color: #212529;
}

.ntvb-btn-outline-primary {
  color: #0d6efd;
  border-color: #0d6efd;
}
.ntvb-btn-outline-primary:hover {
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
}
.ntvb-btn-check:focus + .ntvb-btn-outline-primary, .ntvb-btn-outline-primary:focus {
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.5);
}
.ntvb-btn-check:checked + .ntvb-btn-outline-primary, .ntvb-btn-check:active + .ntvb-btn-outline-primary, .ntvb-btn-outline-primary:active, .ntvb-btn-outline-primary.ntvb-active, .ntvb-btn-outline-primary.ntvb-dropdown-toggle.ntvb-show {
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
}
.ntvb-btn-check:checked + .ntvb-btn-outline-primary:focus, .ntvb-btn-check:active + .ntvb-btn-outline-primary:focus, .ntvb-btn-outline-primary:active:focus, .ntvb-btn-outline-primary.ntvb-active:focus, .ntvb-btn-outline-primary.ntvb-dropdown-toggle.ntvb-show:focus {
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.5);
}
.ntvb-btn-outline-primary:disabled, .ntvb-btn-outline-primary.ntvb-disabled {
  color: #0d6efd;
  background-color: transparent;
}

.ntvb-btn-outline-secondary {
  color: #6c757d;
  border-color: #6c757d;
}
.ntvb-btn-outline-secondary:hover {
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
}
.ntvb-btn-check:focus + .ntvb-btn-outline-secondary, .ntvb-btn-outline-secondary:focus {
  box-shadow: 0 0 0 0.25rem rgba(108, 117, 125, 0.5);
}
.ntvb-btn-check:checked + .ntvb-btn-outline-secondary, .ntvb-btn-check:active + .ntvb-btn-outline-secondary, .ntvb-btn-outline-secondary:active, .ntvb-btn-outline-secondary.ntvb-active, .ntvb-btn-outline-secondary.ntvb-dropdown-toggle.ntvb-show {
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
}
.ntvb-btn-check:checked + .ntvb-btn-outline-secondary:focus, .ntvb-btn-check:active + .ntvb-btn-outline-secondary:focus, .ntvb-btn-outline-secondary:active:focus, .ntvb-btn-outline-secondary.ntvb-active:focus, .ntvb-btn-outline-secondary.ntvb-dropdown-toggle.ntvb-show:focus {
  box-shadow: 0 0 0 0.25rem rgba(108, 117, 125, 0.5);
}
.ntvb-btn-outline-secondary:disabled, .ntvb-btn-outline-secondary.ntvb-disabled {
  color: #6c757d;
  background-color: transparent;
}

.ntvb-btn-outline-success {
  color: #198754;
  border-color: #198754;
}
.ntvb-btn-outline-success:hover {
  color: #fff;
  background-color: #198754;
  border-color: #198754;
}
.ntvb-btn-check:focus + .ntvb-btn-outline-success, .ntvb-btn-outline-success:focus {
  box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.5);
}
.ntvb-btn-check:checked + .ntvb-btn-outline-success, .ntvb-btn-check:active + .ntvb-btn-outline-success, .ntvb-btn-outline-success:active, .ntvb-btn-outline-success.ntvb-active, .ntvb-btn-outline-success.ntvb-dropdown-toggle.ntvb-show {
  color: #fff;
  background-color: #198754;
  border-color: #198754;
}
.ntvb-btn-check:checked + .ntvb-btn-outline-success:focus, .ntvb-btn-check:active + .ntvb-btn-outline-success:focus, .ntvb-btn-outline-success:active:focus, .ntvb-btn-outline-success.ntvb-active:focus, .ntvb-btn-outline-success.ntvb-dropdown-toggle.ntvb-show:focus {
  box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.5);
}
.ntvb-btn-outline-success:disabled, .ntvb-btn-outline-success.ntvb-disabled {
  color: #198754;
  background-color: transparent;
}

.ntvb-btn-outline-info {
  color: #0dcaf0;
  border-color: #0dcaf0;
}
.ntvb-btn-outline-info:hover {
  color: #000;
  background-color: #0dcaf0;
  border-color: #0dcaf0;
}
.ntvb-btn-check:focus + .ntvb-btn-outline-info, .ntvb-btn-outline-info:focus {
  box-shadow: 0 0 0 0.25rem rgba(13, 202, 240, 0.5);
}
.ntvb-btn-check:checked + .ntvb-btn-outline-info, .ntvb-btn-check:active + .ntvb-btn-outline-info, .ntvb-btn-outline-info:active, .ntvb-btn-outline-info.ntvb-active, .ntvb-btn-outline-info.ntvb-dropdown-toggle.ntvb-show {
  color: #000;
  background-color: #0dcaf0;
  border-color: #0dcaf0;
}
.ntvb-btn-check:checked + .ntvb-btn-outline-info:focus, .ntvb-btn-check:active + .ntvb-btn-outline-info:focus, .ntvb-btn-outline-info:active:focus, .ntvb-btn-outline-info.ntvb-active:focus, .ntvb-btn-outline-info.ntvb-dropdown-toggle.ntvb-show:focus {
  box-shadow: 0 0 0 0.25rem rgba(13, 202, 240, 0.5);
}
.ntvb-btn-outline-info:disabled, .ntvb-btn-outline-info.ntvb-disabled {
  color: #0dcaf0;
  background-color: transparent;
}

.ntvb-btn-outline-warning {
  color: #ffc107;
  border-color: #ffc107;
}
.ntvb-btn-outline-warning:hover {
  color: #000;
  background-color: #ffc107;
  border-color: #ffc107;
}
.ntvb-btn-check:focus + .ntvb-btn-outline-warning, .ntvb-btn-outline-warning:focus {
  box-shadow: 0 0 0 0.25rem rgba(255, 193, 7, 0.5);
}
.ntvb-btn-check:checked + .ntvb-btn-outline-warning, .ntvb-btn-check:active + .ntvb-btn-outline-warning, .ntvb-btn-outline-warning:active, .ntvb-btn-outline-warning.ntvb-active, .ntvb-btn-outline-warning.ntvb-dropdown-toggle.ntvb-show {
  color: #000;
  background-color: #ffc107;
  border-color: #ffc107;
}
.ntvb-btn-check:checked + .ntvb-btn-outline-warning:focus, .ntvb-btn-check:active + .ntvb-btn-outline-warning:focus, .ntvb-btn-outline-warning:active:focus, .ntvb-btn-outline-warning.ntvb-active:focus, .ntvb-btn-outline-warning.ntvb-dropdown-toggle.ntvb-show:focus {
  box-shadow: 0 0 0 0.25rem rgba(255, 193, 7, 0.5);
}
.ntvb-btn-outline-warning:disabled, .ntvb-btn-outline-warning.ntvb-disabled {
  color: #ffc107;
  background-color: transparent;
}

.ntvb-btn-outline-danger {
  color: #dc3545;
  border-color: #dc3545;
}
.ntvb-btn-outline-danger:hover {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}
.ntvb-btn-check:focus + .ntvb-btn-outline-danger, .ntvb-btn-outline-danger:focus {
  box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.5);
}
.ntvb-btn-check:checked + .ntvb-btn-outline-danger, .ntvb-btn-check:active + .ntvb-btn-outline-danger, .ntvb-btn-outline-danger:active, .ntvb-btn-outline-danger.ntvb-active, .ntvb-btn-outline-danger.ntvb-dropdown-toggle.ntvb-show {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}
.ntvb-btn-check:checked + .ntvb-btn-outline-danger:focus, .ntvb-btn-check:active + .ntvb-btn-outline-danger:focus, .ntvb-btn-outline-danger:active:focus, .ntvb-btn-outline-danger.ntvb-active:focus, .ntvb-btn-outline-danger.ntvb-dropdown-toggle.ntvb-show:focus {
  box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.5);
}
.ntvb-btn-outline-danger:disabled, .ntvb-btn-outline-danger.ntvb-disabled {
  color: #dc3545;
  background-color: transparent;
}

.ntvb-btn-outline-light {
  color: #f8f9fa;
  border-color: #f8f9fa;
}
.ntvb-btn-outline-light:hover {
  color: #000;
  background-color: #f8f9fa;
  border-color: #f8f9fa;
}
.ntvb-btn-check:focus + .ntvb-btn-outline-light, .ntvb-btn-outline-light:focus {
  box-shadow: 0 0 0 0.25rem rgba(248, 249, 250, 0.5);
}
.ntvb-btn-check:checked + .ntvb-btn-outline-light, .ntvb-btn-check:active + .ntvb-btn-outline-light, .ntvb-btn-outline-light:active, .ntvb-btn-outline-light.ntvb-active, .ntvb-btn-outline-light.ntvb-dropdown-toggle.ntvb-show {
  color: #000;
  background-color: #f8f9fa;
  border-color: #f8f9fa;
}
.ntvb-btn-check:checked + .ntvb-btn-outline-light:focus, .ntvb-btn-check:active + .ntvb-btn-outline-light:focus, .ntvb-btn-outline-light:active:focus, .ntvb-btn-outline-light.ntvb-active:focus, .ntvb-btn-outline-light.ntvb-dropdown-toggle.ntvb-show:focus {
  box-shadow: 0 0 0 0.25rem rgba(248, 249, 250, 0.5);
}
.ntvb-btn-outline-light:disabled, .ntvb-btn-outline-light.ntvb-disabled {
  color: #f8f9fa;
  background-color: transparent;
}

.ntvb-btn-outline-dark {
  color: #212529;
  border-color: #212529;
}
.ntvb-btn-outline-dark:hover {
  color: #fff;
  background-color: #212529;
  border-color: #212529;
}
.ntvb-btn-check:focus + .ntvb-btn-outline-dark, .ntvb-btn-outline-dark:focus {
  box-shadow: 0 0 0 0.25rem rgba(33, 37, 41, 0.5);
}
.ntvb-btn-check:checked + .ntvb-btn-outline-dark, .ntvb-btn-check:active + .ntvb-btn-outline-dark, .ntvb-btn-outline-dark:active, .ntvb-btn-outline-dark.ntvb-active, .ntvb-btn-outline-dark.ntvb-dropdown-toggle.ntvb-show {
  color: #fff;
  background-color: #212529;
  border-color: #212529;
}
.ntvb-btn-check:checked + .ntvb-btn-outline-dark:focus, .ntvb-btn-check:active + .ntvb-btn-outline-dark:focus, .ntvb-btn-outline-dark:active:focus, .ntvb-btn-outline-dark.ntvb-active:focus, .ntvb-btn-outline-dark.ntvb-dropdown-toggle.ntvb-show:focus {
  box-shadow: 0 0 0 0.25rem rgba(33, 37, 41, 0.5);
}
.ntvb-btn-outline-dark:disabled, .ntvb-btn-outline-dark.ntvb-disabled {
  color: #212529;
  background-color: transparent;
}

.ntvb-btn-link {
  font-weight: 400;
  color: #0d6efd;
  text-decoration: underline;
}
.ntvb-btn-link:hover {
  color: #0a58ca;
}
.ntvb-btn-link:disabled, .ntvb-btn-link.ntvb-disabled {
  color: #6c757d;
}

.ntvb-btn-lg, .ntvb-btn-group-lg > .ntvb-btn {
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  border-radius: 0.3rem;
}

.ntvb-btn-sm, .ntvb-btn-group-sm > .ntvb-btn {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  border-radius: 0.2rem;
}

.ntvb-fade {
  transition: opacity 0.15s linear;
}
@media (prefers-reduced-motion: reduce) {
  .ntvb-fade {
    transition: none;
  }
}
.ntvb-fade:not(.ntvb-show) {
  opacity: 0;
}

.ntvb-collapse:not(.ntvb-show) {
  display: none;
}

.ntvb-collapsing {
  height: 0;
  overflow: hidden;
  transition: height 0.35s ease;
}
@media (prefers-reduced-motion: reduce) {
  .ntvb-collapsing {
    transition: none;
  }
}
.ntvb-collapsing.ntvb-collapse-horizontal {
  width: 0;
  height: auto;
  transition: width 0.35s ease;
}
@media (prefers-reduced-motion: reduce) {
  .ntvb-collapsing.ntvb-collapse-horizontal {
    transition: none;
  }
}

.ntvb-dropup,
.ntvb-dropend,
.ntvb-dropdown,
.ntvb-dropstart {
  position: relative;
}

.ntvb-dropdown-toggle {
  white-space: nowrap;
}
.ntvb-dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid;
  border-right: 0.3em solid transparent;
  border-bottom: 0;
  border-left: 0.3em solid transparent;
}
.ntvb-dropdown-toggle:empty::after {
  margin-left: 0;
}

.ntvb-dropdown-menu {
  position: absolute;
  z-index: 1000;
  display: none;
  min-width: 10rem;
  padding: 0.5rem 0;
  margin: 0;
  font-size: 1rem;
  color: #212529;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
}
.ntvb-dropdown-menu[data-bs-popper] {
  top: 100%;
  left: 0;
  margin-top: 0.125rem;
}

.ntvb-dropdown-menu-start {
  --ntvb-bs-position: start;
}
.ntvb-dropdown-menu-start[data-bs-popper] {
  right: auto;
  left: 0;
}

.ntvb-dropdown-menu-end {
  --ntvb-bs-position: end;
}
.ntvb-dropdown-menu-end[data-bs-popper] {
  right: 0;
  left: auto;
}

@media (min-width: 576px) {
  .ntvb-dropdown-menu-sm-start {
    --ntvb-bs-position: start;
  }
  .ntvb-dropdown-menu-sm-start[data-bs-popper] {
    right: auto;
    left: 0;
  }

  .ntvb-dropdown-menu-sm-end {
    --ntvb-bs-position: end;
  }
  .ntvb-dropdown-menu-sm-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
@media (min-width: 768px) {
  .ntvb-dropdown-menu-md-start {
    --ntvb-bs-position: start;
  }
  .ntvb-dropdown-menu-md-start[data-bs-popper] {
    right: auto;
    left: 0;
  }

  .ntvb-dropdown-menu-md-end {
    --ntvb-bs-position: end;
  }
  .ntvb-dropdown-menu-md-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
@media (min-width: 992px) {
  .ntvb-dropdown-menu-lg-start {
    --ntvb-bs-position: start;
  }
  .ntvb-dropdown-menu-lg-start[data-bs-popper] {
    right: auto;
    left: 0;
  }

  .ntvb-dropdown-menu-lg-end {
    --ntvb-bs-position: end;
  }
  .ntvb-dropdown-menu-lg-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
@media (min-width: 1200px) {
  .ntvb-dropdown-menu-xl-start {
    --ntvb-bs-position: start;
  }
  .ntvb-dropdown-menu-xl-start[data-bs-popper] {
    right: auto;
    left: 0;
  }

  .ntvb-dropdown-menu-xl-end {
    --ntvb-bs-position: end;
  }
  .ntvb-dropdown-menu-xl-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
@media (min-width: 1400px) {
  .ntvb-dropdown-menu-xxl-start {
    --ntvb-bs-position: start;
  }
  .ntvb-dropdown-menu-xxl-start[data-bs-popper] {
    right: auto;
    left: 0;
  }

  .ntvb-dropdown-menu-xxl-end {
    --ntvb-bs-position: end;
  }
  .ntvb-dropdown-menu-xxl-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
.ntvb-dropup .ntvb-dropdown-menu[data-bs-popper] {
  top: auto;
  bottom: 100%;
  margin-top: 0;
  margin-bottom: 0.125rem;
}
.ntvb-dropup .ntvb-dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0;
  border-right: 0.3em solid transparent;
  border-bottom: 0.3em solid;
  border-left: 0.3em solid transparent;
}
.ntvb-dropup .ntvb-dropdown-toggle:empty::after {
  margin-left: 0;
}

.ntvb-dropend .ntvb-dropdown-menu[data-bs-popper] {
  top: 0;
  right: auto;
  left: 100%;
  margin-top: 0;
  margin-left: 0.125rem;
}
.ntvb-dropend .ntvb-dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid transparent;
  border-right: 0;
  border-bottom: 0.3em solid transparent;
  border-left: 0.3em solid;
}
.ntvb-dropend .ntvb-dropdown-toggle:empty::after {
  margin-left: 0;
}
.ntvb-dropend .ntvb-dropdown-toggle::after {
  vertical-align: 0;
}

.ntvb-dropstart .ntvb-dropdown-menu[data-bs-popper] {
  top: 0;
  right: 100%;
  left: auto;
  margin-top: 0;
  margin-right: 0.125rem;
}
.ntvb-dropstart .ntvb-dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
}
.ntvb-dropstart .ntvb-dropdown-toggle::after {
  display: none;
}
.ntvb-dropstart .ntvb-dropdown-toggle::before {
  display: inline-block;
  margin-right: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid transparent;
  border-right: 0.3em solid;
  border-bottom: 0.3em solid transparent;
}
.ntvb-dropstart .ntvb-dropdown-toggle:empty::after {
  margin-left: 0;
}
.ntvb-dropstart .ntvb-dropdown-toggle::before {
  vertical-align: 0;
}

.ntvb-dropdown-divider {
  height: 0;
  margin: 0.5rem 0;
  overflow: hidden;
  border-top: 1px solid rgba(0, 0, 0, 0.15);
}

.ntvb-dropdown-item {
  display: block;
  width: 100%;
  padding: 0.25rem 1rem;
  clear: both;
  font-weight: 400;
  color: #212529;
  text-align: inherit;
  text-decoration: none;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
}
.ntvb-dropdown-item:hover, .ntvb-dropdown-item:focus {
  color: #1e2125;
  background-color: #e9ecef;
}
.ntvb-dropdown-item.ntvb-active, .ntvb-dropdown-item:active {
  color: #fff;
  text-decoration: none;
  background-color: #0d6efd;
}
.ntvb-dropdown-item.ntvb-disabled, .ntvb-dropdown-item:disabled {
  color: #adb5bd;
  pointer-events: none;
  background-color: transparent;
}

.ntvb-dropdown-menu.ntvb-show {
  display: block;
}

.ntvb-dropdown-header {
  display: block;
  padding: 0.5rem 1rem;
  margin-bottom: 0;
  font-size: 0.875rem;
  color: #6c757d;
  white-space: nowrap;
}

.ntvb-dropdown-item-text {
  display: block;
  padding: 0.25rem 1rem;
  color: #212529;
}

.ntvb-dropdown-menu-dark {
  color: #dee2e6;
  background-color: #343a40;
  border-color: rgba(0, 0, 0, 0.15);
}
.ntvb-dropdown-menu-dark .ntvb-dropdown-item {
  color: #dee2e6;
}
.ntvb-dropdown-menu-dark .ntvb-dropdown-item:hover, .ntvb-dropdown-menu-dark .ntvb-dropdown-item:focus {
  color: #fff;
  background-color: rgba(255, 255, 255, 0.15);
}
.ntvb-dropdown-menu-dark .ntvb-dropdown-item.ntvb-active, .ntvb-dropdown-menu-dark .ntvb-dropdown-item:active {
  color: #fff;
  background-color: #0d6efd;
}
.ntvb-dropdown-menu-dark .ntvb-dropdown-item.ntvb-disabled, .ntvb-dropdown-menu-dark .ntvb-dropdown-item:disabled {
  color: #adb5bd;
}
.ntvb-dropdown-menu-dark .ntvb-dropdown-divider {
  border-color: rgba(0, 0, 0, 0.15);
}
.ntvb-dropdown-menu-dark .ntvb-dropdown-item-text {
  color: #dee2e6;
}
.ntvb-dropdown-menu-dark .ntvb-dropdown-header {
  color: #adb5bd;
}

.ntvb-btn-group,
.ntvb-btn-group-vertical {
  position: relative;
  display: inline-flex;
  vertical-align: middle;
}
.ntvb-btn-group > .ntvb-btn,
.ntvb-btn-group-vertical > .ntvb-btn {
  position: relative;
  flex: 1 1 auto;
}
.ntvb-btn-group > .ntvb-btn-check:checked + .ntvb-btn,
.ntvb-btn-group > .ntvb-btn-check:focus + .ntvb-btn,
.ntvb-btn-group > .ntvb-btn:hover,
.ntvb-btn-group > .ntvb-btn:focus,
.ntvb-btn-group > .ntvb-btn:active,
.ntvb-btn-group > .ntvb-btn.ntvb-active,
.ntvb-btn-group-vertical > .ntvb-btn-check:checked + .ntvb-btn,
.ntvb-btn-group-vertical > .ntvb-btn-check:focus + .ntvb-btn,
.ntvb-btn-group-vertical > .ntvb-btn:hover,
.ntvb-btn-group-vertical > .ntvb-btn:focus,
.ntvb-btn-group-vertical > .ntvb-btn:active,
.ntvb-btn-group-vertical > .ntvb-btn.ntvb-active {
  z-index: 1;
}

.ntvb-btn-toolbar {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.ntvb-btn-toolbar .ntvb-input-group {
  width: auto;
}

.ntvb-btn-group > .ntvb-btn:not(:first-child),
.ntvb-btn-group > .ntvb-btn-group:not(:first-child) {
  margin-left: -1px;
}
.ntvb-btn-group > .ntvb-btn:not(:last-child):not(.ntvb-dropdown-toggle),
.ntvb-btn-group > .ntvb-btn-group:not(:last-child) > .ntvb-btn {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.ntvb-btn-group > .ntvb-btn:nth-child(n+3),
.ntvb-btn-group > :not(.ntvb-btn-check) + .ntvb-btn,
.ntvb-btn-group > .ntvb-btn-group:not(:first-child) > .ntvb-btn {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.ntvb-dropdown-toggle-split {
  padding-right: 0.5625rem;
  padding-left: 0.5625rem;
}
.ntvb-dropdown-toggle-split::after, .ntvb-dropup .ntvb-dropdown-toggle-split::after, .ntvb-dropend .ntvb-dropdown-toggle-split::after {
  margin-left: 0;
}
.ntvb-dropstart .ntvb-dropdown-toggle-split::before {
  margin-right: 0;
}

.ntvb-btn-sm + .ntvb-dropdown-toggle-split, .ntvb-btn-group-sm > .ntvb-btn + .ntvb-dropdown-toggle-split {
  padding-right: 0.375rem;
  padding-left: 0.375rem;
}

.ntvb-btn-lg + .ntvb-dropdown-toggle-split, .ntvb-btn-group-lg > .ntvb-btn + .ntvb-dropdown-toggle-split {
  padding-right: 0.75rem;
  padding-left: 0.75rem;
}

.ntvb-btn-group-vertical {
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.ntvb-btn-group-vertical > .ntvb-btn,
.ntvb-btn-group-vertical > .ntvb-btn-group {
  width: 100%;
}
.ntvb-btn-group-vertical > .ntvb-btn:not(:first-child),
.ntvb-btn-group-vertical > .ntvb-btn-group:not(:first-child) {
  margin-top: -1px;
}
.ntvb-btn-group-vertical > .ntvb-btn:not(:last-child):not(.ntvb-dropdown-toggle),
.ntvb-btn-group-vertical > .ntvb-btn-group:not(:last-child) > .ntvb-btn {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.ntvb-btn-group-vertical > .ntvb-btn ~ .ntvb-btn,
.ntvb-btn-group-vertical > .ntvb-btn-group:not(:first-child) > .ntvb-btn {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.ntvb-nav {
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}

.ntvb-nav-link {
  display: block;
  padding: 0.5rem 1rem;
  color: #0d6efd;
  text-decoration: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .ntvb-nav-link {
    transition: none;
  }
}
.ntvb-nav-link:hover, .ntvb-nav-link:focus {
  color: #0a58ca;
}
.ntvb-nav-link.ntvb-disabled {
  color: #6c757d;
  pointer-events: none;
  cursor: default;
}

.ntvb-nav-tabs {
  border-bottom: 1px solid #dee2e6;
}
.ntvb-nav-tabs .ntvb-nav-link {
  margin-bottom: -1px;
  background: none;
  border: 1px solid transparent;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}
.ntvb-nav-tabs .ntvb-nav-link:hover, .ntvb-nav-tabs .ntvb-nav-link:focus {
  border-color: #e9ecef #e9ecef #dee2e6;
  isolation: isolate;
}
.ntvb-nav-tabs .ntvb-nav-link.ntvb-disabled {
  color: #6c757d;
  background-color: transparent;
  border-color: transparent;
}
.ntvb-nav-tabs .ntvb-nav-link.ntvb-active,
.ntvb-nav-tabs .ntvb-nav-item.ntvb-show .ntvb-nav-link {
  color: #495057;
  background-color: #fff;
  border-color: #dee2e6 #dee2e6 #fff;
}
.ntvb-nav-tabs .ntvb-dropdown-menu {
  margin-top: -1px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.ntvb-nav-pills .ntvb-nav-link {
  background: none;
  border: 0;
  border-radius: 0.25rem;
}
.ntvb-nav-pills .ntvb-nav-link.ntvb-active,
.ntvb-nav-pills .ntvb-show > .ntvb-nav-link {
  color: #fff;
  background-color: #0d6efd;
}

.ntvb-nav-fill > .ntvb-nav-link,
.ntvb-nav-fill .ntvb-nav-item {
  flex: 1 1 auto;
  text-align: center;
}

.ntvb-nav-justified > .ntvb-nav-link,
.ntvb-nav-justified .ntvb-nav-item {
  flex-basis: 0;
  flex-grow: 1;
  text-align: center;
}

.ntvb-nav-fill .ntvb-nav-item .ntvb-nav-link,
.ntvb-nav-justified .ntvb-nav-item .ntvb-nav-link {
  width: 100%;
}

.ntvb-tab-content > .ntvb-tab-pane {
  display: none;
}
.ntvb-tab-content > .ntvb-active {
  display: block;
}

.ntvb-navbar {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.ntvb-navbar > .ntvb-container,
.ntvb-navbar > .ntvb-container-fluid,
.ntvb-navbar > .ntvb-container-sm,
.ntvb-navbar > .ntvb-container-md,
.ntvb-navbar > .ntvb-container-lg,
.ntvb-navbar > .ntvb-container-xl,
.ntvb-navbar > .ntvb-container-xxl {
  display: flex;
  flex-wrap: inherit;
  align-items: center;
  justify-content: space-between;
}
.ntvb-navbar-brand {
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  margin-right: 1rem;
  font-size: 1.25rem;
  text-decoration: none;
  white-space: nowrap;
}
.ntvb-navbar-nav {
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}
.ntvb-navbar-nav .ntvb-nav-link {
  padding-right: 0;
  padding-left: 0;
}
.ntvb-navbar-nav .ntvb-dropdown-menu {
  position: static;
}

.ntvb-navbar-text {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.ntvb-navbar-collapse {
  flex-basis: 100%;
  flex-grow: 1;
  align-items: center;
}

.ntvb-navbar-toggler {
  padding: 0.25rem 0.75rem;
  font-size: 1.25rem;
  line-height: 1;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  transition: box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .ntvb-navbar-toggler {
    transition: none;
  }
}
.ntvb-navbar-toggler:hover {
  text-decoration: none;
}
.ntvb-navbar-toggler:focus {
  text-decoration: none;
  outline: 0;
  box-shadow: 0 0 0 0.25rem;
}

.ntvb-navbar-toggler-icon {
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  vertical-align: middle;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
}

.ntvb-navbar-nav-scroll {
  max-height: var(--ntvb-bs-scroll-height, 75vh);
  overflow-y: auto;
}

@media (min-width: 576px) {
  .ntvb-navbar-expand-sm {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .ntvb-navbar-expand-sm .ntvb-navbar-nav {
    flex-direction: row;
  }
  .ntvb-navbar-expand-sm .ntvb-navbar-nav .ntvb-dropdown-menu {
    position: absolute;
  }
  .ntvb-navbar-expand-sm .ntvb-navbar-nav .ntvb-nav-link {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
  .ntvb-navbar-expand-sm .ntvb-navbar-nav-scroll {
    overflow: visible;
  }
  .ntvb-navbar-expand-sm .ntvb-navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .ntvb-navbar-expand-sm .ntvb-navbar-toggler {
    display: none;
  }
  .ntvb-navbar-expand-sm .ntvb-offcanvas-header {
    display: none;
  }
  .ntvb-navbar-expand-sm .ntvb-offcanvas {
    position: inherit;
    bottom: 0;
    z-index: 1000;
    flex-grow: 1;
    visibility: visible !important;
    background-color: transparent;
    border-right: 0;
    border-left: 0;
    transition: none;
    transform: none;
  }
  .ntvb-navbar-expand-sm .ntvb-offcanvas-top,
.ntvb-navbar-expand-sm .ntvb-offcanvas-bottom {
    height: auto;
    border-top: 0;
    border-bottom: 0;
  }
  .ntvb-navbar-expand-sm .ntvb-offcanvas-body {
    display: flex;
    flex-grow: 0;
    padding: 0;
    overflow-y: visible;
  }
}
@media (min-width: 768px) {
  .ntvb-navbar-expand-md {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .ntvb-navbar-expand-md .ntvb-navbar-nav {
    flex-direction: row;
  }
  .ntvb-navbar-expand-md .ntvb-navbar-nav .ntvb-dropdown-menu {
    position: absolute;
  }
  .ntvb-navbar-expand-md .ntvb-navbar-nav .ntvb-nav-link {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
  .ntvb-navbar-expand-md .ntvb-navbar-nav-scroll {
    overflow: visible;
  }
  .ntvb-navbar-expand-md .ntvb-navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .ntvb-navbar-expand-md .ntvb-navbar-toggler {
    display: none;
  }
  .ntvb-navbar-expand-md .ntvb-offcanvas-header {
    display: none;
  }
  .ntvb-navbar-expand-md .ntvb-offcanvas {
    position: inherit;
    bottom: 0;
    z-index: 1000;
    flex-grow: 1;
    visibility: visible !important;
    background-color: transparent;
    border-right: 0;
    border-left: 0;
    transition: none;
    transform: none;
  }
  .ntvb-navbar-expand-md .ntvb-offcanvas-top,
.ntvb-navbar-expand-md .ntvb-offcanvas-bottom {
    height: auto;
    border-top: 0;
    border-bottom: 0;
  }
  .ntvb-navbar-expand-md .ntvb-offcanvas-body {
    display: flex;
    flex-grow: 0;
    padding: 0;
    overflow-y: visible;
  }
}
@media (min-width: 992px) {
  .ntvb-navbar-expand-lg {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .ntvb-navbar-expand-lg .ntvb-navbar-nav {
    flex-direction: row;
  }
  .ntvb-navbar-expand-lg .ntvb-navbar-nav .ntvb-dropdown-menu {
    position: absolute;
  }
  .ntvb-navbar-expand-lg .ntvb-navbar-nav .ntvb-nav-link {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
  .ntvb-navbar-expand-lg .ntvb-navbar-nav-scroll {
    overflow: visible;
  }
  .ntvb-navbar-expand-lg .ntvb-navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .ntvb-navbar-expand-lg .ntvb-navbar-toggler {
    display: none;
  }
  .ntvb-navbar-expand-lg .ntvb-offcanvas-header {
    display: none;
  }
  .ntvb-navbar-expand-lg .ntvb-offcanvas {
    position: inherit;
    bottom: 0;
    z-index: 1000;
    flex-grow: 1;
    visibility: visible !important;
    background-color: transparent;
    border-right: 0;
    border-left: 0;
    transition: none;
    transform: none;
  }
  .ntvb-navbar-expand-lg .ntvb-offcanvas-top,
.ntvb-navbar-expand-lg .ntvb-offcanvas-bottom {
    height: auto;
    border-top: 0;
    border-bottom: 0;
  }
  .ntvb-navbar-expand-lg .ntvb-offcanvas-body {
    display: flex;
    flex-grow: 0;
    padding: 0;
    overflow-y: visible;
  }
}
@media (min-width: 1200px) {
  .ntvb-navbar-expand-xl {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .ntvb-navbar-expand-xl .ntvb-navbar-nav {
    flex-direction: row;
  }
  .ntvb-navbar-expand-xl .ntvb-navbar-nav .ntvb-dropdown-menu {
    position: absolute;
  }
  .ntvb-navbar-expand-xl .ntvb-navbar-nav .ntvb-nav-link {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
  .ntvb-navbar-expand-xl .ntvb-navbar-nav-scroll {
    overflow: visible;
  }
  .ntvb-navbar-expand-xl .ntvb-navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .ntvb-navbar-expand-xl .ntvb-navbar-toggler {
    display: none;
  }
  .ntvb-navbar-expand-xl .ntvb-offcanvas-header {
    display: none;
  }
  .ntvb-navbar-expand-xl .ntvb-offcanvas {
    position: inherit;
    bottom: 0;
    z-index: 1000;
    flex-grow: 1;
    visibility: visible !important;
    background-color: transparent;
    border-right: 0;
    border-left: 0;
    transition: none;
    transform: none;
  }
  .ntvb-navbar-expand-xl .ntvb-offcanvas-top,
.ntvb-navbar-expand-xl .ntvb-offcanvas-bottom {
    height: auto;
    border-top: 0;
    border-bottom: 0;
  }
  .ntvb-navbar-expand-xl .ntvb-offcanvas-body {
    display: flex;
    flex-grow: 0;
    padding: 0;
    overflow-y: visible;
  }
}
@media (min-width: 1400px) {
  .ntvb-navbar-expand-xxl {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .ntvb-navbar-expand-xxl .ntvb-navbar-nav {
    flex-direction: row;
  }
  .ntvb-navbar-expand-xxl .ntvb-navbar-nav .ntvb-dropdown-menu {
    position: absolute;
  }
  .ntvb-navbar-expand-xxl .ntvb-navbar-nav .ntvb-nav-link {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
  .ntvb-navbar-expand-xxl .ntvb-navbar-nav-scroll {
    overflow: visible;
  }
  .ntvb-navbar-expand-xxl .ntvb-navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .ntvb-navbar-expand-xxl .ntvb-navbar-toggler {
    display: none;
  }
  .ntvb-navbar-expand-xxl .ntvb-offcanvas-header {
    display: none;
  }
  .ntvb-navbar-expand-xxl .ntvb-offcanvas {
    position: inherit;
    bottom: 0;
    z-index: 1000;
    flex-grow: 1;
    visibility: visible !important;
    background-color: transparent;
    border-right: 0;
    border-left: 0;
    transition: none;
    transform: none;
  }
  .ntvb-navbar-expand-xxl .ntvb-offcanvas-top,
.ntvb-navbar-expand-xxl .ntvb-offcanvas-bottom {
    height: auto;
    border-top: 0;
    border-bottom: 0;
  }
  .ntvb-navbar-expand-xxl .ntvb-offcanvas-body {
    display: flex;
    flex-grow: 0;
    padding: 0;
    overflow-y: visible;
  }
}
.ntvb-navbar-expand {
  flex-wrap: nowrap;
  justify-content: flex-start;
}
.ntvb-navbar-expand .ntvb-navbar-nav {
  flex-direction: row;
}
.ntvb-navbar-expand .ntvb-navbar-nav .ntvb-dropdown-menu {
  position: absolute;
}
.ntvb-navbar-expand .ntvb-navbar-nav .ntvb-nav-link {
  padding-right: 0.5rem;
  padding-left: 0.5rem;
}
.ntvb-navbar-expand .ntvb-navbar-nav-scroll {
  overflow: visible;
}
.ntvb-navbar-expand .ntvb-navbar-collapse {
  display: flex !important;
  flex-basis: auto;
}
.ntvb-navbar-expand .ntvb-navbar-toggler {
  display: none;
}
.ntvb-navbar-expand .ntvb-offcanvas-header {
  display: none;
}
.ntvb-navbar-expand .ntvb-offcanvas {
  position: inherit;
  bottom: 0;
  z-index: 1000;
  flex-grow: 1;
  visibility: visible !important;
  background-color: transparent;
  border-right: 0;
  border-left: 0;
  transition: none;
  transform: none;
}
.ntvb-navbar-expand .ntvb-offcanvas-top,
.ntvb-navbar-expand .ntvb-offcanvas-bottom {
  height: auto;
  border-top: 0;
  border-bottom: 0;
}
.ntvb-navbar-expand .ntvb-offcanvas-body {
  display: flex;
  flex-grow: 0;
  padding: 0;
  overflow-y: visible;
}

.ntvb-navbar-light .ntvb-navbar-brand {
  color: rgba(0, 0, 0, 0.9);
}
.ntvb-navbar-light .ntvb-navbar-brand:hover, .ntvb-navbar-light .ntvb-navbar-brand:focus {
  color: rgba(0, 0, 0, 0.9);
}
.ntvb-navbar-light .ntvb-navbar-nav .ntvb-nav-link {
  color: rgba(0, 0, 0, 0.55);
}
.ntvb-navbar-light .ntvb-navbar-nav .ntvb-nav-link:hover, .ntvb-navbar-light .ntvb-navbar-nav .ntvb-nav-link:focus {
  color: rgba(0, 0, 0, 0.7);
}
.ntvb-navbar-light .ntvb-navbar-nav .ntvb-nav-link.ntvb-disabled {
  color: rgba(0, 0, 0, 0.3);
}
.ntvb-navbar-light .ntvb-navbar-nav .ntvb-show > .ntvb-nav-link,
.ntvb-navbar-light .ntvb-navbar-nav .ntvb-nav-link.ntvb-active {
  color: rgba(0, 0, 0, 0.9);
}
.ntvb-navbar-light .ntvb-navbar-toggler {
  color: rgba(0, 0, 0, 0.55);
  border-color: rgba(0, 0, 0, 0.1);
}
.ntvb-navbar-light .ntvb-navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.ntvb-w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}
.ntvb-navbar-light .ntvb-navbar-text {
  color: rgba(0, 0, 0, 0.55);
}
.ntvb-navbar-light .ntvb-navbar-text a,
.ntvb-navbar-light .ntvb-navbar-text a:hover,
.ntvb-navbar-light .ntvb-navbar-text a:focus {
  color: rgba(0, 0, 0, 0.9);
}

.ntvb-navbar-dark .ntvb-navbar-brand {
  color: #fff;
}
.ntvb-navbar-dark .ntvb-navbar-brand:hover, .ntvb-navbar-dark .ntvb-navbar-brand:focus {
  color: #fff;
}
.ntvb-navbar-dark .ntvb-navbar-nav .ntvb-nav-link {
  color: rgba(255, 255, 255, 0.55);
}
.ntvb-navbar-dark .ntvb-navbar-nav .ntvb-nav-link:hover, .ntvb-navbar-dark .ntvb-navbar-nav .ntvb-nav-link:focus {
  color: rgba(255, 255, 255, 0.75);
}
.ntvb-navbar-dark .ntvb-navbar-nav .ntvb-nav-link.ntvb-disabled {
  color: rgba(255, 255, 255, 0.25);
}
.ntvb-navbar-dark .ntvb-navbar-nav .ntvb-show > .ntvb-nav-link,
.ntvb-navbar-dark .ntvb-navbar-nav .ntvb-nav-link.ntvb-active {
  color: #fff;
}
.ntvb-navbar-dark .ntvb-navbar-toggler {
  color: rgba(255, 255, 255, 0.55);
  border-color: rgba(255, 255, 255, 0.1);
}
.ntvb-navbar-dark .ntvb-navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.ntvb-w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}
.ntvb-navbar-dark .ntvb-navbar-text {
  color: rgba(255, 255, 255, 0.55);
}
.ntvb-navbar-dark .ntvb-navbar-text a,
.ntvb-navbar-dark .ntvb-navbar-text a:hover,
.ntvb-navbar-dark .ntvb-navbar-text a:focus {
  color: #fff;
}

.ntvb-card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
}
.ntvb-card > hr {
  margin-right: 0;
  margin-left: 0;
}
.ntvb-card > .ntvb-list-group {
  border-top: inherit;
  border-bottom: inherit;
}
.ntvb-card > .ntvb-list-group:first-child {
  border-top-width: 0;
  border-top-left-radius: calc(0.25rem - 1px);
  border-top-right-radius: calc(0.25rem - 1px);
}
.ntvb-card > .ntvb-list-group:last-child {
  border-bottom-width: 0;
  border-bottom-right-radius: calc(0.25rem - 1px);
  border-bottom-left-radius: calc(0.25rem - 1px);
}
.ntvb-card > .ntvb-card-header + .ntvb-list-group,
.ntvb-card > .ntvb-list-group + .ntvb-card-footer {
  border-top: 0;
}

.ntvb-card-body {
  flex: 1 1 auto;
  padding: 1rem 1rem;
}

.ntvb-card-title {
  margin-bottom: 0.5rem;
}

.ntvb-card-subtitle {
  margin-top: -0.25rem;
  margin-bottom: 0;
}

.ntvb-card-text:last-child {
  margin-bottom: 0;
}

.ntvb-card-link + .ntvb-card-link {
  margin-left: 1rem;
}

.ntvb-card-header {
  padding: 0.5rem 1rem;
  margin-bottom: 0;
  background-color: rgba(0, 0, 0, 0.03);
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
}
.ntvb-card-header:first-child {
  border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;
}

.ntvb-card-footer {
  padding: 0.5rem 1rem;
  background-color: rgba(0, 0, 0, 0.03);
  border-top: 1px solid rgba(0, 0, 0, 0.125);
}
.ntvb-card-footer:last-child {
  border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px);
}

.ntvb-card-header-tabs {
  margin-right: -0.5rem;
  margin-bottom: -0.5rem;
  margin-left: -0.5rem;
  border-bottom: 0;
}

.ntvb-card-header-pills {
  margin-right: -0.5rem;
  margin-left: -0.5rem;
}

.ntvb-card-img-overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1rem;
  border-radius: calc(0.25rem - 1px);
}

.ntvb-card-img,
.ntvb-card-img-top,
.ntvb-card-img-bottom {
  width: 100%;
}

.ntvb-card-img,
.ntvb-card-img-top {
  border-top-left-radius: calc(0.25rem - 1px);
  border-top-right-radius: calc(0.25rem - 1px);
}

.ntvb-card-img,
.ntvb-card-img-bottom {
  border-bottom-right-radius: calc(0.25rem - 1px);
  border-bottom-left-radius: calc(0.25rem - 1px);
}

.ntvb-card-group > .ntvb-card {
  margin-bottom: 0.75rem;
}
@media (min-width: 576px) {
  .ntvb-card-group {
    display: flex;
    flex-flow: row wrap;
  }
  .ntvb-card-group > .ntvb-card {
    flex: 1 0 0%;
    margin-bottom: 0;
  }
  .ntvb-card-group > .ntvb-card + .ntvb-card {
    margin-left: 0;
    border-left: 0;
  }
  .ntvb-card-group > .ntvb-card:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .ntvb-card-group > .ntvb-card:not(:last-child) .ntvb-card-img-top,
.ntvb-card-group > .ntvb-card:not(:last-child) .ntvb-card-header {
    border-top-right-radius: 0;
  }
  .ntvb-card-group > .ntvb-card:not(:last-child) .ntvb-card-img-bottom,
.ntvb-card-group > .ntvb-card:not(:last-child) .ntvb-card-footer {
    border-bottom-right-radius: 0;
  }
  .ntvb-card-group > .ntvb-card:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  .ntvb-card-group > .ntvb-card:not(:first-child) .ntvb-card-img-top,
.ntvb-card-group > .ntvb-card:not(:first-child) .ntvb-card-header {
    border-top-left-radius: 0;
  }
  .ntvb-card-group > .ntvb-card:not(:first-child) .ntvb-card-img-bottom,
.ntvb-card-group > .ntvb-card:not(:first-child) .ntvb-card-footer {
    border-bottom-left-radius: 0;
  }
}

.ntvb-accordion-button {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1rem 1.25rem;
  font-size: 1rem;
  color: #212529;
  text-align: left;
  background-color: #fff;
  border: 0;
  border-radius: 0;
  overflow-anchor: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, border-radius 0.15s ease;
}
@media (prefers-reduced-motion: reduce) {
  .ntvb-accordion-button {
    transition: none;
  }
}
.ntvb-accordion-button:not(.ntvb-collapsed) {
  color: #0c63e4;
  background-color: #e7f1ff;
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.125);
}
.ntvb-accordion-button:not(.ntvb-collapsed)::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.ntvb-w3.org/2000/svg' viewBox='0 0 16 16' fill='%230c63e4'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
  transform: rotate(-180deg);
}
.ntvb-accordion-button::after {
  flex-shrink: 0;
  width: 1.25rem;
  height: 1.25rem;
  margin-left: auto;
  content: "";
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.ntvb-w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-size: 1.25rem;
  transition: transform 0.2s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .ntvb-accordion-button::after {
    transition: none;
  }
}
.ntvb-accordion-button:hover {
  z-index: 2;
}
.ntvb-accordion-button:focus {
  z-index: 3;
  border-color: #86b7fe;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}

.ntvb-accordion-header {
  margin-bottom: 0;
}

.ntvb-accordion-item {
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
}
.ntvb-accordion-item:first-of-type {
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}
.ntvb-accordion-item:first-of-type .ntvb-accordion-button {
  border-top-left-radius: calc(0.25rem - 1px);
  border-top-right-radius: calc(0.25rem - 1px);
}
.ntvb-accordion-item:not(:first-of-type) {
  border-top: 0;
}
.ntvb-accordion-item:last-of-type {
  border-bottom-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}
.ntvb-accordion-item:last-of-type .ntvb-accordion-button.ntvb-collapsed {
  border-bottom-right-radius: calc(0.25rem - 1px);
  border-bottom-left-radius: calc(0.25rem - 1px);
}
.ntvb-accordion-item:last-of-type .ntvb-accordion-collapse {
  border-bottom-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}

.ntvb-accordion-body {
  padding: 1rem 1.25rem;
}

.ntvb-accordion-flush .ntvb-accordion-collapse {
  border-width: 0;
}
.ntvb-accordion-flush .ntvb-accordion-item {
  border-right: 0;
  border-left: 0;
  border-radius: 0;
}
.ntvb-accordion-flush .ntvb-accordion-item:first-child {
  border-top: 0;
}
.ntvb-accordion-flush .ntvb-accordion-item:last-child {
  border-bottom: 0;
}
.ntvb-accordion-flush .ntvb-accordion-item .ntvb-accordion-button {
  border-radius: 0;
}

.ntvb-breadcrumb {
  display: flex;
  flex-wrap: wrap;
  padding: 0 0;
  margin-bottom: 1rem;
  list-style: none;
}

.ntvb-breadcrumb-item + .ntvb-breadcrumb-item {
  padding-left: 0.5rem;
}
.ntvb-breadcrumb-item + .ntvb-breadcrumb-item::before {
  float: left;
  padding-right: 0.5rem;
  color: #6c757d;
  content: var(--ntvb-bs-breadcrumb-divider, "/") /* rtl: var(--ntvb-bs-breadcrumb-divider, "/") */;
}
.ntvb-breadcrumb-item.ntvb-active {
  color: #6c757d;
}

.ntvb-pagination {
  display: flex;
  padding-left: 0;
  list-style: none;
}

.ntvb-page-link {
  position: relative;
  display: block;
  color: #0d6efd;
  text-decoration: none;
  background-color: #fff;
  border: 1px solid #dee2e6;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .ntvb-page-link {
    transition: none;
  }
}
.ntvb-page-link:hover {
  z-index: 2;
  color: #0a58ca;
  background-color: #e9ecef;
  border-color: #dee2e6;
}
.ntvb-page-link:focus {
  z-index: 3;
  color: #0a58ca;
  background-color: #e9ecef;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}

.ntvb-page-item:not(:first-child) .ntvb-page-link {
  margin-left: -1px;
}
.ntvb-page-item.ntvb-active .ntvb-page-link {
  z-index: 3;
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
}
.ntvb-page-item.ntvb-disabled .ntvb-page-link {
  color: #6c757d;
  pointer-events: none;
  background-color: #fff;
  border-color: #dee2e6;
}

.ntvb-page-link {
  padding: 0.375rem 0.75rem;
}

.ntvb-page-item:first-child .ntvb-page-link {
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}
.ntvb-page-item:last-child .ntvb-page-link {
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}

.ntvb-pagination-lg .ntvb-page-link {
  padding: 0.75rem 1.5rem;
  font-size: 1.25rem;
}
.ntvb-pagination-lg .ntvb-page-item:first-child .ntvb-page-link {
  border-top-left-radius: 0.3rem;
  border-bottom-left-radius: 0.3rem;
}
.ntvb-pagination-lg .ntvb-page-item:last-child .ntvb-page-link {
  border-top-right-radius: 0.3rem;
  border-bottom-right-radius: 0.3rem;
}

.ntvb-pagination-sm .ntvb-page-link {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
}
.ntvb-pagination-sm .ntvb-page-item:first-child .ntvb-page-link {
  border-top-left-radius: 0.2rem;
  border-bottom-left-radius: 0.2rem;
}
.ntvb-pagination-sm .ntvb-page-item:last-child .ntvb-page-link {
  border-top-right-radius: 0.2rem;
  border-bottom-right-radius: 0.2rem;
}

.ntvb-badge {
  display: inline-block;
  padding: 0.35em 0.65em;
  font-size: 0.75em;
  font-weight: 700;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem;
}
.ntvb-badge:empty {
  display: none;
}

.ntvb-btn .ntvb-badge {
  position: relative;
  top: -1px;
}

.ntvb-alert {
  position: relative;
  padding: 1rem 1rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
}

.ntvb-alert-heading {
  color: inherit;
}

.ntvb-alert-link {
  font-weight: 700;
}

.ntvb-alert-dismissible {
  padding-right: 3rem;
}
.ntvb-alert-dismissible .ntvb-btn-close {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  padding: 1.25rem 1rem;
}

.ntvb-alert-primary {
  color: #084298;
  background-color: #cfe2ff;
  border-color: #b6d4fe;
}
.ntvb-alert-primary .ntvb-alert-link {
  color: #06357a;
}

.ntvb-alert-secondary {
  color: #41464b;
  background-color: #e2e3e5;
  border-color: #d3d6d8;
}
.ntvb-alert-secondary .ntvb-alert-link {
  color: #34383c;
}

.ntvb-alert-success {
  color: #0f5132;
  background-color: #d1e7dd;
  border-color: #badbcc;
}
.ntvb-alert-success .ntvb-alert-link {
  color: #0c4128;
}

.ntvb-alert-info {
  color: #055160;
  background-color: #cff4fc;
  border-color: #b6effb;
}
.ntvb-alert-info .ntvb-alert-link {
  color: #04414d;
}

.ntvb-alert-warning {
  color: #664d03;
  background-color: #fff3cd;
  border-color: #ffecb5;
}
.ntvb-alert-warning .ntvb-alert-link {
  color: #523e02;
}

.ntvb-alert-danger {
  color: #842029;
  background-color: #f8d7da;
  border-color: #f5c2c7;
}
.ntvb-alert-danger .ntvb-alert-link {
  color: #6a1a21;
}

.ntvb-alert-light {
  color: #636464;
  background-color: #fefefe;
  border-color: #fdfdfe;
}
.ntvb-alert-light .ntvb-alert-link {
  color: #4f5050;
}

.ntvb-alert-dark {
  color: #141619;
  background-color: #d3d3d4;
  border-color: #bcbebf;
}
.ntvb-alert-dark .ntvb-alert-link {
  color: #101214;
}

@-webkit-keyframes progress-bar-stripes {
  0% {
    background-position-x: 1rem;
  }
}

@keyframes progress-bar-stripes {
  0% {
    background-position-x: 1rem;
  }
}
.ntvb-progress {
  display: flex;
  height: 1rem;
  overflow: hidden;
  font-size: 0.75rem;
  background-color: #e9ecef;
  border-radius: 0.25rem;
}

.ntvb-progress-bar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  background-color: #0d6efd;
  transition: width 0.6s ease;
}
@media (prefers-reduced-motion: reduce) {
  .ntvb-progress-bar {
    transition: none;
  }
}

.ntvb-progress-bar-striped {
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-size: 1rem 1rem;
}

.ntvb-progress-bar-animated {
  -webkit-animation: 1s linear infinite progress-bar-stripes;
  animation: 1s linear infinite progress-bar-stripes;
}
@media (prefers-reduced-motion: reduce) {
  .ntvb-progress-bar-animated {
    -webkit-animation: none;
    animation: none;
  }
}

.ntvb-list-group {
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  border-radius: 0.25rem;
}

.ntvb-list-group-numbered {
  list-style-type: none;
  counter-reset: section;
}
.ntvb-list-group-numbered > li::before {
  content: counters(section, ".") ". ";
  counter-increment: section;
}

.ntvb-list-group-item-action {
  width: 100%;
  color: #495057;
  text-align: inherit;
}
.ntvb-list-group-item-action:hover, .ntvb-list-group-item-action:focus {
  z-index: 1;
  color: #495057;
  text-decoration: none;
  background-color: #f8f9fa;
}
.ntvb-list-group-item-action:active {
  color: #212529;
  background-color: #e9ecef;
}

.ntvb-list-group-item {
  position: relative;
  display: block;
  padding: 0.5rem 1rem;
  color: #212529;
  text-decoration: none;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
}
.ntvb-list-group-item:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.ntvb-list-group-item:last-child {
  border-bottom-right-radius: inherit;
  border-bottom-left-radius: inherit;
}
.ntvb-list-group-item.ntvb-disabled, .ntvb-list-group-item:disabled {
  color: #6c757d;
  pointer-events: none;
  background-color: #fff;
}
.ntvb-list-group-item.ntvb-active {
  z-index: 2;
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
}
.ntvb-list-group-item + .ntvb-list-group-item {
  border-top-width: 0;
}
.ntvb-list-group-item + .ntvb-list-group-item.ntvb-active {
  margin-top: -1px;
  border-top-width: 1px;
}

.ntvb-list-group-horizontal {
  flex-direction: row;
}
.ntvb-list-group-horizontal > .ntvb-list-group-item:first-child {
  border-bottom-left-radius: 0.25rem;
  border-top-right-radius: 0;
}
.ntvb-list-group-horizontal > .ntvb-list-group-item:last-child {
  border-top-right-radius: 0.25rem;
  border-bottom-left-radius: 0;
}
.ntvb-list-group-horizontal > .ntvb-list-group-item.ntvb-active {
  margin-top: 0;
}
.ntvb-list-group-horizontal > .ntvb-list-group-item + .ntvb-list-group-item {
  border-top-width: 1px;
  border-left-width: 0;
}
.ntvb-list-group-horizontal > .ntvb-list-group-item + .ntvb-list-group-item.ntvb-active {
  margin-left: -1px;
  border-left-width: 1px;
}

@media (min-width: 576px) {
  .ntvb-list-group-horizontal-sm {
    flex-direction: row;
  }
  .ntvb-list-group-horizontal-sm > .ntvb-list-group-item:first-child {
    border-bottom-left-radius: 0.25rem;
    border-top-right-radius: 0;
  }
  .ntvb-list-group-horizontal-sm > .ntvb-list-group-item:last-child {
    border-top-right-radius: 0.25rem;
    border-bottom-left-radius: 0;
  }
  .ntvb-list-group-horizontal-sm > .ntvb-list-group-item.ntvb-active {
    margin-top: 0;
  }
  .ntvb-list-group-horizontal-sm > .ntvb-list-group-item + .ntvb-list-group-item {
    border-top-width: 1px;
    border-left-width: 0;
  }
  .ntvb-list-group-horizontal-sm > .ntvb-list-group-item + .ntvb-list-group-item.ntvb-active {
    margin-left: -1px;
    border-left-width: 1px;
  }
}
@media (min-width: 768px) {
  .ntvb-list-group-horizontal-md {
    flex-direction: row;
  }
  .ntvb-list-group-horizontal-md > .ntvb-list-group-item:first-child {
    border-bottom-left-radius: 0.25rem;
    border-top-right-radius: 0;
  }
  .ntvb-list-group-horizontal-md > .ntvb-list-group-item:last-child {
    border-top-right-radius: 0.25rem;
    border-bottom-left-radius: 0;
  }
  .ntvb-list-group-horizontal-md > .ntvb-list-group-item.ntvb-active {
    margin-top: 0;
  }
  .ntvb-list-group-horizontal-md > .ntvb-list-group-item + .ntvb-list-group-item {
    border-top-width: 1px;
    border-left-width: 0;
  }
  .ntvb-list-group-horizontal-md > .ntvb-list-group-item + .ntvb-list-group-item.ntvb-active {
    margin-left: -1px;
    border-left-width: 1px;
  }
}
@media (min-width: 992px) {
  .ntvb-list-group-horizontal-lg {
    flex-direction: row;
  }
  .ntvb-list-group-horizontal-lg > .ntvb-list-group-item:first-child {
    border-bottom-left-radius: 0.25rem;
    border-top-right-radius: 0;
  }
  .ntvb-list-group-horizontal-lg > .ntvb-list-group-item:last-child {
    border-top-right-radius: 0.25rem;
    border-bottom-left-radius: 0;
  }
  .ntvb-list-group-horizontal-lg > .ntvb-list-group-item.ntvb-active {
    margin-top: 0;
  }
  .ntvb-list-group-horizontal-lg > .ntvb-list-group-item + .ntvb-list-group-item {
    border-top-width: 1px;
    border-left-width: 0;
  }
  .ntvb-list-group-horizontal-lg > .ntvb-list-group-item + .ntvb-list-group-item.ntvb-active {
    margin-left: -1px;
    border-left-width: 1px;
  }
}
@media (min-width: 1200px) {
  .ntvb-list-group-horizontal-xl {
    flex-direction: row;
  }
  .ntvb-list-group-horizontal-xl > .ntvb-list-group-item:first-child {
    border-bottom-left-radius: 0.25rem;
    border-top-right-radius: 0;
  }
  .ntvb-list-group-horizontal-xl > .ntvb-list-group-item:last-child {
    border-top-right-radius: 0.25rem;
    border-bottom-left-radius: 0;
  }
  .ntvb-list-group-horizontal-xl > .ntvb-list-group-item.ntvb-active {
    margin-top: 0;
  }
  .ntvb-list-group-horizontal-xl > .ntvb-list-group-item + .ntvb-list-group-item {
    border-top-width: 1px;
    border-left-width: 0;
  }
  .ntvb-list-group-horizontal-xl > .ntvb-list-group-item + .ntvb-list-group-item.ntvb-active {
    margin-left: -1px;
    border-left-width: 1px;
  }
}
@media (min-width: 1400px) {
  .ntvb-list-group-horizontal-xxl {
    flex-direction: row;
  }
  .ntvb-list-group-horizontal-xxl > .ntvb-list-group-item:first-child {
    border-bottom-left-radius: 0.25rem;
    border-top-right-radius: 0;
  }
  .ntvb-list-group-horizontal-xxl > .ntvb-list-group-item:last-child {
    border-top-right-radius: 0.25rem;
    border-bottom-left-radius: 0;
  }
  .ntvb-list-group-horizontal-xxl > .ntvb-list-group-item.ntvb-active {
    margin-top: 0;
  }
  .ntvb-list-group-horizontal-xxl > .ntvb-list-group-item + .ntvb-list-group-item {
    border-top-width: 1px;
    border-left-width: 0;
  }
  .ntvb-list-group-horizontal-xxl > .ntvb-list-group-item + .ntvb-list-group-item.ntvb-active {
    margin-left: -1px;
    border-left-width: 1px;
  }
}
.ntvb-list-group-flush {
  border-radius: 0;
}
.ntvb-list-group-flush > .ntvb-list-group-item {
  border-width: 0 0 1px;
}
.ntvb-list-group-flush > .ntvb-list-group-item:last-child {
  border-bottom-width: 0;
}

.ntvb-list-group-item-primary {
  color: #084298;
  background-color: #cfe2ff;
}
.ntvb-list-group-item-primary.ntvb-list-group-item-action:hover, .ntvb-list-group-item-primary.ntvb-list-group-item-action:focus {
  color: #084298;
  background-color: #bacbe6;
}
.ntvb-list-group-item-primary.ntvb-list-group-item-action.ntvb-active {
  color: #fff;
  background-color: #084298;
  border-color: #084298;
}

.ntvb-list-group-item-secondary {
  color: #41464b;
  background-color: #e2e3e5;
}
.ntvb-list-group-item-secondary.ntvb-list-group-item-action:hover, .ntvb-list-group-item-secondary.ntvb-list-group-item-action:focus {
  color: #41464b;
  background-color: #cbccce;
}
.ntvb-list-group-item-secondary.ntvb-list-group-item-action.ntvb-active {
  color: #fff;
  background-color: #41464b;
  border-color: #41464b;
}

.ntvb-list-group-item-success {
  color: #0f5132;
  background-color: #d1e7dd;
}
.ntvb-list-group-item-success.ntvb-list-group-item-action:hover, .ntvb-list-group-item-success.ntvb-list-group-item-action:focus {
  color: #0f5132;
  background-color: #bcd0c7;
}
.ntvb-list-group-item-success.ntvb-list-group-item-action.ntvb-active {
  color: #fff;
  background-color: #0f5132;
  border-color: #0f5132;
}

.ntvb-list-group-item-info {
  color: #055160;
  background-color: #cff4fc;
}
.ntvb-list-group-item-info.ntvb-list-group-item-action:hover, .ntvb-list-group-item-info.ntvb-list-group-item-action:focus {
  color: #055160;
  background-color: #badce3;
}
.ntvb-list-group-item-info.ntvb-list-group-item-action.ntvb-active {
  color: #fff;
  background-color: #055160;
  border-color: #055160;
}

.ntvb-list-group-item-warning {
  color: #664d03;
  background-color: #fff3cd;
}
.ntvb-list-group-item-warning.ntvb-list-group-item-action:hover, .ntvb-list-group-item-warning.ntvb-list-group-item-action:focus {
  color: #664d03;
  background-color: #e6dbb9;
}
.ntvb-list-group-item-warning.ntvb-list-group-item-action.ntvb-active {
  color: #fff;
  background-color: #664d03;
  border-color: #664d03;
}

.ntvb-list-group-item-danger {
  color: #842029;
  background-color: #f8d7da;
}
.ntvb-list-group-item-danger.ntvb-list-group-item-action:hover, .ntvb-list-group-item-danger.ntvb-list-group-item-action:focus {
  color: #842029;
  background-color: #dfc2c4;
}
.ntvb-list-group-item-danger.ntvb-list-group-item-action.ntvb-active {
  color: #fff;
  background-color: #842029;
  border-color: #842029;
}

.ntvb-list-group-item-light {
  color: #636464;
  background-color: #fefefe;
}
.ntvb-list-group-item-light.ntvb-list-group-item-action:hover, .ntvb-list-group-item-light.ntvb-list-group-item-action:focus {
  color: #636464;
  background-color: #e5e5e5;
}
.ntvb-list-group-item-light.ntvb-list-group-item-action.ntvb-active {
  color: #fff;
  background-color: #636464;
  border-color: #636464;
}

.ntvb-list-group-item-dark {
  color: #141619;
  background-color: #d3d3d4;
}
.ntvb-list-group-item-dark.ntvb-list-group-item-action:hover, .ntvb-list-group-item-dark.ntvb-list-group-item-action:focus {
  color: #141619;
  background-color: #bebebf;
}
.ntvb-list-group-item-dark.ntvb-list-group-item-action.ntvb-active {
  color: #fff;
  background-color: #141619;
  border-color: #141619;
}

.ntvb-btn-close {
  box-sizing: content-box;
  width: 1em;
  height: 1em;
  padding: 0.25em 0.25em;
  color: #000;
  background: transparent url("data:image/svg+xml,%3csvg xmlns='http://www.ntvb-w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e") center/1em auto no-repeat;
  border: 0;
  border-radius: 0.25rem;
  opacity: 0.5;
}
.ntvb-btn-close:hover {
  color: #000;
  text-decoration: none;
  opacity: 0.75;
}
.ntvb-btn-close:focus {
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  opacity: 1;
}
.ntvb-btn-close:disabled, .ntvb-btn-close.ntvb-disabled {
  pointer-events: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  opacity: 0.25;
}

.ntvb-btn-close-white {
  filter: invert(1) grayscale(100%) brightness(200%);
}

.ntvb-toast {
  width: 350px;
  max-width: 100%;
  font-size: 0.875rem;
  pointer-events: auto;
  background-color: rgba(255, 255, 255, 0.85);
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
}
.ntvb-toast.ntvb-showing {
  opacity: 0;
}
.ntvb-toast:not(.ntvb-show) {
  display: none;
}

.ntvb-toast-container {
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
  max-width: 100%;
  pointer-events: none;
}
.ntvb-toast-container > :not(:last-child) {
  margin-bottom: 0.75rem;
}

.ntvb-toast-header {
  display: flex;
  align-items: center;
  padding: 0.5rem 0.75rem;
  color: #6c757d;
  background-color: rgba(255, 255, 255, 0.85);
  background-clip: padding-box;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  border-top-left-radius: calc(0.25rem - 1px);
  border-top-right-radius: calc(0.25rem - 1px);
}
.ntvb-toast-header .ntvb-btn-close {
  margin-right: -0.375rem;
  margin-left: 0.75rem;
}

.ntvb-toast-body {
  padding: 0.75rem;
  word-wrap: break-word;
}

.ntvb-modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1055;
  display: none;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
}

.ntvb-modal-dialog {
  position: relative;
  width: auto;
  margin: 0.5rem;
  pointer-events: none;
}
.ntvb-modal.ntvb-fade .ntvb-modal-dialog {
  transition: transform 0.3s ease-out;
  transform: translate(0, -50px);
}
@media (prefers-reduced-motion: reduce) {
  .ntvb-modal.ntvb-fade .ntvb-modal-dialog {
    transition: none;
  }
}
.ntvb-modal.ntvb-show .ntvb-modal-dialog {
  transform: none;
}
.ntvb-modal.ntvb-modal-static .ntvb-modal-dialog {
  transform: scale(1.02);
}

.ntvb-modal-dialog-scrollable {
  height: calc(100% - 1rem);
}
.ntvb-modal-dialog-scrollable .ntvb-modal-content {
  max-height: 100%;
  overflow: hidden;
}
.ntvb-modal-dialog-scrollable .ntvb-modal-body {
  overflow-y: auto;
}

.ntvb-modal-dialog-centered {
  display: flex;
  align-items: center;
  min-height: calc(100% - 1rem);
}

.ntvb-modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  outline: 0;
}

.ntvb-modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100vw;
  height: 100vh;
  background-color: #000;
}
.ntvb-modal-backdrop.ntvb-fade {
  opacity: 0;
}
.ntvb-modal-backdrop.ntvb-show {
  opacity: 0.5;
}

.ntvb-modal-header {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1rem;
  border-bottom: 1px solid #dee2e6;
  border-top-left-radius: calc(0.3rem - 1px);
  border-top-right-radius: calc(0.3rem - 1px);
}
.ntvb-modal-header .ntvb-btn-close {
  padding: 0.5rem 0.5rem;
  margin: -0.5rem -0.5rem -0.5rem auto;
}

.ntvb-modal-title {
  margin-bottom: 0;
  line-height: 1.5;
}

.ntvb-modal-body {
  position: relative;
  flex: 1 1 auto;
  padding: 1rem;
}

.ntvb-modal-footer {
  display: flex;
  flex-wrap: wrap;
  flex-shrink: 0;
  align-items: center;
  justify-content: flex-end;
  padding: 0.75rem;
  border-top: 1px solid #dee2e6;
  border-bottom-right-radius: calc(0.3rem - 1px);
  border-bottom-left-radius: calc(0.3rem - 1px);
}
.ntvb-modal-footer > * {
  margin: 0.25rem;
}

@media (min-width: 576px) {
  .ntvb-modal-dialog {
    max-width: 500px;
    margin: 1.75rem auto;
  }

  .ntvb-modal-dialog-scrollable {
    height: calc(100% - 3.5rem);
  }

  .ntvb-modal-dialog-centered {
    min-height: calc(100% - 3.5rem);
  }

  .ntvb-modal-sm {
    max-width: 300px;
  }
}
@media (min-width: 992px) {
  .ntvb-modal-lg,
.ntvb-modal-xl {
    max-width: 800px;
  }
}
@media (min-width: 1200px) {
  .ntvb-modal-xl {
    max-width: 1140px;
  }
}
.ntvb-modal-fullscreen {
  width: 100vw;
  max-width: none;
  height: 100%;
  margin: 0;
}
.ntvb-modal-fullscreen .ntvb-modal-content {
  height: 100%;
  border: 0;
  border-radius: 0;
}
.ntvb-modal-fullscreen .ntvb-modal-header {
  border-radius: 0;
}
.ntvb-modal-fullscreen .ntvb-modal-body {
  overflow-y: auto;
}
.ntvb-modal-fullscreen .ntvb-modal-footer {
  border-radius: 0;
}

@media (max-width: 575.98px) {
  .ntvb-modal-fullscreen-sm-down {
    width: 100vw;
    max-width: none;
    height: 100%;
    margin: 0;
  }
  .ntvb-modal-fullscreen-sm-down .ntvb-modal-content {
    height: 100%;
    border: 0;
    border-radius: 0;
  }
  .ntvb-modal-fullscreen-sm-down .ntvb-modal-header {
    border-radius: 0;
  }
  .ntvb-modal-fullscreen-sm-down .ntvb-modal-body {
    overflow-y: auto;
  }
  .ntvb-modal-fullscreen-sm-down .ntvb-modal-footer {
    border-radius: 0;
  }
}
@media (max-width: 767.98px) {
  .ntvb-modal-fullscreen-md-down {
    width: 100vw;
    max-width: none;
    height: 100%;
    margin: 0;
  }
  .ntvb-modal-fullscreen-md-down .ntvb-modal-content {
    height: 100%;
    border: 0;
    border-radius: 0;
  }
  .ntvb-modal-fullscreen-md-down .ntvb-modal-header {
    border-radius: 0;
  }
  .ntvb-modal-fullscreen-md-down .ntvb-modal-body {
    overflow-y: auto;
  }
  .ntvb-modal-fullscreen-md-down .ntvb-modal-footer {
    border-radius: 0;
  }
}
@media (max-width: 991.98px) {
  .ntvb-modal-fullscreen-lg-down {
    width: 100vw;
    max-width: none;
    height: 100%;
    margin: 0;
  }
  .ntvb-modal-fullscreen-lg-down .ntvb-modal-content {
    height: 100%;
    border: 0;
    border-radius: 0;
  }
  .ntvb-modal-fullscreen-lg-down .ntvb-modal-header {
    border-radius: 0;
  }
  .ntvb-modal-fullscreen-lg-down .ntvb-modal-body {
    overflow-y: auto;
  }
  .ntvb-modal-fullscreen-lg-down .ntvb-modal-footer {
    border-radius: 0;
  }
}
@media (max-width: 1199.98px) {
  .ntvb-modal-fullscreen-xl-down {
    width: 100vw;
    max-width: none;
    height: 100%;
    margin: 0;
  }
  .ntvb-modal-fullscreen-xl-down .ntvb-modal-content {
    height: 100%;
    border: 0;
    border-radius: 0;
  }
  .ntvb-modal-fullscreen-xl-down .ntvb-modal-header {
    border-radius: 0;
  }
  .ntvb-modal-fullscreen-xl-down .ntvb-modal-body {
    overflow-y: auto;
  }
  .ntvb-modal-fullscreen-xl-down .ntvb-modal-footer {
    border-radius: 0;
  }
}
@media (max-width: 1399.98px) {
  .ntvb-modal-fullscreen-xxl-down {
    width: 100vw;
    max-width: none;
    height: 100%;
    margin: 0;
  }
  .ntvb-modal-fullscreen-xxl-down .ntvb-modal-content {
    height: 100%;
    border: 0;
    border-radius: 0;
  }
  .ntvb-modal-fullscreen-xxl-down .ntvb-modal-header {
    border-radius: 0;
  }
  .ntvb-modal-fullscreen-xxl-down .ntvb-modal-body {
    overflow-y: auto;
  }
  .ntvb-modal-fullscreen-xxl-down .ntvb-modal-footer {
    border-radius: 0;
  }
}
.ntvb-tooltip {
  position: absolute;
  z-index: 1080;
  display: block;
  margin: 0;
  font-family: var(--ntvb-bs-font-sans-serif);
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  letter-spacing: normal;
  word-break: normal;
  word-spacing: normal;
  white-space: normal;
  line-break: auto;
  font-size: 0.875rem;
  word-wrap: break-word;
  opacity: 0;
}
.ntvb-tooltip.ntvb-show {
  opacity: 0.9;
}
.ntvb-tooltip .ntvb-tooltip-arrow {
  position: absolute;
  display: block;
  width: 0.8rem;
  height: 0.4rem;
}
.ntvb-tooltip .ntvb-tooltip-arrow::before {
  position: absolute;
  content: "";
  border-color: transparent;
  border-style: solid;
}

.ntvb-bs-tooltip-top, .bs-tooltip-auto[data-popper-placement^=top] {
  padding: 0.4rem 0;
}
.ntvb-bs-tooltip-top .ntvb-tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=top] .ntvb-tooltip-arrow {
  bottom: 0;
}
.ntvb-bs-tooltip-top .ntvb-tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=top] .ntvb-tooltip-arrow::before {
  top: -1px;
  border-width: 0.4rem 0.4rem 0;
  border-top-color: #000;
}

.ntvb-bs-tooltip-end, .bs-tooltip-auto[data-popper-placement^=right] {
  padding: 0 0.4rem;
}
.ntvb-bs-tooltip-end .ntvb-tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=right] .ntvb-tooltip-arrow {
  left: 0;
  width: 0.4rem;
  height: 0.8rem;
}
.ntvb-bs-tooltip-end .ntvb-tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=right] .ntvb-tooltip-arrow::before {
  right: -1px;
  border-width: 0.4rem 0.4rem 0.4rem 0;
  border-right-color: #000;
}

.ntvb-bs-tooltip-bottom, .bs-tooltip-auto[data-popper-placement^=bottom] {
  padding: 0.4rem 0;
}
.ntvb-bs-tooltip-bottom .ntvb-tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=bottom] .ntvb-tooltip-arrow {
  top: 0;
}
.ntvb-bs-tooltip-bottom .ntvb-tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=bottom] .ntvb-tooltip-arrow::before {
  bottom: -1px;
  border-width: 0 0.4rem 0.4rem;
  border-bottom-color: #000;
}

.ntvb-bs-tooltip-start, .bs-tooltip-auto[data-popper-placement^=left] {
  padding: 0 0.4rem;
}
.ntvb-bs-tooltip-start .ntvb-tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=left] .ntvb-tooltip-arrow {
  right: 0;
  width: 0.4rem;
  height: 0.8rem;
}
.ntvb-bs-tooltip-start .ntvb-tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=left] .ntvb-tooltip-arrow::before {
  left: -1px;
  border-width: 0.4rem 0 0.4rem 0.4rem;
  border-left-color: #000;
}

.ntvb-tooltip-inner {
  max-width: 200px;
  padding: 0.25rem 0.5rem;
  color: #fff;
  text-align: center;
  background-color: #000;
  border-radius: 0.25rem;
}

.ntvb-popover {
  position: absolute;
  top: 0;
  left: 0 /* rtl:ignore */;
  z-index: 1070;
  display: block;
  max-width: 276px;
  font-family: var(--ntvb-bs-font-sans-serif);
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  letter-spacing: normal;
  word-break: normal;
  word-spacing: normal;
  white-space: normal;
  line-break: auto;
  font-size: 0.875rem;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
}
.ntvb-popover .ntvb-popover-arrow {
  position: absolute;
  display: block;
  width: 1rem;
  height: 0.5rem;
}
.ntvb-popover .ntvb-popover-arrow::before, .ntvb-popover .ntvb-popover-arrow::after {
  position: absolute;
  display: block;
  content: "";
  border-color: transparent;
  border-style: solid;
}

.ntvb-bs-popover-top > .ntvb-popover-arrow, .bs-popover-auto[data-popper-placement^=top] > .ntvb-popover-arrow {
  bottom: calc(-0.5rem - 1px);
}
.ntvb-bs-popover-top > .ntvb-popover-arrow::before, .bs-popover-auto[data-popper-placement^=top] > .ntvb-popover-arrow::before {
  bottom: 0;
  border-width: 0.5rem 0.5rem 0;
  border-top-color: rgba(0, 0, 0, 0.25);
}
.ntvb-bs-popover-top > .ntvb-popover-arrow::after, .bs-popover-auto[data-popper-placement^=top] > .ntvb-popover-arrow::after {
  bottom: 1px;
  border-width: 0.5rem 0.5rem 0;
  border-top-color: #fff;
}

.ntvb-bs-popover-end > .ntvb-popover-arrow, .bs-popover-auto[data-popper-placement^=right] > .ntvb-popover-arrow {
  left: calc(-0.5rem - 1px);
  width: 0.5rem;
  height: 1rem;
}
.ntvb-bs-popover-end > .ntvb-popover-arrow::before, .bs-popover-auto[data-popper-placement^=right] > .ntvb-popover-arrow::before {
  left: 0;
  border-width: 0.5rem 0.5rem 0.5rem 0;
  border-right-color: rgba(0, 0, 0, 0.25);
}
.ntvb-bs-popover-end > .ntvb-popover-arrow::after, .bs-popover-auto[data-popper-placement^=right] > .ntvb-popover-arrow::after {
  left: 1px;
  border-width: 0.5rem 0.5rem 0.5rem 0;
  border-right-color: #fff;
}

.ntvb-bs-popover-bottom > .ntvb-popover-arrow, .bs-popover-auto[data-popper-placement^=bottom] > .ntvb-popover-arrow {
  top: calc(-0.5rem - 1px);
}
.ntvb-bs-popover-bottom > .ntvb-popover-arrow::before, .bs-popover-auto[data-popper-placement^=bottom] > .ntvb-popover-arrow::before {
  top: 0;
  border-width: 0 0.5rem 0.5rem 0.5rem;
  border-bottom-color: rgba(0, 0, 0, 0.25);
}
.ntvb-bs-popover-bottom > .ntvb-popover-arrow::after, .bs-popover-auto[data-popper-placement^=bottom] > .ntvb-popover-arrow::after {
  top: 1px;
  border-width: 0 0.5rem 0.5rem 0.5rem;
  border-bottom-color: #fff;
}
.ntvb-bs-popover-bottom .ntvb-popover-header::before, .bs-popover-auto[data-popper-placement^=bottom] .ntvb-popover-header::before {
  position: absolute;
  top: 0;
  left: 50%;
  display: block;
  width: 1rem;
  margin-left: -0.5rem;
  content: "";
  border-bottom: 1px solid #f0f0f0;
}

.ntvb-bs-popover-start > .ntvb-popover-arrow, .bs-popover-auto[data-popper-placement^=left] > .ntvb-popover-arrow {
  right: calc(-0.5rem - 1px);
  width: 0.5rem;
  height: 1rem;
}
.ntvb-bs-popover-start > .ntvb-popover-arrow::before, .bs-popover-auto[data-popper-placement^=left] > .ntvb-popover-arrow::before {
  right: 0;
  border-width: 0.5rem 0 0.5rem 0.5rem;
  border-left-color: rgba(0, 0, 0, 0.25);
}
.ntvb-bs-popover-start > .ntvb-popover-arrow::after, .bs-popover-auto[data-popper-placement^=left] > .ntvb-popover-arrow::after {
  right: 1px;
  border-width: 0.5rem 0 0.5rem 0.5rem;
  border-left-color: #fff;
}

.ntvb-popover-header {
  padding: 0.5rem 1rem;
  margin-bottom: 0;
  font-size: 1rem;
  background-color: #f0f0f0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  border-top-left-radius: calc(0.3rem - 1px);
  border-top-right-radius: calc(0.3rem - 1px);
}
.ntvb-popover-header:empty {
  display: none;
}

.ntvb-popover-body {
  padding: 1rem 1rem;
  color: #212529;
}

.ntvb-carousel {
  position: relative;
}

.ntvb-carousel.ntvb-pointer-event {
  touch-action: pan-y;
}

.ntvb-carousel-inner {
  position: relative;
  width: 100%;
  overflow: hidden;
}
.ntvb-carousel-inner::after {
  display: block;
  clear: both;
  content: "";
}

.ntvb-carousel-item {
  position: relative;
  display: none;
  float: left;
  width: 100%;
  margin-right: -100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transition: transform 0.6s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .ntvb-carousel-item {
    transition: none;
  }
}

.ntvb-carousel-item.ntvb-active,
.ntvb-carousel-item-next,
.ntvb-carousel-item-prev {
  display: block;
}

/* rtl:begin:ignore */
.ntvb-carousel-item-next:not(.ntvb-carousel-item-start),
.ntvb-active.ntvb-carousel-item-end {
  transform: translateX(100%);
}

.ntvb-carousel-item-prev:not(.ntvb-carousel-item-end),
.ntvb-active.ntvb-carousel-item-start {
  transform: translateX(-100%);
}

/* rtl:end:ignore */
.ntvb-carousel-fade .ntvb-carousel-item {
  opacity: 0;
  transition-property: opacity;
  transform: none;
}
.ntvb-carousel-fade .ntvb-carousel-item.ntvb-active,
.ntvb-carousel-fade .ntvb-carousel-item-next.ntvb-carousel-item-start,
.ntvb-carousel-fade .ntvb-carousel-item-prev.ntvb-carousel-item-end {
  z-index: 1;
  opacity: 1;
}
.ntvb-carousel-fade .ntvb-active.ntvb-carousel-item-start,
.ntvb-carousel-fade .ntvb-active.ntvb-carousel-item-end {
  z-index: 0;
  opacity: 0;
  transition: opacity 0s 0.6s;
}
@media (prefers-reduced-motion: reduce) {
  .ntvb-carousel-fade .ntvb-active.ntvb-carousel-item-start,
.ntvb-carousel-fade .ntvb-active.ntvb-carousel-item-end {
    transition: none;
  }
}

.ntvb-carousel-control-prev,
.ntvb-carousel-control-next {
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
  padding: 0;
  color: #fff;
  text-align: center;
  background: none;
  border: 0;
  opacity: 0.5;
  transition: opacity 0.15s ease;
}
@media (prefers-reduced-motion: reduce) {
  .ntvb-carousel-control-prev,
.ntvb-carousel-control-next {
    transition: none;
  }
}
.ntvb-carousel-control-prev:hover, .ntvb-carousel-control-prev:focus,
.ntvb-carousel-control-next:hover,
.ntvb-carousel-control-next:focus {
  color: #fff;
  text-decoration: none;
  outline: 0;
  opacity: 0.9;
}

.ntvb-carousel-control-prev {
  left: 0;
}

.ntvb-carousel-control-next {
  right: 0;
}

.ntvb-carousel-control-prev-icon,
.ntvb-carousel-control-next-icon {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 100% 100%;
}

/* rtl:options: {
  "autoRename": true,
  "stringMap":[ {
    "name"    : "prev-next",
    "search"  : "prev",
    "replace" : "next"
  } ]
} */
.ntvb-carousel-control-prev-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.ntvb-w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e");
}

.ntvb-carousel-control-next-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.ntvb-w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}

.ntvb-carousel-indicators {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  padding: 0;
  margin-right: 15%;
  margin-bottom: 1rem;
  margin-left: 15%;
  list-style: none;
}
.ntvb-carousel-indicators [data-bs-target] {
  box-sizing: content-box;
  flex: 0 1 auto;
  width: 30px;
  height: 3px;
  padding: 0;
  margin-right: 3px;
  margin-left: 3px;
  text-indent: -999px;
  cursor: pointer;
  background-color: #fff;
  background-clip: padding-box;
  border: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  opacity: 0.5;
  transition: opacity 0.6s ease;
}
@media (prefers-reduced-motion: reduce) {
  .ntvb-carousel-indicators [data-bs-target] {
    transition: none;
  }
}
.ntvb-carousel-indicators .ntvb-active {
  opacity: 1;
}

.ntvb-carousel-caption {
  position: absolute;
  right: 15%;
  bottom: 1.25rem;
  left: 15%;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  color: #fff;
  text-align: center;
}

.ntvb-carousel-dark .ntvb-carousel-control-prev-icon,
.ntvb-carousel-dark .ntvb-carousel-control-next-icon {
  filter: invert(1) grayscale(100);
}
.ntvb-carousel-dark .ntvb-carousel-indicators [data-bs-target] {
  background-color: #000;
}
.ntvb-carousel-dark .ntvb-carousel-caption {
  color: #000;
}

@-webkit-keyframes spinner-border {
  to {
    transform: rotate(360deg) /* rtl:ignore */;
  }
}

@keyframes spinner-border {
  to {
    transform: rotate(360deg) /* rtl:ignore */;
  }
}
.ntvb-spinner-border {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  vertical-align: -0.125em;
  border: 0.25em solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  -webkit-animation: 0.75s linear infinite spinner-border;
  animation: 0.75s linear infinite spinner-border;
}

.ntvb-spinner-border-sm {
  width: 1rem;
  height: 1rem;
  border-width: 0.2em;
}

@-webkit-keyframes spinner-grow {
  0% {
    transform: scale(0);
  }
  50% {
    opacity: 1;
    transform: none;
  }
}

@keyframes spinner-grow {
  0% {
    transform: scale(0);
  }
  50% {
    opacity: 1;
    transform: none;
  }
}
.ntvb-spinner-grow {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  vertical-align: -0.125em;
  background-color: currentColor;
  border-radius: 50%;
  opacity: 0;
  -webkit-animation: 0.75s linear infinite spinner-grow;
  animation: 0.75s linear infinite spinner-grow;
}

.ntvb-spinner-grow-sm {
  width: 1rem;
  height: 1rem;
}

@media (prefers-reduced-motion: reduce) {
  .ntvb-spinner-border,
.ntvb-spinner-grow {
    -webkit-animation-duration: 1.5s;
    animation-duration: 1.5s;
  }
}
.ntvb-offcanvas {
  position: fixed;
  bottom: 0;
  z-index: 1045;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  visibility: hidden;
  background-color: #fff;
  background-clip: padding-box;
  outline: 0;
  transition: transform 0.3s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .ntvb-offcanvas {
    transition: none;
  }
}

.ntvb-offcanvas-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #000;
}
.ntvb-offcanvas-backdrop.ntvb-fade {
  opacity: 0;
}
.ntvb-offcanvas-backdrop.ntvb-show {
  opacity: 0.5;
}

.ntvb-offcanvas-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1rem;
}
.ntvb-offcanvas-header .ntvb-btn-close {
  padding: 0.5rem 0.5rem;
  margin-top: -0.5rem;
  margin-right: -0.5rem;
  margin-bottom: -0.5rem;
}

.ntvb-offcanvas-title {
  margin-bottom: 0;
  line-height: 1.5;
}

.ntvb-offcanvas-body {
  flex-grow: 1;
  padding: 1rem 1rem;
  overflow-y: auto;
}

.ntvb-offcanvas-start {
  top: 0;
  left: 0;
  width: 400px;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  transform: translateX(-100%);
}

.ntvb-offcanvas-end {
  top: 0;
  right: 0;
  width: 400px;
  border-left: 1px solid rgba(0, 0, 0, 0.2);
  transform: translateX(100%);
}

.ntvb-offcanvas-top {
  top: 0;
  right: 0;
  left: 0;
  height: 30vh;
  max-height: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  transform: translateY(-100%);
}

.ntvb-offcanvas-bottom {
  right: 0;
  left: 0;
  height: 30vh;
  max-height: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  transform: translateY(100%);
}

.ntvb-offcanvas.ntvb-show {
  transform: none;
}

.ntvb-placeholder {
  display: inline-block;
  min-height: 1em;
  vertical-align: middle;
  cursor: wait;
  background-color: currentColor;
  opacity: 0.5;
}
.ntvb-placeholder.ntvb-btn::before {
  display: inline-block;
  content: "";
}

.ntvb-placeholder-xs {
  min-height: 0.6em;
}

.ntvb-placeholder-sm {
  min-height: 0.8em;
}

.ntvb-placeholder-lg {
  min-height: 1.2em;
}

.ntvb-placeholder-glow .ntvb-placeholder {
  -webkit-animation: placeholder-glow 2s ease-in-out infinite;
  animation: placeholder-glow 2s ease-in-out infinite;
}

@-webkit-keyframes placeholder-glow {
  50% {
    opacity: 0.2;
  }
}

@keyframes placeholder-glow {
  50% {
    opacity: 0.2;
  }
}
.ntvb-placeholder-wave {
  -webkit-mask-image: linear-gradient(130deg, #000 55%, rgba(0, 0, 0, 0.8) 75%, #000 95%);
  mask-image: linear-gradient(130deg, #000 55%, rgba(0, 0, 0, 0.8) 75%, #000 95%);
  -webkit-mask-size: 200% 100%;
  mask-size: 200% 100%;
  -webkit-animation: placeholder-wave 2s linear infinite;
  animation: placeholder-wave 2s linear infinite;
}

@-webkit-keyframes placeholder-wave {
  100% {
    -webkit-mask-position: -200% 0%;
    mask-position: -200% 0%;
  }
}

@keyframes placeholder-wave {
  100% {
    -webkit-mask-position: -200% 0%;
    mask-position: -200% 0%;
  }
}
.ntvb-clearfix::after {
  display: block;
  clear: both;
  content: "";
}

.ntvb-link-primary {
  color: #0d6efd;
}
.ntvb-link-primary:hover, .ntvb-link-primary:focus {
  color: #0a58ca;
}

.ntvb-link-secondary {
  color: #6c757d;
}
.ntvb-link-secondary:hover, .ntvb-link-secondary:focus {
  color: #565e64;
}

.ntvb-link-success {
  color: #198754;
}
.ntvb-link-success:hover, .ntvb-link-success:focus {
  color: #146c43;
}

.ntvb-link-info {
  color: #0dcaf0;
}
.ntvb-link-info:hover, .ntvb-link-info:focus {
  color: #3dd5f3;
}

.ntvb-link-warning {
  color: #ffc107;
}
.ntvb-link-warning:hover, .ntvb-link-warning:focus {
  color: #ffcd39;
}

.ntvb-link-danger {
  color: #dc3545;
}
.ntvb-link-danger:hover, .ntvb-link-danger:focus {
  color: #b02a37;
}

.ntvb-link-light {
  color: #f8f9fa;
}
.ntvb-link-light:hover, .ntvb-link-light:focus {
  color: #f9fafb;
}

.ntvb-link-dark {
  color: #212529;
}
.ntvb-link-dark:hover, .ntvb-link-dark:focus {
  color: #1a1e21;
}

.ntvb-ratio {
  position: relative;
  width: 100%;
}
.ntvb-ratio::before {
  display: block;
  padding-top: var(--ntvb-bs-aspect-ratio);
  content: "";
}
.ntvb-ratio > * {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.ntvb-ratio-1x1 {
  --ntvb-bs-aspect-ratio: 100%;
}

.ntvb-ratio-4x3 {
  --ntvb-bs-aspect-ratio: calc(3 / 4 * 100%);
}

.ntvb-ratio-16x9 {
  --ntvb-bs-aspect-ratio: calc(9 / 16 * 100%);
}

.ntvb-ratio-21x9 {
  --ntvb-bs-aspect-ratio: calc(9 / 21 * 100%);
}

.ntvb-fixed-top {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
}

.ntvb-fixed-bottom {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1030;
}

.ntvb-sticky-top {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1020;
}

@media (min-width: 576px) {
  .ntvb-sticky-sm-top {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1020;
  }
}
@media (min-width: 768px) {
  .ntvb-sticky-md-top {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1020;
  }
}
@media (min-width: 992px) {
  .ntvb-sticky-lg-top {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1020;
  }
}
@media (min-width: 1200px) {
  .ntvb-sticky-xl-top {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1020;
  }
}
@media (min-width: 1400px) {
  .ntvb-sticky-xxl-top {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1020;
  }
}
.ntvb-hstack {
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: stretch;
}

.ntvb-vstack {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  align-self: stretch;
}

.ntvb-visually-hidden,
.ntvb-visually-hidden-focusable:not(:focus):not(:focus-within) {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
}

.ntvb-stretched-link::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  content: "";
}

.ntvb-text-truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.ntvb-vr {
  display: inline-block;
  align-self: stretch;
  width: 1px;
  min-height: 1em;
  background-color: currentColor;
  opacity: 0.25;
}

.ntvb-align-baseline {
  vertical-align: baseline !important;
}

.ntvb-align-top {
  vertical-align: top !important;
}

.ntvb-align-middle {
  vertical-align: middle !important;
}

.ntvb-align-bottom {
  vertical-align: bottom !important;
}

.ntvb-align-text-bottom {
  vertical-align: text-bottom !important;
}

.ntvb-align-text-top {
  vertical-align: text-top !important;
}

.ntvb-float-start {
  float: left !important;
}

.ntvb-float-end {
  float: right !important;
}

.ntvb-float-none {
  float: none !important;
}

.ntvb-opacity-0 {
  opacity: 0 !important;
}

.ntvb-opacity-25 {
  opacity: 0.25 !important;
}

.ntvb-opacity-50 {
  opacity: 0.5 !important;
}

.ntvb-opacity-75 {
  opacity: 0.75 !important;
}

.ntvb-opacity-100 {
  opacity: 1 !important;
}

.ntvb-overflow-auto {
  overflow: auto !important;
}

.ntvb-overflow-hidden {
  overflow: hidden !important;
}

.ntvb-overflow-visible {
  overflow: visible !important;
}

.ntvb-overflow-scroll {
  overflow: scroll !important;
}

.ntvb-d-inline {
  display: inline !important;
}

.ntvb-d-inline-block {
  display: inline-block !important;
}

.ntvb-d-block {
  display: block !important;
}

.ntvb-d-grid {
  display: grid !important;
}

.ntvb-d-table {
  display: table !important;
}

.ntvb-d-table-row {
  display: table-row !important;
}

.ntvb-d-table-cell {
  display: table-cell !important;
}

.ntvb-d-flex {
  display: flex !important;
}

.ntvb-d-inline-flex {
  display: inline-flex !important;
}

.ntvb-d-none {
  display: none !important;
}

.ntvb-shadow {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}

.ntvb-shadow-sm {
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
}

.ntvb-shadow-lg {
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
}

.ntvb-shadow-none {
  box-shadow: none !important;
}

.ntvb-position-static {
  position: static !important;
}

.ntvb-position-relative {
  position: relative !important;
}

.ntvb-position-absolute {
  position: absolute !important;
}

.ntvb-position-fixed {
  position: fixed !important;
}

.ntvb-position-sticky {
  position: -webkit-sticky !important;
  position: sticky !important;
}

.ntvb-top-0 {
  top: 0 !important;
}

.ntvb-top-50 {
  top: 50% !important;
}

.ntvb-top-100 {
  top: 100% !important;
}

.ntvb-bottom-0 {
  bottom: 0 !important;
}

.ntvb-bottom-50 {
  bottom: 50% !important;
}

.ntvb-bottom-100 {
  bottom: 100% !important;
}

.ntvb-start-0 {
  left: 0 !important;
}

.ntvb-start-50 {
  left: 50% !important;
}

.ntvb-start-100 {
  left: 100% !important;
}

.ntvb-end-0 {
  right: 0 !important;
}

.ntvb-end-50 {
  right: 50% !important;
}

.ntvb-end-100 {
  right: 100% !important;
}

.ntvb-translate-middle {
  transform: translate(-50%, -50%) !important;
}

.ntvb-translate-middle-x {
  transform: translateX(-50%) !important;
}

.ntvb-translate-middle-y {
  transform: translateY(-50%) !important;
}

.ntvb-border {
  border: 1px solid #dee2e6 !important;
}

.ntvb-border-0 {
  border: 0 !important;
}

.ntvb-border-top {
  border-top: 1px solid #dee2e6 !important;
}

.ntvb-border-top-0 {
  border-top: 0 !important;
}

.ntvb-border-end {
  border-right: 1px solid #dee2e6 !important;
}

.ntvb-border-end-0 {
  border-right: 0 !important;
}

.ntvb-border-bottom {
  border-bottom: 1px solid #dee2e6 !important;
}

.ntvb-border-bottom-0 {
  border-bottom: 0 !important;
}

.ntvb-border-start {
  border-left: 1px solid #dee2e6 !important;
}

.ntvb-border-start-0 {
  border-left: 0 !important;
}

.ntvb-border-primary {
  border-color: #0d6efd !important;
}

.ntvb-border-secondary {
  border-color: #6c757d !important;
}

.ntvb-border-success {
  border-color: #198754 !important;
}

.ntvb-border-info {
  border-color: #0dcaf0 !important;
}

.ntvb-border-warning {
  border-color: #ffc107 !important;
}

.ntvb-border-danger {
  border-color: #dc3545 !important;
}

.ntvb-border-light {
  border-color: #f8f9fa !important;
}

.ntvb-border-dark {
  border-color: #212529 !important;
}

.ntvb-border-white {
  border-color: #fff !important;
}

.ntvb-border-1 {
  border-width: 1px !important;
}

.ntvb-border-2 {
  border-width: 2px !important;
}

.ntvb-border-3 {
  border-width: 3px !important;
}

.ntvb-border-4 {
  border-width: 4px !important;
}

.ntvb-border-5 {
  border-width: 5px !important;
}

.ntvb-w-25 {
  width: 25% !important;
}

.ntvb-w-50 {
  width: 50% !important;
}

.ntvb-w-75 {
  width: 75% !important;
}

.ntvb-w-100 {
  width: 100% !important;
}

.ntvb-w-auto {
  width: auto !important;
}

.ntvb-mw-100 {
  max-width: 100% !important;
}

.ntvb-vw-100 {
  width: 100vw !important;
}

.ntvb-min-vw-100 {
  min-width: 100vw !important;
}

.ntvb-h-25 {
  height: 25% !important;
}

.ntvb-h-50 {
  height: 50% !important;
}

.ntvb-h-75 {
  height: 75% !important;
}

.ntvb-h-100 {
  height: 100% !important;
}

.ntvb-h-auto {
  height: auto !important;
}

.ntvb-mh-100 {
  max-height: 100% !important;
}

.ntvb-vh-100 {
  height: 100vh !important;
}

.ntvb-min-vh-100 {
  min-height: 100vh !important;
}

.ntvb-flex-fill {
  flex: 1 1 auto !important;
}

.ntvb-flex-row {
  flex-direction: row !important;
}

.ntvb-flex-column {
  flex-direction: column !important;
}

.ntvb-flex-row-reverse {
  flex-direction: row-reverse !important;
}

.ntvb-flex-column-reverse {
  flex-direction: column-reverse !important;
}

.ntvb-flex-grow-0 {
  flex-grow: 0 !important;
}

.ntvb-flex-grow-1 {
  flex-grow: 1 !important;
}

.ntvb-flex-shrink-0 {
  flex-shrink: 0 !important;
}

.ntvb-flex-shrink-1 {
  flex-shrink: 1 !important;
}

.ntvb-flex-wrap {
  flex-wrap: wrap !important;
}

.ntvb-flex-nowrap {
  flex-wrap: nowrap !important;
}

.ntvb-flex-wrap-reverse {
  flex-wrap: wrap-reverse !important;
}

.ntvb-gap-0 {
  gap: 0 !important;
}

.ntvb-gap-1 {
  gap: 0.25rem !important;
}

.ntvb-gap-2 {
  gap: 0.5rem !important;
}

.ntvb-gap-3 {
  gap: 1rem !important;
}

.ntvb-gap-4 {
  gap: 1.5rem !important;
}

.ntvb-gap-5 {
  gap: 3rem !important;
}

.ntvb-justify-content-start {
  justify-content: flex-start !important;
}

.ntvb-justify-content-end {
  justify-content: flex-end !important;
}

.ntvb-justify-content-center {
  justify-content: center !important;
}

.ntvb-justify-content-between {
  justify-content: space-between !important;
}

.ntvb-justify-content-around {
  justify-content: space-around !important;
}

.ntvb-justify-content-evenly {
  justify-content: space-evenly !important;
}

.ntvb-align-items-start {
  align-items: flex-start !important;
}

.ntvb-align-items-end {
  align-items: flex-end !important;
}

.ntvb-align-items-center {
  align-items: center !important;
}

.ntvb-align-items-baseline {
  align-items: baseline !important;
}

.ntvb-align-items-stretch {
  align-items: stretch !important;
}

.ntvb-align-content-start {
  align-content: flex-start !important;
}

.ntvb-align-content-end {
  align-content: flex-end !important;
}

.ntvb-align-content-center {
  align-content: center !important;
}

.ntvb-align-content-between {
  align-content: space-between !important;
}

.ntvb-align-content-around {
  align-content: space-around !important;
}

.ntvb-align-content-stretch {
  align-content: stretch !important;
}

.ntvb-align-self-auto {
  align-self: auto !important;
}

.ntvb-align-self-start {
  align-self: flex-start !important;
}

.ntvb-align-self-end {
  align-self: flex-end !important;
}

.ntvb-align-self-center {
  align-self: center !important;
}

.ntvb-align-self-baseline {
  align-self: baseline !important;
}

.ntvb-align-self-stretch {
  align-self: stretch !important;
}

.ntvb-order-first {
  order: -1 !important;
}

.ntvb-order-0 {
  order: 0 !important;
}

.ntvb-order-1 {
  order: 1 !important;
}

.ntvb-order-2 {
  order: 2 !important;
}

.ntvb-order-3 {
  order: 3 !important;
}

.ntvb-order-4 {
  order: 4 !important;
}

.ntvb-order-5 {
  order: 5 !important;
}

.ntvb-order-last {
  order: 6 !important;
}

.ntvb-m-0 {
  margin: 0 !important;
}

.ntvb-m-1 {
  margin: 0.25rem !important;
}

.ntvb-m-2 {
  margin: 0.5rem !important;
}

.ntvb-m-3 {
  margin: 1rem !important;
}

.ntvb-m-4 {
  margin: 1.5rem !important;
}

.ntvb-m-5 {
  margin: 3rem !important;
}

.ntvb-m-auto {
  margin: auto !important;
}

.ntvb-mx-0 {
  margin-right: 0 !important;
  margin-left: 0 !important;
}

.ntvb-mx-1 {
  margin-right: 0.25rem !important;
  margin-left: 0.25rem !important;
}

.ntvb-mx-2 {
  margin-right: 0.5rem !important;
  margin-left: 0.5rem !important;
}

.ntvb-mx-3 {
  margin-right: 1rem !important;
  margin-left: 1rem !important;
}

.ntvb-mx-4 {
  margin-right: 1.5rem !important;
  margin-left: 1.5rem !important;
}

.ntvb-mx-5 {
  margin-right: 3rem !important;
  margin-left: 3rem !important;
}

.ntvb-mx-auto {
  margin-right: auto !important;
  margin-left: auto !important;
}

.ntvb-my-0 {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}

.ntvb-my-1 {
  margin-top: 0.25rem !important;
  margin-bottom: 0.25rem !important;
}

.ntvb-my-2 {
  margin-top: 0.5rem !important;
  margin-bottom: 0.5rem !important;
}

.ntvb-my-3 {
  margin-top: 1rem !important;
  margin-bottom: 1rem !important;
}

.ntvb-my-4 {
  margin-top: 1.5rem !important;
  margin-bottom: 1.5rem !important;
}

.ntvb-my-5 {
  margin-top: 3rem !important;
  margin-bottom: 3rem !important;
}

.ntvb-my-auto {
  margin-top: auto !important;
  margin-bottom: auto !important;
}

.ntvb-mt-0 {
  margin-top: 0 !important;
}

.ntvb-mt-1 {
  margin-top: 0.25rem !important;
}

.ntvb-mt-2 {
  margin-top: 0.5rem !important;
}

.ntvb-mt-3 {
  margin-top: 1rem !important;
}

.ntvb-mt-4 {
  margin-top: 1.5rem !important;
}

.ntvb-mt-5 {
  margin-top: 3rem !important;
}

.ntvb-mt-auto {
  margin-top: auto !important;
}

.ntvb-me-0 {
  margin-right: 0 !important;
}

.ntvb-me-1 {
  margin-right: 0.25rem !important;
}

.ntvb-me-2 {
  margin-right: 0.5rem !important;
}

.ntvb-me-3 {
  margin-right: 1rem !important;
}

.ntvb-me-4 {
  margin-right: 1.5rem !important;
}

.ntvb-me-5 {
  margin-right: 3rem !important;
}

.ntvb-me-auto {
  margin-right: auto !important;
}

.ntvb-mb-0 {
  margin-bottom: 0 !important;
}

.ntvb-mb-1 {
  margin-bottom: 0.25rem !important;
}

.ntvb-mb-2 {
  margin-bottom: 0.5rem !important;
}

.ntvb-mb-3 {
  margin-bottom: 1rem !important;
}

.ntvb-mb-4 {
  margin-bottom: 1.5rem !important;
}

.ntvb-mb-5 {
  margin-bottom: 3rem !important;
}

.ntvb-mb-auto {
  margin-bottom: auto !important;
}

.ntvb-ms-0 {
  margin-left: 0 !important;
}

.ntvb-ms-1 {
  margin-left: 0.25rem !important;
}

.ntvb-ms-2 {
  margin-left: 0.5rem !important;
}

.ntvb-ms-3 {
  margin-left: 1rem !important;
}

.ntvb-ms-4 {
  margin-left: 1.5rem !important;
}

.ntvb-ms-5 {
  margin-left: 3rem !important;
}

.ntvb-ms-auto {
  margin-left: auto !important;
}

.ntvb-p-0 {
  padding: 0 !important;
}

.ntvb-p-1 {
  padding: 0.25rem !important;
}

.ntvb-p-2 {
  padding: 0.5rem !important;
}

.ntvb-p-3 {
  padding: 1rem !important;
}

.ntvb-p-4 {
  padding: 1.5rem !important;
}

.ntvb-p-5 {
  padding: 3rem !important;
}

.ntvb-px-0 {
  padding-right: 0 !important;
  padding-left: 0 !important;
}

.ntvb-px-1 {
  padding-right: 0.25rem !important;
  padding-left: 0.25rem !important;
}

.ntvb-px-2 {
  padding-right: 0.5rem !important;
  padding-left: 0.5rem !important;
}

.ntvb-px-3 {
  padding-right: 1rem !important;
  padding-left: 1rem !important;
}

.ntvb-px-4 {
  padding-right: 1.5rem !important;
  padding-left: 1.5rem !important;
}

.ntvb-px-5 {
  padding-right: 3rem !important;
  padding-left: 3rem !important;
}

.ntvb-py-0 {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}

.ntvb-py-1 {
  padding-top: 0.25rem !important;
  padding-bottom: 0.25rem !important;
}

.ntvb-py-2 {
  padding-top: 0.5rem !important;
  padding-bottom: 0.5rem !important;
}

.ntvb-py-3 {
  padding-top: 1rem !important;
  padding-bottom: 1rem !important;
}

.ntvb-py-4 {
  padding-top: 1.5rem !important;
  padding-bottom: 1.5rem !important;
}

.ntvb-py-5 {
  padding-top: 3rem !important;
  padding-bottom: 3rem !important;
}

.ntvb-pt-0 {
  padding-top: 0 !important;
}

.ntvb-pt-1 {
  padding-top: 0.25rem !important;
}

.ntvb-pt-2 {
  padding-top: 0.5rem !important;
}

.ntvb-pt-3 {
  padding-top: 1rem !important;
}

.ntvb-pt-4 {
  padding-top: 1.5rem !important;
}

.ntvb-pt-5 {
  padding-top: 3rem !important;
}

.ntvb-pe-0 {
  padding-right: 0 !important;
}

.ntvb-pe-1 {
  padding-right: 0.25rem !important;
}

.ntvb-pe-2 {
  padding-right: 0.5rem !important;
}

.ntvb-pe-3 {
  padding-right: 1rem !important;
}

.ntvb-pe-4 {
  padding-right: 1.5rem !important;
}

.ntvb-pe-5 {
  padding-right: 3rem !important;
}

.ntvb-pb-0 {
  padding-bottom: 0 !important;
}

.ntvb-pb-1 {
  padding-bottom: 0.25rem !important;
}

.ntvb-pb-2 {
  padding-bottom: 0.5rem !important;
}

.ntvb-pb-3 {
  padding-bottom: 1rem !important;
}

.ntvb-pb-4 {
  padding-bottom: 1.5rem !important;
}

.ntvb-pb-5 {
  padding-bottom: 3rem !important;
}

.ntvb-ps-0 {
  padding-left: 0 !important;
}

.ntvb-ps-1 {
  padding-left: 0.25rem !important;
}

.ntvb-ps-2 {
  padding-left: 0.5rem !important;
}

.ntvb-ps-3 {
  padding-left: 1rem !important;
}

.ntvb-ps-4 {
  padding-left: 1.5rem !important;
}

.ntvb-ps-5 {
  padding-left: 3rem !important;
}

.ntvb-font-monospace {
  font-family: var(--ntvb-bs-font-monospace) !important;
}

.ntvb-fs-1 {
  font-size: calc(1.375rem + 1.5vw) !important;
}

.ntvb-fs-2 {
  font-size: calc(1.325rem + 0.9vw) !important;
}

.ntvb-fs-3 {
  font-size: calc(1.3rem + 0.6vw) !important;
}

.ntvb-fs-4 {
  font-size: calc(1.275rem + 0.3vw) !important;
}

.ntvb-fs-5 {
  font-size: 1.25rem !important;
}

.ntvb-fs-6 {
  font-size: 1rem !important;
}

.ntvb-fst-italic {
  font-style: italic !important;
}

.ntvb-fst-normal {
  font-style: normal !important;
}

.ntvb-fw-light {
  font-weight: 300 !important;
}

.ntvb-fw-lighter {
  font-weight: lighter !important;
}

.ntvb-fw-normal {
  font-weight: 400 !important;
}

.ntvb-fw-bold {
  font-weight: 700 !important;
}

.ntvb-fw-bolder {
  font-weight: bolder !important;
}

.ntvb-lh-1 {
  line-height: 1 !important;
}

.ntvb-lh-sm {
  line-height: 1.25 !important;
}

.ntvb-lh-base {
  line-height: 1.5 !important;
}

.ntvb-lh-lg {
  line-height: 2 !important;
}

.ntvb-text-start {
  text-align: left !important;
}

.ntvb-text-end {
  text-align: right !important;
}

.ntvb-text-center {
  text-align: center !important;
}

.ntvb-text-decoration-none {
  text-decoration: none !important;
}

.ntvb-text-decoration-underline {
  text-decoration: underline !important;
}

.ntvb-text-decoration-line-through {
  text-decoration: line-through !important;
}

.ntvb-text-lowercase {
  text-transform: lowercase !important;
}

.ntvb-text-uppercase {
  text-transform: uppercase !important;
}

.ntvb-text-capitalize {
  text-transform: capitalize !important;
}

.ntvb-text-wrap {
  white-space: normal !important;
}

.ntvb-text-nowrap {
  white-space: nowrap !important;
}

/* rtl:begin:remove */
.ntvb-text-break {
  word-wrap: break-word !important;
  word-break: break-word !important;
}

/* rtl:end:remove */
.ntvb-text-primary {
  --ntvb-bs-text-opacity: 1;
  color: rgba(var(--ntvb-bs-primary-rgb), var(--ntvb-bs-text-opacity)) !important;
}

.ntvb-text-secondary {
  --ntvb-bs-text-opacity: 1;
  color: rgba(var(--ntvb-bs-secondary-rgb), var(--ntvb-bs-text-opacity)) !important;
}

.ntvb-text-success {
  --ntvb-bs-text-opacity: 1;
  color: rgba(var(--ntvb-bs-success-rgb), var(--ntvb-bs-text-opacity)) !important;
}

.ntvb-text-info {
  --ntvb-bs-text-opacity: 1;
  color: rgba(var(--ntvb-bs-info-rgb), var(--ntvb-bs-text-opacity)) !important;
}

.ntvb-text-warning {
  --ntvb-bs-text-opacity: 1;
  color: rgba(var(--ntvb-bs-warning-rgb), var(--ntvb-bs-text-opacity)) !important;
}

.ntvb-text-danger {
  --ntvb-bs-text-opacity: 1;
  color: rgba(var(--ntvb-bs-danger-rgb), var(--ntvb-bs-text-opacity)) !important;
}

.ntvb-text-light {
  --ntvb-bs-text-opacity: 1;
  color: rgba(var(--ntvb-bs-light-rgb), var(--ntvb-bs-text-opacity)) !important;
}

.ntvb-text-dark {
  --ntvb-bs-text-opacity: 1;
  color: rgba(var(--ntvb-bs-dark-rgb), var(--ntvb-bs-text-opacity)) !important;
}

.ntvb-text-black {
  --ntvb-bs-text-opacity: 1;
  color: rgba(var(--ntvb-bs-black-rgb), var(--ntvb-bs-text-opacity)) !important;
}

.ntvb-text-white {
  --ntvb-bs-text-opacity: 1;
  color: rgba(var(--ntvb-bs-white-rgb), var(--ntvb-bs-text-opacity)) !important;
}

.ntvb-text-body {
  --ntvb-bs-text-opacity: 1;
  color: rgba(var(--ntvb-bs-body-rgb), var(--ntvb-bs-text-opacity)) !important;
}

.ntvb-text-muted {
  --ntvb-bs-text-opacity: 1;
  color: #6c757d !important;
}

.ntvb-text-black-50 {
  --ntvb-bs-text-opacity: 1;
  color: rgba(0, 0, 0, 0.5) !important;
}

.ntvb-text-white-50 {
  --ntvb-bs-text-opacity: 1;
  color: rgba(255, 255, 255, 0.5) !important;
}

.ntvb-text-reset {
  --ntvb-bs-text-opacity: 1;
  color: inherit !important;
}

.ntvb-text-opacity-25 {
  --ntvb-bs-text-opacity: 0.25;
}

.ntvb-text-opacity-50 {
  --ntvb-bs-text-opacity: 0.5;
}

.ntvb-text-opacity-75 {
  --ntvb-bs-text-opacity: 0.75;
}

.ntvb-text-opacity-100 {
  --ntvb-bs-text-opacity: 1;
}

.ntvb-bg-primary {
  --ntvb-bs-bg-opacity: 1;
  background-color: rgba(var(--ntvb-bs-primary-rgb), var(--ntvb-bs-bg-opacity)) !important;
}

.ntvb-bg-secondary {
  --ntvb-bs-bg-opacity: 1;
  background-color: rgba(var(--ntvb-bs-secondary-rgb), var(--ntvb-bs-bg-opacity)) !important;
}

.ntvb-bg-success {
  --ntvb-bs-bg-opacity: 1;
  background-color: rgba(var(--ntvb-bs-success-rgb), var(--ntvb-bs-bg-opacity)) !important;
}

.ntvb-bg-info {
  --ntvb-bs-bg-opacity: 1;
  background-color: rgba(var(--ntvb-bs-info-rgb), var(--ntvb-bs-bg-opacity)) !important;
}

.ntvb-bg-warning {
  --ntvb-bs-bg-opacity: 1;
  background-color: rgba(var(--ntvb-bs-warning-rgb), var(--ntvb-bs-bg-opacity)) !important;
}

.ntvb-bg-danger {
  --ntvb-bs-bg-opacity: 1;
  background-color: rgba(var(--ntvb-bs-danger-rgb), var(--ntvb-bs-bg-opacity)) !important;
}

.ntvb-bg-light {
  --ntvb-bs-bg-opacity: 1;
  background-color: rgba(var(--ntvb-bs-light-rgb), var(--ntvb-bs-bg-opacity)) !important;
}

.ntvb-bg-dark {
  --ntvb-bs-bg-opacity: 1;
  background-color: rgba(var(--ntvb-bs-dark-rgb), var(--ntvb-bs-bg-opacity)) !important;
}

.ntvb-bg-black {
  --ntvb-bs-bg-opacity: 1;
  background-color: rgba(var(--ntvb-bs-black-rgb), var(--ntvb-bs-bg-opacity)) !important;
}

.ntvb-bg-white {
  --ntvb-bs-bg-opacity: 1;
  background-color: rgba(var(--ntvb-bs-white-rgb), var(--ntvb-bs-bg-opacity)) !important;
}

.ntvb-bg-body {
  --ntvb-bs-bg-opacity: 1;
  background-color: rgba(var(--ntvb-bs-body-rgb), var(--ntvb-bs-bg-opacity)) !important;
}

.ntvb-bg-transparent {
  --ntvb-bs-bg-opacity: 1;
  background-color: transparent !important;
}

.ntvb-bg-opacity-10 {
  --ntvb-bs-bg-opacity: 0.1;
}

.ntvb-bg-opacity-25 {
  --ntvb-bs-bg-opacity: 0.25;
}

.ntvb-bg-opacity-50 {
  --ntvb-bs-bg-opacity: 0.5;
}

.ntvb-bg-opacity-75 {
  --ntvb-bs-bg-opacity: 0.75;
}

.ntvb-bg-opacity-100 {
  --ntvb-bs-bg-opacity: 1;
}

.ntvb-bg-gradient {
  background-image: var(--ntvb-bs-gradient) !important;
}

.ntvb-user-select-all {
  -webkit-user-select: all !important;
  -moz-user-select: all !important;
  user-select: all !important;
}

.ntvb-user-select-auto {
  -webkit-user-select: auto !important;
  -moz-user-select: auto !important;
  user-select: auto !important;
}

.ntvb-user-select-none {
  -webkit-user-select: none !important;
  -moz-user-select: none !important;
  user-select: none !important;
}

.ntvb-pe-none {
  pointer-events: none !important;
}

.ntvb-pe-auto {
  pointer-events: auto !important;
}

.ntvb-rounded {
  border-radius: 0.25rem !important;
}

.ntvb-rounded-0 {
  border-radius: 0 !important;
}

.ntvb-rounded-1 {
  border-radius: 0.2rem !important;
}

.ntvb-rounded-2 {
  border-radius: 0.25rem !important;
}

.ntvb-rounded-3 {
  border-radius: 0.3rem !important;
}

.ntvb-rounded-circle {
  border-radius: 50% !important;
}

.ntvb-rounded-pill {
  border-radius: 50rem !important;
}

.ntvb-rounded-top {
  border-top-left-radius: 0.25rem !important;
  border-top-right-radius: 0.25rem !important;
}

.ntvb-rounded-end {
  border-top-right-radius: 0.25rem !important;
  border-bottom-right-radius: 0.25rem !important;
}

.ntvb-rounded-bottom {
  border-bottom-right-radius: 0.25rem !important;
  border-bottom-left-radius: 0.25rem !important;
}

.ntvb-rounded-start {
  border-bottom-left-radius: 0.25rem !important;
  border-top-left-radius: 0.25rem !important;
}

.ntvb-visible {
  visibility: visible !important;
}

.ntvb-invisible {
  visibility: hidden !important;
}

@media (min-width: 576px) {
  .ntvb-float-sm-start {
    float: left !important;
  }

  .ntvb-float-sm-end {
    float: right !important;
  }

  .ntvb-float-sm-none {
    float: none !important;
  }

  .ntvb-d-sm-inline {
    display: inline !important;
  }

  .ntvb-d-sm-inline-block {
    display: inline-block !important;
  }

  .ntvb-d-sm-block {
    display: block !important;
  }

  .ntvb-d-sm-grid {
    display: grid !important;
  }

  .ntvb-d-sm-table {
    display: table !important;
  }

  .ntvb-d-sm-table-row {
    display: table-row !important;
  }

  .ntvb-d-sm-table-cell {
    display: table-cell !important;
  }

  .ntvb-d-sm-flex {
    display: flex !important;
  }

  .ntvb-d-sm-inline-flex {
    display: inline-flex !important;
  }

  .ntvb-d-sm-none {
    display: none !important;
  }

  .ntvb-flex-sm-fill {
    flex: 1 1 auto !important;
  }

  .ntvb-flex-sm-row {
    flex-direction: row !important;
  }

  .ntvb-flex-sm-column {
    flex-direction: column !important;
  }

  .ntvb-flex-sm-row-reverse {
    flex-direction: row-reverse !important;
  }

  .ntvb-flex-sm-column-reverse {
    flex-direction: column-reverse !important;
  }

  .ntvb-flex-sm-grow-0 {
    flex-grow: 0 !important;
  }

  .ntvb-flex-sm-grow-1 {
    flex-grow: 1 !important;
  }

  .ntvb-flex-sm-shrink-0 {
    flex-shrink: 0 !important;
  }

  .ntvb-flex-sm-shrink-1 {
    flex-shrink: 1 !important;
  }

  .ntvb-flex-sm-wrap {
    flex-wrap: wrap !important;
  }

  .ntvb-flex-sm-nowrap {
    flex-wrap: nowrap !important;
  }

  .ntvb-flex-sm-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }

  .ntvb-gap-sm-0 {
    gap: 0 !important;
  }

  .ntvb-gap-sm-1 {
    gap: 0.25rem !important;
  }

  .ntvb-gap-sm-2 {
    gap: 0.5rem !important;
  }

  .ntvb-gap-sm-3 {
    gap: 1rem !important;
  }

  .ntvb-gap-sm-4 {
    gap: 1.5rem !important;
  }

  .ntvb-gap-sm-5 {
    gap: 3rem !important;
  }

  .ntvb-justify-content-sm-start {
    justify-content: flex-start !important;
  }

  .ntvb-justify-content-sm-end {
    justify-content: flex-end !important;
  }

  .ntvb-justify-content-sm-center {
    justify-content: center !important;
  }

  .ntvb-justify-content-sm-between {
    justify-content: space-between !important;
  }

  .ntvb-justify-content-sm-around {
    justify-content: space-around !important;
  }

  .ntvb-justify-content-sm-evenly {
    justify-content: space-evenly !important;
  }

  .ntvb-align-items-sm-start {
    align-items: flex-start !important;
  }

  .ntvb-align-items-sm-end {
    align-items: flex-end !important;
  }

  .ntvb-align-items-sm-center {
    align-items: center !important;
  }

  .ntvb-align-items-sm-baseline {
    align-items: baseline !important;
  }

  .ntvb-align-items-sm-stretch {
    align-items: stretch !important;
  }

  .ntvb-align-content-sm-start {
    align-content: flex-start !important;
  }

  .ntvb-align-content-sm-end {
    align-content: flex-end !important;
  }

  .ntvb-align-content-sm-center {
    align-content: center !important;
  }

  .ntvb-align-content-sm-between {
    align-content: space-between !important;
  }

  .ntvb-align-content-sm-around {
    align-content: space-around !important;
  }

  .ntvb-align-content-sm-stretch {
    align-content: stretch !important;
  }

  .ntvb-align-self-sm-auto {
    align-self: auto !important;
  }

  .ntvb-align-self-sm-start {
    align-self: flex-start !important;
  }

  .ntvb-align-self-sm-end {
    align-self: flex-end !important;
  }

  .ntvb-align-self-sm-center {
    align-self: center !important;
  }

  .ntvb-align-self-sm-baseline {
    align-self: baseline !important;
  }

  .ntvb-align-self-sm-stretch {
    align-self: stretch !important;
  }

  .ntvb-order-sm-first {
    order: -1 !important;
  }

  .ntvb-order-sm-0 {
    order: 0 !important;
  }

  .ntvb-order-sm-1 {
    order: 1 !important;
  }

  .ntvb-order-sm-2 {
    order: 2 !important;
  }

  .ntvb-order-sm-3 {
    order: 3 !important;
  }

  .ntvb-order-sm-4 {
    order: 4 !important;
  }

  .ntvb-order-sm-5 {
    order: 5 !important;
  }

  .ntvb-order-sm-last {
    order: 6 !important;
  }

  .ntvb-m-sm-0 {
    margin: 0 !important;
  }

  .ntvb-m-sm-1 {
    margin: 0.25rem !important;
  }

  .ntvb-m-sm-2 {
    margin: 0.5rem !important;
  }

  .ntvb-m-sm-3 {
    margin: 1rem !important;
  }

  .ntvb-m-sm-4 {
    margin: 1.5rem !important;
  }

  .ntvb-m-sm-5 {
    margin: 3rem !important;
  }

  .ntvb-m-sm-auto {
    margin: auto !important;
  }

  .ntvb-mx-sm-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }

  .ntvb-mx-sm-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important;
  }

  .ntvb-mx-sm-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important;
  }

  .ntvb-mx-sm-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important;
  }

  .ntvb-mx-sm-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important;
  }

  .ntvb-mx-sm-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important;
  }

  .ntvb-mx-sm-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }

  .ntvb-my-sm-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }

  .ntvb-my-sm-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
  }

  .ntvb-my-sm-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }

  .ntvb-my-sm-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }

  .ntvb-my-sm-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }

  .ntvb-my-sm-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }

  .ntvb-my-sm-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }

  .ntvb-mt-sm-0 {
    margin-top: 0 !important;
  }

  .ntvb-mt-sm-1 {
    margin-top: 0.25rem !important;
  }

  .ntvb-mt-sm-2 {
    margin-top: 0.5rem !important;
  }

  .ntvb-mt-sm-3 {
    margin-top: 1rem !important;
  }

  .ntvb-mt-sm-4 {
    margin-top: 1.5rem !important;
  }

  .ntvb-mt-sm-5 {
    margin-top: 3rem !important;
  }

  .ntvb-mt-sm-auto {
    margin-top: auto !important;
  }

  .ntvb-me-sm-0 {
    margin-right: 0 !important;
  }

  .ntvb-me-sm-1 {
    margin-right: 0.25rem !important;
  }

  .ntvb-me-sm-2 {
    margin-right: 0.5rem !important;
  }

  .ntvb-me-sm-3 {
    margin-right: 1rem !important;
  }

  .ntvb-me-sm-4 {
    margin-right: 1.5rem !important;
  }

  .ntvb-me-sm-5 {
    margin-right: 3rem !important;
  }

  .ntvb-me-sm-auto {
    margin-right: auto !important;
  }

  .ntvb-mb-sm-0 {
    margin-bottom: 0 !important;
  }

  .ntvb-mb-sm-1 {
    margin-bottom: 0.25rem !important;
  }

  .ntvb-mb-sm-2 {
    margin-bottom: 0.5rem !important;
  }

  .ntvb-mb-sm-3 {
    margin-bottom: 1rem !important;
  }

  .ntvb-mb-sm-4 {
    margin-bottom: 1.5rem !important;
  }

  .ntvb-mb-sm-5 {
    margin-bottom: 3rem !important;
  }

  .ntvb-mb-sm-auto {
    margin-bottom: auto !important;
  }

  .ntvb-ms-sm-0 {
    margin-left: 0 !important;
  }

  .ntvb-ms-sm-1 {
    margin-left: 0.25rem !important;
  }

  .ntvb-ms-sm-2 {
    margin-left: 0.5rem !important;
  }

  .ntvb-ms-sm-3 {
    margin-left: 1rem !important;
  }

  .ntvb-ms-sm-4 {
    margin-left: 1.5rem !important;
  }

  .ntvb-ms-sm-5 {
    margin-left: 3rem !important;
  }

  .ntvb-ms-sm-auto {
    margin-left: auto !important;
  }

  .ntvb-p-sm-0 {
    padding: 0 !important;
  }

  .ntvb-p-sm-1 {
    padding: 0.25rem !important;
  }

  .ntvb-p-sm-2 {
    padding: 0.5rem !important;
  }

  .ntvb-p-sm-3 {
    padding: 1rem !important;
  }

  .ntvb-p-sm-4 {
    padding: 1.5rem !important;
  }

  .ntvb-p-sm-5 {
    padding: 3rem !important;
  }

  .ntvb-px-sm-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }

  .ntvb-px-sm-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important;
  }

  .ntvb-px-sm-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
  }

  .ntvb-px-sm-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }

  .ntvb-px-sm-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }

  .ntvb-px-sm-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }

  .ntvb-py-sm-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }

  .ntvb-py-sm-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }

  .ntvb-py-sm-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }

  .ntvb-py-sm-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }

  .ntvb-py-sm-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }

  .ntvb-py-sm-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }

  .ntvb-pt-sm-0 {
    padding-top: 0 !important;
  }

  .ntvb-pt-sm-1 {
    padding-top: 0.25rem !important;
  }

  .ntvb-pt-sm-2 {
    padding-top: 0.5rem !important;
  }

  .ntvb-pt-sm-3 {
    padding-top: 1rem !important;
  }

  .ntvb-pt-sm-4 {
    padding-top: 1.5rem !important;
  }

  .ntvb-pt-sm-5 {
    padding-top: 3rem !important;
  }

  .ntvb-pe-sm-0 {
    padding-right: 0 !important;
  }

  .ntvb-pe-sm-1 {
    padding-right: 0.25rem !important;
  }

  .ntvb-pe-sm-2 {
    padding-right: 0.5rem !important;
  }

  .ntvb-pe-sm-3 {
    padding-right: 1rem !important;
  }

  .ntvb-pe-sm-4 {
    padding-right: 1.5rem !important;
  }

  .ntvb-pe-sm-5 {
    padding-right: 3rem !important;
  }

  .ntvb-pb-sm-0 {
    padding-bottom: 0 !important;
  }

  .ntvb-pb-sm-1 {
    padding-bottom: 0.25rem !important;
  }

  .ntvb-pb-sm-2 {
    padding-bottom: 0.5rem !important;
  }

  .ntvb-pb-sm-3 {
    padding-bottom: 1rem !important;
  }

  .ntvb-pb-sm-4 {
    padding-bottom: 1.5rem !important;
  }

  .ntvb-pb-sm-5 {
    padding-bottom: 3rem !important;
  }

  .ntvb-ps-sm-0 {
    padding-left: 0 !important;
  }

  .ntvb-ps-sm-1 {
    padding-left: 0.25rem !important;
  }

  .ntvb-ps-sm-2 {
    padding-left: 0.5rem !important;
  }

  .ntvb-ps-sm-3 {
    padding-left: 1rem !important;
  }

  .ntvb-ps-sm-4 {
    padding-left: 1.5rem !important;
  }

  .ntvb-ps-sm-5 {
    padding-left: 3rem !important;
  }

  .ntvb-text-sm-start {
    text-align: left !important;
  }

  .ntvb-text-sm-end {
    text-align: right !important;
  }

  .ntvb-text-sm-center {
    text-align: center !important;
  }
}
@media (min-width: 768px) {
  .ntvb-float-md-start {
    float: left !important;
  }

  .ntvb-float-md-end {
    float: right !important;
  }

  .ntvb-float-md-none {
    float: none !important;
  }

  .ntvb-d-md-inline {
    display: inline !important;
  }

  .ntvb-d-md-inline-block {
    display: inline-block !important;
  }

  .ntvb-d-md-block {
    display: block !important;
  }

  .ntvb-d-md-grid {
    display: grid !important;
  }

  .ntvb-d-md-table {
    display: table !important;
  }

  .ntvb-d-md-table-row {
    display: table-row !important;
  }

  .ntvb-d-md-table-cell {
    display: table-cell !important;
  }

  .ntvb-d-md-flex {
    display: flex !important;
  }

  .ntvb-d-md-inline-flex {
    display: inline-flex !important;
  }

  .ntvb-d-md-none {
    display: none !important;
  }

  .ntvb-flex-md-fill {
    flex: 1 1 auto !important;
  }

  .ntvb-flex-md-row {
    flex-direction: row !important;
  }

  .ntvb-flex-md-column {
    flex-direction: column !important;
  }

  .ntvb-flex-md-row-reverse {
    flex-direction: row-reverse !important;
  }

  .ntvb-flex-md-column-reverse {
    flex-direction: column-reverse !important;
  }

  .ntvb-flex-md-grow-0 {
    flex-grow: 0 !important;
  }

  .ntvb-flex-md-grow-1 {
    flex-grow: 1 !important;
  }

  .ntvb-flex-md-shrink-0 {
    flex-shrink: 0 !important;
  }

  .ntvb-flex-md-shrink-1 {
    flex-shrink: 1 !important;
  }

  .ntvb-flex-md-wrap {
    flex-wrap: wrap !important;
  }

  .ntvb-flex-md-nowrap {
    flex-wrap: nowrap !important;
  }

  .ntvb-flex-md-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }

  .ntvb-gap-md-0 {
    gap: 0 !important;
  }

  .ntvb-gap-md-1 {
    gap: 0.25rem !important;
  }

  .ntvb-gap-md-2 {
    gap: 0.5rem !important;
  }

  .ntvb-gap-md-3 {
    gap: 1rem !important;
  }

  .ntvb-gap-md-4 {
    gap: 1.5rem !important;
  }

  .ntvb-gap-md-5 {
    gap: 3rem !important;
  }

  .ntvb-justify-content-md-start {
    justify-content: flex-start !important;
  }

  .ntvb-justify-content-md-end {
    justify-content: flex-end !important;
  }

  .ntvb-justify-content-md-center {
    justify-content: center !important;
  }

  .ntvb-justify-content-md-between {
    justify-content: space-between !important;
  }

  .ntvb-justify-content-md-around {
    justify-content: space-around !important;
  }

  .ntvb-justify-content-md-evenly {
    justify-content: space-evenly !important;
  }

  .ntvb-align-items-md-start {
    align-items: flex-start !important;
  }

  .ntvb-align-items-md-end {
    align-items: flex-end !important;
  }

  .ntvb-align-items-md-center {
    align-items: center !important;
  }

  .ntvb-align-items-md-baseline {
    align-items: baseline !important;
  }

  .ntvb-align-items-md-stretch {
    align-items: stretch !important;
  }

  .ntvb-align-content-md-start {
    align-content: flex-start !important;
  }

  .ntvb-align-content-md-end {
    align-content: flex-end !important;
  }

  .ntvb-align-content-md-center {
    align-content: center !important;
  }

  .ntvb-align-content-md-between {
    align-content: space-between !important;
  }

  .ntvb-align-content-md-around {
    align-content: space-around !important;
  }

  .ntvb-align-content-md-stretch {
    align-content: stretch !important;
  }

  .ntvb-align-self-md-auto {
    align-self: auto !important;
  }

  .ntvb-align-self-md-start {
    align-self: flex-start !important;
  }

  .ntvb-align-self-md-end {
    align-self: flex-end !important;
  }

  .ntvb-align-self-md-center {
    align-self: center !important;
  }

  .ntvb-align-self-md-baseline {
    align-self: baseline !important;
  }

  .ntvb-align-self-md-stretch {
    align-self: stretch !important;
  }

  .ntvb-order-md-first {
    order: -1 !important;
  }

  .ntvb-order-md-0 {
    order: 0 !important;
  }

  .ntvb-order-md-1 {
    order: 1 !important;
  }

  .ntvb-order-md-2 {
    order: 2 !important;
  }

  .ntvb-order-md-3 {
    order: 3 !important;
  }

  .ntvb-order-md-4 {
    order: 4 !important;
  }

  .ntvb-order-md-5 {
    order: 5 !important;
  }

  .ntvb-order-md-last {
    order: 6 !important;
  }

  .ntvb-m-md-0 {
    margin: 0 !important;
  }

  .ntvb-m-md-1 {
    margin: 0.25rem !important;
  }

  .ntvb-m-md-2 {
    margin: 0.5rem !important;
  }

  .ntvb-m-md-3 {
    margin: 1rem !important;
  }

  .ntvb-m-md-4 {
    margin: 1.5rem !important;
  }

  .ntvb-m-md-5 {
    margin: 3rem !important;
  }

  .ntvb-m-md-auto {
    margin: auto !important;
  }

  .ntvb-mx-md-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }

  .ntvb-mx-md-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important;
  }

  .ntvb-mx-md-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important;
  }

  .ntvb-mx-md-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important;
  }

  .ntvb-mx-md-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important;
  }

  .ntvb-mx-md-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important;
  }

  .ntvb-mx-md-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }

  .ntvb-my-md-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }

  .ntvb-my-md-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
  }

  .ntvb-my-md-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }

  .ntvb-my-md-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }

  .ntvb-my-md-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }

  .ntvb-my-md-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }

  .ntvb-my-md-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }

  .ntvb-mt-md-0 {
    margin-top: 0 !important;
  }

  .ntvb-mt-md-1 {
    margin-top: 0.25rem !important;
  }

  .ntvb-mt-md-2 {
    margin-top: 0.5rem !important;
  }

  .ntvb-mt-md-3 {
    margin-top: 1rem !important;
  }

  .ntvb-mt-md-4 {
    margin-top: 1.5rem !important;
  }

  .ntvb-mt-md-5 {
    margin-top: 3rem !important;
  }

  .ntvb-mt-md-auto {
    margin-top: auto !important;
  }

  .ntvb-me-md-0 {
    margin-right: 0 !important;
  }

  .ntvb-me-md-1 {
    margin-right: 0.25rem !important;
  }

  .ntvb-me-md-2 {
    margin-right: 0.5rem !important;
  }

  .ntvb-me-md-3 {
    margin-right: 1rem !important;
  }

  .ntvb-me-md-4 {
    margin-right: 1.5rem !important;
  }

  .ntvb-me-md-5 {
    margin-right: 3rem !important;
  }

  .ntvb-me-md-auto {
    margin-right: auto !important;
  }

  .ntvb-mb-md-0 {
    margin-bottom: 0 !important;
  }

  .ntvb-mb-md-1 {
    margin-bottom: 0.25rem !important;
  }

  .ntvb-mb-md-2 {
    margin-bottom: 0.5rem !important;
  }

  .ntvb-mb-md-3 {
    margin-bottom: 1rem !important;
  }

  .ntvb-mb-md-4 {
    margin-bottom: 1.5rem !important;
  }

  .ntvb-mb-md-5 {
    margin-bottom: 3rem !important;
  }

  .ntvb-mb-md-auto {
    margin-bottom: auto !important;
  }

  .ntvb-ms-md-0 {
    margin-left: 0 !important;
  }

  .ntvb-ms-md-1 {
    margin-left: 0.25rem !important;
  }

  .ntvb-ms-md-2 {
    margin-left: 0.5rem !important;
  }

  .ntvb-ms-md-3 {
    margin-left: 1rem !important;
  }

  .ntvb-ms-md-4 {
    margin-left: 1.5rem !important;
  }

  .ntvb-ms-md-5 {
    margin-left: 3rem !important;
  }

  .ntvb-ms-md-auto {
    margin-left: auto !important;
  }

  .ntvb-p-md-0 {
    padding: 0 !important;
  }

  .ntvb-p-md-1 {
    padding: 0.25rem !important;
  }

  .ntvb-p-md-2 {
    padding: 0.5rem !important;
  }

  .ntvb-p-md-3 {
    padding: 1rem !important;
  }

  .ntvb-p-md-4 {
    padding: 1.5rem !important;
  }

  .ntvb-p-md-5 {
    padding: 3rem !important;
  }

  .ntvb-px-md-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }

  .ntvb-px-md-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important;
  }

  .ntvb-px-md-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
  }

  .ntvb-px-md-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }

  .ntvb-px-md-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }

  .ntvb-px-md-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }

  .ntvb-py-md-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }

  .ntvb-py-md-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }

  .ntvb-py-md-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }

  .ntvb-py-md-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }

  .ntvb-py-md-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }

  .ntvb-py-md-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }

  .ntvb-pt-md-0 {
    padding-top: 0 !important;
  }

  .ntvb-pt-md-1 {
    padding-top: 0.25rem !important;
  }

  .ntvb-pt-md-2 {
    padding-top: 0.5rem !important;
  }

  .ntvb-pt-md-3 {
    padding-top: 1rem !important;
  }

  .ntvb-pt-md-4 {
    padding-top: 1.5rem !important;
  }

  .ntvb-pt-md-5 {
    padding-top: 3rem !important;
  }

  .ntvb-pe-md-0 {
    padding-right: 0 !important;
  }

  .ntvb-pe-md-1 {
    padding-right: 0.25rem !important;
  }

  .ntvb-pe-md-2 {
    padding-right: 0.5rem !important;
  }

  .ntvb-pe-md-3 {
    padding-right: 1rem !important;
  }

  .ntvb-pe-md-4 {
    padding-right: 1.5rem !important;
  }

  .ntvb-pe-md-5 {
    padding-right: 3rem !important;
  }

  .ntvb-pb-md-0 {
    padding-bottom: 0 !important;
  }

  .ntvb-pb-md-1 {
    padding-bottom: 0.25rem !important;
  }

  .ntvb-pb-md-2 {
    padding-bottom: 0.5rem !important;
  }

  .ntvb-pb-md-3 {
    padding-bottom: 1rem !important;
  }

  .ntvb-pb-md-4 {
    padding-bottom: 1.5rem !important;
  }

  .ntvb-pb-md-5 {
    padding-bottom: 3rem !important;
  }

  .ntvb-ps-md-0 {
    padding-left: 0 !important;
  }

  .ntvb-ps-md-1 {
    padding-left: 0.25rem !important;
  }

  .ntvb-ps-md-2 {
    padding-left: 0.5rem !important;
  }

  .ntvb-ps-md-3 {
    padding-left: 1rem !important;
  }

  .ntvb-ps-md-4 {
    padding-left: 1.5rem !important;
  }

  .ntvb-ps-md-5 {
    padding-left: 3rem !important;
  }

  .ntvb-text-md-start {
    text-align: left !important;
  }

  .ntvb-text-md-end {
    text-align: right !important;
  }

  .ntvb-text-md-center {
    text-align: center !important;
  }
}
@media (min-width: 992px) {
  .ntvb-float-lg-start {
    float: left !important;
  }

  .ntvb-float-lg-end {
    float: right !important;
  }

  .ntvb-float-lg-none {
    float: none !important;
  }

  .ntvb-d-lg-inline {
    display: inline !important;
  }

  .ntvb-d-lg-inline-block {
    display: inline-block !important;
  }

  .ntvb-d-lg-block {
    display: block !important;
  }

  .ntvb-d-lg-grid {
    display: grid !important;
  }

  .ntvb-d-lg-table {
    display: table !important;
  }

  .ntvb-d-lg-table-row {
    display: table-row !important;
  }

  .ntvb-d-lg-table-cell {
    display: table-cell !important;
  }

  .ntvb-d-lg-flex {
    display: flex !important;
  }

  .ntvb-d-lg-inline-flex {
    display: inline-flex !important;
  }

  .ntvb-d-lg-none {
    display: none !important;
  }

  .ntvb-flex-lg-fill {
    flex: 1 1 auto !important;
  }

  .ntvb-flex-lg-row {
    flex-direction: row !important;
  }

  .ntvb-flex-lg-column {
    flex-direction: column !important;
  }

  .ntvb-flex-lg-row-reverse {
    flex-direction: row-reverse !important;
  }

  .ntvb-flex-lg-column-reverse {
    flex-direction: column-reverse !important;
  }

  .ntvb-flex-lg-grow-0 {
    flex-grow: 0 !important;
  }

  .ntvb-flex-lg-grow-1 {
    flex-grow: 1 !important;
  }

  .ntvb-flex-lg-shrink-0 {
    flex-shrink: 0 !important;
  }

  .ntvb-flex-lg-shrink-1 {
    flex-shrink: 1 !important;
  }

  .ntvb-flex-lg-wrap {
    flex-wrap: wrap !important;
  }

  .ntvb-flex-lg-nowrap {
    flex-wrap: nowrap !important;
  }

  .ntvb-flex-lg-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }

  .ntvb-gap-lg-0 {
    gap: 0 !important;
  }

  .ntvb-gap-lg-1 {
    gap: 0.25rem !important;
  }

  .ntvb-gap-lg-2 {
    gap: 0.5rem !important;
  }

  .ntvb-gap-lg-3 {
    gap: 1rem !important;
  }

  .ntvb-gap-lg-4 {
    gap: 1.5rem !important;
  }

  .ntvb-gap-lg-5 {
    gap: 3rem !important;
  }

  .ntvb-justify-content-lg-start {
    justify-content: flex-start !important;
  }

  .ntvb-justify-content-lg-end {
    justify-content: flex-end !important;
  }

  .ntvb-justify-content-lg-center {
    justify-content: center !important;
  }

  .ntvb-justify-content-lg-between {
    justify-content: space-between !important;
  }

  .ntvb-justify-content-lg-around {
    justify-content: space-around !important;
  }

  .ntvb-justify-content-lg-evenly {
    justify-content: space-evenly !important;
  }

  .ntvb-align-items-lg-start {
    align-items: flex-start !important;
  }

  .ntvb-align-items-lg-end {
    align-items: flex-end !important;
  }

  .ntvb-align-items-lg-center {
    align-items: center !important;
  }

  .ntvb-align-items-lg-baseline {
    align-items: baseline !important;
  }

  .ntvb-align-items-lg-stretch {
    align-items: stretch !important;
  }

  .ntvb-align-content-lg-start {
    align-content: flex-start !important;
  }

  .ntvb-align-content-lg-end {
    align-content: flex-end !important;
  }

  .ntvb-align-content-lg-center {
    align-content: center !important;
  }

  .ntvb-align-content-lg-between {
    align-content: space-between !important;
  }

  .ntvb-align-content-lg-around {
    align-content: space-around !important;
  }

  .ntvb-align-content-lg-stretch {
    align-content: stretch !important;
  }

  .ntvb-align-self-lg-auto {
    align-self: auto !important;
  }

  .ntvb-align-self-lg-start {
    align-self: flex-start !important;
  }

  .ntvb-align-self-lg-end {
    align-self: flex-end !important;
  }

  .ntvb-align-self-lg-center {
    align-self: center !important;
  }

  .ntvb-align-self-lg-baseline {
    align-self: baseline !important;
  }

  .ntvb-align-self-lg-stretch {
    align-self: stretch !important;
  }

  .ntvb-order-lg-first {
    order: -1 !important;
  }

  .ntvb-order-lg-0 {
    order: 0 !important;
  }

  .ntvb-order-lg-1 {
    order: 1 !important;
  }

  .ntvb-order-lg-2 {
    order: 2 !important;
  }

  .ntvb-order-lg-3 {
    order: 3 !important;
  }

  .ntvb-order-lg-4 {
    order: 4 !important;
  }

  .ntvb-order-lg-5 {
    order: 5 !important;
  }

  .ntvb-order-lg-last {
    order: 6 !important;
  }

  .ntvb-m-lg-0 {
    margin: 0 !important;
  }

  .ntvb-m-lg-1 {
    margin: 0.25rem !important;
  }

  .ntvb-m-lg-2 {
    margin: 0.5rem !important;
  }

  .ntvb-m-lg-3 {
    margin: 1rem !important;
  }

  .ntvb-m-lg-4 {
    margin: 1.5rem !important;
  }

  .ntvb-m-lg-5 {
    margin: 3rem !important;
  }

  .ntvb-m-lg-auto {
    margin: auto !important;
  }

  .ntvb-mx-lg-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }

  .ntvb-mx-lg-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important;
  }

  .ntvb-mx-lg-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important;
  }

  .ntvb-mx-lg-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important;
  }

  .ntvb-mx-lg-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important;
  }

  .ntvb-mx-lg-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important;
  }

  .ntvb-mx-lg-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }

  .ntvb-my-lg-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }

  .ntvb-my-lg-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
  }

  .ntvb-my-lg-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }

  .ntvb-my-lg-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }

  .ntvb-my-lg-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }

  .ntvb-my-lg-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }

  .ntvb-my-lg-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }

  .ntvb-mt-lg-0 {
    margin-top: 0 !important;
  }

  .ntvb-mt-lg-1 {
    margin-top: 0.25rem !important;
  }

  .ntvb-mt-lg-2 {
    margin-top: 0.5rem !important;
  }

  .ntvb-mt-lg-3 {
    margin-top: 1rem !important;
  }

  .ntvb-mt-lg-4 {
    margin-top: 1.5rem !important;
  }

  .ntvb-mt-lg-5 {
    margin-top: 3rem !important;
  }

  .ntvb-mt-lg-auto {
    margin-top: auto !important;
  }

  .ntvb-me-lg-0 {
    margin-right: 0 !important;
  }

  .ntvb-me-lg-1 {
    margin-right: 0.25rem !important;
  }

  .ntvb-me-lg-2 {
    margin-right: 0.5rem !important;
  }

  .ntvb-me-lg-3 {
    margin-right: 1rem !important;
  }

  .ntvb-me-lg-4 {
    margin-right: 1.5rem !important;
  }

  .ntvb-me-lg-5 {
    margin-right: 3rem !important;
  }

  .ntvb-me-lg-auto {
    margin-right: auto !important;
  }

  .ntvb-mb-lg-0 {
    margin-bottom: 0 !important;
  }

  .ntvb-mb-lg-1 {
    margin-bottom: 0.25rem !important;
  }

  .ntvb-mb-lg-2 {
    margin-bottom: 0.5rem !important;
  }

  .ntvb-mb-lg-3 {
    margin-bottom: 1rem !important;
  }

  .ntvb-mb-lg-4 {
    margin-bottom: 1.5rem !important;
  }

  .ntvb-mb-lg-5 {
    margin-bottom: 3rem !important;
  }

  .ntvb-mb-lg-auto {
    margin-bottom: auto !important;
  }

  .ntvb-ms-lg-0 {
    margin-left: 0 !important;
  }

  .ntvb-ms-lg-1 {
    margin-left: 0.25rem !important;
  }

  .ntvb-ms-lg-2 {
    margin-left: 0.5rem !important;
  }

  .ntvb-ms-lg-3 {
    margin-left: 1rem !important;
  }

  .ntvb-ms-lg-4 {
    margin-left: 1.5rem !important;
  }

  .ntvb-ms-lg-5 {
    margin-left: 3rem !important;
  }

  .ntvb-ms-lg-auto {
    margin-left: auto !important;
  }

  .ntvb-p-lg-0 {
    padding: 0 !important;
  }

  .ntvb-p-lg-1 {
    padding: 0.25rem !important;
  }

  .ntvb-p-lg-2 {
    padding: 0.5rem !important;
  }

  .ntvb-p-lg-3 {
    padding: 1rem !important;
  }

  .ntvb-p-lg-4 {
    padding: 1.5rem !important;
  }

  .ntvb-p-lg-5 {
    padding: 3rem !important;
  }

  .ntvb-px-lg-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }

  .ntvb-px-lg-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important;
  }

  .ntvb-px-lg-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
  }

  .ntvb-px-lg-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }

  .ntvb-px-lg-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }

  .ntvb-px-lg-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }

  .ntvb-py-lg-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }

  .ntvb-py-lg-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }

  .ntvb-py-lg-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }

  .ntvb-py-lg-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }

  .ntvb-py-lg-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }

  .ntvb-py-lg-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }

  .ntvb-pt-lg-0 {
    padding-top: 0 !important;
  }

  .ntvb-pt-lg-1 {
    padding-top: 0.25rem !important;
  }

  .ntvb-pt-lg-2 {
    padding-top: 0.5rem !important;
  }

  .ntvb-pt-lg-3 {
    padding-top: 1rem !important;
  }

  .ntvb-pt-lg-4 {
    padding-top: 1.5rem !important;
  }

  .ntvb-pt-lg-5 {
    padding-top: 3rem !important;
  }

  .ntvb-pe-lg-0 {
    padding-right: 0 !important;
  }

  .ntvb-pe-lg-1 {
    padding-right: 0.25rem !important;
  }

  .ntvb-pe-lg-2 {
    padding-right: 0.5rem !important;
  }

  .ntvb-pe-lg-3 {
    padding-right: 1rem !important;
  }

  .ntvb-pe-lg-4 {
    padding-right: 1.5rem !important;
  }

  .ntvb-pe-lg-5 {
    padding-right: 3rem !important;
  }

  .ntvb-pb-lg-0 {
    padding-bottom: 0 !important;
  }

  .ntvb-pb-lg-1 {
    padding-bottom: 0.25rem !important;
  }

  .ntvb-pb-lg-2 {
    padding-bottom: 0.5rem !important;
  }

  .ntvb-pb-lg-3 {
    padding-bottom: 1rem !important;
  }

  .ntvb-pb-lg-4 {
    padding-bottom: 1.5rem !important;
  }

  .ntvb-pb-lg-5 {
    padding-bottom: 3rem !important;
  }

  .ntvb-ps-lg-0 {
    padding-left: 0 !important;
  }

  .ntvb-ps-lg-1 {
    padding-left: 0.25rem !important;
  }

  .ntvb-ps-lg-2 {
    padding-left: 0.5rem !important;
  }

  .ntvb-ps-lg-3 {
    padding-left: 1rem !important;
  }

  .ntvb-ps-lg-4 {
    padding-left: 1.5rem !important;
  }

  .ntvb-ps-lg-5 {
    padding-left: 3rem !important;
  }

  .ntvb-text-lg-start {
    text-align: left !important;
  }

  .ntvb-text-lg-end {
    text-align: right !important;
  }

  .ntvb-text-lg-center {
    text-align: center !important;
  }
}
@media (min-width: 1200px) {
  .ntvb-float-xl-start {
    float: left !important;
  }

  .ntvb-float-xl-end {
    float: right !important;
  }

  .ntvb-float-xl-none {
    float: none !important;
  }

  .ntvb-d-xl-inline {
    display: inline !important;
  }

  .ntvb-d-xl-inline-block {
    display: inline-block !important;
  }

  .ntvb-d-xl-block {
    display: block !important;
  }

  .ntvb-d-xl-grid {
    display: grid !important;
  }

  .ntvb-d-xl-table {
    display: table !important;
  }

  .ntvb-d-xl-table-row {
    display: table-row !important;
  }

  .ntvb-d-xl-table-cell {
    display: table-cell !important;
  }

  .ntvb-d-xl-flex {
    display: flex !important;
  }

  .ntvb-d-xl-inline-flex {
    display: inline-flex !important;
  }

  .ntvb-d-xl-none {
    display: none !important;
  }

  .ntvb-flex-xl-fill {
    flex: 1 1 auto !important;
  }

  .ntvb-flex-xl-row {
    flex-direction: row !important;
  }

  .ntvb-flex-xl-column {
    flex-direction: column !important;
  }

  .ntvb-flex-xl-row-reverse {
    flex-direction: row-reverse !important;
  }

  .ntvb-flex-xl-column-reverse {
    flex-direction: column-reverse !important;
  }

  .ntvb-flex-xl-grow-0 {
    flex-grow: 0 !important;
  }

  .ntvb-flex-xl-grow-1 {
    flex-grow: 1 !important;
  }

  .ntvb-flex-xl-shrink-0 {
    flex-shrink: 0 !important;
  }

  .ntvb-flex-xl-shrink-1 {
    flex-shrink: 1 !important;
  }

  .ntvb-flex-xl-wrap {
    flex-wrap: wrap !important;
  }

  .ntvb-flex-xl-nowrap {
    flex-wrap: nowrap !important;
  }

  .ntvb-flex-xl-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }

  .ntvb-gap-xl-0 {
    gap: 0 !important;
  }

  .ntvb-gap-xl-1 {
    gap: 0.25rem !important;
  }

  .ntvb-gap-xl-2 {
    gap: 0.5rem !important;
  }

  .ntvb-gap-xl-3 {
    gap: 1rem !important;
  }

  .ntvb-gap-xl-4 {
    gap: 1.5rem !important;
  }

  .ntvb-gap-xl-5 {
    gap: 3rem !important;
  }

  .ntvb-justify-content-xl-start {
    justify-content: flex-start !important;
  }

  .ntvb-justify-content-xl-end {
    justify-content: flex-end !important;
  }

  .ntvb-justify-content-xl-center {
    justify-content: center !important;
  }

  .ntvb-justify-content-xl-between {
    justify-content: space-between !important;
  }

  .ntvb-justify-content-xl-around {
    justify-content: space-around !important;
  }

  .ntvb-justify-content-xl-evenly {
    justify-content: space-evenly !important;
  }

  .ntvb-align-items-xl-start {
    align-items: flex-start !important;
  }

  .ntvb-align-items-xl-end {
    align-items: flex-end !important;
  }

  .ntvb-align-items-xl-center {
    align-items: center !important;
  }

  .ntvb-align-items-xl-baseline {
    align-items: baseline !important;
  }

  .ntvb-align-items-xl-stretch {
    align-items: stretch !important;
  }

  .ntvb-align-content-xl-start {
    align-content: flex-start !important;
  }

  .ntvb-align-content-xl-end {
    align-content: flex-end !important;
  }

  .ntvb-align-content-xl-center {
    align-content: center !important;
  }

  .ntvb-align-content-xl-between {
    align-content: space-between !important;
  }

  .ntvb-align-content-xl-around {
    align-content: space-around !important;
  }

  .ntvb-align-content-xl-stretch {
    align-content: stretch !important;
  }

  .ntvb-align-self-xl-auto {
    align-self: auto !important;
  }

  .ntvb-align-self-xl-start {
    align-self: flex-start !important;
  }

  .ntvb-align-self-xl-end {
    align-self: flex-end !important;
  }

  .ntvb-align-self-xl-center {
    align-self: center !important;
  }

  .ntvb-align-self-xl-baseline {
    align-self: baseline !important;
  }

  .ntvb-align-self-xl-stretch {
    align-self: stretch !important;
  }

  .ntvb-order-xl-first {
    order: -1 !important;
  }

  .ntvb-order-xl-0 {
    order: 0 !important;
  }

  .ntvb-order-xl-1 {
    order: 1 !important;
  }

  .ntvb-order-xl-2 {
    order: 2 !important;
  }

  .ntvb-order-xl-3 {
    order: 3 !important;
  }

  .ntvb-order-xl-4 {
    order: 4 !important;
  }

  .ntvb-order-xl-5 {
    order: 5 !important;
  }

  .ntvb-order-xl-last {
    order: 6 !important;
  }

  .ntvb-m-xl-0 {
    margin: 0 !important;
  }

  .ntvb-m-xl-1 {
    margin: 0.25rem !important;
  }

  .ntvb-m-xl-2 {
    margin: 0.5rem !important;
  }

  .ntvb-m-xl-3 {
    margin: 1rem !important;
  }

  .ntvb-m-xl-4 {
    margin: 1.5rem !important;
  }

  .ntvb-m-xl-5 {
    margin: 3rem !important;
  }

  .ntvb-m-xl-auto {
    margin: auto !important;
  }

  .ntvb-mx-xl-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }

  .ntvb-mx-xl-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important;
  }

  .ntvb-mx-xl-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important;
  }

  .ntvb-mx-xl-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important;
  }

  .ntvb-mx-xl-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important;
  }

  .ntvb-mx-xl-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important;
  }

  .ntvb-mx-xl-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }

  .ntvb-my-xl-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }

  .ntvb-my-xl-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
  }

  .ntvb-my-xl-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }

  .ntvb-my-xl-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }

  .ntvb-my-xl-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }

  .ntvb-my-xl-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }

  .ntvb-my-xl-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }

  .ntvb-mt-xl-0 {
    margin-top: 0 !important;
  }

  .ntvb-mt-xl-1 {
    margin-top: 0.25rem !important;
  }

  .ntvb-mt-xl-2 {
    margin-top: 0.5rem !important;
  }

  .ntvb-mt-xl-3 {
    margin-top: 1rem !important;
  }

  .ntvb-mt-xl-4 {
    margin-top: 1.5rem !important;
  }

  .ntvb-mt-xl-5 {
    margin-top: 3rem !important;
  }

  .ntvb-mt-xl-auto {
    margin-top: auto !important;
  }

  .ntvb-me-xl-0 {
    margin-right: 0 !important;
  }

  .ntvb-me-xl-1 {
    margin-right: 0.25rem !important;
  }

  .ntvb-me-xl-2 {
    margin-right: 0.5rem !important;
  }

  .ntvb-me-xl-3 {
    margin-right: 1rem !important;
  }

  .ntvb-me-xl-4 {
    margin-right: 1.5rem !important;
  }

  .ntvb-me-xl-5 {
    margin-right: 3rem !important;
  }

  .ntvb-me-xl-auto {
    margin-right: auto !important;
  }

  .ntvb-mb-xl-0 {
    margin-bottom: 0 !important;
  }

  .ntvb-mb-xl-1 {
    margin-bottom: 0.25rem !important;
  }

  .ntvb-mb-xl-2 {
    margin-bottom: 0.5rem !important;
  }

  .ntvb-mb-xl-3 {
    margin-bottom: 1rem !important;
  }

  .ntvb-mb-xl-4 {
    margin-bottom: 1.5rem !important;
  }

  .ntvb-mb-xl-5 {
    margin-bottom: 3rem !important;
  }

  .ntvb-mb-xl-auto {
    margin-bottom: auto !important;
  }

  .ntvb-ms-xl-0 {
    margin-left: 0 !important;
  }

  .ntvb-ms-xl-1 {
    margin-left: 0.25rem !important;
  }

  .ntvb-ms-xl-2 {
    margin-left: 0.5rem !important;
  }

  .ntvb-ms-xl-3 {
    margin-left: 1rem !important;
  }

  .ntvb-ms-xl-4 {
    margin-left: 1.5rem !important;
  }

  .ntvb-ms-xl-5 {
    margin-left: 3rem !important;
  }

  .ntvb-ms-xl-auto {
    margin-left: auto !important;
  }

  .ntvb-p-xl-0 {
    padding: 0 !important;
  }

  .ntvb-p-xl-1 {
    padding: 0.25rem !important;
  }

  .ntvb-p-xl-2 {
    padding: 0.5rem !important;
  }

  .ntvb-p-xl-3 {
    padding: 1rem !important;
  }

  .ntvb-p-xl-4 {
    padding: 1.5rem !important;
  }

  .ntvb-p-xl-5 {
    padding: 3rem !important;
  }

  .ntvb-px-xl-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }

  .ntvb-px-xl-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important;
  }

  .ntvb-px-xl-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
  }

  .ntvb-px-xl-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }

  .ntvb-px-xl-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }

  .ntvb-px-xl-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }

  .ntvb-py-xl-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }

  .ntvb-py-xl-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }

  .ntvb-py-xl-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }

  .ntvb-py-xl-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }

  .ntvb-py-xl-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }

  .ntvb-py-xl-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }

  .ntvb-pt-xl-0 {
    padding-top: 0 !important;
  }

  .ntvb-pt-xl-1 {
    padding-top: 0.25rem !important;
  }

  .ntvb-pt-xl-2 {
    padding-top: 0.5rem !important;
  }

  .ntvb-pt-xl-3 {
    padding-top: 1rem !important;
  }

  .ntvb-pt-xl-4 {
    padding-top: 1.5rem !important;
  }

  .ntvb-pt-xl-5 {
    padding-top: 3rem !important;
  }

  .ntvb-pe-xl-0 {
    padding-right: 0 !important;
  }

  .ntvb-pe-xl-1 {
    padding-right: 0.25rem !important;
  }

  .ntvb-pe-xl-2 {
    padding-right: 0.5rem !important;
  }

  .ntvb-pe-xl-3 {
    padding-right: 1rem !important;
  }

  .ntvb-pe-xl-4 {
    padding-right: 1.5rem !important;
  }

  .ntvb-pe-xl-5 {
    padding-right: 3rem !important;
  }

  .ntvb-pb-xl-0 {
    padding-bottom: 0 !important;
  }

  .ntvb-pb-xl-1 {
    padding-bottom: 0.25rem !important;
  }

  .ntvb-pb-xl-2 {
    padding-bottom: 0.5rem !important;
  }

  .ntvb-pb-xl-3 {
    padding-bottom: 1rem !important;
  }

  .ntvb-pb-xl-4 {
    padding-bottom: 1.5rem !important;
  }

  .ntvb-pb-xl-5 {
    padding-bottom: 3rem !important;
  }

  .ntvb-ps-xl-0 {
    padding-left: 0 !important;
  }

  .ntvb-ps-xl-1 {
    padding-left: 0.25rem !important;
  }

  .ntvb-ps-xl-2 {
    padding-left: 0.5rem !important;
  }

  .ntvb-ps-xl-3 {
    padding-left: 1rem !important;
  }

  .ntvb-ps-xl-4 {
    padding-left: 1.5rem !important;
  }

  .ntvb-ps-xl-5 {
    padding-left: 3rem !important;
  }

  .ntvb-text-xl-start {
    text-align: left !important;
  }

  .ntvb-text-xl-end {
    text-align: right !important;
  }

  .ntvb-text-xl-center {
    text-align: center !important;
  }
}
@media (min-width: 1400px) {
  .ntvb-float-xxl-start {
    float: left !important;
  }

  .ntvb-float-xxl-end {
    float: right !important;
  }

  .ntvb-float-xxl-none {
    float: none !important;
  }

  .ntvb-d-xxl-inline {
    display: inline !important;
  }

  .ntvb-d-xxl-inline-block {
    display: inline-block !important;
  }

  .ntvb-d-xxl-block {
    display: block !important;
  }

  .ntvb-d-xxl-grid {
    display: grid !important;
  }

  .ntvb-d-xxl-table {
    display: table !important;
  }

  .ntvb-d-xxl-table-row {
    display: table-row !important;
  }

  .ntvb-d-xxl-table-cell {
    display: table-cell !important;
  }

  .ntvb-d-xxl-flex {
    display: flex !important;
  }

  .ntvb-d-xxl-inline-flex {
    display: inline-flex !important;
  }

  .ntvb-d-xxl-none {
    display: none !important;
  }

  .ntvb-flex-xxl-fill {
    flex: 1 1 auto !important;
  }

  .ntvb-flex-xxl-row {
    flex-direction: row !important;
  }

  .ntvb-flex-xxl-column {
    flex-direction: column !important;
  }

  .ntvb-flex-xxl-row-reverse {
    flex-direction: row-reverse !important;
  }

  .ntvb-flex-xxl-column-reverse {
    flex-direction: column-reverse !important;
  }

  .ntvb-flex-xxl-grow-0 {
    flex-grow: 0 !important;
  }

  .ntvb-flex-xxl-grow-1 {
    flex-grow: 1 !important;
  }

  .ntvb-flex-xxl-shrink-0 {
    flex-shrink: 0 !important;
  }

  .ntvb-flex-xxl-shrink-1 {
    flex-shrink: 1 !important;
  }

  .ntvb-flex-xxl-wrap {
    flex-wrap: wrap !important;
  }

  .ntvb-flex-xxl-nowrap {
    flex-wrap: nowrap !important;
  }

  .ntvb-flex-xxl-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }

  .ntvb-gap-xxl-0 {
    gap: 0 !important;
  }

  .ntvb-gap-xxl-1 {
    gap: 0.25rem !important;
  }

  .ntvb-gap-xxl-2 {
    gap: 0.5rem !important;
  }

  .ntvb-gap-xxl-3 {
    gap: 1rem !important;
  }

  .ntvb-gap-xxl-4 {
    gap: 1.5rem !important;
  }

  .ntvb-gap-xxl-5 {
    gap: 3rem !important;
  }

  .ntvb-justify-content-xxl-start {
    justify-content: flex-start !important;
  }

  .ntvb-justify-content-xxl-end {
    justify-content: flex-end !important;
  }

  .ntvb-justify-content-xxl-center {
    justify-content: center !important;
  }

  .ntvb-justify-content-xxl-between {
    justify-content: space-between !important;
  }

  .ntvb-justify-content-xxl-around {
    justify-content: space-around !important;
  }

  .ntvb-justify-content-xxl-evenly {
    justify-content: space-evenly !important;
  }

  .ntvb-align-items-xxl-start {
    align-items: flex-start !important;
  }

  .ntvb-align-items-xxl-end {
    align-items: flex-end !important;
  }

  .ntvb-align-items-xxl-center {
    align-items: center !important;
  }

  .ntvb-align-items-xxl-baseline {
    align-items: baseline !important;
  }

  .ntvb-align-items-xxl-stretch {
    align-items: stretch !important;
  }

  .ntvb-align-content-xxl-start {
    align-content: flex-start !important;
  }

  .ntvb-align-content-xxl-end {
    align-content: flex-end !important;
  }

  .ntvb-align-content-xxl-center {
    align-content: center !important;
  }

  .ntvb-align-content-xxl-between {
    align-content: space-between !important;
  }

  .ntvb-align-content-xxl-around {
    align-content: space-around !important;
  }

  .ntvb-align-content-xxl-stretch {
    align-content: stretch !important;
  }

  .ntvb-align-self-xxl-auto {
    align-self: auto !important;
  }

  .ntvb-align-self-xxl-start {
    align-self: flex-start !important;
  }

  .ntvb-align-self-xxl-end {
    align-self: flex-end !important;
  }

  .ntvb-align-self-xxl-center {
    align-self: center !important;
  }

  .ntvb-align-self-xxl-baseline {
    align-self: baseline !important;
  }

  .ntvb-align-self-xxl-stretch {
    align-self: stretch !important;
  }

  .ntvb-order-xxl-first {
    order: -1 !important;
  }

  .ntvb-order-xxl-0 {
    order: 0 !important;
  }

  .ntvb-order-xxl-1 {
    order: 1 !important;
  }

  .ntvb-order-xxl-2 {
    order: 2 !important;
  }

  .ntvb-order-xxl-3 {
    order: 3 !important;
  }

  .ntvb-order-xxl-4 {
    order: 4 !important;
  }

  .ntvb-order-xxl-5 {
    order: 5 !important;
  }

  .ntvb-order-xxl-last {
    order: 6 !important;
  }

  .ntvb-m-xxl-0 {
    margin: 0 !important;
  }

  .ntvb-m-xxl-1 {
    margin: 0.25rem !important;
  }

  .ntvb-m-xxl-2 {
    margin: 0.5rem !important;
  }

  .ntvb-m-xxl-3 {
    margin: 1rem !important;
  }

  .ntvb-m-xxl-4 {
    margin: 1.5rem !important;
  }

  .ntvb-m-xxl-5 {
    margin: 3rem !important;
  }

  .ntvb-m-xxl-auto {
    margin: auto !important;
  }

  .ntvb-mx-xxl-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }

  .ntvb-mx-xxl-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important;
  }

  .ntvb-mx-xxl-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important;
  }

  .ntvb-mx-xxl-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important;
  }

  .ntvb-mx-xxl-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important;
  }

  .ntvb-mx-xxl-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important;
  }

  .ntvb-mx-xxl-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }

  .ntvb-my-xxl-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }

  .ntvb-my-xxl-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
  }

  .ntvb-my-xxl-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }

  .ntvb-my-xxl-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }

  .ntvb-my-xxl-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }

  .ntvb-my-xxl-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }

  .ntvb-my-xxl-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }

  .ntvb-mt-xxl-0 {
    margin-top: 0 !important;
  }

  .ntvb-mt-xxl-1 {
    margin-top: 0.25rem !important;
  }

  .ntvb-mt-xxl-2 {
    margin-top: 0.5rem !important;
  }

  .ntvb-mt-xxl-3 {
    margin-top: 1rem !important;
  }

  .ntvb-mt-xxl-4 {
    margin-top: 1.5rem !important;
  }

  .ntvb-mt-xxl-5 {
    margin-top: 3rem !important;
  }

  .ntvb-mt-xxl-auto {
    margin-top: auto !important;
  }

  .ntvb-me-xxl-0 {
    margin-right: 0 !important;
  }

  .ntvb-me-xxl-1 {
    margin-right: 0.25rem !important;
  }

  .ntvb-me-xxl-2 {
    margin-right: 0.5rem !important;
  }

  .ntvb-me-xxl-3 {
    margin-right: 1rem !important;
  }

  .ntvb-me-xxl-4 {
    margin-right: 1.5rem !important;
  }

  .ntvb-me-xxl-5 {
    margin-right: 3rem !important;
  }

  .ntvb-me-xxl-auto {
    margin-right: auto !important;
  }

  .ntvb-mb-xxl-0 {
    margin-bottom: 0 !important;
  }

  .ntvb-mb-xxl-1 {
    margin-bottom: 0.25rem !important;
  }

  .ntvb-mb-xxl-2 {
    margin-bottom: 0.5rem !important;
  }

  .ntvb-mb-xxl-3 {
    margin-bottom: 1rem !important;
  }

  .ntvb-mb-xxl-4 {
    margin-bottom: 1.5rem !important;
  }

  .ntvb-mb-xxl-5 {
    margin-bottom: 3rem !important;
  }

  .ntvb-mb-xxl-auto {
    margin-bottom: auto !important;
  }

  .ntvb-ms-xxl-0 {
    margin-left: 0 !important;
  }

  .ntvb-ms-xxl-1 {
    margin-left: 0.25rem !important;
  }

  .ntvb-ms-xxl-2 {
    margin-left: 0.5rem !important;
  }

  .ntvb-ms-xxl-3 {
    margin-left: 1rem !important;
  }

  .ntvb-ms-xxl-4 {
    margin-left: 1.5rem !important;
  }

  .ntvb-ms-xxl-5 {
    margin-left: 3rem !important;
  }

  .ntvb-ms-xxl-auto {
    margin-left: auto !important;
  }

  .ntvb-p-xxl-0 {
    padding: 0 !important;
  }

  .ntvb-p-xxl-1 {
    padding: 0.25rem !important;
  }

  .ntvb-p-xxl-2 {
    padding: 0.5rem !important;
  }

  .ntvb-p-xxl-3 {
    padding: 1rem !important;
  }

  .ntvb-p-xxl-4 {
    padding: 1.5rem !important;
  }

  .ntvb-p-xxl-5 {
    padding: 3rem !important;
  }

  .ntvb-px-xxl-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }

  .ntvb-px-xxl-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important;
  }

  .ntvb-px-xxl-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
  }

  .ntvb-px-xxl-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }

  .ntvb-px-xxl-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }

  .ntvb-px-xxl-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }

  .ntvb-py-xxl-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }

  .ntvb-py-xxl-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }

  .ntvb-py-xxl-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }

  .ntvb-py-xxl-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }

  .ntvb-py-xxl-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }

  .ntvb-py-xxl-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }

  .ntvb-pt-xxl-0 {
    padding-top: 0 !important;
  }

  .ntvb-pt-xxl-1 {
    padding-top: 0.25rem !important;
  }

  .ntvb-pt-xxl-2 {
    padding-top: 0.5rem !important;
  }

  .ntvb-pt-xxl-3 {
    padding-top: 1rem !important;
  }

  .ntvb-pt-xxl-4 {
    padding-top: 1.5rem !important;
  }

  .ntvb-pt-xxl-5 {
    padding-top: 3rem !important;
  }

  .ntvb-pe-xxl-0 {
    padding-right: 0 !important;
  }

  .ntvb-pe-xxl-1 {
    padding-right: 0.25rem !important;
  }

  .ntvb-pe-xxl-2 {
    padding-right: 0.5rem !important;
  }

  .ntvb-pe-xxl-3 {
    padding-right: 1rem !important;
  }

  .ntvb-pe-xxl-4 {
    padding-right: 1.5rem !important;
  }

  .ntvb-pe-xxl-5 {
    padding-right: 3rem !important;
  }

  .ntvb-pb-xxl-0 {
    padding-bottom: 0 !important;
  }

  .ntvb-pb-xxl-1 {
    padding-bottom: 0.25rem !important;
  }

  .ntvb-pb-xxl-2 {
    padding-bottom: 0.5rem !important;
  }

  .ntvb-pb-xxl-3 {
    padding-bottom: 1rem !important;
  }

  .ntvb-pb-xxl-4 {
    padding-bottom: 1.5rem !important;
  }

  .ntvb-pb-xxl-5 {
    padding-bottom: 3rem !important;
  }

  .ntvb-ps-xxl-0 {
    padding-left: 0 !important;
  }

  .ntvb-ps-xxl-1 {
    padding-left: 0.25rem !important;
  }

  .ntvb-ps-xxl-2 {
    padding-left: 0.5rem !important;
  }

  .ntvb-ps-xxl-3 {
    padding-left: 1rem !important;
  }

  .ntvb-ps-xxl-4 {
    padding-left: 1.5rem !important;
  }

  .ntvb-ps-xxl-5 {
    padding-left: 3rem !important;
  }

  .ntvb-text-xxl-start {
    text-align: left !important;
  }

  .ntvb-text-xxl-end {
    text-align: right !important;
  }

  .ntvb-text-xxl-center {
    text-align: center !important;
  }
}
@media (min-width: 1200px) {
  .ntvb-fs-1 {
    font-size: 2.5rem !important;
  }

  .ntvb-fs-2 {
    font-size: 2rem !important;
  }

  .ntvb-fs-3 {
    font-size: 1.75rem !important;
  }

  .ntvb-fs-4 {
    font-size: 1.5rem !important;
  }
}
@media print {
  .ntvb-d-print-inline {
    display: inline !important;
  }

  .ntvb-d-print-inline-block {
    display: inline-block !important;
  }

  .ntvb-d-print-block {
    display: block !important;
  }

  .ntvb-d-print-grid {
    display: grid !important;
  }

  .ntvb-d-print-table {
    display: table !important;
  }

  .ntvb-d-print-table-row {
    display: table-row !important;
  }

  .ntvb-d-print-table-cell {
    display: table-cell !important;
  }

  .ntvb-d-print-flex {
    display: flex !important;
  }

  .ntvb-d-print-inline-flex {
    display: inline-flex !important;
  }

  .ntvb-d-print-none {
    display: none !important;
  }
}

/*# sourceMappingURL=bootstrap.ntvb-css.ntvb-map */
`;
