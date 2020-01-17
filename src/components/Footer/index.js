import React, { Component } from 'react';
import './style.css';

export default class Footer extends Component {
    render() {
        return (
            <footer id="footer">
                <button className="footer__btn">
                    <span className="sprite ic-home active"></span>
                </button>
                <button className="footer__btn">
                    <span className="sprite ic-explore"></span>
                </button>
                <button className="footer__btn">
                    <span className="sprite ic-add"></span>
                </button>
                <button className="footer__btn">
                    <span className="sprite ic-activity"></span>
                </button>
                <button className="footer__btn">
                    <span className="sprite ic-profile"></span>
                </button>
            </footer>
        );
    }
}