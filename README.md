# Sustainable React Components

[![Prettier](https://github.com/Se-Gl/sustainable-react/actions/workflows/prettier.yml/badge.svg)](https://github.com/Se-Gl/sustainable-react/actions/workflows/prettier.yml)
[![Downloads p/week](https://badgen.net/npm/dw/sustainable-react)](https://badgen.net/npm/dw/sustainable-react)
[![NPM version](https://badgen.net/npm/v/sustainable-react)](https://badgen.net/npm/v/sustainable-react)
[![minified + gzip](https://badgen.net/bundlephobia/minzip/sustainable-react)](https://badgen.net/bundlephobia/minzip/sustainable-react)
[![License](https://badgen.net/npm/license/sustainable-react)](https://badgen.net/npm/license/sustainable-react)

This is a sustainable React component project based on [greenCSS](https://github.com/Se-Gl/greenCSS). The components work with plain React, as well as with SSR - such as Next.js. Animations and the basic design were realised with greenCSS. greenCSS is an animated, responsive, lightweight and sustainable CSS library. It is recommended that you also use greenCSS in your project. If you don't want to, just style your modal with your own classes.

## Features

- Tested with react and next.js
- [Accordions](#how-to-use-accordion) [6KB]

## Installation process

`npm i sustainable-react`

### How to use Accordion

The example below uses greenCSS for styling. [Download greenCSS](https://www.npmjs.com/package/greencss) or learn more on the [greenCSS website](https://greencss.dev). Alternatively to greenCSS you can insert your own classNames.
The Accordion can be operated with the keyboard (Tab / Enter) as well as clicked.

```js
import React from 'react'
import { Accordion } from 'sustainable-react'
import 'greencss/css/greencss.css'

export default function AccordionComponent() {
  return (
    <div className='sans m-auto bg-gray-10 w-60rem rounded-20px shadow-small-gray-9'>
      <div className='w-50rem m-auto py-50px'>
        // default Accordion
        <Accordion
          className='bg-white rounded-5px'
          expand='first title'
          collapse='collapsed content'
          headerStyleExpanded='text-15px font-600 text-purple pb-10px'
          iconColorExpanded='stroke-purple'
        />
        // Boxed Accordion
        <Accordion expand='second title' collapse='second collapsed content' boxStyle={true} />
      </div>
    </div>
  )
}
```

### Accordion Props

## Props

You can adjust the default values listed below at any time with your values or classNames. Be aware that you may have to readjust the design. Therefore, a change is only recommended if you really know what you are doing.

| Name                | Default Value                          | Description                                                  |
| ------------------- | -------------------------------------- | ------------------------------------------------------------ |
| **expand**          | **'Your title'**                       | Your title                                                   |
| **collapse**        | **'Your collapsed content'**           | Your collapsed content                                       |
| className           | 'bg-white'                             | Use your own className to style the Accordion                |
| boxStyle            | false                                  | Secondary Accordion design                                   |
| headerStyle         | 'text-15px font-600 text-black'        | Default "expand" title design                                |
| collapseStyle       | 'text-15px text-black'                 | Default text style for collapsed content                     |
| headerStyleExpanded | 'text-15px font-600 text-blue pb-10px' | Default "expand" title design if expanded                    |
| iconColorCollapse   | 'stroke-black'                         | Default icon className if collapsed                          |
| iconColorExpanded   | 'stroke-blue'                          | Default icon color if expanded                               |
| circleCollapse      | 'shadow-small-gray-10 bg-white'        | Default circle color around the _boxStyle icon_ if collapsed |
| circleExpand        | 'rotate-90deg bg-blue'                 | Default circle color around the _boxStyle icon_ if expanded  |

## Contribute: We Use [Semantic Release](https://github.com/semantic-release/semantic-release)

We use semantic versioning for commit messages.

For commit messages, use semantig writing:

| Commit                                                                                       |      Usage       | Version |
| -------------------------------------------------------------------------------------------- | :--------------: | ------- |
| fix(your-change): a small change, p.e. fixed a component, readme or test                     |   Fix Release    | v.0.0.1 |
| feat(your-change): a new feature, p.e. test suite for a component                            | Feature Release  | v.0.1.0 |
| perf(your-change): a breaking change or hotfix \nBREAKING CHANGE: p.e. added a new component | Breaking Release | v.1.0.0 |

Possible commit values are:

```json
[
  'build',
  'chore',
  'ci',
  'docs',
  'feat',
  'fix',
  'perf',
  'refactor',
  'revert',
  'style',
  'test'
];
```
