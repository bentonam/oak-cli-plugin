import {Command, flags} from '@oclif/command'

export default class Sizing extends Command {
  static description = 'example sizing command'

  static examples = [
    `$ oak-cli sizing`,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'c', description: 'cluster name to print'}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
  }

  static args = [{name: 'file'}]

  async run() {
    const {args, flags} = this.parse(Sizing)

    const name = flags.name || 'sizing'
    this.log(`hello ${name} from ./src/commands/sizing.ts`)
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }
  }
}
