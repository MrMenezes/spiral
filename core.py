from math import atan2, cos, pi, radians, sin, sqrt

class StopError(Exception):
    pass

class GeometricForm():
    def __init__(self, arestas, MINIMAL, tax, points):
        self.arestas = arestas
        self.__minimal__ = MINIMAL
        self.__tax__ = tax
        self.points = points
        self.sub_geometric = list()
    
    def newForm(self):
        arestas = list()
        x = self.arestas[len(self.arestas)-1].x2
        y = self.arestas[len(self.arestas)-1].y2
        dist = (x, y)
        for key, value in enumerate(self.arestas):
            if key + 1 > len(self.arestas) - 1:
               final = arestas[0]
            else:
               final = self.arestas[key+1]
            # angle = isObtuso(value,final)
            # if angle > 180:
            #     di = final.dist()
            #     rad = radians(angle)
            #     print(di)
            #     x2 = di[0] - final.x1
            #     y2 = di[1] - final.y1
            #     print((x2,y2))
            #     x3 = x2 * cos(rad) - y2 * sin(rad)
            #     y3 = x2 * cos(rad) + y2 * sin(rad)
            #     dist_t = (x3+final.x1, y3+final.y1)
            #     arestas.append(ArestaReta(dist, dist_t,self.__minimal__,self.__tax__))
            # else:
            dist_t = final.dist()
            arestas.append(ArestaReta(dist, dist_t,self.__minimal__,self.__tax__))
            dist = dist_t
        return GeometricForm(arestas,self.__minimal__,self.__tax__)
    
    def export(self):
        return {
            "arestas": [a.export() for a in self.arestas],
            "minimal": self.__minimal__,
            "tax": self.__tax__,
            "points": self.points
            }

    def spiral(self):
        arestas = list()
        x = self.arestas[len(self.arestas)-1].x2
        y = self.arestas[len(self.arestas)-1].y2
        dist = (x, y)
        for key, value in enumerate(self.arestas):
            if key + 1 > len(self.arestas) - 1:
                final = arestas[0]
            else:
                final = self.arestas[key+1]
            dist_t = final.dist()
            starts = self.arestas[key].starts()
            arestas.append(ArestaReta(dist, dist_t,self.__minimal__,self.__tax__, move_list=final.dist_move(), starts=starts))
            dist = dist_t
        self.sub_geometric.append(GeometricForm(arestas,self.__minimal__,self.__tax__, self.points))
        for sub_geo in self.sub_geometric:
            sub_geo.spiral()

    def display(self, stroke, line, index=None):
        for aresta in self.arestas:
            aresta.display(stroke, line, index=index)
        for sub_geo in self.sub_geometric:
            sub_geo.display(stroke, line, index=index)

    def __str__(self):
        print("Coordenadas:\n")
        for aresta in self.arestas:
            print(aresta)
        return ""


class ArestaReta:
    def __init__(self, start, end, MINIMAL=10, tax=0.2, color='BLACK', move_list=list(), starts=list()):
        self.x1 = start[0]
        self.y1 = start[1]
        self.movex = move_list[0]
        self.movey = move_list[1]
        self.x2 = end[0]
        self.y2 = end[1]
        self.endx = self.x2
        self.endy = self.y2
        self.tax = tax
        self.color = color
        self.lines = []
        if len(starts) == 0:
            for i in range(4):
                starts.append([self.x1, self.y1])
        self.lines.append([self.x1, self.y1, self.endx, self.endy])
        delta_x = (self.endx - self.movex)/2
        delta_y  = (self.endy - self.movey)/2
        self.lines.append([starts[1][0], starts[1][1], self.movex - delta_x, self.movey - delta_y])
        self.lines.append([starts[2][0], starts[2][1], self.movex, self.movey])
        self.lines.append([starts[3][0], starts[3][1], self.movex + delta_x, self.movey + delta_y])
        self.state = 0
        if self.distance() < MINIMAL:
            raise StopError()
    
    def dist(self):
        # print("dist x1: {} - y1: {} - tax{}".format(self.x1, self.y1,self.tax))
        # print("dist x2: {} - y2: {} - tax{}".format(self.x2, self.y2,self.tax))
        x = self.x1 + ((self.x2-self.x1) * self.tax)
        y = self.y1 + ((self.y2-self.y1) * self.tax)
        # print("dist x: {} - y: {}".format(x, y))
        return (x, y)

    def export(self):
        return {
            "start": (self.x1,self.y1),
            "end": (self.endx, self.endy),
            "minimal": self.__minimal__,
            "tax": self.tax,
            "color": self.color,
            "move_list": (self.movex, self.movey),
        }
        
    def dist_move(self):
        # print("Meio x1: {} - y1: {} - tax{}".format(self.x1, self.x2,self.tax))
        x = self.x1 + ((self.x2-self.x1) * (self.tax / 2))
        y = self.y1 + ((self.y2-self.y1) * (self.tax / 2))
        # print("Meio x1: {} - y1: {}".format(x, y))
        return (x, y)

    def starts(self):
        first = self.dist()
        mid = self.dist_move()
        delta_x = (first[0] - mid[0])/2
        delta_y  = (first[1] - mid[1])/2
        sec = (mid[0] - delta_x, mid[1] - delta_y)
        last = (mid[0] + delta_x, mid[1] + delta_y)
        return [first, sec, mid, last]

    def display(self, stroke, line, index=None):
        if index is not None:
            line(*self.lines[index])
            return
        # print("display x1: {} - y1: {} - tax{}".format(self.x1, self.y1,self.tax))
        # print("display x2: {} - y2: {} - tax{}".format(self.endx, self.endy,self.tax))
        stroke(self.color)
        line(*self.line_generator())
    
    def line_generator(self):
        data = self.lines[self.state]   
        self.state = 0 if self.state == len(self.lines) -1 else self.state + 1
        return data

    def __str__(self):
        return"X1 {} - Y1 {}, X2 {} - Y2 {}\n".format(self.x1,
                                                      self.y1, self.x2, self.y2)

    def distance(self):
        return sqrt((self.x1 - self.x2)**2 + (self.y1 - self.y2)**2)

def isObtuso(v1,v2):
    v1_theta = atan2(v1.y1-v1.y2, v1.x1-v1.x2)
    v2_theta = atan2(v2.y2-v2.y1, v2.x2-v2.x1)
    r = (v2_theta - v1_theta) * (180.0 / pi)
    r = r if r > 0 else r + 360.0
    return 360 - r