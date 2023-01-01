# from extension import Extension
from pyp5js import *

class BezierExtension():
    def __init__(self, run_func):
        # super().__init__("Grid", "grid" , "grid.png", "Clique em 'G' para exibir/remover a grade", "g")
        self.name = "Bezier"
        self.id = "bezier"
        self.enable = False
        self.image_name = "drawing.png"
        self.hover = "Clique em 'B' para ativar o bezier"
        self.shortcut = "b"
        self.enable = False
        self.run_func = run_func
    
    def draw(self):
        if self.enable:
            pass
    
    def setup(self):
        pass

    def run(self):
        self.enable = not self.enable
        # self.run_func()
