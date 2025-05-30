"use strict";

import { Model } from "./model.js";
import { View } from "./view.js";
import { Presenter } from "./presenter.js";

// register service worker
/*
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./service-worker.js");
}
*/
// create user interface
let v = new View();
let m = new Model();
let p = new Presenter();

v.setPresenter(p);
m.setPresenter(p);
p.setViewModel(v, m);
