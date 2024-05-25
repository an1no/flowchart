import { Injectable } from '@angular/core';
import {Node, Type} from '../flow.models';

@Injectable({
  providedIn: 'root'
})
export class NodeService {
  public maxLevel: number = 0;

  constructor() { }
  public createMap(node: Node): Map<string | number, Node> {
    const nodeMap = new Map<string | number, Node>();
    this.createMapRecursion(node, nodeMap);
    return nodeMap;
  }

  private createMapRecursion(
    node: Node,
    nodeMap: Map<string | number, Node>
  ): void {
    if (node == null) {
      return;
    }
    nodeMap.set(node.id, node);
    this.createMapRecursion(node.next, nodeMap);
    this.createMapRecursion(node.yes, nodeMap);
    this.createMapRecursion(node.no, nodeMap);
  }

  public findNodeById(
    node: Node,
    id: string | number,
    parentId: string | number | null = null
  ): {
    foundNode: Node | undefined;
    parentId: string | number | null;
  } {
    // If the current node is the one we're looking for, return it.
    if (node.id === id) {
      return { foundNode: node, parentId: parentId };
    }
    // Otherwise, recursively search for the node in the 'right' and 'bottom' branches.
    let result: { foundNode: Node | undefined; parentId: string | number | null } = { foundNode: undefined, parentId: null };
    if (node.next) {
      result = this.findNodeById(node.next, id, node.id);
    }
    if (!result.foundNode && node.yes) {
      result = this.findNodeById(node.yes, id, node.id);
    }
    if (!result.foundNode && node.no) {
      result = this.findNodeById(node.no, id, node.id);
    }
    return result; // This will be undefined if the node isn't found.
  }

  public updateNodeById(
    root: Node,
    nodeId: string | number,
    updateValues: Partial<Node>
  ): Node {
    // If the current node is the one we're looking for, update it.
    if (root.id === nodeId && root.icon === null) {
      // Update the current node with new values
      Object.assign(root, updateValues);
    } else {
      // Recursively update 'yes', 'no', and 'next' nodes if they exist
      if (root.yes) {
        root.yes = this.updateNodeById(root.yes, nodeId, updateValues);
      }
      if (root.no) {
        root.no = this.updateNodeById(root.no, nodeId, updateValues);
      }
      if (root.next) {
        root.next = this.updateNodeById(root.next, nodeId, updateValues);
      }
    }
    return root; // Return the updated tree
  }
  public propagateLevelsNoLevelsAndNoPathInfo(node: Node): void {
    this.propagateNoLevels(node);
    this.propagateLevels(node);
  }

  private propagateNoLevels(node: Node): void {
    if (node == null) {
      return;
    }
    if (
      node.type == Type.DecisionSplit ||
      node.type == Type.ConditionSplit
    ) {
      node.noLevel =
        this.countDecisionSplits(node.yes) +
        1;
    }
    this.propagateLevelsNoLevelsAndNoPathInfo(node.next);
    this.propagateLevelsNoLevelsAndNoPathInfo(node.yes);
    this.propagateLevelsNoLevelsAndNoPathInfo(node.no);
  }

  private propagateLevels(node: Node, level: number = 0): void {
    if (node == null) {
      return;
    }
    node.level = level;
    if (this.maxLevel < level) {
      this.maxLevel = level;
    }
    this.propagateLevels(node.next, level);
    this.propagateLevels(node.yes, level);

    this.propagateLevels(node.no, level + node.noLevel);
  }

  private countDecisionSplits(
    node: Node,
    visited = new Set<Node>()
  ): number {
    // Check if the node is null or if it has already been visited
    if (!node || visited.has(node)) {
      return 0;
    }
    // Mark the current node as visited
    visited.add(node);
    // Recursive calls with a set of visited nodes
    let count =
      this.countDecisionSplits(node.next, visited) +
      this.countDecisionSplits(node.yes, visited) +
      this.countDecisionSplits(node.no, visited);
    if (
      node.type == Type.DecisionSplit ||
      node.type == Type.ConditionSplit
    ) {
      count += 1;
    }
    return count;
  }

  public maxDepth(node: Node): number {
    if (!node) {
      return 0;
    }
    return (
      Math.max(
        this.maxDepth(node.next),
        this.maxDepth(node.yes),
        this.maxDepth(node.no)
      ) + 1
    );
  }

}
