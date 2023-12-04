/**
*@jest-environment.jsdom
*/
import loginPage from '../../src/temples/loginPage.js';

describe('LogIn', () => {
  test('is a function', () => {
    expect(typeof loginPage).toBe('function');
  });

  test('have a button', () => {
    const DOM = document.createElement('div');
    DOM.append(loginPage());
    const haveAButton = DOM.queryselector('#buttonReturn');
    expect(haveAButton).not.toBe(undefined);
  });

  test('after click button return call function navigateTo', () => {
    const DOM = document.createElement('div');
    const navigateTo = jest.fn();
    DOM.append(loginPage(navigateTo));
    const buttonback = DOM.queryselector('#buttonReturn');
    expect(buttonback).click();
    expect(navigateTo).tohaveBeenCalled();
  });
});
