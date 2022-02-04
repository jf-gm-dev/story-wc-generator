import formatter from ".";

const { args, argTypes, Template } = formatter("my-component", {
  text: { value: "Click me!", description: "Text label", type: "string" },
  color: {
    value: "primary",
    description: "Color of button",
    control: "select",
    options: ["primary", "secondary", "dark"],
    type: "primary | secondary | dark",
  },
});

console.log("args:");
console.log(args);
console.log("- - - - - - - - -");
console.log("argTypes:");
console.log(argTypes);
console.log("- - - - - - - - -");
console.log("Template:");
console.log(Template({ text: "Hello", color: "secondary" }));
