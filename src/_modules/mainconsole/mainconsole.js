'use strict';

class HelpCommand {
  constructor() {
  }

  name() { return 'help'; }

  handler() { return 'todo' }
}

export default class MainConsole {

  constructor($selector) {
    console.log('main console created');

    this.$selector = $selector;

    this.promptColor = '#375A7F';
    this.highlightColor = '#C87F0A';

    this.minHeight = 480;
    this.height = $(window).height() * 0.7; // 70% of window height.
    if (this.height < this.minHeight) {
      this.height = this.minHeight;
    }

    this.historyEnabled = true;
    this.clearCommandEnabled = true;

    this.cmds = {
      help: new HelpCommand()
    };
  }

  start() {
    console.log('main console started');

    $(this.$selector).terminal({
      add: function(a, b) {
        this.echo(a + b);
      },
      bar: {
        sub: function(a, b) {
          this.echo(a - b);
        }
      }
    }, {
      history: this.historyEnabled,
      clear:   this.clearCommandEnabled,
      prompt: '[[gb;' + this.promptColor + ';]▶] ',
      height: this.height,
      greetings:
        "              _                                                   \n" +
        "__      _____| | ___ ___  _ __ ___   ___                          \n" +
        "\\ \\ /\\ / / _ \\ |/ __/ _ \\| '_ ` _ \\ / _ \\                  \n" +
        " \\ V  V /  __/ | (_| (_) | | | | | |  __/                        \n" +
        "  \\_/\\_/ \\___|_|\\___\\___/|_| |_| |_|\\___|                   \n" +
        "                                                                  \n" +
        " [[i;;]to get started, just type ]"                                   +
        " '[[b;" + this.highlightColor + ";]" + this.cmds.help.name() + "]'"   +
        " [[i;;]..]\n"                                                         +
        " [[i;;]if you're using vimperator (or similar extensions)],"          +
        " [[g;;]you need to temporarly disable it]"                            +
        " ([[b;" + this.highlightColor + ";]shift+esc])\n"                     +
        " _                   _                 ___  _                     \n" +
        "| |__  _   _    __ _| | ___ _ __ ___  / _ \\| | __ _ _ __ ___     \n" +
        "| '_ \\| | | |  / _` | |/ _ \\ '_ ` _ \\| | | | |/ _` | '__/ __|  \n" +
        "| |_) | |_| | | (_| | |  __/ | | | | | |_| | | (_| | |  \\__ \\   \n" +
        "|_.__/ \\__, |  \\__,_|_|\\___|_| |_| |_|\\___/|_|\\__,_|_|  |___/\n" +
        "       |___/                                                      \n"
    });
  }

}
