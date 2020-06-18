from pyp5js import *
from spiral import ArestaReta, GeometricForm, StopError

points = list()
last_points = list()
geometric = list()
list_points = list()


def setup():
    global geometric
    minimal = 10
    tax = 4
    createCanvas(1024, 1024)
    background(160)
    # frameRate(30)


def keyReleased():
    global geometric
    global points
    global last_points
    global list_points
    if key == 'a':
        desenha(points)
        list_points.append(points[:])
        points = list()
        # geometric = list()
        last_points = list()
    if key == 'z':
        size = len(last_points)
        if size > 1:
            stroke(160)
            line(last_points[size - 2][0], last_points[size - 2][1],
                 last_points[size - 1][0], last_points[size - 1][1])
            line(last_points[size - 2][0], last_points[size - 2][1],
                 last_points[size - 1][0], last_points[size - 1][1])
            line(last_points[size - 2][0], last_points[size - 2][1],
                 last_points[size - 1][0], last_points[size - 1][1])
            line(last_points[size - 2][0], last_points[size - 2][1],
                 last_points[size - 1][0], last_points[size - 1][1])
            line(last_points[size - 2][0], last_points[size - 2][1],
                 last_points[size - 1][0], last_points[size - 1][1])
            line(last_points[size - 2][0], last_points[size - 2][1],
                 last_points[size - 1][0], last_points[size - 1][1])
            last_points.pop()
        points.pop()
    if key == 'r':
        print(list_points)
        for po in list_points:
            desenha(po)
    if key == 's':
        geometric = list()
        points = list()
        last_points = list()
        background(160)


def draw():
    global geometric
    if len(geometric) > 1:
        for aresta in geometric.pop(0):
            stroke('black')
            line(aresta.x1, aresta.y1, aresta.x2, aresta.y2)


def mouseClicked():
    global points
    global last_points
    px = mouseX
    py = mouseY
    points.append((px, py))
    last_points.append((px, py))
    size = len(last_points)
    if size > 1:
        stroke('red')
        line(last_points[size - 2][0], last_points[size - 2][1],
             last_points[size - 1][0], last_points[size - 1][1])


def desenha(points):
    global geometric
    minimal = 10
    tax = 4
    arestas = list()
    x = points[0][0]
    y = points[0][1]
    dist = (x, y)
    for key, value in enumerate(points):
        if key + 1 > len(points) - 1:
            dist_t = (x, y)
        else:
            dist_t = (points[key+1][0], points[key+1][1])
        arestas.append(ArestaReta(dist, dist_t, minimal, tax))
        dist = dist_t
    q1 = GeometricForm(arestas, minimal, tax)
    while 1:
        try:
            geometric.append(q1.arestas)
            q1 = q1.newForm()
        except StopError:
            break
