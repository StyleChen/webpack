// Greeter.js
/*var config = require("./config.json");
module.exports = function() {
    var greet = document.createElement('div');
    greet.textContent = config.greetText;
    return greet;
};*/

import React, {Component} from 'react';
import config from './config.json';
import styles from './greeter.css';

class Greeter extends Component{
    render() {
        return (
            <div className={styles.bg}>
                {config.greetText}
                <p className={styles.frist}>{config.content}</p>
            </div>
        )
    }
}

export default Greeter;
