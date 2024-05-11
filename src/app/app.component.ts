import { Component, HostBinding } from "@angular/core"
import { PasswordCopyComponent } from "./components/password-copy/password-copy.component"

@Component({
    selector: "app-root",
    standalone: true,
    imports: [PasswordCopyComponent],
    template: `
        <section
            class="w-[95vw] sm:w-[80vw] md:w-[540px] flex flex-col gap-4 border-2 border-red-700"
        >
            <h2 class="text-center text-grey font-bold">Generate a password</h2>
            <pg-password-copy></pg-password-copy>
        </section>
    `,
})
export class AppComponent {
    title = "password-generator"

    @HostBinding("class") get pgClass() {
        return "flex items-center justify-center w-screen h-screen bg-black"
    }
}
