import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

const components: any[] = [];

@NgModule({
    declarations: components,
    imports: [CommonModule],
    exports: [
        ...components,
        [
            CommonModule
        ]
    ]
})
export class SharedModule { }