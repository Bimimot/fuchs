import { debug } from 'utils/debug.ts';

interface IMessageLogger {
  (...args: any): void;
}

interface ILogger {
  module(module: string): ILogger;
  message(message: string): IMessageLogger;
  (message: any): void;
}

export function logger(modules: string[] = []): ILogger {
  function _logger(message: string): void {
    debug(...modules, message);
  }

  _logger.module = function (module: string) {
    return logger([...modules, module]);
  };

  _logger.message = function (message: string) {
    return function (): void {
      debug(...modules, message);
    };
  };

  return _logger;
}
