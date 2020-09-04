# Description

This is testing project to reproduce bug in aurelia.
A composite component registered as webcomponent using subcomponents throws `instruction is undefined` error.
This happens if the component is composed from custom-element registered as webcomponent with same name as aurelia component.
If custom-elements have different name in Aurelia (e.g. without prefix) which is registered with some fallback prefix in webcomponents (e.g. bdlau-) then
this error doesn't happen

# probably reason

<bdl-beakercontrol> is composition of <bdl-beaker> and <bdl-range> components.
IF these are registered as webcomponents - the error happens.

As a workaround - use fallback prefix - or different prefix for Aurelia and for Webcomponents.
E.g. Similar component <beakercontrol> do not have this problem it is composition of <beaker> and <range> which are registered as 
webcomponents using fallback prefix ('bdlau') as bdlau-beakercontrol and bdlau-beaker and bdlau-range.

However, to be forward compatible with webcomponents, it is very unconvenient to have different name or prefix for aurelia custom-elements and webcomponent custom-elements.

# to reproduce
* `npm i`
* `npm run start` and see in browser (localhost:8080)
* bdlau-beakercontrol is rendered correctly (webcomponents (with fallback prefix bdlau- using other components)
* bdl-beakercontrol is not rendered and throws

```
Uncaught TypeError: instruction is undefined
    applyInstructions aurelia-templating.js:2211
    create aurelia-templating.js:2471
    create aurelia-templating.js:4108
    auInit aurelia-web-components.js:46
    attributeChangedCallback aurelia-web-components.js:66
    registerBehavior aurelia-web-components.js:178
    useGlobalElements aurelia-web-components.js:164
    useGlobalElements aurelia-web-components.js:162
    configure webcomponents.js:31
    handle index.js:57
    run setImmediate.js:40
    runIfPresent setImmediate.js:69
    onGlobalMessage setImmediate.js:109
    installPostMessageImplementation setImmediate.js:114
    <anonymous> setImmediate.js:169
    <anonymous> setImmediate.js:186
    <anonymous> YBdB:188
    YBdB bodylight.bundle.js:400
    __webpack_require__ bodylight.bundle.js:20
    <anonymous> main.js:54
    <anonymous> URgk:65
    URgk bodylight.bundle.js:378
    __webpack_require__ bodylight.bundle.js:20
    <anonymous> eG:256
    eG bodylight.bundle.js:215
    __webpack_require__ bodylight.bundle.js:20
    <anonymous> GViq:118
    GViq bodylight.bundle.js:249
    __webpack_require__ bodylight.bundle.js:20
    0 bodylight.bundle.js:121
    __webpack_require__ bodylight.bundle.js:20
    <anonymous> bodylight.bundle.js:84
    <anonymous> bodylight.bundle.js:87
```

Live preview with the problem at https://tomaskulhanek.github.io/bodylight-aurelia-webcomponent-bug/dist/
