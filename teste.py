from math import atan2, pi, cos, sin
from spiral import ArestaReta, GeometricForm

minimal = 10
tax = 4
arestas = list()
arestas.append(ArestaReta((50, 450),(150, 250),minimal,tax))
arestas.append(ArestaReta((150, 250),(350, 250),minimal,tax))
arestas.append(ArestaReta((350, 250),(50, 50),minimal,tax))
arestas.append(ArestaReta((50, 50),(50, 450),minimal,tax))
q1 = GeometricForm(arestas,5,4)
print(q1)
q2 = q1.newForm()
print(q2)