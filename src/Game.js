import React, {Component} from "react";
import {Word} from "./Word";
import {flattenDeep, sample, difference} from "lodash";
import {words} from "./data/words";
import {Vollapuu} from "./Vollapuu";
import {Description} from "./Description";

export class Game extends Component {
    constructor() {
        super();
        this.state = {
            history: [],
            stepNumber: 0,
            word: sample(flattenDeep(words)).toUpperCase(),
            message: '',
            isDisabled: false
        };
    }

    handleLetterInput(event) {
        // Valideerimine + märkimine
        const inLetter = event.target.value;
        const inLetterUpper = inLetter.toUpperCase();
        if (!/^[A-Z,ÕÜÖÄŽŠ]$/u.test(inLetterUpper)) {
            this.setState({message: 'Proovi uuesti :<'});
            event.target.value = '';
            return;
        }
        let stepNumber = this.state.stepNumber;
        let history = this.state.history;
        if (history.includes(inLetterUpper)) {
            stepNumber++;
            this.setState({stepNumber: stepNumber});
            this.setState({message: 'Ole ettevaatlik, sa oled seda tähte juba pakkunud'});
            event.target.value = '';
        } else if (this.state.word.split('').includes(inLetterUpper)) {
            history.push(inLetterUpper);
            this.setState({history: history});
            this.setState({message: 'Good job, arvasid tähe ära'});
            event.target.value = '';
        } else {
            stepNumber++;
            history.push(inLetterUpper);
            this.setState({history: history, stepNumber: stepNumber});
            this.setState({message: 'Sorry dude, vale täht.'});
            event.target.value = '';
        }
        if (stepNumber === 6) {
            this.setState({message: 'Sorry noob, sind on üles poodud, proovi uuesti.'});
            this.setState({isDisabled: true});
        } else {
            const isWinner = this.checkIfWinner(history);
            if (isWinner) {
                this.setState({message: 'WOOP-WOOOP, võidsid ära, täiega kunn oled.'});
                this.setState({isDisabled: true});
            }
        }
    }

    checkIfWinner(history) {
        if (difference(this.state.word.split(''), history).length !== 0) {
            return false;
        } else {
            return true;
        }
    }

    render() {
        return (
            <div>
                <Word word={this.state.word} history={this.state.history}/>
                <Vollapuu stepNumber={this.state.stepNumber}/>
                <Description message={this.state.message} history={this.state.history} isWinner={this.state.isDisabled}/>
                <input type="text" onChange={this.handleLetterInput.bind(this)} disabled={this.state.isDisabled} autoFocus={true}/>
            </div>
        );
    }
}
