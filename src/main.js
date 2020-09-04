import 'regenerator-runtime/runtime';
import {PLATFORM} from 'aurelia-pal';
import * as environment from '../config/environment.json';
import { CustomElementRegistry } from 'aurelia-web-components';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .plugin(PLATFORM.moduleName('aurelia-dynamic-html'))
    .developmentLogging(environment.debug ? 'debug' : 'warn');

  if (environment.testing) {
    aurelia.use.plugin(PLATFORM.moduleName('aurelia-testing'));
  }

  aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));
  //include webcomponents js to bundle them into bodylight.bundle.js
  PLATFORM.moduleName('webcomponents');
}
