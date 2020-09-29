// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"images/logo.png":[function(require,module,exports) {
module.exports = "/logo.6023b87e.png";
},{}],"js/Header.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _logo = _interopRequireDefault(require("../images/logo.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function render() {
  var locationHash = window.location.hash;
  return "<div class=\"container\">\n    <a href=\"#/\" class=\"logo\">\n        <img src=\"".concat(_logo.default, "\">\n    </a>\n    <button class=\"burger is-active\">\n        <div ></div>\n        <div ></div>\n        <div ></div>\n    </button>\n    <nav class=\"main-nav is-active\">\n        <ul class=\" navbar-item \">\n        <li>\n        <a class=\"").concat(locationHash === "#/about-us" ? 'navbar-item active' : 'navbar-item', "\" href=\"#/about-us\">About Us</a>\n    </li>\n    <li>\n        <a class=\"").concat(locationHash === "#/how-to-adopt" ? 'navbar-item active' : 'navbar-item', "\" href=\"#/how-to-adopt\">How to Adopt</a>\n    </li>\n    <li>\n        <a class=\"").concat(locationHash === "#/stories" ? 'navbar-item active' : 'navbar-item', " \" href=\"#/stories\">Stories</a>\n    </li>\n    <li>\n        <a class=\"").concat(locationHash === "#/contact" ? 'navbar-item active' : 'navbar-item', " \" href=\"#/contact\">Contact</a>\n    </li>\n        </ul>\n    </nav>\n</div>");
};

var _default = Header;
exports.default = _default;
},{"../images/logo.png":"images/logo.png"}],"images/hero-image.png":[function(require,module,exports) {
module.exports = "/hero-image.58d4c105.png";
},{}],"images/pets/cat.png":[function(require,module,exports) {
module.exports = "/cat.b4b0ca85.png";
},{}],"images/pets/dog.png":[function(require,module,exports) {
module.exports = "/dog.b2b3d854.png";
},{}],"images/howItWorks/1.png":[function(require,module,exports) {
module.exports = "/1.84afc728.png";
},{}],"images/howItWorks/2.png":[function(require,module,exports) {
module.exports = "/2.929a4956.png";
},{}],"images/howItWorks/3.png":[function(require,module,exports) {
module.exports = "/3.5c103b84.png";
},{}],"js/data2.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var stories = [{
  id: 1,
  title: "Adopted Dog Helps Boy with Autism Thrive",
  story: "Who knew that a little pointy-eared, wacky-tailed pup that stands no taller than sixteen inches, steals all of our socks and farts when she sneezes would become the love of our life? I had been volunteering at large animal adoption events for several years, all the while not having a pet of our own. We wanted to wait until our son Ralph was old enough to take an active part in taking care of a dog. Ralph is what we like to call “awesomely autistic,” and we are so very proud to be a happily neurodiverse family! We simply felt that it would be amazing if we could find a dog that could assist Ralph with things like being more active outdoors making new friends, practicing his socialization skills, providing an anchor in order to avoid episodes of autistic eloping, and finding comfort during autistic meltdowns when overstimulated.",
  url: "https://www.petcofoundation.org/wp-content/uploads/2019/11/Koppelman_peopleschoice-210x170.jpg"
}, {
  id: 2,
  title: "Adopted Dog Finds her Soulmates",
  story: "When I walked in the shelter and saw Luna in a tiny crate, just lying there sleeping while her litter mate bounced up and down and gained the attention of everyone, I had a gut feeling I would be taking that puppy home. She was only two pounds and 12 weeks old, and the second I held her for the first time and looked into her pretty green eyes, I made the decision that I would not be walking out without her in my arms One hour later, we did just that, and my life has never been the same since.",
  url: "https://www.petcofoundation.org/wp-content/uploads/2019/11/Duquette_peopleschoice-210x170.jpg"
}, {
  id: 3,
  title: "Adopted Dog Helps Family Through Grief, Paw in Paw",
  story: "When I was in college, I dealt with some pretty serious anxiety and was on the verge of an eating disorder in the fall of my senior year. Students at my university used to take trips to Greenville Humane Society as study breaks and on a random Monday in November 2016, I decided to as well. When I got to the shelter it was filled with orange cats — a rarity that I was super excited about. My mom is allergic to cats so I was never able to have one growing up, but I had always wanted an orange cat. I even have a photo of me as a 4-year-old with my aunt’s cat that I picked out from the shelter! I loved on a few cats that day, but then went back to school — because how impulsive would it be to get a cat, right? On the car ride home I thought to myself, “I bet Egg Nog would be a good name for an orange cat,” which is exactly what I told my roommate when I got home. Her reaction was nothing like I thought it would be: “Caroline! You should adopt a kitten.” Impulsive, right? We got in the car, picked up our third roommate, drove to the Humane Society, pet every orange cat in the room, and finally landed on the one that would be my Egg Nog. I’m 24 now and I’m the cat lady amongst all my dog-loving friends, but I’m proud to be that; just like I’m proud to be Egg Nog’s mom. My cat saved me from myself and quite literally is the reason I wake up every day (5 a.m. breakfast call, anyone?). I thank the Greenville Humane Society every day for the work they do in our community and for their ability to match people with their very best friends. Thank you. Each year, the Petco Foundation invites adopters to share the story of how their adopted pet changed their lives during the annual Holiday Wishes campaign, giving the organization that they adopted from a chance to receive a grant award. This story by Caroline won Greenville Humane Society in Greenville, South Carolina a 2019 Holiday Wishes award.",
  url: "https://www.petcofoundation.org/wp-content/uploads/2019/11/Byrd_peopleschoice-210x170.jpg"
}];
var _default = stories;
exports.default = _default;
},{}],"js/Home.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _heroImage = _interopRequireDefault(require("../images/hero-image.png"));

