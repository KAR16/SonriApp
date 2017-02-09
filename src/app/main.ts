//Bootstrap dinámico con el compilador JIT (Just-in-Time)
//import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//import { AppModule } from './app.module';

//platformBrowserDynamic().bootstrapModule(AppModule);



//Bootstrap estático con el compilador AOT (Ahead-of-Time)
import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNgFactory } from './app.module.ngfactory';
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
