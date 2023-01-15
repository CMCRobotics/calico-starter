# Calico Starter project

[Calico](https://github.com/elliotherriman/calico) is a web framework to run and display Ink interactive fiction.
This Github template project simplifies how to get started with using **Calico**.

## How to use this starter project

Open a shell and invoke :

```bash
npm init using cmcrobotics/calico-starter my-calico-project
cd my-calico-project
npm install
npm run server
```

Of course, you're expected to replace ``my-calico-project`` by the name of your new project.

Next, start developing your new project.

## How to develop your story

At this point, you can start a live web server that will automatically refresh the browser window whenever you change your story or any of the project files.

This project comes pre-configured with [Five Server](https://www.npmjs.com/package/five-server).

To install it locally (and replace Live Server which is now unsupported), you can execute :

```bash
# Remove live-server (if you have it)
$ npm -g rm live-server

# Install five-server
$ npm -g i five-server

# Run it
$ five-server
```
For more details about **Five Server**, please refer to [its documentation](https://www.npmjs.com/package/five-server).

Any modification to your ``story.ink`` will automatically trigger an update of the web rendering.


## To go further

Please refer to the excellent upstream documentation of [Calico](https://github.com/elliotherriman/calico).
