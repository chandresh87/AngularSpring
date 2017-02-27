/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import {
  HttpModule, Http, Response, Headers, RequestOptions,
  BaseRequestOptions, XHRBackend, ResponseOptions
} from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { LoggingService } from './logging.service';
import { Logger } from './logger';
import { LoggerWSHandler } from './logger-ws-handler';

describe('LoggingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LoggingService,
        LoggerWSHandler,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          deps: [MockBackend, BaseRequestOptions],
          useFactory:
          (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          }
        }
      ],
      imports: [
        HttpModule
      ]
    });
    spyOn(console, 'assert');
    spyOn(console, 'error');
    spyOn(console, 'warn');
    spyOn(console, 'info');
    spyOn(console, 'debug');
    spyOn(console, 'log');
    spyOn(console, 'group');
    spyOn(console, 'groupEnd');
    TestBed.compileComponents();
  });

  it('should ...', inject([LoggingService], (service: LoggingService) => {
    expect(service).toBeTruthy();
  }));

  // Assert
  it('should log an error message to the console if false', inject([LoggingService], (service: LoggingService) => {
    service.setLevel(5);
    service.setProduction(false);
    service.assert(false, 'assertion is false');
    expect(console.assert).toHaveBeenCalled();
  }));

  // Error
  it('should log an error message to the console', inject([LoggingService], (service: LoggingService) => {
    service.setLevel(5);
    service.setProduction(false);
    service.error('error');
    expect(console.error).toHaveBeenCalled();
  }));

  // Warn
  it('should log an warn message to the console', inject([LoggingService], (service: LoggingService) => {
    service.setLevel(5);
    service.setProduction(false);
    service.warn('warn');
    expect(console.warn).toHaveBeenCalled();
  }));

  // Info
  it('should log an info message to the console', inject([LoggingService], (service: LoggingService) => {
    service.setLevel(5);
    service.setProduction(false);
    service.info('info');
    expect(console.info).toHaveBeenCalled();
  }));

  // Debug
  it('should log an debug message to the console', inject([LoggingService], (service: LoggingService) => {
    service.setLevel(5);
    service.setProduction(false);
    service.debug('debug');
    expect(console.debug || console.log).toHaveBeenCalled();
  }));

  // Log
  it('should log a log message to the console', inject([LoggingService], (service: LoggingService) => {
    service.setLevel(5);
    service.setProduction(false);
    service.log('log');
    expect(console.log).toHaveBeenCalled();
  }));

  // Group
  it('should log a group of messages to the console', inject([LoggingService], (service: LoggingService) => {
    service.setLevel(5);
    service.setProduction(false);
    service.group('Test Group');
    service.error('error');
    service.info('info');
    service.groupEnd();
    expect(console.group).toHaveBeenCalled();
    expect(console.groupEnd).toHaveBeenCalled();
  }));

  // Save
  it('should send a message to the server',
    inject([LoggingService, MockBackend], (service: LoggingService, mock: MockBackend) => {
      
      let responseOptions = new ResponseOptions({ body: JSON.stringify({ data: 'success' }) });
      mock.connections.subscribe(c => c.mockRespond(new Response(responseOptions)));

      service.setLevel(5);
      var res = service.save('test');

      res.subscribe(res => {
        expect(res).toEqual('success');
      });

    }));

});
