from math import atan2, cos, pi, radians, sin, sqrt

class StopError(Exception):
    pass


class GeometricForm():
    def __init__(self, arestas, MINIMAL, tax):
        self.arestas = arestas
        self.__minimal__ = MINIMAL
        self.__tax__ = tax

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

    def __str__(self):
        print("Coordenadas:\n")
        for aresta in self.arestas:
            print(aresta)
        return ""


class ArestaReta:
    def __init__(self, start, end, MINIMAL, tax):
        self.x1 = start[0]
        self.y1 = start[1]
        self.x2 = end[0]
        self.y2 = end[1]
        self.tax = tax
        if self.distance() < MINIMAL:
            raise StopError()

    def dist(self):
        x = self.x2
        y = self.y2
        for i in range(self.tax):
            x = (self.x1+x) / (2)
            y = (self.y1+y) / (2)
        return (x, y)

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