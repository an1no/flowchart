import {ChangeDetectionStrategy, Component} from '@angular/core';
import { IIcon } from './flow.models';
import { ICONS } from './icons-config';
import {NodeFactory} from "./helpers/node-factory";

@Component({
  selector: 'app-add-flow',
  templateUrl: './add-flow.component.html',
  styleUrls: ['./add-flow.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddFlowComponent {
  icons: IIcon[] = ICONS;
  currentIcon: IIcon | null = null;

  constructor(private nodeFactory: NodeFactory) {
  }

  onDragStart(event): void {
    this.currentIcon = event;
  }

}
