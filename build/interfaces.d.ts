interface formatterProps {
    value: any;
    description: string;
    control?: string;
    options?: string[];
    type?: string;
}
export interface IformatterObj {
    [key: string]: formatterProps;
}
export {};
