import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Import Containers
import { FullLayoutComponent } from "./containers/full-layout/full-layout.component";
import { SimpleLayoutComponent } from "./containers/simple-layout/simple-layout.component";

export const routes: Routes = [
    {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full"
    },
    {
        path: "",
        component: FullLayoutComponent,
        data: {
            title: "Home"
        },
        children: [
            {
                path: "dashboard",
                loadChildren:
                    "./views/dashboard/dashboard.module#DashboardModule"
            }
        ]
    },
    {
        path: "pages",
        component: SimpleLayoutComponent,
        data: {
            title: "Pages"
        },
        children: [
            {
                path: "",
                loadChildren: "./views/pages/pages.module#PagesModule"
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
