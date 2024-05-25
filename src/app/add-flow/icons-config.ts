import { NodeType, IconType, Type, IIcon } from "./flow.models";



export const ICONS :IIcon[] = [
  {
    id: 1,
    name: "Decision Split",
    type: NodeType.DecisionSplit,
    icon: "assets/icons/decision-split.svg",
    iconType: IconType.System,
    isHidden: false,
    isEnd: false,
    hasMoreThanOneChild: true,
    nodeType: Type.DecisionSplit,
  },
  {
    id: 28,
    name: "Condition Split",
    type: NodeType.ConditionSplit,
    icon: "assets/icons/condition-split.svg",
    iconType: IconType.System,
    isHidden: false,
    isEnd: false,
    hasMoreThanOneChild: true,
    nodeType: Type.ConditionSplit,
  },
  {
    id: 2,
    name: "Wait",
    type: NodeType.Wait,
    icon: "assets/icons/wait.svg",
    iconType: IconType.System,
    isHidden: false,
    isEnd: false,
    hasMoreThanOneChild: false,
    nodeType: Type.Regular,
  },
  {
    id: 3,
    name: "Date",
    type: NodeType.Date,
    icon: "assets/icons/date.svg",
    iconType: IconType.System,
    isHidden: false,
    isEnd: false,
    hasMoreThanOneChild: false,
    nodeType: Type.Regular,
  },
  {
    id: 4,
    name: "Duration",
    type: NodeType.Duration,
    icon: "assets/icons/duration.svg",
    iconType: IconType.System,
    isHidden: false,
    isEnd: false,
    hasMoreThanOneChild: false,
    nodeType: Type.Regular,
  },
  {
    id: 5,
    name: "Time Condition",
    type: NodeType.TimeCondition,
    icon: "assets/icons/time-condition.svg",
    iconType: IconType.System,
    isHidden: false,
    isEnd: false,
    hasMoreThanOneChild: false,
    nodeType: Type.Regular,
  },
  {
    id: 6,
    name: "Loop",
    type: NodeType.Loop,
    icon: "assets/icons/loop.svg",
    iconType: IconType.System,
    isHidden: false,
    isEnd: true,
    hasMoreThanOneChild: false,
    nodeType: Type.Regular,
  },
  {
    id: 7,
    name: "Exit",
    type: NodeType.Exit,
    icon: "assets/icons/exit.svg",
    iconType: IconType.System,
    isHidden: false,
    isEnd: true,
    hasMoreThanOneChild: false,
    nodeType: Type.Regular,
  },
  {
    id: 8,
    name: "Deposit",
    type: NodeType.Deposit,
    icon: "assets/icons/deposit.svg",
    iconType: IconType.Fulfilment,
    isHidden: false,
    isEnd: false,
    hasMoreThanOneChild: false,
    nodeType: Type.Regular,
  },
  {
    id: 9,
    name: "Withdrawal",
    type: NodeType.Withdrawal,
    icon: "assets/icons/withdrawal.svg",
    iconType: IconType.Fulfilment,
    isHidden: false,
    isEnd: false,
    hasMoreThanOneChild: false,
    nodeType: Type.Regular,
  },
  {
    id: 10,
    name: "Bet",
    type: NodeType.Bet,
    icon: "assets/icons/bet.svg",
    iconType: IconType.Fulfilment,
    isHidden: false,
    isEnd: false,
    hasMoreThanOneChild: false,
    nodeType: Type.Regular,
  },
  {
    id: 11,
    name: "Verification",
    type: NodeType.Verification,
    icon: "assets/icons/verification.svg",
    iconType: IconType.Fulfilment,
    isHidden: true,
    isEnd: false,
    hasMoreThanOneChild: false,
    nodeType: Type.Regular,
  },
  {
    id: 12,
    name: "Revenue",
    type: NodeType.Revenue,
    icon: "assets/icons/revenue.svg",
    iconType: IconType.Fulfilment,
    isHidden: false,
    isEnd: false,
    hasMoreThanOneChild: false,
    nodeType: Type.Regular,
  },
  {
    id: 13,
    name: "Mix",
    type: NodeType.Mix,
    icon: "assets/icons/mix.svg",
    iconType: IconType.Fulfilment,
    isHidden: true,
    isEnd: false,
    hasMoreThanOneChild: false,
    nodeType: Type.Regular,
  },
  {
    id: 14,
    name: "Leaderboard",
    type: NodeType.Leaderboard,
    icon: "assets/icons/leaderboard.svg",
    iconType: IconType.Fulfilment,
    isHidden: true,
    isEnd: false,
    hasMoreThanOneChild: false,
    nodeType: Type.Regular,
  },
  {
    id: 15,
    name: "Login",
    type: NodeType.Login,
    icon: "assets/icons/login.svg",
    iconType: IconType.Fulfilment,
    isHidden: true,
    isEnd: false,
    hasMoreThanOneChild: false,
    nodeType: Type.Regular,
  },
  {
    id: 16,
    name: "SMS",
    type: NodeType.SMS,
    icon: "assets/icons/sms.svg",
    iconType: IconType.Communication,
    isHidden: false,
    isEnd: false,
    hasMoreThanOneChild: false,
    nodeType: Type.Regular,
  },
  {
    id: 17,
    name: "OMS",
    type: NodeType.OMS,
    icon: "assets/icons/oms.svg",
    iconType: IconType.Communication,
    isHidden: true,
    isEnd: false,
    hasMoreThanOneChild: false,
    nodeType: Type.Regular,
  },
  {
    id: 18,
    name: "Popup",
    type: NodeType.Popup,
    icon: "assets/icons/popup.svg",
    iconType: IconType.Communication,
    isHidden: true,
    isEnd: false,
    hasMoreThanOneChild: false,
    nodeType: Type.Regular,
  },
  {
    id: 19,
    name: "Email",
    type: NodeType.Email,
    icon: "assets/icons/email.svg",
    iconType: IconType.Communication,
    isHidden: true,
    isEnd: false,
    hasMoreThanOneChild: false,
    nodeType: Type.Regular,
  },
  {
    id: 20,
    name: "Web",
    type: NodeType.Web,
    icon: "assets/icons/web.svg",
    iconType: IconType.Communication,
    isHidden: true,
    isEnd: false,
    hasMoreThanOneChild: false,
    nodeType: Type.Regular,
  },
  {
    id: 21,
    name: "Counter",
    type: NodeType.Counter,
    icon: "assets/icons/counter.svg",
    iconType: IconType.Communication,
    isHidden: true,
    isEnd: false,
    hasMoreThanOneChild: false,
    nodeType: Type.Regular,
  },
  {
    id: 22,
    name: "Freespins",
    type: NodeType.Freespins,
    icon: "assets/icons/freespins.svg",
    iconType: IconType.Reward,
    isHidden: false,
    isEnd: false,
    hasMoreThanOneChild: false,
    nodeType: Type.Regular,
  },
  {
    id: 23,
    name: "Mini Games",
    type: NodeType.MiniGames,
    icon: "assets/icons/mini-games.svg",
    iconType: IconType.Reward,
    isHidden: false,
    isEnd: false,
    hasMoreThanOneChild: false,
    nodeType: Type.Regular,
  },
  {
    id: 24,
    name: "SB Freebet",
    type: NodeType.SportsBook,
    icon: "assets/icons/sportsbook.svg",
    iconType: IconType.Reward,
    isHidden: false,
    isEnd: false,
    hasMoreThanOneChild: false,
    nodeType: Type.Regular,
  },
  {
    id: 26,
    name: "Cash",
    type: NodeType.Cash,
    icon: "assets/icons/cash.svg",
    iconType: IconType.Reward,
    isHidden: false,
    isEnd: false,
    hasMoreThanOneChild: false,
    nodeType: Type.Regular,
  }
];


