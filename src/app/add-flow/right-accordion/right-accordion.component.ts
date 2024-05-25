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
            this.currentIcon.nodeType === Type.DecisionSplit ||
            this.currentIcon.nodeType == Type.ConditionSplit
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
      console.log(this.node)
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

  protected readonly NodeType = NodeType;
  protected readonly Type = Type;
}
