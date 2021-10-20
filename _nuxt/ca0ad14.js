(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{172:function(t,e){t.exports=[{text:"Get Started",url:"get-started"},{text:"Installation",url:"installation"},{text:"Setup",url:"setup",children:[{text:"Web3.js",url:"web3js"},{text:"Ethers",url:"ethers"}]},{text:"API Architecture",url:"api-architecture"},{text:"POS",url:"pos",children:[{text:"ERC20",url:"erc20",children:[{text:"getBalance",url:"get-balance"},{text:"approve",url:"approve"},{text:"approveMax",url:"approve-max"},{text:"getAllowance",url:"get-allowance"},{text:"deposit",url:"deposit"},{text:"transfer",url:"transfer"},{text:"withdrawStart",url:"withdraw-start"},{text:"withdrawExit",url:"withdraw-exit"},{text:"withdrawExitFaster",url:"withdraw-exit-faster"},{text:"isWithdrawExited",url:"is-withdraw-exited"}]},{text:"ERC721",url:"erc721",children:[{text:"getTokensCount",url:"get-tokens-count"},{text:"getTokenIdAtIndexForUser",url:"get-token-id-at-index-for-user"},{text:"getAllTokens",url:"get-all-tokens"},{text:"isApproved",url:"is-approved"},{text:"isApprovedAll",url:"is-approved-all"},{text:"approve",url:"approve"},{text:"approveAll",url:"approve-all"},{text:"deposit",url:"deposit"},{text:"depositMany",url:"deposit-many"},{text:"withdrawStart",url:"withdraw-start"},{text:"withdrawStartMany",url:"withdraw-start-many"},{text:"withdrawExit",url:"withdraw-exit"},{text:"withdrawExitMany",url:"withdraw-exit-many"},{text:"withdrawExitFaster",url:"withdraw-exit-faster"},{text:"withdrawExitFasterMany",url:"withdraw-exit-faster-many"},{text:"isWithdrawExited",url:"is-withdraw-exited"},{text:"isWithdrawExitedMany",url:"is-withdraw-exited-many"},{text:"transfer",url:"transfer"}]},{text:"isCheckPointed",url:"is-check-pointed"}]},{text:"Plasma",url:"plasma",children:[{text:"ERC20",url:"erc20",children:[{text:"getBalance",url:"get-balance"},{text:"approve",url:"approve"},{text:"approveMax",url:"approve-max"},{text:"getAllowance",url:"get-allowance"},{text:"transfer",url:"transfer"},{text:"withdrawStart",url:"withdraw-start"},{text:"withdrawChallenge",url:"withdraw-challenge"},{text:"withdrawChallengeFaster",url:"withdraw-challenge-faster"},{text:"withdrawExit",url:"withdraw-exit"}]},{text:"ERC721",url:"erc721",children:[{text:"getTokensCount",url:"get-tokens-count"},{text:"getTokenIdAtIndexForUser",url:"get-token-id-at-index-for-user"},{text:"getAllTokens",url:"get-all-tokens"},{text:"safeDeposit",url:"safe-deposit"},{text:"withdrawStart",url:"withdraw-start"},{text:"withdrawChallenge",url:"withdraw-challenge"},{text:"withdrawChallengeFaster",url:"withdraw-challenge-faster"},{text:"withdrawExit",url:"withdraw-exit"},{text:"transfer",url:"transfer"}]},{text:"isCheckPointed",url:"is-check-pointed"},{text:"withdrawExit",url:"withdraw-exit"}]},{text:"setProofApi",url:"set-proof-api"},{text:"Advanced",url:"advanced",expand:!0,children:[{text:"ABIManager",url:"abi-manager"},{text:"Plugin",url:"plugin"}]}]},173:function(t,e,r){"use strict";var l={components:{Docs:r(174).a},props:{title:String,description:String,keywords:String},data:function(){return{savedLinks:[]}},fetch:function(){var t=r(172);this.savedLinks=t}},n=r(14),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("Docs",{attrs:{propLinks:t.savedLinks,relativeUrl:"/v3/docs/",title:t.title,description:t.description,keywords:t.keywords}},[t._t("default")],2)}),[],!1,null,null,null);e.a=component.exports},239:function(t,e,r){"use strict";r.r(e);var l={components:{Layout:r(173).a}},n=r(14),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Layout",{attrs:{title:"Plugin",description:"Using plugin you can inject your code into matic.js",keywords:"plugin, api type, read, write, polygon",contentSrc:"/home/runner/work/matic.js/matic.js/docs/content/v3/docs/advanced/plugin.md"}},[r("h1",{attrs:{id:"plugin"}},[t._v("Plugin")]),t._v(" "),r("p",[t._v("Using plugin you can inject your code into "),r("code",[t._v("matic.js")]),t._v(". It can be used to write common set of generic codes which can be provided to anyone using a package.")]),t._v(" "),r("div",{staticClass:"highlight"},[t._v("\nPlugin makes the `matic.js` light weight as it implements only important logical part.\n")]),t._v(" "),r("p",[r("br"),t._v("\nInfact web3 library is supported using plugin which allows us to use our favourite library.")]),t._v(" "),r("h3",{attrs:{id:"plugindevelopment"}},[t._v("Plugin development")]),t._v(" "),r("p",[t._v("Plugin is a class which implements "),r("code",[t._v("IPlugin")]),t._v(".")]),t._v(" "),r("pre",[r("code",[t._v('import { IPlugin } from "@maticnetwork/maticjs";\n\nexport class MyPlugin implements IPlugin {\n\n    // variable matic is - default export of matic.js\n    setup(matic) {\n\n        // get web3client\n        const web3Client = matic.Web3Client ;\n    }\n}\n')])]),t._v(" "),r("p",[t._v("As you can see - you just need to implement a "),r("code",[t._v("setup")]),t._v(" method which will be called with default export of "),r("code",[t._v("matic.js")]),t._v(".")]),t._v(" "),r("h3",{attrs:{id:"useplugin"}},[t._v("Use Plugin")]),t._v(" "),r("p",[r("code",[t._v("matic.js")]),t._v(" expose "),r("code",[t._v("use")]),t._v(" method for using a plugin.")]),t._v(" "),r("pre",[r("code",[t._v("import { use } from '@maticnetwork/maticjs'\n\nuse(MyPlugin)\n")])]),t._v(" "),r("p",[t._v("You can use multiple plugins and they will be called in the same order as they are declared.")]),t._v(" "),r("p",[r("strong",[t._v("Some plugin repo are -")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/maticnetwork/maticjs-web3"}},[t._v("Matic web3.js")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/maticnetwork/maticjs-ethers"}},[t._v("Matic ethers")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/maticnetwork/fx-portal.js"}},[t._v("FxPortal.js")])])])])}),[],!1,null,null,null);e.default=component.exports}}]);