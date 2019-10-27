import React from 'react';
import renderer from 'react-test-renderer';
import GameGenre from './game-genre.jsx';

it(`GameGenre correctly renders after test`, () => {
  const tree = renderer
    .create(<GameGenre
      onAnswer={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
