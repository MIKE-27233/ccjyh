let Mock = require("mockjs")

Mock.mock("/data/list/lala","get",require("./homeGridicon.json"))
Mock.mock("/data/list/hudong","get",require("./vipicons.json"))
Mock.mock("/data/list/main","get",require("./homeGridicon.json"))