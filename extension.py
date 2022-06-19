from abc import ABC

class Extension(ABC):

    def __init__(self, name, my_id, image_name, hover, shortcut):
        self.name = name
        self.id = my_id
        self.enable = False
        self.image_name = image_name
        self.hover = hover
        self.shortcut = shortcut

    @abstractmethod
    def draw():
        pass
    
    @abstractmethod
    def setup():
        pass

    @abstractmethod
    def run():
        pass

    