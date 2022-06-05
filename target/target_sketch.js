// Transcrypt'ed from Python, 2022-06-05 01:47:37
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, all, any, assert, bool, bytearray, bytes, callable, chr, deepcopy, delattr, dict, dir, divmod, enumerate, getattr, hasattr, isinstance, issubclass, len, list, object, ord, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, set, setattr, sorted, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import {ArestaReta, GeometricForm, StopError} from './core.js';
import {ADD, ALT, ARROW, AUDIO, AUTO, AXES, BACKSPACE, BASELINE, BEVEL, BEZIER, BLEND, BLUR, BOLD, BOLDITALIC, BOTTOM, BURN, CENTER, CHORD, CLAMP, CLOSE, CONTROL, CORNER, CORNERS, CROSS, CURVE, DARKEST, DEGREES, DEG_TO_RAD, DELETE, DIFFERENCE, DILATE, DODGE, DOWN_ARROW, ENTER, ERODE, ESCAPE, EXCLUSION, FILL, GRAY, GRID, HALF_PI, HAND, HARD_LIGHT, HSB, HSL, IMAGE, IMMEDIATE, INVERT, ITALIC, LANDSCAPE, LEFT, LEFT_ARROW, LIGHTEST, LINEAR, LINES, LINE_LOOP, LINE_STRIP, MIRROR, MITER, MOVE, MULTIPLY, NEAREST, NORMAL, OPAQUE, OPEN, OPTION, OVERLAY, P2D, PI, PIE, POINTS, PORTRAIT, POSTERIZE, PROJECT, PVector, QUADRATIC, QUADS, QUAD_STRIP, QUARTER_PI, RADIANS, RADIUS, RAD_TO_DEG, REPEAT, REPLACE, RETURN, RGB, RIGHT, RIGHT_ARROW, ROUND, SCREEN, SHIFT, SOFT_LIGHT, SQUARE, STROKE, SUBTRACT, TAB, TAU, TEXT, TEXTURE, THRESHOLD, TOP, TRIANGLES, TRIANGLE_FAN, TRIANGLE_STRIP, TWO_PI, UP_ARROW, VIDEO, WAIT, WEBGL, _CTX_MIDDLE, _DEFAULT_FILL, _DEFAULT_LEADMULT, _DEFAULT_STROKE, _DEFAULT_TEXT_FILL, _P5_INSTANCE, abs, accelerationX, accelerationY, accelerationZ, acos, add_library, alpha, ambientLight, ambientMaterial, angleMode, append, applyMatrix, arc, arrayCopy, asin, atan, atan2, background, beginContour, beginShape, bezier, bezierDetail, bezierPoint, bezierTangent, bezierVertex, blend, blendMode, blue, boolean, box, brightness, byte, camera, ceil, changed, char, circle, color, colorMode, concat, cone, constrain, copy, cos, createA, createAudio, createButton, createCamera, createCanvas, createCapture, createCheckbox, createColorPicker, createDiv, createElement, createFileInput, createGraphics, createImage, createImg, createInput, createNumberDict, createP, createRadio, createSelect, createShader, createSlider, createSpan, createStringDict, createVector, createVideo, createWriter, cursor, curve, curveDetail, curvePoint, curveTangent, curveTightness, curveVertex, cylinder, day, debugMode, degrees, deviceOrientation, directionalLight, disableFriendlyErrors, displayDensity, displayHeight, displayWidth, dist, ellipse, ellipseMode, ellipsoid, endContour, endShape, erase, exp, fill, filter, float, floor, focused, frameCount, frameRate, fullscreen, getURL, getURLParams, getURLPath, global_p5_injection, green, height, hex, hour, httpDo, httpGet, httpPost, hue, image, imageMode, image_proxy, input, int, join, key, keyCode, keyIsPressed, lerp, lerpColor, lightness, lights, line, loadBytes, loadFont, loadImage, loadJSON, loadModel, loadPixels, loadShader, loadStrings, loadTable, loadXML, log, logOnloaded, loop, mag, map, match, matchAll, max, millis, min, minute, model, month, mouseButton, mouseIsPressed, mouseX, mouseY, nf, nfc, nfp, nfs, noCanvas, noCursor, noDebugMode, noErase, noFill, noLoop, noSmooth, noStroke, noTint, noise, noiseDetail, noiseSeed, norm, normalMaterial, orbitControl, ortho, pAccelerationX, pAccelerationY, pAccelerationZ, pRotationX, pRotationY, pRotationZ, perspective, pixelDensity, pixels, plane, pmouseX, pmouseY, point, pointLight, popMatrix, popStyle, pow, pre_draw, push, pushMatrix, pushStyle, pwinMouseX, pwinMouseY, py_clear, py_get, py_pop, py_set, py_sort, py_split, quad, quadraticVertex, radians, random, randomGaussian, randomSeed, rect, rectMode, red, redraw, remove, removeElements, resetMatrix, resetShader, resizeCanvas, reverse, rotate, rotateX, rotateY, rotateZ, rotationX, rotationY, rotationZ, round, saturation, save, saveCanvas, saveFrames, saveJSON, saveStrings, saveTable, scale, second, select, selectAll, setAttributes, setCamera, setMoveThreshold, setShakeThreshold, shader, shearX, shearY, shininess, shorten, shuffle, sin, size, smooth, specularMaterial, sphere, splice, splitTokens, sq, sqrt, square, start_p5, str, stroke, strokeCap, strokeJoin, strokeWeight, subset, tan, text, textAlign, textAscent, textDescent, textFont, textLeading, textSize, textStyle, textWidth, texture, textureMode, textureWrap, tint, torus, touches, translate, triangle, trim, turnAxis, unchar, unhex, updatePixels, vertex, width, winMouseX, winMouseY, windowHeight, windowWidth, year} from './pyp5js.js';
import {} from './pyp5js.js';
var __name__ = '__main__';
export var preload = function () {
	if (arguments.length) {
		var __ilastarg0__ = arguments.length - 1;
		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
			var __allkwargs0__ = arguments [__ilastarg0__--];
			for (var __attrib0__ in __allkwargs0__) {
			}
		}
	}
	else {
	}
	// pass;
};
export var setup = function () {
	if (arguments.length) {
		var __ilastarg0__ = arguments.length - 1;
		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
			var __allkwargs0__ = arguments [__ilastarg0__--];
			for (var __attrib0__ in __allkwargs0__) {
			}
		}
	}
	else {
	}
	// pass;
};
export var draw = function () {
	if (arguments.length) {
		var __ilastarg0__ = arguments.length - 1;
		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
			var __allkwargs0__ = arguments [__ilastarg0__--];
			for (var __attrib0__ in __allkwargs0__) {
			}
		}
	}
	else {
	}
	// pass;
};
export var deviceMoved = null;
export var deviceTurned = null;
export var deviceShaken = null;
export var keyPressed = null;
export var keyReleased = null;
export var keyTyped = null;
export var mouseMoved = null;
export var mouseDragged = null;
export var mousePressed = null;
export var mouseReleased = null;
export var mouseClicked = null;
export var doubleClicked = null;
export var mouseWheel = null;
export var touchStarted = null;
export var touchMoved = null;
export var touchEnded = null;
export var windowResized = null;
export var keyIsDown = null;
export var index = null;
export var points = list ();
export var last_points = list ();
export var geometric = list ();
export var geometrics = list ();
export var arestas = list ();
export var list_of_points = list ();
export var color_picker = null;
export var load_points = function (my_points) {
	if (arguments.length) {
		var __ilastarg0__ = arguments.length - 1;
		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
			var __allkwargs0__ = arguments [__ilastarg0__--];
			for (var __attrib0__ in __allkwargs0__) {
				switch (__attrib0__) {
					case 'my_points': var my_points = __allkwargs0__ [__attrib0__]; break;
				}
			}
		}
	}
	else {
	}
	points = my_points;
	desenha ();
	geometrics.append (geometric);
	geometric = list ();
	points = list ();
};
var setup = function () {
	if (arguments.length) {
		var __ilastarg0__ = arguments.length - 1;
		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
			var __allkwargs0__ = arguments [__ilastarg0__--];
			for (var __attrib0__ in __allkwargs0__) {
			}
		}
	}
	else {
	}
	createCanvas (1024, 1024);
	background (0);
	frameRate (12);
	color_picker = createColorPicker ('#F412F0');
};
export var save_points = function () {
	if (arguments.length) {
		var __ilastarg0__ = arguments.length - 1;
		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
			var __allkwargs0__ = arguments [__ilastarg0__--];
			for (var __attrib0__ in __allkwargs0__) {
			}
		}
	}
	else {
	}
	var list_of_points = list ();
	for (var geometric of geometrics) {
		var points = list ();
		for (var geo of geometric) {
			for (var aresta of geo.export () ['arestas']) {
				points.append (aresta.start);
			}
		}
		list_of_points.append (points);
	}
	return list_of_points;
};
var keyReleased = function () {
	if (arguments.length) {
		var __ilastarg0__ = arguments.length - 1;
		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
			var __allkwargs0__ = arguments [__ilastarg0__--];
			for (var __attrib0__ in __allkwargs0__) {
			}
		}
	}
	else {
	}
	if (key == 'l') {
		for (var p of list_of_points) {
			load_points (p);
		}
	}
	if (key == 's') {
		var s = save_points ();
		list_of_points = s;
	}
	if (key == 'p') {
		print (geometrics);
		print (arestas);
	}
	if (key == 'a') {
		background (0);
		desenha ();
		last_points = list ();
	}
	if (key == 'z') {
		if (len (last_points) > 0) {
			last_points.py_pop ();
		}
		else {
			points.py_pop ();
			geometrics.py_pop ();
			arestas.py_pop ();
		}
		background (0);
	}
	if (key == 'd') {
		geometrics.append (geometric);
		geometric = list ();
		points = list ();
		last_points = list ();
	}
	if (key == '-') {
		geometrics = list ();
		geometric = list ();
		points = list ();
		arestas = list ();
		last_points = list ();
		background (0);
	}
	if (key == 0) {
		index = 0;
	}
	if (key == 1) {
		index = 1;
	}
	if (key == 2) {
		index = 2;
	}
	if (key == 3) {
		index = 3;
	}
	if (key == 4) {
		index = null;
	}
};
var draw = function () {
	if (arguments.length) {
		var __ilastarg0__ = arguments.length - 1;
		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
			var __allkwargs0__ = arguments [__ilastarg0__--];
			for (var __attrib0__ in __allkwargs0__) {
			}
		}
	}
	else {
	}
	if (len (geometrics) > 0) {
		background (0);
		for (var geometric of geometrics) {
			for (var geo of geometric) {
				geo.display (stroke_custom, line, index);
			}
		}
		for (var aresta of arestas) {
			for (var a of aresta) {
				a.display (stroke_custom, line, 0);
			}
		}
	}
	var size = len (last_points);
	if (size > 1) {
		stroke ('red');
		for (var last = 0; last < size - 1; last++) {
			print (last_points);
			line (last_points [last] [0], last_points [last] [1], last_points [last + 1] [0], last_points [last + 1] [1]);
		}
	}
};
var mouseClicked = function () {
	if (arguments.length) {
		var __ilastarg0__ = arguments.length - 1;
		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
			var __allkwargs0__ = arguments [__ilastarg0__--];
			for (var __attrib0__ in __allkwargs0__) {
			}
		}
	}
	else {
	}
	var px = mouseX;
	var py = mouseY;
	points.append (tuple ([px, py]));
	last_points.append (tuple ([px, py]));
};
export var desenha = function () {
	if (arguments.length) {
		var __ilastarg0__ = arguments.length - 1;
		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
			var __allkwargs0__ = arguments [__ilastarg0__--];
			for (var __attrib0__ in __allkwargs0__) {
			}
		}
	}
	else {
	}
	var minimal = 10;
	var tax = 0.1;
	var arestas_draw = list ();
	var x = points [0] [0];
	var y = points [0] [1];
	var dist = tuple ([x, y]);
	for (var [key, value] of enumerate (points)) {
		if (key + 1 > len (points) - 1) {
			var dist_t = tuple ([x, y]);
		}
		else {
			var dist_t = tuple ([points [key + 1] [0], points [key + 1] [1]]);
		}
		var ares = ArestaReta (dist, dist_t, minimal, tax);
		arestas_draw.append (ares);
		var dist = dist_t;
	}
	arestas.append (arestas_draw);
	var q1 = GeometricForm (arestas_draw, minimal, tax, __kwargtrans__ ({points: len (points)}));
	q1.display (stroke_custom, line);
	try {
		tuple ([q1.spiral ()]);
	}
	catch (__except0__) {
		if (isinstance (__except0__, StopError)) {
			// pass;
		}
		else {
			throw __except0__;
		}
	}
	geometric.append (q1);
	last_points = [];
};
export var stroke_custom = function (color) {
	if (arguments.length) {
		var __ilastarg0__ = arguments.length - 1;
		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
			var __allkwargs0__ = arguments [__ilastarg0__--];
			for (var __attrib0__ in __allkwargs0__) {
				switch (__attrib0__) {
					case 'color': var color = __allkwargs0__ [__attrib0__]; break;
				}
			}
		}
	}
	else {
	}
	stroke (color_picker.color ());
};
export var event_functions = dict ({'deviceMoved': deviceMoved, 'deviceTurned': deviceTurned, 'deviceShaken': deviceShaken, 'keyPressed': keyPressed, 'keyReleased': keyReleased, 'keyTyped': keyTyped, 'mouseMoved': mouseMoved, 'mouseDragged': mouseDragged, 'mousePressed': mousePressed, 'mouseReleased': mouseReleased, 'mouseClicked': mouseClicked, 'doubleClicked': doubleClicked, 'mouseWheel': mouseWheel, 'touchStarted': touchStarted, 'touchMoved': touchMoved, 'touchEnded': touchEnded, 'windowResized': windowResized, 'keyIsDown': keyIsDown});
start_p5 (preload, setup, draw, event_functions);

//# sourceMappingURL=target_sketch.map