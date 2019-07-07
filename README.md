# CRA SSR Experiment
Create SSR base on Create react App

## Run
*On development / js*
```sh
  yarn watch-css
```
`yarn start`

*on Server Side Mode*
```sh
  yarn build
  yarn server:build
  yarn server
```

## Advantages
- Seo Friendly
- Load faster

## Common issue
- ~~no more inline `import styles` consider to use `StyledComponent`;~~ (solved by babel transform-assets)
- ~~no more inline `import image` put the image on the public folder, then call it on html~~ (solved by babel transform-assets)
- server side doesnt know `window` property, make sure to guard it
- static serve the build folder, that mean it will render the default index.html file, solution exclude it or delete the file.
  found other solution add option `{index: false}`

## Todo
- restructuring the folder
- Separate Layout and Component
- SSR (express)
- SEO (React Helmet)
- Documented Component (StoryBook)
- Global Variable (Redux)