var _cat = _interopRequireDefault(require("../images/pets/cat.png"));

var _dog = _interopRequireDefault(require("../images/pets/dog.png"));

var _ = _interopRequireDefault(require("../images/howItWorks/1.png"));

var _2 = _interopRequireDefault(require("../images/howItWorks/2.png"));

var _3 = _interopRequireDefault(require("../images/howItWorks/3.png"));

var _data = _interopRequireDefault(require("./data2.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import image
var stories = _data.default;

var Home = function render() {
  return " <main>\n    <section class=\"hero\">\n        <div class=\"container\">\n            <div class=\"hero__desc\">\n                <h1>Find and Adopt a pet Near You</h1>\n                <p>There are so many loving adoptable pets right in your community waiting for a family to call\n                    their own. </p>\n                <a href=\"#meetYourMatch\" class=\"button is-primary\">Find a pet</a>\n            </div>\n            <div class=\"hero__image\">\n                <img src=\"".concat(_heroImage.default, "\" />\n            </div>\n        </div>\n    </section>\n    <section id=\"meetYourMatch\" name=\"meetYourMatch\">\n        <div class=\"container\">\n            <div class=\"meetYourMatch__background\"></div>\n            <!--\u0631\u0628\u0645\u0627 \u0633\u062A\u062D\u062A\u0627\u062C \u0647\u0630\u0627 \u0627\u0644\u0639\u0646\u0635\u0631 \u0627\u0644\u062E\u0627\u0644\u064A \u0644\u0639\u0645\u0644 \u0646\u0645\u0637 \u0627\u0644\u062E\u0644\u0641\u064A\u0629-->\n            <div class=\"meetYourMatch\u0640\u0640content\">\n                <h2>Meet Your Match</h2>\n                <form action=\"#\" class=\"meetYourMatch\u0640\u0640form\">\n                    <div class=\"switcher\">\n                        <label for=\"dog\">\n                            <input id=\"dog\" name=\"animal_type\" type=\"checkbox\" />\n                            <img src=\"").concat(_dog.default, "\" alt=\"dog image\">\n                        </label>\n                        <span>or</span>\n                        <label for=\"cat\">\n                            <input id=\"cat\" name=\"animal_type\" type=\"checkbox\" />\n                            <img src=\"").concat(_cat.default, "\" alt=\"cat image\">\n                        </label>\n                    </div>\n                    <div class=\"form-group\">\n                        <input id=\"search\" type=\"text\" placeholder=\"Entre  your city\" />\n                        <button id=\"searchButton\" class=\"button is-primary\" type=\"submit\">search</button>\n                    </div >\n                </form>\n                <div class=\"animalsGroups\">\n                 </div>\n                </div>\n            </div>\n        </div>\n    </section>\n    <section class=\"howItWorks\">\n        <div class=\"container\">\n            <h2>How it works?</h2>\n            <div class=\"widgets is-howItWorks\">\n                <div class=\"widget\">\n                    <div class=\"widget__image\">\n                        <img src=\"").concat(_.default, "\" alt=\"graphic-image\">\n                    </div>\n                    <div class=\"widget__desc\">\n                        <h3>find Your Match</h3>\n                        <p>We work with local rescues & shelters to help you find adoptable pets in your\n                            area.</p>\n                    </div>\n                </div>\n                <div class=\"widget\">\n                    <div class=\"widget__image\">\n                        <img src=\"").concat(_2.default, "\" alt=\"graphic-image\">\n                    </div>\n                    <div class=\"widget__desc\">\n                        <h3>Adopt a pet</h3>\n                        <p>We partner with local adoption organizations to help connect pets in need with\n                            pets lovers just like you.</p>\n                    </div>\n                </div>\n                <div class=\"widget\">\n                    <div class=\"widget__image\">\n                        <img src=\"").concat(_3.default, "\" alt=\"graphic-image\">\n                    </div>\n                    <div class=\"widget__desc\">\n                        <h3>Change your Life</h3>\n                        <p>From the story we hear, adopting pets change life of many people from our\n                            community</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n    <section class=\"stories\">\n        <div class=\"container\">\n            <h2>Featured Stories</h2>\n            <p class=\"heading-paragraph\">Together, we've helped save over 80K pets through adoption. Read\n                amazing stories to see how adoption change the life of those people</p>\n            <div class=\"widgetsStory\">\n            ").concat(stories.map(function (story) {
    return "\n            <div class=\"widget\">\n            <div class=\"widget__image\">\n                <img src=".concat(story.url, ">\n            </div>\n            <div class=\"widget__desc\">\n                <h3 id=\"titel\">").concat(story.title, "</h3>\n                <p class=\"storyParagh\" id=\"").concat(story.id, "\">").concat(story.story, "</p>\n                <div class=\"link\" id=\"").concat(story.id, "\">Read More</div>\n            </div>\n        </div> ");
  }).join(""), "    \n        </div>\n    </section>\n    <section class=\"actions\">\n        <div class=\"container\">\n            <h2>Change a Life, Adopt a Pet</h2>\n            <a href=\"#\" class=\"button is-secondary\">Find a pet</a>\n            <a href=\"#\" class=\"button is-outline\">Donate</a>\n        </div>\n    </section>\n    </main>");
};

var _default = Home;
exports.default = _default;
},{"../images/hero-image.png":"images/hero-image.png","../images/pets/cat.png":"images/pets/cat.png","../images/pets/dog.png":"images/pets/dog.png","../images/howItWorks/1.png":"images/howItWorks/1.png","../images/howItWorks/2.png":"images/howItWorks/2.png","../images/howItWorks/3.png":"images/howItWorks/3.png","./data2.js":"js/data2.js"}],"js/Footer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _logo = _interopRequireDefault(require("../images/logo.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function render() {
  return "<div class=\"container\">\n    <div class=\"copyrights\">\n        <img src=\"".concat(_logo.default, "\" alt=\"Logo\">\n        <p>&copy; 2010 \u2014 2020</p>\n        <p><a href=\"#\">Privacy</a> \u2014 <a href=\"#\">Terms</a></p>\n    </div>\n    <div class=\"footer-nav\">\n        <div class=\"item\">\n            <h5>How to Adopt</h5>\n            <ul>\n                <li><a href=\"#\">find a pet</a></li>\n                <li><a href=\"#\">adoption centers</a></li>\n                <li><a href=\"#\">adoption events</a></li>\n            </ul>\n        </div>\n        <div class=\"item\">\n            <h5>about us</h5>\n            <ul>\n                <li><a href=\"#\">News</a></li>\n                <li><a href=\"#\">careers</a></li>\n                <li><a href=\"#\">Contact</a></li>\n            </ul>\n        </div>\n        <div class=\"item\">\n            <h5>Stories</h5>\n            <ul>\n                <li><a href=\"#\">community impact</a></li>\n                <li><a href=\"#\">your stories</a></li>\n                <li><a href=\"#\">our impact</a></li>\n            </ul>\n        </div>\n        <div class=\"item\">\n            <h5>Help us</h5>\n            <ul>\n                <li><a href=\"#\">Donate</a></li>\n                <li><a href=\"#\">Corporate giving</a></li>\n            </ul>\n        </div>\n    </div>\n</div>");
};

