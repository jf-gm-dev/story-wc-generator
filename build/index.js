"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const storyGenerator = (componentTag, params) => {
    let args = {};
    let argTypes = {};
    for (const prop in params) {
        const isObject = typeof params[prop] === "object";
        let tempArgs = {};
        let tempArgTypes = {};
        if (isObject) {
            const value = params[prop].value;
            tempArgs = Object.assign(Object.assign({}, tempArgs), { [prop]: value });
            const description = params[prop].description;
            const control = params[prop].control;
            const options = params[prop].options;
            const type = params[prop].type;
            // TODO: find out how to add defaultValue for Docs
            // const defaultValue = params[prop].defaultValue;
            tempArgTypes = Object.assign(Object.assign({}, tempArgTypes), { [prop]: { description, type: { summary: type } } });
            if (control) {
                tempArgTypes = Object.assign(Object.assign({}, tempArgTypes), { [prop]: Object.assign(Object.assign({}, tempArgTypes[prop]), { control: { type: control } }) });
            }
            if (options) {
                tempArgTypes = Object.assign(Object.assign({}, tempArgTypes), { [prop]: Object.assign(Object.assign({}, tempArgTypes[prop]), { options }) });
            }
        }
        args = Object.assign(Object.assign({}, args), tempArgs);
        argTypes = Object.assign(Object.assign({}, argTypes), tempArgTypes);
    }
    const Template = (args) => {
        let props = "";
        for (const prop in params) {
            props = `${props} ${prop}="${args[prop]}"`;
        }
        return `<${componentTag}${props}></${componentTag}>`;
    };
    return { args, argTypes, Template };
};
exports.default = storyGenerator;
