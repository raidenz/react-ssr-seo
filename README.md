# CRA SSR Experiment
Create SSR base on Create react App

## Run
*On development / js*
`yarn start`

*on Server Side Mode*
`yarn build`
`yarn server`

## Advantages
- Seo Friendly
- Load faster

## Common issue
- no more inline `import styles` consider to use `StyledComponent`;
- no more inline `import image` put the image on the public folder, then call it on html
- server side doesnt know `window` property, make sure to guard it
- static serve the build folder, that mean it will render the default index.html file, solution exclude it or delete the file.
  found other solution add option {index: false}