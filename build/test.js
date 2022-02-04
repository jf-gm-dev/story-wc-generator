"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __importDefault(require("."));
const { args, argTypes, Template } = (0, _1.default)("my-component", {
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
