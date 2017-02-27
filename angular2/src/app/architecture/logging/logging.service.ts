declare var console: any;
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Logger } from './logger';
import { LoggerWSHandler } from './logger-ws-handler'

// For browsers that don't implement the debug method, log will be used instead.
const CONSOLE_DEBUG_METHOD = console['debug'] ? 'debug' : 'log';

@Injectable()
export class LoggingService extends Logger {

  constructor(private webservice: LoggerWSHandler) {
    super();
  }

  assert(assertion: boolean, message: string, ...args: any[]): void {
    if (this.isErrorEnabled()) {
      !this.production && (console && console.assert) && console.assert(assertion, message, ...args);
      !assertion && this.subscribe(message, ...args);
    }
  }

  error(...args: any[]): void {
    if (this.isErrorEnabled()) {
      !this.production && (console && console.error) && console.error(...args);
      this.subscribe(...args);
    }
  }

  fatal(...args: any[]): void {
    if (this.isErrorEnabled()) {
      this.subscribe(...args);
    }
  }

  warn(...args: any[]): void {
    if (this.isInfoEnabled()) {
      !this.production && (console && console.warn) && console.warn(...args);
      this.subscribe(...args)
    }
  }

  info(...args: any[]): void {
    if (this.isInfoEnabled()) {
      !this.production && (console && console.info) && console.info(...args);
      this.subscribe(...args)
    }
  }

  debug(...args: any[]): void {
    if (this.isDebugEnabled()) {
      !this.production && (console && console.log) 
      && (<any>console)[CONSOLE_DEBUG_METHOD](...args);
      this.subscribe(...args);
    }
  }

  log(...args: any[]): void {
    if (this.isInfoEnabled()) {
      !this.production && (console && console.log) && console.log(...args);
      this.subscribe(...args);
    }
  }

  group(name: string): void {
    this.isErrorEnabled() && !this.production
      && (console && console.group) && console.group(name);
  }

  groupEnd(): void {
    this.isErrorEnabled() && !this.production
      && (console && console.groupEnd) && console.groupEnd();
  }

  subscribe(...args: any[]) {
    this.webservice.post(...args).subscribe(
      () => { },
      error => {console.log(error)}
    );
  }

  sendToServer(...args: any[]) {
    return this.webservice.post(...args);
  }

}