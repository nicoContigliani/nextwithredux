import React from "react";

export interface IButtons {
    id: any;
    className:string;
    children:any;
    name:string;
    textLavel: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    type:'button'|'submit'|'reset';



}