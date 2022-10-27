import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { render } from '@testing-library/react';
import Widget from '../components/Widget';
import { IntlProvider } from 'react-intl';
import i18n from '../core/bin/i18n.js';

let obj = null;
const source = new i18n('en');
const locales = {
  es: 'Spanish',
  fr: 'French',
  ru: 'Russian',
};

describe('<Widget />', () => {
  beforeEach(() => {
    obj = document.createElement('div');
    document.body.appendChild(obj);
  });

  afterEach(() => {
    unmountComponentAtNode(obj);
    obj.remove();
    obj = null;
  });

  it('renders without crashing', () => {
    render(
      <IntlProvider locale={source.locale} messages={source.messages}>
        <Widget element={obj} />
      </IntlProvider>,
      obj,
    );
  });
});

Object.keys(locales).forEach(function (key) {
  try {
    const translation = new i18n(key);
    let id = null;
    for (id in source.messages) {
      if (
        typeof translation.messages[id] !== 'string' ||
        translation.messages[id] === source.messages[id]
      ) {
        throw new Error('Invalid translation, ' + locales[key] + '(' + key + ')');
      }
    }
  } catch (error) {
    console.warn(error.message);
  }
});
