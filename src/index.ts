import { IformatterObj } from "./interfaces";

const storyGenerator = (componentTag: string, params: IformatterObj) => {
  let args = {};
  let argTypes = {};
  for (const prop in params) {
    const isObject = typeof params[prop] === "object";
    let tempArgs = {};
    let tempArgTypes: any = {};
    if (isObject) {
      const value = params[prop].value;
      tempArgs = { ...tempArgs, [prop]: value };
      const description = params[prop].description;
      const control = params[prop].control;
      const options = params[prop].options;
      const type = params[prop].type;
      // TODO: find out how to add defaultValue for Docs
      // const defaultValue = params[prop].defaultValue;
      tempArgTypes = {
        ...tempArgTypes,
        [prop]: { description, type: { summary: type } },
      };
      if (control) {
        tempArgTypes = {
          ...tempArgTypes,
          [prop]: { ...tempArgTypes[prop], control: { type: control } },
        };
      }
      if (options) {
        tempArgTypes = {
          ...tempArgTypes,
          [prop]: { ...tempArgTypes[prop], options },
        };
      }
    }

    args = { ...args, ...tempArgs };
    argTypes = { ...argTypes, ...tempArgTypes };
  }

  const Template = (args: any) => {
    let props = "";
    for (const prop in params) {
      props = `${props} ${prop}="${args[prop]}"`;
    }
    return `<${componentTag}${props}></${componentTag}>`;
  };

  return { args, argTypes, Template };
};

export default storyGenerator;
