import * as environment from '../config/environment.json';
import {PLATFORM} from 'aurelia-pal';
import { CustomElementRegistry } from 'aurelia-web-components';

export function configure(aurelia) {
  aurelia.use
    .basicConfiguration()
    //.plugin(PLATFORM.moduleName('aurelia-html-import-template-loader'))
    .plugin(PLATFORM.moduleName('aurelia-history-browser'))
    .plugin(PLATFORM.moduleName('aurelia-templating-resources'))
    .plugin(PLATFORM.moduleName('aurelia-templating-router'))
    .plugin(PLATFORM.moduleName('aurelia-dynamic-html'))
    //registering components - they will be renamed to fallback prefix bdlau-
    .globalResources(PLATFORM.moduleName('components/range.html'))
    .globalResources(PLATFORM.moduleName('components/beaker.html'))
    .globalResources(PLATFORM.moduleName('components/composite/beakercontrols.html'))
    //registering components - they will keep prefix bdl-
    .globalResources(PLATFORM.moduleName('elements/bdl-range.html'))
    .globalResources(PLATFORM.moduleName('elements/bdl-beaker.html'))
    .globalResources(PLATFORM.moduleName('elements/bdl-beakercontrols.html'))
    //.globalResources(PLATFORM.moduleName('elements/bdl1-range.html'))
    //.globalResources(PLATFORM.moduleName('elements/bdl1-beaker.html'))
    .globalResources(PLATFORM.moduleName('elements/bdl1-beakercontrols.html'));


  aurelia.use.developmentLogging(environment.debug ? 'debug' : 'warn');
  
//  if (environment.testing) {
//    aurelia.use.plugin(PLATFORM.moduleName('aurelia-testing'));
//  }
  // here define start and register prefix bdl-
  aurelia.start().then(() => {
    const registry = aurelia.container.get(CustomElementRegistry);
    registry.fallbackPrefix = 'bdlau-';
    registry.useGlobalElements();
  });
}
