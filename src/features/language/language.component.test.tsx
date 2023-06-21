import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LanguageComponent from './language.component';
import { LanguageProvider } from './language.context';

describe('language component', () => {
  describe('render', () => {
    it('should render 3 language buttons', () => {
      render(<LanguageComponent />, { wrapper: LanguageProvider });
      expect(screen.getAllByRole('button')).toBeInTheDocument;
      expect(screen.getAllByRole('button')).toHaveLength(3);
    });
    it('should set spanish language as default', () => {
      render(
        <LanguageProvider>
          <LanguageComponent />
        </LanguageProvider>
      );
      //const spanishButton = screen.getByText('Spanish');
      const spanishButton = screen.getByRole('button', { name: 'Spanish' });
      userEvent.click(spanishButton);
      expect(spanishButton).toHaveClass('active');
    });
    it('should set english language when a button is clicked', () => {
      render(
        <LanguageProvider>
          <LanguageComponent />
        </LanguageProvider>
      );
      const englishButton = screen.getByText('English');
      userEvent.click(englishButton);
      expect(englishButton).toHaveClass('active');
    });
    it('should set portuguese language when a button is clicked', () => {
      render(
        <LanguageProvider>
          <LanguageComponent />
        </LanguageProvider>
      );
      const portugueseButton = screen.getByText('Portuguese');
      userEvent.click(portugueseButton);
      expect(portugueseButton).toHaveClass('active');
    });
  });
});
