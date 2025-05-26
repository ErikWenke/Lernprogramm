"use strict";

import { Model } from "./model.js";
import { View } from "./view.js";
import { Presenter } from "./presenter.js";

// Create User Interface
let v = new View();
let m = new Model();
let p = new Presenter();

v.setPresenter(p);
m.setPresenter(p);
p.setViewModel(v, m);
