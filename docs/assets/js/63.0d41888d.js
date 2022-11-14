(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{378:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"excelscript"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#excelscript"}},[t._v("#")]),t._v(" ExcelScript")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#flag"}},[t._v("Flag")])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"flag"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flag"}},[t._v("#")]),t._v(" Flag")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://docs.microsoft.com/zh-cn/office/vba/api/overview/language-reference",target:"_blank",rel:"noopener noreferrer"}},[t._v("Visual Basic for Applications (VBA) 语言参考"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("Microsoft Office Development "),s("a",{attrs:{href:"https://bettersolutions.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://bettersolutions.com"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.zhihu.com/people/xia-xi-lan/posts",target:"_blank",rel:"noopener noreferrer"}},[t._v("VBA学习笔记"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://blog.csdn.net/wordsin/article/details/80575615",target:"_blank",rel:"noopener noreferrer"}},[t._v("xcel之VBA简单宏编程"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.zhihu.com/people/xia-xi-lan/posts",target:"_blank",rel:"noopener noreferrer"}},[t._v("VBA学习笔记"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://blog.csdn.net/wordsin/article/details/80575615",target:"_blank",rel:"noopener noreferrer"}},[t._v("xcel之VBA简单宏编程"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://docs.microsoft.com/zh-cn/javascript/api",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.microsoft.com/zh-cn/javascript/api"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://docs.microsoft.com/zh-cn/office/dev/add-ins/excel",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.microsoft.com/zh-cn/office/dev/add-ins/excel"),s("OutboundLink")],1)])]),t._v(" "),s("ul",[s("li",[s("code",[t._v('=IF(IFERROR(FIND("不良",B2),0),"不良品仓",IF(IFERROR(FIND("待检",B2),0),"待检仓",IF(IFERROR(FIND("报废",B2),0),"报废仓",IF(IFERROR(FIND("良",B2),0),"良品仓",""))))')])]),t._v(" "),s("li",[t._v('匹配单元格左边英文及其他字符=RegexString(A1,"[^\\u4e00-\\u9fa5]+")')]),t._v(" "),s("li",[t._v('匹配单元格右边中文及其他字符=RegexString(A1,"[\\u4e00-\\u9fa5].*")')])]),t._v(" "),s("div",{staticClass:"language-vb extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vb"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Function")]),t._v(" RegexString"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rng "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" Range"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" str "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'第一个参数rng为区域保持不变， 添加第二个参数str（作为正则表达式）")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("With")]),t._v(" CreateObject"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"VBscript.regexp"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Global")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Pattern "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" str "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'表达式,直接从用户函数的第二个参数中调用")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("If")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Execute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rng"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Count "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Then")]),t._v("\n    RegexString "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Else")]),t._v("\n    RegexString "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Execute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rng"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("If")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("With")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Function")]),t._v("\n")])])]),s("ul",[s("li",[t._v("分割字符串并统计")])]),t._v(" "),s("div",{staticClass:"language-vb extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vb"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'https://blog.csdn.net/wordsin/article/details/80575615")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'自定义函数用于工作表时，必须是被动式的，只是返回一个值，不能处理单元格或在工作表上修改，批注是个例外，不能调用range的方法，如：Find，Range.Replace例外")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Function")]),t._v(" ReSplit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rng "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" Range"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" newStr "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" countNum "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Integer")]),t._v("\n    \n    old "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Strings"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Split"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rng"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('" "')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("For")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Each")]),t._v(" e "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("In")]),t._v(" old\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("If")]),t._v(" e "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Then")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'MsgBox TypeName(e)")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('\'Replace(, "/", "")')]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("With")]),t._v(" CreateObject"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"VBSCRIPT.REGEXP"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Global")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("IgnoreCase "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Pattern "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"([a-zA-Z]+)([0-9]+)-([0-9]+)"')]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("If")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Then")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'执行正则表达式，获取子匹配列表")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Set")]),t._v(" da "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Execute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SubMatches\n                    last "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" da"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                    st "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" da"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                    en "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" da"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'Debug.Print last, st, en")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("For")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" st "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("To")]),t._v(" en\n                        newStr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" newStr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('","')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" last "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" i\n                        countNum "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" countNum "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Next")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Else")]),t._v("\n                    newStr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" newStr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('","')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" e\n                    countNum "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" countNum "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("If")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("With")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("If")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Next")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("If")]),t._v(" InStr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newStr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('","')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Then")]),t._v("\n        newStr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Right"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newStr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Len"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newStr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("If")]),t._v("\n    Debug"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Print newStr\n    Debug"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Print countNum\n    \n    ReSplit "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" newStr\n    \n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'ActiveCell.Address '这是当前单元格地址")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'Selection.Offset(1, 0).Select '这是向下跳1格")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'Selection.Offset(-1, 0).Select '这是向上跳1格")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'Selection.Offset(0, -1).Select '这是向左跳1格")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'Selection.Offset(0, 1).Select '这是向右跳1格")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Function")]),t._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Function")]),t._v(" SplitCount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rng "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" Range"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" delimiter "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   SplitCount "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Len"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Strings"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Split"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rng"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" delimiter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Function")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v(" SetValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("offset "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" Range"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    offset "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" value\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v(" run"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Set")]),t._v(" rng "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Application"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("InputBox"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("prompt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"请选择区域"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("If")]),t._v(" rng"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Count "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Then")]),t._v("\n        MsgBox "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"请至少选择一个单元格！"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"提示"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Exit")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("If")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'If rng.Count <> 1 Then")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('\'MsgBox "只能选择一个单元格！", , "提示":')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'Exit Sub")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'End If")]),t._v("\n    Debug"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Print "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"当前选择："')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rng"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Address"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    \n    rngs "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Strings"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Split"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rng"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Address"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('":"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    st "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Strings"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Split"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rngs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    sta "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Replace"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rngs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'Debug.Print rngs(0), st, sta")]),t._v("\n    \n    of1Content "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"整理后的数据"')]),t._v("\n    of2Content "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"整理后的统计"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("If")]),t._v(" Range"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("st "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" of1Content "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Then")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'插入空列")]),t._v("\n        Range"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sta"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("EntireColumn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Insert\n        Range"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("st "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" of1Content\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("If")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("If")]),t._v(" Range"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("st "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" of2Content "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Then")]),t._v("\n        Range"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sta"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("EntireColumn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Insert\n        Range"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("st "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" of2Content\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("If")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("For")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Each")]),t._v(" im "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("In")]),t._v(" rng\n        \n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("If")]),t._v(" im "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Then")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'Debug.Print TypeName(im), im.Address")]),t._v("\n            \n            str1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ReSplit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Range"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Replace"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("im"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Address"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            im"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" str1\n            im"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Application"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CountA"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Strings"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Split"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('","')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("If")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Next")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);