from pyp5js import *
from spiral_base import ArestaReta, GeometricForm, StopError
index = None
points = list()
last_points = list()
geometric = list()
geometrics = list()
arestas = list()

def setup():
    createCanvas(1024, 1024)
    background(160)
    frameRate(12)


def keyReleased():
    global geometric
    global geometrics
    global points
    global last_points
    global index
    global arestas
    
    if key == 'p':
        print(geometrics)
        print(arestas)
    if key == 'a':
        background(160)
        desenha()
        last_points = list()
    if key == 'z':
        if len(last_points) > 0:
            last_points.pop()
        else:
            points.pop()
            geometrics.pop()
            arestas.pop()
        background(160)
    if key == 'd':
        geometrics.append(geometric)
        geometric = list()
        points = list()
        last_points = list()
    if key == '-':
        geometrics = list()
        geometric = list()
        points = list()
        arestas = list()
        last_points = list()
        background(160)
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
       
def draw():
    global index
    global last_points
    if len(geometrics) > 0:
        background(160)
        for geometric in geometrics:
            for geo in geometric:
                geo.display(stroke, line, index)
        for aresta in arestas:
            for a in aresta:
                a.display(stroke, line, 0)
    size = len(last_points)
    if size > 1:
        stroke('red')
        for last in range(size-1):
            print(last_points)
            line(last_points[last][0], last_points[last][1],
                last_points[last + 1][0], last_points[last + 1][1])

def mouseClicked():
    global points
    global last_points
    px = mouseX
    py = mouseY
    points.append((px, py))
    last_points.append((px, py))
    


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
    q1.display(stroke, line)
    try:
        q1.spiral(),
    except StopError:
        pass
    geometric.append(q1)
    last_points = []