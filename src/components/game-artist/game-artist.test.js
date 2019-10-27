import React from 'react';
import renderer from 'react-test-renderer';
import GameArtist from '../game-artist/game-artist.jsx';

it(`GameArtist correctly renders after test`, () => {
  const tree = renderer
    .create(<GameArtist
      onAnswer={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
