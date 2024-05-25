import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {IconType} from "../flow.models";

@Component({
  selector: 'app-left-accordion',
  templateUrl: './left-accordion.component.html',
  styleUrls: ['./left-accordion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeftAccordionComponent {
  @Input() icons:any;

  @Output() onIconDragStart: EventEmitter<any> = new EventEmitter<any>();

  protected readonly IconType = IconType;

  onDragStart(event: DragEvent, icon: any): void {
    this.onIconDragStart.emit(icon);
  }
}
