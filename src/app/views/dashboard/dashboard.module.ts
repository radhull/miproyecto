import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { DashboardComponent } from "./dashboard.component";
import { DashboardRoutingModule } from "./dashboard-routing.module";

import { PaginationModule } from "ngx-bootstrap/pagination";

@NgModule({
    imports: [FormsModule, DashboardRoutingModule, PaginationModule.forRoot()],
    declarations: [DashboardComponent]
})
export class DashboardModule {}
