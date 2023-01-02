// Transcrypt'ed from Python, 2023-01-02 10:38:23
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import {atan2, cos, pi, radians, sin, sqrt} from './math.js';
var __name__ = 'core';
export var StopError =  __class__ ('StopError', [Exception], {
	__module__: __name__,
});
export var GeometricForm =  __class__ ('GeometricForm', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, arestas, MINIMAL, tax, points) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'arestas': var arestas = __allkwargs0__ [__attrib0__]; break;
						case 'MINIMAL': var MINIMAL = __allkwargs0__ [__attrib0__]; break;
						case 'tax': var tax = __allkwargs0__ [__attrib0__]; break;
						case 'points': var points = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.arestas = arestas;
		self.__minimal__ = MINIMAL;
		self.__tax__ = tax;
		self.points = points;
		self.sub_geometric = list ();
	});},
	get newForm () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var arestas = list ();
		var x = self.arestas [len (self.arestas) - 1].x2;
		var y = self.arestas [len (self.arestas) - 1].y2;
		var dist = tuple ([x, y]);
		for (var [key, value] of enumerate (self.arestas)) {
			if (key + 1 > len (self.arestas) - 1) {
				var final = arestas [0];
			}
			else {
				var final = self.arestas [key + 1];
			}
			var dist_t = final.dist ();
			arestas.append (ArestaReta (dist, dist_t, self.__minimal__, self.__tax__));
			var dist = dist_t;
		}
		return GeometricForm (arestas, self.__minimal__, self.__tax__);
	});},
	get export () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		return dict ({'arestas': (function () {
			var __accu0__ = [];
			for (var a of self.arestas) {
				__accu0__.append (a.export ());
			}
			return __accu0__;
		}) (), 'minimal': self.__minimal__, 'tax': self.__tax__, 'points': self.points});
	});},
	get spiral () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var arestas = list ();
		var x = self.arestas [len (self.arestas) - 1].x2;
		var y = self.arestas [len (self.arestas) - 1].y2;
		var dist = tuple ([x, y]);
		for (var [key, value] of enumerate (self.arestas)) {
			if (key + 1 > len (self.arestas) - 1) {
				var final = arestas [0];
			}
			else {
				var final = self.arestas [key + 1];
			}
			var dist_t = final.dist ();
			var starts = self.arestas [key].starts ();
			arestas.append (ArestaReta (dist, dist_t, self.__minimal__, self.__tax__, __kwargtrans__ ({move_list: final.dist_move (), starts: starts})));
			var dist = dist_t;
		}
		self.sub_geometric.append (GeometricForm (arestas, self.__minimal__, self.__tax__, self.points));
		for (var sub_geo of self.sub_geometric) {
			sub_geo.spiral ();
		}
	});},
	get display () {return __get__ (this, function (self, stroke, line, index) {
		if (typeof index == 'undefined' || (index != null && index.hasOwnProperty ("__kwargtrans__"))) {;
			var index = null;
		};
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'stroke': var stroke = __allkwargs0__ [__attrib0__]; break;
						case 'line': var line = __allkwargs0__ [__attrib0__]; break;
						case 'index': var index = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		for (var aresta of self.arestas) {
			aresta.display (stroke, line, __kwargtrans__ ({index: index}));
		}
		for (var sub_geo of self.sub_geometric) {
			sub_geo.display (stroke, line, __kwargtrans__ ({index: index}));
		}
	});},
	get __str__ () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		print ('Coordenadas:\n');
		for (var aresta of self.arestas) {
			print (aresta);
		}
		return '';
	});}
});
export var ArestaReta =  __class__ ('ArestaReta', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, start, end, MINIMAL, tax, color, move_list, starts) {
		if (typeof MINIMAL == 'undefined' || (MINIMAL != null && MINIMAL.hasOwnProperty ("__kwargtrans__"))) {;
			var MINIMAL = 10;
		};
		if (typeof tax == 'undefined' || (tax != null && tax.hasOwnProperty ("__kwargtrans__"))) {;
			var tax = 0.2;
		};
		if (typeof color == 'undefined' || (color != null && color.hasOwnProperty ("__kwargtrans__"))) {;
			var color = 'BLACK';
		};
		if (typeof move_list == 'undefined' || (move_list != null && move_list.hasOwnProperty ("__kwargtrans__"))) {;
			var move_list = list ();
		};
		if (typeof starts == 'undefined' || (starts != null && starts.hasOwnProperty ("__kwargtrans__"))) {;
			var starts = list ();
		};
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'start': var start = __allkwargs0__ [__attrib0__]; break;
						case 'end': var end = __allkwargs0__ [__attrib0__]; break;
						case 'MINIMAL': var MINIMAL = __allkwargs0__ [__attrib0__]; break;
						case 'tax': var tax = __allkwargs0__ [__attrib0__]; break;
						case 'color': var color = __allkwargs0__ [__attrib0__]; break;
						case 'move_list': var move_list = __allkwargs0__ [__attrib0__]; break;
						case 'starts': var starts = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.x1 = start [0];
		self.y1 = start [1];
		self.movex = move_list [0];
		self.movey = move_list [1];
		self.x2 = end [0];
		self.y2 = end [1];
		self.endx = self.x2;
		self.endy = self.y2;
		self.tax = tax;
		self.color = color;
		self.lines = [];
		if (len (starts) == 0) {
			for (var i = 0; i < 4; i++) {
				starts.append ([self.x1, self.y1]);
			}
		}
		self.lines.append ([self.x1, self.y1, self.endx, self.endy]);
		var delta_x = (self.endx - self.movex) / 2;
		var delta_y = (self.endy - self.movey) / 2;
		self.lines.append ([starts [1] [0], starts [1] [1], self.movex - delta_x, self.movey - delta_y]);
		self.lines.append ([starts [2] [0], starts [2] [1], self.movex, self.movey]);
		self.lines.append ([starts [3] [0], starts [3] [1], self.movex + delta_x, self.movey + delta_y]);
		self.state = 0;
		if (self.distance () < MINIMAL) {
			var __except0__ = StopError ();
			__except0__.__cause__ = null;
			throw __except0__;
		}
	});},
	get dist () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var x = self.x1 + (self.x2 - self.x1) * self.tax;
		var y = self.y1 + (self.y2 - self.y1) * self.tax;
		return tuple ([x, y]);
	});},
	get export () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		return dict ({'start': tuple ([self.x1, self.y1]), 'end': tuple ([self.endx, self.endy]), 'minimal': self.__minimal__, 'tax': self.tax, 'color': self.color, 'move_list': tuple ([self.movex, self.movey])});
	});},
	get dist_move () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var x = self.x1 + (self.x2 - self.x1) * (self.tax / 2);
		var y = self.y1 + (self.y2 - self.y1) * (self.tax / 2);
		return tuple ([x, y]);
	});},
	get starts () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var first = self.dist ();
		var mid = self.dist_move ();
		var delta_x = (first [0] - mid [0]) / 2;
		var delta_y = (first [1] - mid [1]) / 2;
		var sec = tuple ([mid [0] - delta_x, mid [1] - delta_y]);
		var last = tuple ([mid [0] + delta_x, mid [1] + delta_y]);
		return [first, sec, mid, last];
	});},
	get display () {return __get__ (this, function (self, stroke, line, index) {
		if (typeof index == 'undefined' || (index != null && index.hasOwnProperty ("__kwargtrans__"))) {;
			var index = null;
		};
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'stroke': var stroke = __allkwargs0__ [__attrib0__]; break;
						case 'line': var line = __allkwargs0__ [__attrib0__]; break;
						case 'index': var index = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (index !== null) {
			line (...self.lines [index]);
			return ;
		}
		stroke (self.color);
		line (...self.line_generator ());
	});},
	get line_generator () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var data = self.lines [self.state];
		self.state = (self.state == len (self.lines) - 1 ? 0 : self.state + 1);
		return data;
	});},
	get __str__ () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		return 'X1 {} - Y1 {}, X2 {} - Y2 {}\n'.format (self.x1, self.y1, self.x2, self.y2);
	});},
	get distance () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		return sqrt (Math.pow (self.x1 - self.x2, 2) + Math.pow (self.y1 - self.y2, 2));
	});}
});
export var isObtuso = function (v1, v2) {
	if (arguments.length) {
		var __ilastarg0__ = arguments.length - 1;
		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
			var __allkwargs0__ = arguments [__ilastarg0__--];
			for (var __attrib0__ in __allkwargs0__) {
				switch (__attrib0__) {
					case 'v1': var v1 = __allkwargs0__ [__attrib0__]; break;
					case 'v2': var v2 = __allkwargs0__ [__attrib0__]; break;
				}
			}
		}
	}
	else {
	}
	var v1_theta = atan2 (v1.y1 - v1.y2, v1.x1 - v1.x2);
	var v2_theta = atan2 (v2.y2 - v2.y1, v2.x2 - v2.x1);
	var r = (v2_theta - v1_theta) * (180.0 / pi);
	var r = (r > 0 ? r : r + 360.0);
	return 360 - r;
};

//# sourceMappingURL=core.map