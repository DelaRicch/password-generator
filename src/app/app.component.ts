import { Component, HostBinding } from "@angular/core"
import { PasswordCopyComponent } from "./components/password-copy/password-copy.component"
import { PasswordStrengthDisplayComponent } from "./components/password-strength-display/password-strength-display.component"
import { CheckboxComponent } from "./components/checkbox/checkbox.component"

@Component({
    selector: "app-root",
    standalone: true,
    imports: [
        PasswordCopyComponent,
        PasswordStrengthDisplayComponent,
        CheckboxComponent,
    ],
    template: `
        <section
            class="w-[95vw] sm:w-[80vw] md:w-[540px] flex flex-col gap-4 border-2 border-red-700"
        >
            <h2 class="text-center text-grey font-bold">Generate a password</h2>
            <pg-password-copy></pg-password-copy>
            <div class="flex flex-col gap-4 p-4 bg-dark">
                <span class="flex flex-col gap-2">
                    <pg-checkbox
                        title="Include Uppercase Letters"
                    ></pg-checkbox>
                    <pg-checkbox
                        title="Include Lowercase Letters"
                    ></pg-checkbox>
                    <pg-checkbox title="Include Numbers"></pg-checkbox>
                    <pg-checkbox title="Include Symbols"></pg-checkbox>
                </span>
                <pg-password-strength-display></pg-password-strength-display>
                <button
                    class="transition-all ease-linear duration-200 outline-success w-full h-[65px] border-2 text-black hover:text-success border-transparent hover:border-success
                   font-bold bg-success hover:bg-transparent group"
                >
                    Generate
                    <span
                        class="text-2xl group-hover:text-success transition-all ease-linear duration-200"
                        >→</span
                    >
                </button>
            </div>
        </section>
    `,
})
export class AppComponent {
    title = "password-generator"

    @HostBinding("class") get pgClass() {
        return "flex items-center justify-center w-screen h-screen bg-black"
    }
}
