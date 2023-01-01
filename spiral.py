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
curvature = 10


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
    global curvature
    if key == '+':
        curvature = curvature +10
    if key == '-':
        curvature = curvature -10
    if key == 's':
        save_points()
    if key == 'p':
        printar()
    if key == 'z':
        roll_back()
    if key == 'd':
        desenhar()
    if key == '*':
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

def curve(x1,x2,x3,x4):
    noFill()
    #bezier(x1, x2, x1+x2/2, x1+x2/2, x3+x4/2, x3+x4/2, x3, x4)
    beginShape()
    curveVertex(x1, x2)
    curveVertex(x1, x2)
    curveVertex((x1+x3)/2, )
    curveVertex(x3, x4)
    curveVertex(x3, x4)
    endShape()

def bezierCurve(x1,x2,x3,x4):
    global curvature
    noFill()
    angle = -1 if x1 -x3 > 0 else 1
    angle2 = -1 if x2 -x4 > 0 else 1
    bezier(x1, x2, ((x1+x3)/2) + curvature * angle , ((x2+x4)/2) + curvature * angle2, ((x1+x3)/2) + curvature * angle, ((x2+x4)/2) + curvature * angle2, x3, x4)

def draw():
    global index
    global last_points
    global extensions
    background(0)

    if len(geometrics) > 0:
        for geometric in geometrics:
            for geo in geometric:
                if extensions["b"].enable:
                    geo.display(stroke_custom, bezierCurve, index)
                else:
                    geo.display(stroke_custom, line, index)
        for aresta in arestas:
            for a in aresta:
                if extensions["b"].enable:
                    a.display(stroke_custom, bezierCurve, 0)
                else:
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
