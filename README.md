# HerbsMe - project nr 2 | ZAI OKNO 2020

## Instructions for installing and starting the application

**Required:** Node.js version > 10.15.0, yarn version > 1.10.0
In main directory run: **`yarn`** or **`npm i`** to install all dependecies. 

After instalation to run the app in the development mode run: **`yarn start`** or **`npm start`**<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.<br />
You will also see any lint errors in the console.

For more script, how to for e.g. make deployment to production, check: [React documentation](https://reactjs.org/).

## Frameworks and libraries

To create this Single Page Application(SPA) was used React freamwork with TypeScript. React, besause it's one of the most popular frameworks for frond-end development and also has great, hudge community which provides many solution and support while error handling and bugs reporting what made React a stable tool over years. In other hand it's personall choice of developer as React reminds more functional programing than Angular, which is closer to object oriented programing(OOP) paradigma.

TypeScript is used to have control over types, decrease number of errors and improve redability of the code. 
All used dependencies for this project can be found in `package.json` file. 

- **Redux** <br />
Redux is a gloabal state container for the aplication, even that this project is SPA and app state is not so complicated it's undisputed advantage in improving code redability while all state doesn't come from uber parent component and doesn't have to be passed to all chldren, grandchildren and back to parent which might introduce uneccesary complications in handling smoot rendering. 

- **immer** <br />
Immer is a developers tool used to prevent mutating application's global state stored in Redux while introducing action which are meant to change application's state. Immutability is a requirement of Redux to might use state's history. Immer is an easy way to produce new application's state. 

- **martin_hotell/rex-tils** <br />
Rex-tils is a libraary used for improving Redux types safety to be able to use Redux within TypeScript with it's fulll types-check potential. 

- **Material-UI (icons, core)** <br />
Material-UI provides simple, redy to use components as Tables, Dialogs, Buttons etc. which doesn't have to be created from scratch. Using it speeds up development while custom design is not a crucial part of the project, which is a case in this project. 

- **Styled-components** <br />
Styled-components tool which allows to create css in .js, .ts and tsx files as JS variables. A comfortble library to keep application modular and decrease number of imports eliminating .css and .scss files usage. 

- **WbFontLoader** <br />
WbFontLoader is a library which allows to load globally custom fonts to the project.

- **lodash** <br />
Lodash provides many utility functions for common programming tasks. It makes coding in JavaScript easier and cleaner. Instead of writing common functions, again and again, the task can be accomplished with a single line of code. Within this project it contributed to filtering and sorting products list. 

Rest of the application's dependencies are builded-in and provided by default in react-app (for e.g testing-libraries). 

## Code description

The main app file is placed in `/src/index.tsx`. The file renders core, parent component - HerbsMe - enwrapped in Redux store provider and StylesProvider. Redux provider allows it's childrem to use global state whereas StylesProvider allows overwritting Material-UI components style with custom css.

Global application's store is kept in a separate folder under `/src/store` path. This architecture decision is made to allow applications growth while adding new modules next to HerbsMe page. New module's reducers can be easily combined and added to the global store. 

### Main HerbsMe component
![HerbsMe component's structure](public/HerbsMe-structure.png?raw=true "HerbsMe component")

HerbsMe component is placed in `/src/HerbsMe/index.tsx` it contains dialogs, top navigation, filters and sorting options for products. It also renders products cards returned in mapping of **productsList** table. Table of products is hardcoded in the application under `/src/HerbsMe/constants.ts` and represents the initial state of protucts which can be modified within the app. Main component's directory has also `types.ts` files which has reusable types across this directory. Lsst but not least in `hooks.ts` are a helper for producing local inputs state, those methods are universal so they have been placed heigher in files structure to enable it's exstraction if needed. 

Structure of components is modular. Reusable chilldren components as **ProductCard**, **ConfirmationDialog**, **PriceFilter** are exported to components folder to increase parents file readibility and provide the possiblity to reuse children in other places in the app if needed in the future.

Redux state has its own dedicated folder, as it is used by all HerbsMe module components. Its placement provides easy access to state for all of them. `/src/HerbsMe/redux/selectors.ts` contains selectors for state's specific values while `index.ts` has action creators and reducer which are chnging the application state. 

### Sample screenshots
![HerbsMe overview](public/general-overview.png?raw=true "HerbsMe overview")
![HerbsMe sorting view](public/sorting.png?raw=true "HerbsMe sorting")
![HerbsMe price filter view](public/price-filter.png?raw=true "HerbsMe price filtering")
![HerbsMe ActionMenu view](public/product-action-menu.png?raw=true "HerbsMe product's action menu")
![HerbsMe edit view](public/edit-product.png?raw=true "HerbsMe edit product")
![HerbsMe delete view](public/delete-product.png?raw=true "HerbsMe delete product")
![HerbsMe add view](public/add-new-product.png?raw=true "HerbsMe add new product")


______________

To learn more about React check out: [documentation](https://reactjs.org/).