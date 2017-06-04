import React, {Component} from "react";

const vollapuuStates = [
    `
  -----+
  |    |
       |
       |
       |
       |
-------+`,
    `
  -----+
  |    |
  O    |
       |
       |
       |
-------+`,
    `
  -----+
  |    |
  O    |
  |    |
       |
       |
-------+`,
    `
  -----+
  |    |
  O    |
 /|    |
       |
       |
-------+`,
    `
  -----+
  |    |
  O    |
 /|\\   |
       |
       |
-------+`,
    `
  -----+
  |    |
  O    |
 /|\\   |
 /     |
       |
-------+`,
    `
  -----+
  |    |
  O    |
 /|\\   |
 / \\   |
       |
-------+`,
];


export class Vollapuu extends Component {
    render() {
        return (
            <pre>{vollapuuStates[this.props.stepNumber]}</pre>
        );
    }
}