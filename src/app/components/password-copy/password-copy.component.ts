import { Component, HostBinding, inject } from "@angular/core";
import { PasswordGeneratorService } from "../../services/password-generator/password-generator.service";

@Component({
    selector: "pg-password-copy",
    standalone: true,
    imports: [],
    template: `
        <span class="text-ash text-2xl font-bold">{{
            passwordService.getGeneratedPassword() || "Generate password"
        }}</span>
        <button class="outline-success">
            <img src="../../../assets/copy.svg" alt="copy" />
        </button>
    `,
})
export class PasswordCopyComponent {
    passwordService = inject(PasswordGeneratorService);

    @HostBinding("class") get pgClass() {
        return "flex items-center justify-between px-4 h-[80px] bg-dark";
    }
}
