import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading,subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>

            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
           {newsArticle("React js is great","Top news - 3456 reader's")}   
           {newsArticle("Coronavirus:UK updates","Top news - 569 reader's")}   
           {newsArticle("Tesla hits new highs","Cars & Auto - 300 reader's")}   
           {newsArticle("Bitcoin Breaks $22k","Crypto - 6000 reader's")}   
           {newsArticle("Is Redux too good ?","Code - 200 reader's")}   
           {newsArticle("React Flip move is great","Top news - 3456 reader's")}            
        </div>
    );
}

export default Widgets
