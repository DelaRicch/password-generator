import { Component, HostBinding } from "@angular/core"

@Component({
    selector: "pg-password-strength-display",
    standalone: true,
    imports: [],
    template: ``,
})
export class PasswordStrengthDisplayComponent {
    @HostBinding("class") get pgClass() {
        return "flex items-center justify-between px-4 h-[72px] bg-black"
    }
}
