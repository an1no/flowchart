import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {NodeType, Node, Type, IconType} from "../flow.models";
import {NodeFactory} from "../helpers/node-factory";
import {NodeService} from "../services/node.service";

@Component({
  selector: 'app-right-accordion',
  templateUrl: './right-accordion.component.html',
  styleUrls: ['./right-accordion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RightAccordionComponent implements OnInit {
  @Input() currentIcon: any = null;
  selectedNodeId!: string;
  private maxDepth: number = 0;
  node: Node = this.nodeFactory.generateDefaultJourneyNode();
  private nodeMap: Map<string | number, Node> = new Map<
    string | number,
    Node
  >();

  constructor(private nodeFactory: NodeFactory, private nodeService: NodeService) {

  }

  onDeleteNode(nodeId: string): void {

  }

  ngOnInit() {
    console.log(this.node)
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
  }


  onDrop(event: DragEvent, nodeId: string): void {
    event.preventDefault();
    event.stopPropagation();
    if (event.dataTransfer) {
      const data = event.dataTransfer.getData("text/html");
      const parser = new DOMParser();
      const doc = parser.parseFromString(data, "text/html");
      const img = doc.querySelector("img");
      const imgSrc = img?.getAttribute("src");

      const {foundNode, parentId} = this.nodeService.findNodeById(
        this.node,
        nodeId
      );
      if(parentId) {
        const parent = this.nodeMap.get(parentId);
      }
      if (foundNode) {
        const level = foundNode.level;
        this.updateNodeById(this.node, nodeId, {
          icon: imgSrc,
          name: this.currentIcon.name,
          type: this.currentIcon.nodeType,
          iconType: this.currentIcon.iconType,
          nodeType: this.currentIcon.type,
          yes:
            this.currentIcon.nodeType === Type.DecisionSplit
              ? this.nodeFactory.generateEmptyNode(level, false)
              : null,
          no:
            this.currentIcon.nodeType === Type.DecisionSplit
              ? this.nodeFactory.generateEmptyNode(level + 1, true)
              : null,
          next:
            this.currentIcon.nodeType === Type.DecisionSplit
              ? null
              : this.nodeFactory.generateEmptyNode(
                level,
                foundNode.isInNoPath
              ),
          isEnd: this.currentIcon.isEnd,
          parentNodeId: parentId
        });
      }
      this.nodeService.propagateLevelsNoLevelsAndNoPathInfo(this.node);
      this.maxDepth = this.nodeService.maxDepth(this.node);
      this.nodeMap = this.nodeService.createMap(this.node);
    }

  }

  private updateNodeById(
    root: Node,
    nodeId: string | number,
    updateValues: Partial<Node>
  ): Node {
    return this.nodeService.updateNodeById(root, nodeId, updateValues);
  }

  onIconClick(nodeId: string): void {

  }

  calculateNodePosition(node: Node, parent: Node): string {
    if (node.isInNoPath) return "-34px";
    return "0px";
  }

  calculateZIndex(level: number): number {
    return this.nodeService.maxLevel - level + 1;
  }

  calculateTransform(noLevel: number): string {
    const base = 113;
    const height = this.calculateHeight(noLevel);
    return "translate(0, " + (height - base) + ")";
  }

  calculateNoTopPosition(noLevel: number): string {
    // Example calculation for the top position, may need to adjust based on your layout
    const increment = 150;
    const subtract = 105;
    return increment * noLevel - subtract + "px";
  }

  calculateHeight(noLevel: number): number {
    // Example calculation for the height, may need to adjust based on your layout
    const base = 113;
    const increment = 150;
    return base + (noLevel - 1) * increment;
  }

  calculateViewBox(noLevel: number): string {
    return "0 0 99 " + this.calculateHeight(noLevel);
  }

  calculateY2(noLevel: number): number {
    const height = this.calculateHeight(noLevel);
    return height - 28;
  }

  protected readonly NodeType = NodeType;
  protected readonly Type = Type;
}
