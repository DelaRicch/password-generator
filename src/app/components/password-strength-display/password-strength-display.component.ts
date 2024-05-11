import { Component, HostBinding } from "@angular/core"
import { cn } from "../../utility/functions"

@Component({
    selector: "pg-password-strength-display",
    standalone: true,
    imports: [],
    template: `
        <span class="uppercase text-grey font-medium">strength</span>
        <div class="flex items-center gap-4">
            <span class="capitalize text-ash font-bold text-xl">too weak!</span>
            <span [class]="cn('w-2.5 h-7 border-[3px]')"></span>
        </div>
    `,
})
export class PasswordStrengthDisplayComponent {
    cn = cn

    @HostBinding("class") get pgClass() {
        return "flex items-center justify-between px-4 h-[72px] bg-black"
    }
}
