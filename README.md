# Storybook with StencilJS story template and args generator

### Easy way of generating basic template, args and argTypes

> Generate basic template, args and argTypes

### Introduction

We are going to face some disadvantages when working storybook with stenciljs
- We need to define properties that we want to use in controls
  - We need to define default props for controls
- We need to add description and prop types for Docs pages
- defaultValue property is not working for Doc pages
- We need to pass args values on the template

The purpose of this library is to make easier write all this properties.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save story-wc-generator
```

## Usage

```ts
import notes from '../../components/cool-button/readme.md';
import storyGenerator from 'story-wc-generator';

const { args, argTypes, Template } = storyGenerator('cool-button', {
  text: { value: 'Click me!', description: 'Text label', type: 'string' },
  color: {
    value: 'primary',
    description: 'Color of button',
    control: 'select',
    options: ['primary', 'secondary', 'dark'],
    type: 'primary | secondary | dark',
  },
});

export default {
  title: 'UI/Cool Button',
  args,
  argTypes,
  parameters: {
    notes,
  },
};

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
};

...
```

## Parameters

The function receives an object with this structure
```ts
{
  propName: {
    ...parameters
  }
}
```

|    Field    |              Description               |
|-------------|----------------------------------------|
| value       | Default value for controls             |
| description | Description of prop on Docs            |
| control     | Control type                           |
| options     | Array of options if the props needs it |
| type        | To define prop type                    |