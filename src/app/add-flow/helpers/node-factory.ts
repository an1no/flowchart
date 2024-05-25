import {IconType, Node, NodeType, Type} from '../flow.models';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NodeFactory {
  constructor() {}


  public generateDefaultJourneyNode(): Node {
    return {
      id: this.generateGuid(),
      name: "Selection",
      icon: "assets/icons/default.svg",
      type: Type.Regular,
      iconType: IconType.System,
      nodeType: NodeType.Selection,
      next: {
        id: this.generateGuid(),
        icon: null,
        name: null,
        type: Type.Regular,
        isInNoPath: false
      },
      parentNodeId: null,
      isInNoPath: false
    };
  }

  public generateEmptyNode(level: number = 0, isInNoPath: boolean): Node {
    return {
      id: this.generateGuid(),
      icon: null,
      name: null,
      type: Type.Regular,
      level: level,
      isInNoPath: isInNoPath
    };
  }

  private generateGuid(): string {
    const radix = 16;
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(radix).toUpperCase();
    });
  }
}
