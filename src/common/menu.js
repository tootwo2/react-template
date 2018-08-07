const menuData = [
  {
    name: "dashboard",
    icon: "dashboard",
    path: "dashboard",
    children: [
      {
        name: "分析页",
        path: "analysis"
      },
      {
        name: "监控页",
        path: "monitor"
      },
      {
        name: "计数",
        path: "count"
      }
    ]
  },
  {
    name: "表单页",
    icon: "form",
    path: "form",
    children: [
      {
        name: "基础表单",
        path: "basic-form"
      },
      {
        name: "分步表单",
        path: "step-form"
      }
    ]
  },
  {
    name: "列表页",
    icon: "table",
    path: "list",
    children: [
      {
        name: "查询表格",
        path: "table-list"
      },
      {
        name: "标准列表",
        path: "basic-list"
      },
      {
        name: "卡片列表",
        path: "card-list"
      },
      {
        name: "搜索列表",
        path: "search",
        children: [
          {
            name: "搜索列表（文章）",
            path: "articles"
          },
          {
            name: "搜索列表（项目）",
            path: "projects"
          },
          {
            name: "搜索列表（应用）",
            path: "applications"
          }
        ]
      }
    ]
  },
  {
    name: "结果页",
    icon: "check-circle-o",
    path: "result",
    children: [
      {
        name: "成功",
        path: "success"
      },
      {
        name: "失败",
        path: "fail"
      }
    ]
  },
  {
    name: "异常页",
    icon: "warning",
    path: "exception",
    children: [
      {
        name: "403",
        path: "403"
      },
      {
        name: "404",
        path: "404"
      },
      {
        name: "500",
        path: "500"
      }
    ]
  }
];

export default menuData;
