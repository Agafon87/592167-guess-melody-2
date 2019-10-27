import React, {Component} from 'react';
import PropTypes from 'prop-types';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import GameGenre from '../game-genre/game-genre.jsx';
import GameArtist from '../game-artist/game-artist.jsx';

export default class App extends Component {
  static getScreen(question, props, onUserAnswer) {
    if (question === -1) {
      const {time, mistakes} = props;

      return <WelcomeScreen
        time={ time }
        mistakes={ mistakes }
        onClick={onUserAnswer} />;
    }

    const {questionsGame} = props;
    const currentQuestion = questionsGame[question];

    switch (currentQuestion.type) {
      case `genre`: return <GameGenre onAnswer={onUserAnswer}/>;
      case `artist`: return <GameArtist onAnswer={onUserAnswer}/>;
    }

    return null;
  }

  constructor(props) {
    super(props);
    this.state = {
      question: -1
    };
  }

  render() {
    const {question} = this.state;
    const {questionsGame} = this.props;

    return App.getScreen(question, this.props, () =>
      this.setState((prevState) => {
        const nextIndex = prevState.question + 1;
        const isEnd = nextIndex >= questionsGame.length;
        return {
          // ...prevState,
          question: !isEnd ? nextIndex : -1,
        };
      })
    );
  }
}

App.propTypes = {
  time: PropTypes.number.isRequired,
  mistakes: PropTypes.number.isRequired,
  questionsGame: PropTypes.array.isRequired
};
