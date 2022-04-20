compile:
	export SKETCHBOOK_DIR=$(CURDIR)/..; pyp5js compile `basename $(CURDIR)`

run:
	python -m http.server

monitor:
	export SKETCHBOOK_DIR=$(CURDIR)/..; pyp5js monitor `basename $(CURDIR)`

dev:
	export SKETCHBOOK_DIR=$(CURDIR)/..; pyp5js monitor `basename $(CURDIR)`& python -m http.server 