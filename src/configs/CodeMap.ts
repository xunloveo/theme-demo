// 患者来源
export const patSource = {
  '103201': {
    title: '住院',
    class: 'hospital',
  },
  '103202': {
    title: '门诊',
    class: 'outpatient',
  },
  '103203': {
    title: '体检',
    class: 'examination',
  },
}

// 报告状态
export const reportStatus = {
  '103101': {
    title: '待支付',
    class: 'pay-wait',
  },
  '103102': {
    title: '待分诊',
    class: 'triage',
  },
  // '103103': {
  //   title: '待补充',
  //   class: 'supplement',
  //   code: '103103'
  // },
  '103103': {
    title: '分诊中',
    class: 'triageing',
  },
  '103104': {
    title: '待咨询',
    class: 'consult-wait',
  },
  // '103105': {
  //   title: '报告中',
  //   class: 'reporting',
  //   code: '103105'
  // },
  '103105': {
    title: '咨询中',
    class: 'consult-process',
  },
  // '103106': {
  //   title: '待一审',
  //   class: 'treat1',
  //   code: '103106'
  // },
  '103106': {
    title: '已退回',
    class: 'returned',
  },
  // '103107': {
  //   title: '待二审',
  //   class: 'treat2',
  //   code: '103107'
  // },
  '103107': {
    title: '待补充',
    class: 'supplement',
  },
  // '103108': {
  //   title: '待三审',
  //   class: 'treat3',
  //   code: '103108'
  // },
  '103108': {
    title: '待复核',
    class: 'check-wait',
  },
  // '103109': {
  //   title: '审核中',
  //   class: 'checking',
  //   code: '103109'
  // },
  '103109': {
    title: '复核中',
    class: 'check-process',
  },
  // '103110': {
  //   title: '已审核',
  //   class: 'checked',
  //   code: '103110'
  // },
  '103110': {
    title: '待确认',
    class: 'confirm-wait',
  },
  // '103111': {
  //   title: '已确认',
  //   class: 'confirmed',
  //   code: '103111'
  // },
  '103111': {
    title: '已完成',
    class: 'complete',
  },
  // '103112': {
  //   title: '已拒绝',
  //   class: 'rejected',
  //   code: '103112'
  // },
  '103112': {
    title: '已取消',
    class: 'cancel',
  },
  '102802': {
    title: '已申请',
    class: 'submitted',
  },
  '102801': {
    title: '待申请',
    class: 'pending-application',
  },
  // '103113': {
  //   title: '已退回',
  //   class: 'returned',
  //   code: '103113'
  // },
  '103113': {
    title: '已关闭',
    class: 'close',
  },
  '103114': {
    title: '已取消',
    class: 'cancel',
  },
  '103115': {
    title: '已关闭',
    class: 'close',
  },
}

// 手术规划状态
export const operatorPlanStatus = {
  待规划: {
    class: 'operator-wait',
  },
  规划中: {
    class: 'operator-process',
  },
  已完成: { class: 'complete' },
}

export const CodeMaps: { [key: string]: any } = {
  ...reportStatus,
  ...operatorPlanStatus,
}
