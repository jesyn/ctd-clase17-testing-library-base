import FollowingButtonComponent from './following-button.component';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('FollowingButtonComponent', () => {
  describe('button following should render', () => {
    it('should call toogle funtion when button is clicked', () => {
      const toogle = jest.fn();
      const fav = true;
      render(<FollowingButtonComponent isFav={fav} onToggleFavorite={toogle} />);
      const button = screen.getByRole('button');
      userEvent.click(button);
      expect(toogle).toBeCalled();
      expect(toogle).toBeCalledWith(!fav);
    });
    it('render when favorite is true', () => {
      const toogle = jest.fn();
      render(<FollowingButtonComponent isFav onToggleFavorite={toogle} />);
      //const image = screen.getByRole('img');
      //const isFavorite = '/images/star-filled.png';
      //expect(image).toHaveAttribute('src', isFavorite);
      const image = screen.getByAltText('is_favorite');
      expect(image).toBeInTheDocument();
    });
    it('render when favorite is false', () => {
      const toogle = jest.fn();
      render(<FollowingButtonComponent isFav={false} onToggleFavorite={toogle} />);
      //const image = screen.getByRole('img');
      //const isNotFavorite = '/images/star.png';
      //expect(image).toHaveAttribute('src', isNotFavorite);
      const image = screen.getByAltText('is_not_favorite');
      expect(image).toBeInTheDocument();
    });
  });
});
