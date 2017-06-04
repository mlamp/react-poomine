import React, {Component} from "react";

export class Word extends Component {
    render() {
        let changedWord = this.props.word;
        changedWord = changedWord.split('').map((letter) => {
            return !this.props.history.includes(letter) ? '_' : letter;
        }).join('');
        return (<pre>{changedWord.split('').join(' ')}</pre>)
    }
}