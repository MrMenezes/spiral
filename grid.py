# from extension import Extension
from pyp5js import *

class GridExtension():
    def __init__(self, grid_size):
        # super().__init__("Grid", "grid" , "grid.png", "Clique em 'G' para exibir/remover a grade", "g")
        self.name = "Grid"
        self.id = "grid"
        self.enable = False
        self.image_name = "grid.png"
        self.hover = "Clique em 'G' para exibir/remover a grade"
        self.shortcut = "g"
        self.enable = False
        self.grid_size = grid_size
    
    def draw(self):
        if self.enable:
            stroke("#FFFFFF")
            for x in range(0, width, self.grid_size):
                line(x, 0, x, height)
            for y in range(0, height, self.grid_size):
                line(0, y, width, y)
    
    def setup(self):
        pass

    def run(self):
        self.enable = not self.enable

    def get_grid(self, px, py):
        if self.enable:
            px = round(px / self.grid_size) * self.grid_size
            py = round(py / self.grid_size) * self.grid_size
        return (px, py)