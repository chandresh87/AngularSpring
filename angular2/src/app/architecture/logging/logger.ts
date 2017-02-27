import { environment } from '../../environment';
import { Level } from './level.enum';

export abstract class Logger {
    public production: boolean;
    public level: Level;

    constructor() {
      this.production = environment.production;
      this.level = environment.loggerLevel;
    }

    // Set production
    setProduction(production: boolean) {
      this.production = production;
    }

    // Set level
    setLevel(level: number) {
      this.level = level;
    };
 
    // Error type
    abstract log(...args: any[]): void;
    abstract debug(...args: any[]): void;
    abstract info(...args: any[]): void;
    abstract warn(...args: any[]): void;
    abstract error(...args: any[]): void;
    abstract assert(assertion: boolean, ...args: any[]): void;
    abstract fatal(...args: any[]): void;

    // Error level
    isErrorEnabled = (): boolean => this.level >= Level.ERROR;
    isWarnEnabled = (): boolean => this.level >= Level.WARN;
    isInfoEnabled = (): boolean => this.level >= Level.INFO;
    isDebugEnabled = (): boolean => this.level >= Level.DEBUG;
    isLogEnabled = (): boolean => this.level >= Level.LOG;

}
