import { Component, HostBinding } from "@angular/core"

@Component({
    selector: "pg-password-copy",
    standalone: true,
    imports: [],
    template: `
        <span class="text-ash text-2xl font-bold">PTx1f5DaFX</span>
        <button class="outline-success">
            <img src="../../../assets/copy.svg" alt="copy" />
        </button>
    `,
})
export class PasswordCopyComponent {
    @HostBinding("class") get pgClass() {
        return "flex items-center justify-between px-4 h-[80px] bg-dark"
    }
}
