export interface Node {
  id: string | number;
  name: string | null;
  icon: string | null;
  type: Type;
  iconType?: IconType;
  nodeType?: NodeType;
  yes?: Node;
  no?: Node;
  noLevel?: number | null;
  level?: number | null;
  next?: Node;
  parentNodeId?: string | number | null;
  isEnd?: boolean;
  isInNoPath?: boolean;
}

export enum Type {
  Regular = 0,
  DecisionSplit = 1
}

export enum IconType {
  System = 0,
  Fulfilment = 1,
  Communication = 2,
  Reward = 3,
}

export interface IIcon {
  id: number;
  name: string;
  type: NodeType;
  icon: string;
  iconType: IconType;
  isHidden: boolean;
  isEnd: boolean;
  hasMoreThanOneChild: boolean;
  nodeType: Type;
}


export enum NodeType {
  // System
  DecisionSplit = 0,
  Wait = 1,
  Date = 2,
  Duration = 3,
  TimeCondition = 4,
  Loop = 5,
  Exit = 6,
  // Fulfilment
  Deposit = 7,
  Withdrawal = 8,
  Bet = 9,
  Verification = 10,
  Revenue = 11,
  RevenueBonus = 12,
  Mix = 13,
  Leaderboard = 14,
  Login = 15,
  // Communication
  SMS = 16,
  OMS = 17,
  Popup = 18,
  Email = 19,
  Web = 20,
  Counter = 21,
  // Reward
  Freespins = 22,
  MiniGames=23,
  SportsBook = 24,
  Freeround = 25,
  CashBack = 26,
  Cash=27,
  Selection = 29,
}
