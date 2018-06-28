'use strict';
const Generator = require('yeoman-generator');
const jhiCore = require('jhipster-core');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.option('babel'); // This method adds support for a `--babel` flag
    this.argument('jdlFiles', { type: Array, required: true });
    this.options.jdlFiles = this.options.jdlFiles.map(jdlFile =>
      this.destinationPath(jdlFile)
    );
    this.jdlObjects = jhiCore.parseFromFiles(this.options.jdlFiles);
  }

  async prompting() {}

  writing() {
    this.fs.copyTpl(this.templatePath(), this.destinationPath());
  }

  install() {
    // This.installDependencies();
  }
};