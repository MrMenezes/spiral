"""
pyp5js
Copyright (C) 2019-2021 Bernardo Fontes

This program is free software; you can redistribute it and/or
modify it under the terms of the GNU Lesser General Public
License as published by the Free Software Foundation; either
version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
"""
from pyp5js import *

def preload():
    pass

def setup():
    pass

def draw():
    pass

deviceMoved = None
deviceTurned = None
deviceShaken = None
keyPressed = None
keyReleased = None
keyTyped = None
mouseMoved = None
mouseDragged = None
mousePressed = None
mouseReleased = None
mouseClicked = None
doubleClicked = None
mouseWheel = None
touchStarted = None
touchMoved = None
touchEnded = None
windowResized = None
keyIsDown = None


from pyp5js import *
from core import ArestaReta, GeometricForm, StopError
from grid import GridExtension as Grid
from bezier import BezierExtension as Bezier

index = None
points = list()
last_points = list()
geometric = list()
geometrics = list()
beziers = list()
arestas = list()
list_of_points = list()
color_picker = None
file_input = None
extensions = {}


def load_points(my_points):
    global points
    global geometric
    global geometrics
    global beziers
    points = my_points
    desenha()
    geometrics.append(geometric)
    geometric = list()
    points = list()

def extension_run(key):
    global extensions
    extensions[key].run()

def setup():
    global color_picker
    global file_input
    global extensions

    grid = Grid(50, stroke, line)
    extensions[grid.shortcut] = grid
    
    bezier = Bezier(desenha_bezier)
    extensions[bezier.shortcut] = bezier

    color_picker = createColorPicker("#F412F0")
    file_input = createFileInput(loadFile, "true")
    file_input.position(0, 50)
    createCanvas(displayWidth-50, displayHeight)
    background(0)
    frameRate(12)
    for ext in extensions.items():
        ext[1].setup()

def save_points():
    global geometrics
    global color_picker
    global list_of_points
    list_of_points = list()
    for geometric in geometrics:
        points = list()
        for geo in geometric:
            for aresta in geo.export()["arestas"]:
                points.append(aresta.start)
        list_of_points.append(points)
    obj = dict()
    obj["points"] = list_of_points
    obj["color"] = color_picker.color()["levels"]
    saveJSON(obj, 'spiral.json', True) 

def loadFile(file):
    global list_of_points
    global color_picker
    list_of_points = file.data["points"]
    color_picker = createColorPicker(file.data["color"])
    for p in list_of_points:
        load_points(p)

def desenhar():
    global geometric
    global geometrics
    global points
    global last_points
    background(0)
    desenha()
    geometrics.append(geometric)
    geometric = list()
    points = list()
    last_points = list()

def roll_back():
    global geometric
    global geometrics
    global points
    global arestas
    global last_points
    if len(last_points) > 0:
        last_points.pop()
        points.pop()
    else:
        points.pop()
        geometrics.pop()
        arestas.pop()
    background(0)

def printar():
    global geometrics
    global arestas
    print(geometrics)
    print(arestas)

def keyReleased():
    global geometric
    global geometrics
    global points
    global last_points
    global index
    global arestas
    global list_of_points
    global color_picker
    global extensions
    if key == 's':
        save_points()
    if key == 'p':
        printar()
    if key == 'z':
        roll_back()
    if key == 'd':
        desenhar()
    if key == '-':
        geometrics = list()
        geometric = list()
        points = list()
        arestas = list()
        last_points = list()
        background(0)
    if key ==0:
        index = 0
    if key ==1:
        index = 1
    if key ==2:
        index = 2
    if key ==3:
        index = 3
    if key == 4:
        index = None
    
    if extensions.get(key) is not None:
        extensions[key].run()
       
def draw():
    global index
    global last_points
    global extensions
    background(0)

    if len(geometrics) > 0:
        for geometric in geometrics:
            for geo in geometric:
                geo.display(stroke_custom, line, index)
        for aresta in arestas:
            for a in aresta:
                a.display(stroke_custom, line, 0)

    for ext in extensions.items():
        ext[1].draw()

    size = len(last_points)

    if size > 0:
        stroke("red")
        if extensions["b"].enable:
            stroke('blue')
        ellipse(last_points[0][0], last_points[0][1], 10, 10)
    if size > 1:
        stroke("red")
        if extensions["b"].enable:
            stroke('blue')
        for last in range(size-1):
            line(last_points[last][0], last_points[last][1],
                last_points[last + 1][0], last_points[last + 1][1])

    if size == 4:
        if extensions["b"].enable:
            stroke('purple')
            bezier(last_points[last][0], last_points[last][1],
                last_points[last + 1][0], last_points[last + 1][1],
                last_points[last + 2][0], last_points[last + 2][1],
                last_points[last + 3][0], last_points[last + 3][1])


  


def mouseClicked():
    global points
    global last_points
    global extensions
    px = mouseX
    py = mouseY

    gird = extensions["g"]  # grid
    (px, py) = gird.get_grid(px, py)
    
    if px < 0:
        return
    points.append((px, py))
    last_points.append((px, py))
    


def desenha_bezier():
    global points
    global geometric
    global arestas
    global last_points
    minimal = 10
    tax = 0.1
    arestas_draw = list()
    x = points[0][0]
    y = points[0][1]
    dist = (x, y)
    if len(points) < 3:
        return
    bezier( x1, y1, x2, y2, x3, y3, x4, y4 )

    for key, value in enumerate(points):
        if key + 1 > len(points) - 1:
            dist_t = (x, y)
        else:
            dist_t = (points[key+1][0], points[key+1][1])
        ares = ArestaReta(dist, dist_t, minimal, tax)
        arestas_draw.append(ares)
        dist = dist_t
    
    arestas.append(arestas_draw)
    q1 = GeometricForm(arestas_draw, minimal, tax, points=len(points))
    q1.display(stroke_custom, line)
    try:
        q1.spiral(),
    except StopError:
        pass
    geometric.append(q1)
    last_points = list()



def desenha():
    global points
    global geometric
    global arestas
    global last_points
    minimal = 10
    tax = 0.1
    arestas_draw = list()
    x = points[0][0]
    y = points[0][1]
    dist = (x, y)
    for key, value in enumerate(points):
        if key + 1 > len(points) - 1:
            dist_t = (x, y)
        else:
            dist_t = (points[key+1][0], points[key+1][1])
        ares = ArestaReta(dist, dist_t, minimal, tax)
        arestas_draw.append(ares)
        dist = dist_t
    
    arestas.append(arestas_draw)
    q1 = GeometricForm(arestas_draw, minimal, tax, points=len(points))
    q1.display(stroke_custom, line)
    try:
        q1.spiral(),
    except StopError:
        pass
    geometric.append(q1)
    last_points = list()

def stroke_custom(color):
    global color_picker
    stroke(color_picker.color())



event_functions = {
    "deviceMoved": deviceMoved,
    "deviceTurned": deviceTurned,
    "deviceShaken": deviceShaken,
    "keyPressed": keyPressed,
    "keyReleased": keyReleased,
    "keyTyped": keyTyped,
    "mouseMoved": mouseMoved,
    "mouseDragged": mouseDragged,
    "mousePressed": mousePressed,
    "mouseReleased": mouseReleased,
    "mouseClicked": mouseClicked,
    "doubleClicked": doubleClicked,
    "mouseWheel": mouseWheel,
    "touchStarted": touchStarted,
    "touchMoved": touchMoved,
    "touchEnded": touchEnded,
    "windowResized": windowResized,
    "keyIsDown": keyIsDown,
}

start_p5(preload, setup, draw, event_functions)