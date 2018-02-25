import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";

import { AppComponent } from "./app.component";

// Import containers
import { FullLayoutComponent } from "./containers/full-layout/full-layout.component";
import { SimpleLayoutComponent } from "./containers/simple-layout/simple-layout.component";

const APP_CONTAINERS = [FullLayoutComponent, SimpleLayoutComponent];

// Import components
import { AppBreadcrumbsComponent } from "./components/app-breadcrumbs/app-breadcrumbs.component";
import { AppHeaderComponent } from "./components/app-header/app-header.component";
import { AppFooterComponent } from "./components/app-footer/app-footer.component";

const APP_COMPONENTS = [
    AppBreadcrumbsComponent,
    AppFooterComponent,
    AppHeaderComponent
];

// Import routing module
import { AppRoutingModule } from "./app.routing";

@NgModule({
    imports: [BrowserModule, AppRoutingModule],
    declarations: [AppComponent, ...APP_CONTAINERS, ...APP_COMPONENTS],
    providers: [
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
