import { IformatterObj } from "./interfaces";
declare const storyGenerator: (componentTag: string, params: IformatterObj) => {
    args: {};
    argTypes: {};
    Template: (args: any) => string;
};
export default storyGenerator;
