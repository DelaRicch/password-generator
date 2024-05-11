import {
    Component,
    EventEmitter,
    HostBinding,
    HostListener,
    Input,
    Output,
    signal,
} from "@angular/core"
import { cn } from "../../utility/functions"

@Component({
    selector: "pg-checkbox",
    standalone: true,
    imports: [],
    template: ` <span
            [class]="
                cn(
                    'flex items-center justify-center w-5 h-5 border border-ash',
                    {
                        'bg-success border-success': isChecked()
                    }
                )
            "
        >
            @if (isChecked()) {
                <img src="./../../../assets/check.svg" alt="check" />
            }
        </span>
        <span class="text-ash font-semibold capitalize">{{ title }}</span>`,
})
export class CheckboxComponent {
    cn = cn

    @Input() title: string = ""
    @Output() emitCheckValue = new EventEmitter<boolean>()

    isChecked = signal(false)

    @HostBinding("class") get pgClass() {
        return "flex items-center gap-4 w-max cursor-pointer"
    }

    @HostListener("click") clickCheckBox() {
        this.toggleCheck()
    }

    toggleCheck() {
        this.isChecked.set(!this.isChecked())
        this.emitCheckValue.emit(this.isChecked())
    }
}
