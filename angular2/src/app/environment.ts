// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
import { Level } from './architecture/logging/level.enum'

export const environment = {
  production: false,
  loggerURL: "/rest/logger",
  loggerLevel: Level.DEBUG,
  //baseURL: "https://demo9396170.mockable.io",
  baseURL: "http://localhost:8080/AngularSpring",
  timeout: 5000
};
