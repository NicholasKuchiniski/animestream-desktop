install:
	yarn install

compile:
	yarn build

windows:
	 yarn electron:make:windows

linux:
	yarn electron:make:linux

publish:
	yarn electron:publish