var _default = Footer;
exports.default = _default;
},{"../images/logo.png":"images/logo.png"}],"js/data.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var animals = [{
  type: "Rabbit",
  gender: "Female",
  age: "Small",
  name: "Mash",
  city: "Canada",
  url: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
}, {
  type: "cat",
  gender: "Female",
  age: "Small",
  name: "Rasel",
  city: "Canada",
  url: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
}, {
  type: "Parrot",
  gender: "male",
  age: "Young",
  name: "Marcel",
  city: "Canada",
  url: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
}, {
  type: "Dog",
  gender: "male",
  age: "Young",
  name: "Morio",
  city: "New Yourk",
  url: "https://images.unsplash.com/photo-1548624014-da37af0923f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
}, {
  type: "Cat",
  gender: "Female",
  age: "Young",
  name: "Sandra",
  city: "New Yourk",
  url: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
}, {
  type: "Dog",
  gender: "Female",
  age: "Small",
  name: "Sosan",
  city: "New Yourk",
  url: "https://images.unsplash.com/photo-1588144349268-a0479f083d73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
}, {
  type: "Tortoise",
  gender: "male",
  age: "Old",
  name: "Danio",
  city: "Washnton",
  url: "https://images.unsplash.com/photo-1521217155737-0d5632e9813f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
}, {
  type: "Cat",
  gender: "male",
  age: "Young",
  name: "Sam",
  city: "Washnton",
  url: "https://images.unsplash.com/photo-1472053092455-ee16a8b358b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
}, {
  type: "Dag",
  gender: "male",
  age: "Old",
  name: "Danio",
  city: "Washnton",
  url: "https://images.unsplash.com/photo-1530126483408-aa533e55bdb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
}, {
  type: "Cat",
  gender: "Female",
  age: "Young",
  name: "Maroco",
  city: "Los Angeles CA",
  url: "https://images.unsplash.com/photo-1548366086-7f1b76106622?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
}, {
  type: "Cat",
  gender: "Female",
  age: "Young",
  name: "Sandra",
  city: "Los Angeles CA",
  url: "https://images.unsplash.com/photo-1548247416-ec66f4900b2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
}, {
  type: "Dog",
  gender: "male",
  age: "Old",
  name: "Chanona",
  city: "Los Angeles CA",
  url: "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
}];
var _default = animals;
exports.default = _default;
},{}],"js/index.js":[function(require,module,exports) {
"use strict";

var _Header = _interopRequireDefault(require("./Header.js"));

var _Home = _interopRequireDefault(require("./Home.js"));

var _Footer = _interopRequireDefault(require("./Footer.js"));

var _data = _interopRequireDefault(require("./data.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var shownData = [];
document.querySelector("header").innerHTML = (0, _Header.default)();
document.querySelector("footer").innerHTML = (0, _Footer.default)(); //Router

function renderPage() {
  var page;

  switch (window.location.hash) {
    case "#/":
    case "":
      page = (0, _Home.default)();
      break;

    case "#meetYourMatch":
      return;

    default:
      page = "<h1 class='not-found-page'>Not Found Page!</h1>";
      break;
  }

  document.querySelector("header").innerHTML = (0, _Header.default)();
  document.querySelector(".burger").addEventListener("click", function () {
    return document.querySelector("header").classList.toggle("is-active");
  });
  document.querySelector("#root").innerHTML = page;
  return page;
}

window.onhashchange = renderPage;
renderPage();
/*****************************************************************/
//searching

document.getElementById("searchButton").addEventListener("click", function (e) {
  e.preventDefault();
  var resultArea = document.querySelector(".animalsGroups");
  var inputSearch = document.getElementById("search");
  filterItem(_data.default);

  if (shownData.length === 0) {
    resultArea.innerHTML = " ";
    createItem();
  }

  inputSearch.value = " ";
}); // filter items

function filterItem(animals) {
  var inputSearch = document.getElementById("search").value.toLowerCase();

  if (inputSearch.trim().length === 0) {
    alert("You have to enter value to search for!");
  } else {
    shownData = animals.filter(function (animal) {
      return animal.city.toLowerCase().indexOf(inputSearch.trim()) !== -1;
    });
    addItem(shownData);
  }
} // add items


function addItem(data) {
  var animallist = document.querySelector(".animalsGroups");
  var animals = data.map(function (animal) {
    return "<div class=\"widget\">\n    <div class=\"widget__image\">\n        <img class=\"animalImg\"src=".concat(animal.url, " >\n    </div>\n   <div class=\"widget__desc\">\n       <h4>").concat(animal.name, "</h4>\n        <p>").concat(animal.gender, " | ").concat(animal.age, "</p>\n         <p>").concat(animal.city, "</p>\n     </div>\n  </div>\n  ");
  }).join("");
  animallist.innerHTML = animals;
} // create new item 'no data found'


function createItem() {
  var resultArea = document.querySelector(".animalsGroups");
  var resultText = document.createElement("p");
  var newText = document.createTextNode("No Data Found!");
  resultText.className = ".widget__note";
  resultText.style.color = "red";
  resultText.style.fontSize = "30px";
  resultText.appendChild(newText);
  resultArea.appendChild(resultText);
}
/*****************************************************************/
//show Stories


var items = document.getElementsByClassName("link");
Array.from(items).forEach(function (item) {
  item.addEventListener("click", function () {
    var showStories = document.getElementById(item.id);

    if (showStories.style.display == "block") {
      showStories.setAttribute("style", "display:none;");
      item.textContent = "Read More";
    } else {
      showStories.setAttribute("style", "display:block;");
      item.textContent = "Close";
    }
  });
});
},{"./Header.js":"js/Header.js","./Home.js":"js/Home.js","./Footer.js":"js/Footer.js","./data.js":"js/data.js"}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63379" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.js.map