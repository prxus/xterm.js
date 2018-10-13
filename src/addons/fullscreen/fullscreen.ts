/**
 * Copyright (c) 2014 The xterm.js authors. All rights reserved.
 * @license MIT
 */

import { Terminal } from 'xterm';

/**
 * Toggle the given terminal's fullscreen mode.
 * @param term The terminal to toggle full screen mode
 * @param fullscreen Toggle fullscreen on (true) or off (false)
 */
export function toggleFullScreen(term: Terminal, fullscreen: boolean): void {
  let fn: Function;

  if (typeof fullscreen === 'undefined') {
    fn = (term.element.classList.contains('fullscreen')) ?
      term.element.classList.remove : term.element.classList.add;
  } else if (!fullscreen) {
    fn = term.element.classList.remove;
  } else {
    fn = term.element.classList.add;
  }

  fn('fullscreen');
}

export function apply(terminalConstructor: typeof Terminal): void {
  (<any>terminalConstructor.prototype).toggleFullScreen = function (fullscreen: boolean): void {
    toggleFullScreen(this, fullscreen);
  };
}
