// Generated by psc-bundle 0.7.6.1
var PS = { };
(function(exports) {
  /* global exports */
  "use strict";

  // module Prelude

  //- Functor --------------------------------------------------------------------

  exports.arrayMap = function (f) {
    return function (arr) {
      var l = arr.length;
      var result = new Array(l);
      for (var i = 0; i < l; i++) {
        result[i] = f(arr[i]);
      }
      return result;
    };
  };

  //- Monoid ---------------------------------------------------------------------

  exports.concatString = function (s1) {
    return function (s2) {
      return s1 + s2;
    };
  };

  exports.concatArray = function (xs) {
    return function (ys) {
      return xs.concat(ys);
    };
  };

  //- Semiring -------------------------------------------------------------------

  exports.intAdd = function (x) {
    return function (y) {
      /* jshint bitwise: false */
      return x + y | 0;
    };
  };

  exports.intMul = function (x) {
    return function (y) {
      /* jshint bitwise: false */
      return x * y | 0;
    };
  };

  exports.numAdd = function (n1) {
    return function (n2) {
      return n1 + n2;
    };
  };

  exports.numMul = function (n1) {
    return function (n2) {
      return n1 * n2;
    };
  };

  exports.numDiv = function (n1) {
    return function (n2) {
      return n1 / n2;
    };
  };

  //- Show -----------------------------------------------------------------------

  exports.showIntImpl = function (n) {
    return n.toString();
  };

  exports.showNumberImpl = function (n) {
    /* jshint bitwise: false */
    return n === (n | 0) ? n + ".0" : n.toString();
  };

  exports.showStringImpl = function (s) {
    return JSON.stringify(s);
  };

  exports.showArrayImpl = function (f) {
    return function (xs) {
      var ss = [];
      for (var i = 0, l = xs.length; i < l; i++) {
        ss[i] = f(xs[i]);
      }
      return "[" + ss.join(",") + "]";
    };
  };
 
})(PS["Prelude"] = PS["Prelude"] || {});
(function(exports) {
  // Generated by psc version 0.7.6.1
  "use strict";
  var $foreign = PS["Prelude"];
  var Semigroupoid = function (compose) {
      this.compose = compose;
  };
  var Category = function (__superclass_Prelude$dotSemigroupoid_0, id) {
      this["__superclass_Prelude.Semigroupoid_0"] = __superclass_Prelude$dotSemigroupoid_0;
      this.id = id;
  };
  var Functor = function (map) {
      this.map = map;
  };
  var Apply = function (__superclass_Prelude$dotFunctor_0, apply) {
      this["__superclass_Prelude.Functor_0"] = __superclass_Prelude$dotFunctor_0;
      this.apply = apply;
  };
  var Applicative = function (__superclass_Prelude$dotApply_0, pure) {
      this["__superclass_Prelude.Apply_0"] = __superclass_Prelude$dotApply_0;
      this.pure = pure;
  };
  var Bind = function (__superclass_Prelude$dotApply_0, bind) {
      this["__superclass_Prelude.Apply_0"] = __superclass_Prelude$dotApply_0;
      this.bind = bind;
  };
  var Monad = function (__superclass_Prelude$dotApplicative_0, __superclass_Prelude$dotBind_1) {
      this["__superclass_Prelude.Applicative_0"] = __superclass_Prelude$dotApplicative_0;
      this["__superclass_Prelude.Bind_1"] = __superclass_Prelude$dotBind_1;
  };
  var Semigroup = function (append) {
      this.append = append;
  };
  var Semiring = function (add, mul, one, zero) {
      this.add = add;
      this.mul = mul;
      this.one = one;
      this.zero = zero;
  };
  var ModuloSemiring = function (__superclass_Prelude$dotSemiring_0, div, mod) {
      this["__superclass_Prelude.Semiring_0"] = __superclass_Prelude$dotSemiring_0;
      this.div = div;
      this.mod = mod;
  };
  var Show = function (show) {
      this.show = show;
  };
  var zero = function (dict) {
      return dict.zero;
  };                                                                           
  var unit = {};
  var showString = new Show($foreign.showStringImpl);
  var showNumber = new Show($foreign.showNumberImpl);
  var showInt = new Show($foreign.showIntImpl);
  var show = function (dict) {
      return dict.show;
  };
  var showArray = function (__dict_Show_1) {
      return new Show($foreign.showArrayImpl(show(__dict_Show_1)));
  };             
  var semiringNumber = new Semiring($foreign.numAdd, $foreign.numMul, 1.0, 0.0);
  var semiringInt = new Semiring($foreign.intAdd, $foreign.intMul, 1, 0);
  var semigroupoidFn = new Semigroupoid(function (f) {
      return function (g) {
          return function (x) {
              return f(g(x));
          };
      };
  });
  var semigroupString = new Semigroup($foreign.concatString);
  var semigroupArray = new Semigroup($foreign.concatArray);
  var pure = function (dict) {
      return dict.pure;
  };
  var $$return = function (__dict_Applicative_2) {
      return pure(__dict_Applicative_2);
  };
  var otherwise = true;
  var one = function (dict) {
      return dict.one;
  };
  var mul = function (dict) {
      return dict.mul;
  }; 
  var moduloSemiringNumber = new ModuloSemiring(function () {
      return semiringNumber;
  }, $foreign.numDiv, function (_14) {
      return function (_15) {
          return 0.0;
      };
  });                                  
  var mod = function (dict) {
      return dict.mod;
  };
  var map = function (dict) {
      return dict.map;
  };
  var $less$dollar$greater = function (__dict_Functor_5) {
      return map(__dict_Functor_5);
  };
  var id = function (dict) {
      return dict.id;
  };
  var functorArray = new Functor($foreign.arrayMap);
  var flip = function (f) {
      return function (b) {
          return function (a) {
              return f(a)(b);
          };
      };
  }; 
  var div = function (dict) {
      return dict.div;
  };
  var $div = function (__dict_ModuloSemiring_10) {
      return div(__dict_ModuloSemiring_10);
  };
  var $$const = function (a) {
      return function (_3) {
          return a;
      };
  };
  var compose = function (dict) {
      return dict.compose;
  };
  var $greater$greater$greater = function (__dict_Semigroupoid_15) {
      return flip(compose(__dict_Semigroupoid_15));
  };
  var categoryFn = new Category(function () {
      return semigroupoidFn;
  }, function (x) {
      return x;
  });
  var bind = function (dict) {
      return dict.bind;
  }; 
  var apply = function (dict) {
      return dict.apply;
  };
  var $less$times$greater = function (__dict_Apply_25) {
      return apply(__dict_Apply_25);
  };
  var liftA1 = function (__dict_Applicative_26) {
      return function (f) {
          return function (a) {
              return $less$times$greater(__dict_Applicative_26["__superclass_Prelude.Apply_0"]())(pure(__dict_Applicative_26)(f))(a);
          };
      };
  }; 
  var append = function (dict) {
      return dict.append;
  };
  var $less$greater = function (__dict_Semigroup_28) {
      return append(__dict_Semigroup_28);
  };
  var ap = function (__dict_Monad_30) {
      return function (f) {
          return function (a) {
              return bind(__dict_Monad_30["__superclass_Prelude.Bind_1"]())(f)(function (_2) {
                  return bind(__dict_Monad_30["__superclass_Prelude.Bind_1"]())(a)(function (_1) {
                      return $$return(__dict_Monad_30["__superclass_Prelude.Applicative_0"]())(_2(_1));
                  });
              });
          };
      };
  }; 
  var add = function (dict) {
      return dict.add;
  };
  var $plus = function (__dict_Semiring_31) {
      return add(__dict_Semiring_31);
  };
  exports["Show"] = Show;
  exports["ModuloSemiring"] = ModuloSemiring;
  exports["Semiring"] = Semiring;
  exports["Semigroup"] = Semigroup;
  exports["Monad"] = Monad;
  exports["Bind"] = Bind;
  exports["Applicative"] = Applicative;
  exports["Apply"] = Apply;
  exports["Functor"] = Functor;
  exports["Category"] = Category;
  exports["Semigroupoid"] = Semigroupoid;
  exports["show"] = show;
  exports["/"] = $div;
  exports["mod"] = mod;
  exports["div"] = div;
  exports["+"] = $plus;
  exports["one"] = one;
  exports["mul"] = mul;
  exports["zero"] = zero;
  exports["add"] = add;
  exports["<>"] = $less$greater;
  exports["append"] = append;
  exports["ap"] = ap;
  exports["return"] = $$return;
  exports["bind"] = bind;
  exports["liftA1"] = liftA1;
  exports["pure"] = pure;
  exports["<*>"] = $less$times$greater;
  exports["apply"] = apply;
  exports["<$>"] = $less$dollar$greater;
  exports["map"] = map;
  exports["id"] = id;
  exports[">>>"] = $greater$greater$greater;
  exports["compose"] = compose;
  exports["otherwise"] = otherwise;
  exports["const"] = $$const;
  exports["flip"] = flip;
  exports["unit"] = unit;
  exports["semigroupoidFn"] = semigroupoidFn;
  exports["categoryFn"] = categoryFn;
  exports["functorArray"] = functorArray;
  exports["semigroupString"] = semigroupString;
  exports["semigroupArray"] = semigroupArray;
  exports["semiringInt"] = semiringInt;
  exports["semiringNumber"] = semiringNumber;
  exports["moduloSemiringNumber"] = moduloSemiringNumber;
  exports["showInt"] = showInt;
  exports["showNumber"] = showNumber;
  exports["showString"] = showString;
  exports["showArray"] = showArray;;
 
})(PS["Prelude"] = PS["Prelude"] || {});
(function(exports) {
  // Generated by psc version 0.7.6.1
  "use strict";
  var Prelude = PS["Prelude"];
  var $times$greater = function (__dict_Apply_1) {
      return function (a) {
          return function (b) {
              return Prelude["<*>"](__dict_Apply_1)(Prelude["<$>"](__dict_Apply_1["__superclass_Prelude.Functor_0"]())(Prelude["const"](Prelude.id(Prelude.categoryFn)))(a))(b);
          };
      };
  };
  var lift2 = function (__dict_Apply_5) {
      return function (f) {
          return function (a) {
              return function (b) {
                  return Prelude["<*>"](__dict_Apply_5)(Prelude["<$>"](__dict_Apply_5["__superclass_Prelude.Functor_0"]())(f)(a))(b);
              };
          };
      };
  };
  exports["lift2"] = lift2;
  exports["*>"] = $times$greater;;
 
})(PS["Control.Apply"] = PS["Control.Apply"] || {});
(function(exports) {
  /* global exports */
  "use strict";

  // module Control.Monad.Eff

  exports.returnE = function (a) {
    return function () {
      return a;
    };
  };

  exports.bindE = function (a) {
    return function (f) {
      return function () {
        return f(a())();
      };
    };
  };
 
})(PS["Control.Monad.Eff"] = PS["Control.Monad.Eff"] || {});
(function(exports) {
  // Generated by psc version 0.7.6.1
  "use strict";
  var $foreign = PS["Control.Monad.Eff"];
  var Prelude = PS["Prelude"];     
  var monadEff = new Prelude.Monad(function () {
      return applicativeEff;
  }, function () {
      return bindEff;
  });
  var bindEff = new Prelude.Bind(function () {
      return applyEff;
  }, $foreign.bindE);
  var applyEff = new Prelude.Apply(function () {
      return functorEff;
  }, Prelude.ap(monadEff));
  var applicativeEff = new Prelude.Applicative(function () {
      return applyEff;
  }, $foreign.returnE);
  var functorEff = new Prelude.Functor(Prelude.liftA1(applicativeEff));
  exports["functorEff"] = functorEff;
  exports["applyEff"] = applyEff;
  exports["applicativeEff"] = applicativeEff;
  exports["bindEff"] = bindEff;
  exports["monadEff"] = monadEff;;
 
})(PS["Control.Monad.Eff"] = PS["Control.Monad.Eff"] || {});
(function(exports) {
  /* global exports */
  "use strict";

  exports.replicate = function (n) {
    return function (v) {
      if (n < 1) return [];
      var r = new Array(n);
      for (var i = 0; i < n; i++) r[i] = v;
      return r;
    };
  };
 
})(PS["Data.Array"] = PS["Data.Array"] || {});
(function(exports) {
  /* global exports */
  "use strict";

  // module Data.Foldable

  exports.foldrArray = function (f) {
    return function (init) {
      return function (xs) {
        var acc = init;
        var len = xs.length;
        for (var i = len - 1; i >= 0; i--) {
          acc = f(xs[i])(acc);
        }
        return acc;
      };
    };
  };

  exports.foldlArray = function (f) {
    return function (init) {
      return function (xs) {
        var acc = init;
        var len = xs.length;
        for (var i = 0; i < len; i++) {
          acc = f(acc)(xs[i]);
        }
        return acc;
      };
    };
  };
 
})(PS["Data.Foldable"] = PS["Data.Foldable"] || {});
(function(exports) {
  // Generated by psc version 0.7.6.1
  "use strict";
  var Prelude = PS["Prelude"];
  var mempty = function (dict) {
      return dict.mempty;
  };
  exports["mempty"] = mempty;;
 
})(PS["Data.Monoid"] = PS["Data.Monoid"] || {});
(function(exports) {
  // Generated by psc version 0.7.6.1
  "use strict";
  var $foreign = PS["Data.Foldable"];
  var Prelude = PS["Prelude"];
  var Control_Apply = PS["Control.Apply"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Maybe_First = PS["Data.Maybe.First"];
  var Data_Maybe_Last = PS["Data.Maybe.Last"];
  var Data_Monoid = PS["Data.Monoid"];
  var Data_Monoid_Additive = PS["Data.Monoid.Additive"];
  var Data_Monoid_Conj = PS["Data.Monoid.Conj"];
  var Data_Monoid_Disj = PS["Data.Monoid.Disj"];
  var Data_Monoid_Dual = PS["Data.Monoid.Dual"];
  var Data_Monoid_Endo = PS["Data.Monoid.Endo"];
  var Data_Monoid_Multiplicative = PS["Data.Monoid.Multiplicative"];     
  var Foldable = function (foldMap, foldl, foldr) {
      this.foldMap = foldMap;
      this.foldl = foldl;
      this.foldr = foldr;
  };
  var foldr = function (dict) {
      return dict.foldr;
  };
  var traverse_ = function (__dict_Applicative_0) {
      return function (__dict_Foldable_1) {
          return function (f) {
              return foldr(__dict_Foldable_1)(function (_97) {
                  return Control_Apply["*>"](__dict_Applicative_0["__superclass_Prelude.Apply_0"]())(f(_97));
              })(Prelude.pure(__dict_Applicative_0)(Prelude.unit));
          };
      };
  };
  var foldl = function (dict) {
      return dict.foldl;
  };
  var sum = function (__dict_Foldable_12) {
      return function (__dict_Semiring_13) {
          return foldl(__dict_Foldable_12)(Prelude["+"](__dict_Semiring_13))(Prelude.zero(__dict_Semiring_13));
      };
  }; 
  var foldMapDefaultR = function (__dict_Foldable_20) {
      return function (__dict_Monoid_21) {
          return function (f) {
              return function (xs) {
                  return foldr(__dict_Foldable_20)(function (x) {
                      return function (acc) {
                          return Prelude["<>"](__dict_Monoid_21["__superclass_Prelude.Semigroup_0"]())(f(x))(acc);
                      };
                  })(Data_Monoid.mempty(__dict_Monoid_21))(xs);
              };
          };
      };
  };
  var foldableArray = new Foldable(function (__dict_Monoid_22) {
      return foldMapDefaultR(foldableArray)(__dict_Monoid_22);
  }, $foreign.foldlArray, $foreign.foldrArray);
  var foldMap = function (dict) {
      return dict.foldMap;
  };
  exports["Foldable"] = Foldable;
  exports["sum"] = sum;
  exports["traverse_"] = traverse_;
  exports["foldMapDefaultR"] = foldMapDefaultR;
  exports["foldMap"] = foldMap;
  exports["foldl"] = foldl;
  exports["foldr"] = foldr;
  exports["foldableArray"] = foldableArray;;
 
})(PS["Data.Foldable"] = PS["Data.Foldable"] || {});
(function(exports) {
  // Generated by psc version 0.7.6.1
  "use strict";
  var $foreign = PS["Data.Array"];
  var Prelude = PS["Prelude"];
  var Control_Alt = PS["Control.Alt"];
  var Control_Alternative = PS["Control.Alternative"];
  var Control_Lazy = PS["Control.Lazy"];
  var Control_MonadPlus = PS["Control.MonadPlus"];
  var Control_Plus = PS["Control.Plus"];
  var Data_Foldable = PS["Data.Foldable"];
  var Data_Functor_Invariant = PS["Data.Functor.Invariant"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Monoid = PS["Data.Monoid"];
  var Data_Traversable = PS["Data.Traversable"];
  var Data_Tuple = PS["Data.Tuple"];
  var Data_Maybe_Unsafe = PS["Data.Maybe.Unsafe"];
  exports["replicate"] = $foreign.replicate;;
 
})(PS["Data.Array"] = PS["Data.Array"] || {});
(function(exports) {
  // module Flare
  // jshint browser: true
  // jshint node: true

  "use strict";

  exports.renderString = function(target) {
    return function(content) {
      return function() {
        document.getElementById(target).innerHTML = content;
      };
    };
  };

  exports.appendComponent = function(target) {
    return function(el) {
      return function() {
        document.getElementById(target).appendChild(el);
      };
    };
  };

  function createComponent(inputType, elementCallback, eventType, eventListener) {
    return function(id) {
      return function(initial) {
        return function(send) {
          return function() {
            var el = elementCallback(initial);
            el.id = id;
            el.className = "flare-input-" + inputType;

            var label = document.createElement("label");
            label.htmlFor = id;
            label.appendChild(document.createTextNode(id));

            var div = document.createElement("div");
            div.className = "flare-input";
            div.appendChild(label);
            div.appendChild(el);

            el.addEventListener(eventType, function(e) {
              var value = eventListener(e.target, initial);
              send(value)();
            });

            return div;
          };
        };
      };
    };
  }

  exports.cNumber = createComponent("number",
    function(initial) {
      var input = document.createElement("input");
      input.type = "number";
      input.step = "any";
      input.value = initial.toString();
      return input;
    },
    "input",
    function(t, initial) {
      var val = parseFloat(t.value);
      return (isNaN(val) ? initial : val);
    }
  );

  exports.cInt = createComponent("int",
    function(initial) {
      var input = document.createElement("input");
      input.type = "number";
      input.step = "1";
      input.value = initial.toString();
      return input;
    },
    "input",
    function(t, initial) {
      var val = parseInt(t.value);
      return (isNaN(val) ? initial : val);
    }
  );

  exports.cString = createComponent("string",
    function(initial) {
      var input = document.createElement("input");
      input.type = "text";
      input.value = initial;
      return input;
    },
    "input",
    function(t, initial) {
      return t.value;
    }
  );

  exports.cBoolean = createComponent("boolean",
    function(initial) {
      var input = document.createElement("input");
      input.type = "checkbox";
      input.checked = initial;
      return input;
    },
    "change",
    function(t, initial) {
      return t.checked;
    }
  );

  // vim: ts=2:sw=2
 
})(PS["Flare"] = PS["Flare"] || {});
(function(exports) {
  // module Signal

  exports.constant =
    function constant(initial) {
      var subs = [];
      var val = initial;
      var sig = {
        subscribe: function(sub) {
          subs.push(sub);
          sub(val);
        },
        get: function() { return val; },
        set: function(newval) {
          val = newval;
          subs.forEach(function(sub) { sub(newval); });
        }
      };
      return sig;
    };

  exports.mapSigP =
    function mapSigP(constant) {
      return function(fun) {
        return function(sig) {
          var out = constant(fun(sig.get()));
          sig.subscribe(function(val) { out.set(fun(val)); });
          return out;
        };
      };
    };


  exports.applySigP =
    function applySigP(constant) {
      return function(fun) {
        return function(sig) {
          var out = constant(fun.get()(sig.get()));
          var produce = function() { out.set(fun.get()(sig.get())); };
          fun.subscribe(produce);
          sig.subscribe(produce);
          return out;
        };
      };
    };

  exports.runSignal =
    function runSignal(sig) {
      return function() {
        sig.subscribe(function(val) {
          val();
        });
        return {};
      };
    };
 
})(PS["Signal"] = PS["Signal"] || {});
(function(exports) {
  // Generated by psc version 0.7.6.1
  "use strict";
  var $foreign = PS["Signal"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Prelude = PS["Prelude"];
  var Data_Foldable = PS["Data.Foldable"];
  var Data_Maybe = PS["Data.Maybe"];     
  var $tilde$greater = function (__dict_Functor_0) {
      return Prelude.flip(Prelude["<$>"](__dict_Functor_0));
  };                                                 
  var mapSig = $foreign.mapSigP($foreign.constant);
  var functorSignal = new Prelude.Functor(mapSig);
  var applySig = $foreign.applySigP($foreign.constant);
  var applySignal = new Prelude.Apply(function () {
      return functorSignal;
  }, applySig);
  var applicativeSignal = new Prelude.Applicative(function () {
      return applySignal;
  }, $foreign.constant);
  exports["~>"] = $tilde$greater;
  exports["functorSignal"] = functorSignal;
  exports["applySignal"] = applySignal;
  exports["applicativeSignal"] = applicativeSignal;
  exports["runSignal"] = $foreign.runSignal;
  exports["constant"] = $foreign.constant;;
 
})(PS["Signal"] = PS["Signal"] || {});
(function(exports) {
  // module Signal.Channel

  exports.channelP =
    function channelP(constant) {
      return function(v) {
        return function() {
          return constant(v);
        };
      };
    };

  exports.sendP =
    function sendP(chan, v) {
      return function(v) {
        return function() {
          chan.set(v);
        };
      };
    };

  exports.subscribe =
    function subscribe(chan) {
      return chan;
    };
 
})(PS["Signal.Channel"] = PS["Signal.Channel"] || {});
(function(exports) {
  // Generated by psc version 0.7.6.1
  "use strict";
  var $foreign = PS["Signal.Channel"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Prelude = PS["Prelude"];
  var Signal = PS["Signal"];     
  var send = $foreign.sendP;
  var channel = $foreign.channelP(Signal.constant);
  exports["send"] = send;
  exports["channel"] = channel;
  exports["subscribe"] = $foreign.subscribe;;
 
})(PS["Signal.Channel"] = PS["Signal.Channel"] || {});
(function(exports) {
  // Generated by psc version 0.7.6.1
  "use strict";
  var $foreign = PS["Flare"];
  var Prelude = PS["Prelude"];
  var Data_Monoid = PS["Data.Monoid"];
  var Data_Foldable = PS["Data.Foldable"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var DOM = PS["DOM"];
  var DOM_Node_Types = PS["DOM.Node.Types"];
  var Signal = PS["Signal"];
  var Signal_Channel = PS["Signal.Channel"];     
  var Flare = (function () {
      function Flare(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
      };
      Flare.create = function (value0) {
          return function (value1) {
              return new Flare(value0, value1);
          };
      };
      return Flare;
  })();
  var UI = function (x) {
      return x;
  };
  var runFlare = function (__dict_Show_2) {
      return function (controls) {
          return function (target) {
              return function (_6) {
                  return function __do() {
                      var _5 = _6();
                      Data_Foldable.traverse_(Control_Monad_Eff.applicativeEff)(Data_Foldable.foldableArray)($foreign.appendComponent(controls))(_5.value0)();
                      return Signal.runSignal(Signal["~>"](Signal.functorSignal)(_5.value1)(Prelude[">>>"](Prelude.semigroupoidFn)(Prelude.show(__dict_Show_2))($foreign.renderString(target))))();
                  };
              };
          };
      };
  };
  var functorUI = new Prelude.Functor(function (f) {
      return function (_7) {
          return UI(function __do() {
              var _0 = _7();
              return Prelude["return"](Control_Monad_Eff.applicativeEff)(new Flare(_0.value0, Prelude.map(Signal.functorSignal)(f)(_0.value1)))();
          });
      };
  });
  var createUI = function (createComp) {
      return function (id) {
          return function ($$default) {
              return UI(function __do() {
                  var _4 = Signal_Channel.channel($$default)();
                  var _3 = createComp(id)($$default)(Signal_Channel.send(_4))();
                  return (function () {
                      var signal = Signal_Channel.subscribe(_4);
                      return Prelude["return"](Control_Monad_Eff.applicativeEff)(new Flare([ _3 ], signal));
                  })()();
              });
          };
      };
  };
  var $$int = createUI($foreign.cInt);
  var int_ = $$int("");
  var number = createUI($foreign.cNumber);
  var number_ = number("");
  var string = createUI($foreign.cString);
  var string_ = string("");
  var $$boolean = createUI($foreign.cBoolean);
  var applyUI = new Prelude.Apply(function () {
      return functorUI;
  }, function (_8) {
      return function (_9) {
          return UI(function __do() {
              var _2 = _8();
              var _1 = _9();
              return Prelude["return"](Control_Monad_Eff.applicativeEff)(new Flare(Prelude["<>"](Prelude.semigroupArray)(_2.value0)(_1.value0), Prelude.apply(Signal.applySignal)(_2.value1)(_1.value1)))();
          });
      };
  });
  var semigroupUI = function (__dict_Semigroup_1) {
      return new Prelude.Semigroup(Control_Apply.lift2(applyUI)(Prelude.append(__dict_Semigroup_1)));
  };
  var applicativeUI = new Prelude.Applicative(function () {
      return applyUI;
  }, function (x) {
      return UI(Prelude["return"](Control_Monad_Eff.applicativeEff)(new Flare([  ], Prelude.pure(Signal.applicativeSignal)(x))));
  });
  var semiringUI = function (__dict_Semiring_0) {
      return new Prelude.Semiring(Control_Apply.lift2(applyUI)(Prelude.add(__dict_Semiring_0)), Control_Apply.lift2(applyUI)(Prelude.mul(__dict_Semiring_0)), Prelude.pure(applicativeUI)(Prelude.one(__dict_Semiring_0)), Prelude.pure(applicativeUI)(Prelude.zero(__dict_Semiring_0)));
  };
  var moduloSemiringUI = function (__dict_ModuloSemiring_6) {
      return new Prelude.ModuloSemiring(function () {
          return semiringUI(__dict_ModuloSemiring_6["__superclass_Prelude.Semiring_0"]());
      }, Control_Apply.lift2(applyUI)(Prelude.div(__dict_ModuloSemiring_6)), Control_Apply.lift2(applyUI)(Prelude.mod(__dict_ModuloSemiring_6)));
  };
  exports["runFlare"] = runFlare;
  exports["boolean"] = $$boolean;
  exports["string_"] = string_;
  exports["string"] = string;
  exports["int_"] = int_;
  exports["number_"] = number_;
  exports["number"] = number;
  exports["functorUI"] = functorUI;
  exports["applyUI"] = applyUI;
  exports["applicativeUI"] = applicativeUI;
  exports["semigroupUI"] = semigroupUI;
  exports["semiringUI"] = semiringUI;
  exports["moduloSemiringUI"] = moduloSemiringUI;;
 
})(PS["Flare"] = PS["Flare"] || {});
(function(exports) {
  /* global exports */
  "use strict";

  exports.pow = function (n) {
    return function (p) {
      return Math.pow(n, p);
    };
  };                         
 
})(PS["Math"] = PS["Math"] || {});
(function(exports) {
  // Generated by psc version 0.7.6.1
  "use strict";
  var $foreign = PS["Math"];
  exports["pow"] = $foreign.pow;;
 
})(PS["Math"] = PS["Math"] || {});
(function(exports) {
  // Generated by psc version 0.7.6.1
  "use strict";
  var Prelude = PS["Prelude"];
  var Data_Array = PS["Data.Array"];
  var Data_Foldable = PS["Data.Foldable"];
  var Flare = PS["Flare"];
  var $$Math = PS["Math"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];     
  var sumUI = Data_Foldable.sum(Data_Foldable.foldableArray)(Flare.semiringUI(Prelude.semiringInt))(Prelude["<$>"](Prelude.functorArray)(Flare.int_)([ 2, 13, 27, 42 ]));
  var replicateUI = Prelude["<*>"](Flare.applyUI)(Prelude["<$>"](Flare.functorUI)(Data_Array.replicate)(Flare.int_(4)))(Flare.string_("foo"));
  var powUI = Prelude["<*>"](Flare.applyUI)(Prelude["<$>"](Flare.functorUI)($$Math.pow)(Flare.number("Base")(2.0)))(Flare.number("Exponent")(10.0));
  var greetUI = (function () {
      var greet = function (name) {
          return function (french) {
              if (french) {
                  return "Salut " + (name + "!");
              };
              if (Prelude.otherwise) {
                  return "Hello " + (name + "!");
              };
              throw new Error("Failed pattern match at Test.Main line 16, column 11 - line 19, column 1: " + [ name.constructor.name, french.constructor.name ]);
          };
      };
      return Prelude["<*>"](Flare.applyUI)(Prelude["<$>"](Flare.functorUI)(greet)(Flare.string("Name")("Pierre")))(Flare["boolean"]("French greeting")(true));
  })();
  var divUI = Prelude["/"](Flare.moduloSemiringUI(Prelude.moduloSemiringNumber))(Flare.number_(5.0))(Flare.number_(2.0));
  var concatUI = Prelude["<>"](Flare.semigroupUI(Prelude.semigroupString))(Flare.string_("Hello"))(Prelude["<>"](Flare.semigroupUI(Prelude.semigroupString))(Prelude.pure(Flare.applicativeUI)(" "))(Flare.string_("World")));
  var main = function __do() {
      Flare.runFlare(Prelude.showNumber)("controls1")("target1")(powUI)();
      Flare.runFlare(Prelude.showString)("controls2")("target2")(greetUI)();
      Flare.runFlare(Prelude.showString)("controls3")("target3")(concatUI)();
      Flare.runFlare(Prelude.showInt)("controls4")("target4")(sumUI)();
      Flare.runFlare(Prelude.showNumber)("controls5")("target5")(divUI)();
      return Flare.runFlare(Prelude.showArray(Prelude.showString))("controls6")("target6")(replicateUI)();
  };
  exports["main"] = main;
  exports["replicateUI"] = replicateUI;
  exports["divUI"] = divUI;
  exports["sumUI"] = sumUI;
  exports["concatUI"] = concatUI;
  exports["greetUI"] = greetUI;
  exports["powUI"] = powUI;;
 
})(PS["Test.Main"] = PS["Test.Main"] || {});

PS["Test.Main"].main();