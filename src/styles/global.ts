import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*, *::before, *::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

html, body, #root {
  height: 100%;
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;

  background-color: ${props => props.theme['gray-600']};
  color: ${props => props.theme['gray-100']};
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

#root {
  isolation: isolate;
}

:focus {
  outline: 0;
  box-shadow: 0 0 0 2px ${props => props.theme['purple-dark']}
}
`