import React, {Component} from "react";

export class Description extends Component {
    render() {
        return (
            <div>
                <pre className={this.props.isWinner ? 'green': ''}>{this.props.message}</pre>
                <pre>Proovitud tähed {this.props.history.join(', ')}</pre>
            </div>
        );
    }
}