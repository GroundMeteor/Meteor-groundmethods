"use strict";

/*

GroundMethods is a thin layer providing Meteor offline methods

Concept, localstorage is simple wide spread but slow

GroundMethods saves outstanding methods into localstorage at window
unload, but can be configured to save at any changes and at certain interval(ms)

When the app loads GroundMethods resumes methods

Regz. RaiX

*/

