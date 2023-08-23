import React from "react";

export interface IInputs {
    autocomplete: string;
    data: string|any;
    setData: string|any;
    placeholder: string;
    name: string;
    minlength: string;
    className: string;
    autoFocus: boolean;
    color: string;
    defaultValue: any;
    disabled: boolean;
    fullWidth: boolean;
    id: string | number;
    inputComponent: any;
    multiline: boolean;
    label: string;
    rows: string | number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;

    type:
    'button'
    | 'checkbox'
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'file'
    | 'hidden'
    | 'image'
    | 'month'
    | 'number'
    | 'password'
    | 'radio'
    | 'range'
    | 'reset'
    | 'search'
    | 'submit'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week'
    | ''
}