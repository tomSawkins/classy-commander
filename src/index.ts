import { Commander } from './commander';
import { IocContainer } from './types';

export { command, option, value } from './decorators';
export { Command, CommandValueDefinition, CommandOptionDefinition, CommandOptionDefinitionOptions, IocContainer } from './types';

const commander = new Commander();

// tslint:disable-next-line:no-shadowed-variable
export function version(version: string): Commander {
  return commander.version(version);
}

export function ioc(container: IocContainer): Commander {
  return commander.ioc(container);
}

export async function execute(argv?: string[]): Promise<void> {
  return commander.execute(argv);
}