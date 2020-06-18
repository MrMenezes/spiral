// Transcrypt'ed from Python, 2020-06-17 21:01:20
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import {atan2, cos, pi, radians, sin, sqrt} from './math.js';
var __name__ = 'spiral';
export var StopError =  __class__ ('StopError', [Exception], {
	__module__: __name__,
});
export var GeometricForm =  __class__ ('GeometricForm', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, arestas, MINIMAL, tax) {
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
					}
				}
			}
		}
		else {
		}
		self.arestas = arestas;
		self.__minimal__ = MINIMAL;
		self.__tax__ = tax;
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
	get __init__ () {return __get__ (this, function (self, start, end, MINIMAL, tax) {
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
					}
				}
			}
		}
		else {
		}
		self.x1 = start [0];
		self.y1 = start [1];
		self.x2 = end [0];
		self.y2 = end [1];
		self.tax = tax;
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
		var x = self.x2;
		var y = self.y2;
		for (var i = 0; i < self.tax; i++) {
			var x = (self.x1 + x) / 2;
			var y = (self.y1 + y) / 2;
		}
		return tuple ([x, y]);
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

//# sourceMappingURL=spiral.map