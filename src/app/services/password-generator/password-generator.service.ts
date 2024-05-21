import { Injectable, signal } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class PasswordGeneratorService {
    maximumPasswordLength = signal(20);
    minimumPasswordLength = signal(8);
    passwordLength = signal(10);
    includeUppercase = signal(false);
    includeLowercase = signal(false);
    includeNumbers = signal(false);
    includeSymbols = signal(false);

    getPasswordLength() {
        return this.passwordLength();
    }
}
