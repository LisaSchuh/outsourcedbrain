import * as React from 'react';

//TODO replace with material design component

export interface FloatingButtonProps {
    text?:string;
    icon?:string;
    onClick:()=>void|Promise<any>
}

export class FloatingButton extends React.Component<FloatingButtonProps> {
    constructor(public props:FloatingButtonProps) {
        super(props);
    }

    public render() {
        return <button  onClick={this.props.onClick}>{this.props.text || ""}</button>;
    }
}