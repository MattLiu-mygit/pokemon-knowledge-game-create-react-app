import React from 'react';

// The start screen that the user first sees when opening the app.
const StartScreen = (props) => {
    return <div>
        <img className = 'pokeball' src = 'https://lh3.googleusercontent.com/proxy/11e9U5lJQtoMP4aZSDCsIgNv8BokC9P0K2a4FL34P_9DBgiZnQndgIZFh1GyrwDGPZZ7Q5ci71SI2EysAHE8M0He70F57OvWiM98FANFeuh9HXEfumjBntd3RvDAkWMhBVlg' />
        <div className = 'description'>A Pokemon knowledge quiz game made with React.js and the PokeAPI, the Restful Pokemon API, developed by Matthew Liu and (future hopefully) css by Kevin Liu.</div>
        <div className = 'instructions'>
            <div>Test your Pokemon knowledge! In 60 seconds, try to match as many Pokemon to the characteristic thrown atcha! If your characteristic is too hard, feel free to reroll a new characteristic to test! Don't worry, you keep your score, even after rerolling! Be aware of the 5 second reroll timer huehuehue!</div>
            <div className = 'finishGameInstruction'>Once you finish your game, have some fun giving the API some attributes to match in the results page!</div>
            <div>Gotta answer 'em all!</div>
        </div>
        <button className = 'start_game_button' onClick = {() => {
        props.randomizer();
        props.setGameStart(true);
    }}>Start game</button>
    </div>
}
export default StartScreen;