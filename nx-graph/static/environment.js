window.exclude = [];
  window.watch = false;
  window.environment = 'release';
  window.localMode = 'build';

  window.appConfig = {
    showDebugger: false,
    showExperimentalFeatures: false,
    projectGraphs: [
      {
        id: 'local',
        label: 'local',
        url: 'projectGraph.json',
      }
    ],
    defaultProjectGraph: 'local',
  };
  window.projectGraphResponse = {"hash":"7c21c906841b519609a0bd016545e09619b1c9cff7b743fe80f3f560cd53e182","projects":[{"name":"game-client-e2e","type":"e2e","data":{"tags":[],"root":"apps/game-client-e2e","files":[{"file":"apps/game-client-e2e/.eslintrc.json","hash":"696cb8b12127425419f6d2809c5f15a5963d86de"},{"file":"apps/game-client-e2e/cypress.json","hash":"9479cd4c334b763a535aa957945cfa4a399aa7d8"},{"file":"apps/game-client-e2e/project.json","hash":"617ed8deaa7647071f29514d261a207db7045ec6"},{"file":"apps/game-client-e2e/src/fixtures/example.json","hash":"294cbed6ce9e0b948b787452e8676aee486cb3be"},{"file":"apps/game-client-e2e/src/integration/app.spec.ts","hash":"2ea61cdaca3007126b0dbc5706d4854ebfc02454"},{"file":"apps/game-client-e2e/src/support/app.po.ts","hash":"32934246969c2ecb827ac05677785933a707a54d"},{"file":"apps/game-client-e2e/src/support/commands.ts","hash":"310f1fa0e043ffebbbcf575c5a4d17f13a6b14d6"},{"file":"apps/game-client-e2e/src/support/index.ts","hash":"3d469a6b6cf31eb66117d73e278bcf74f398f1db"},{"file":"apps/game-client-e2e/tsconfig.json","hash":"c4f818ecd40fbce82c3e08bf25cde3043970f8f3"}]}},{"name":"internal-client","type":"app","data":{"tags":[],"root":"apps/internal-client","files":[{"file":"apps/internal-client/.eslintrc.json","hash":"f13f56cc53c7d94063a3c717349e025e863bc78c"},{"file":"apps/internal-client/.gitignore","hash":"3b2917437a329a616ab9794f052d42499acfb142"},{"file":"apps/internal-client/components/dashboard-page/dashboard-page.tsx","hash":"ce61e2bc10ea00919d4bd52be83031b03cadfac0","deps":["npm:@mui/icons-material","npm:@mui/material","common-react","npm:react"]},{"file":"apps/internal-client/index.d.ts","hash":"7ba08fa17ccbb3d5eaa4d9c7b435bd44ff43f330"},{"file":"apps/internal-client/jest.config.ts","hash":"315b134a141cb9ac26109a983501097abfe95d35"},{"file":"apps/internal-client/next-env.d.ts","hash":"4f11a03dc6cc37f2b5105c08f2e7b24c603ab2f4"},{"file":"apps/internal-client/next.config.js","hash":"c8d91ffc7c37947dada231c19b93801954c7bb6c","deps":["npm:@nrwl/next","npm:@sentry/nextjs"]},{"file":"apps/internal-client/pages/_app.tsx","hash":"631a38aa5ae7b6b3a8a0784e6ebd0720c6cad3ce","deps":["npm:next"]},{"file":"apps/internal-client/pages/_document.tsx","hash":"64bca4bb7985698c3f2aab673f00a9fd740b8d45","deps":["npm:react","npm:next","npm:styled-components","common-react"]},{"file":"apps/internal-client/pages/_error.tsx","hash":"49f0ea6e15ade4ef05bb42162b2c7b584d864d84","deps":["npm:@sentry/nextjs","npm:next"]},{"file":"apps/internal-client/pages/404.tsx","hash":"07c722102e80f95c5916411ecf574d2dd643ef7f","deps":["npm:@mui/material"]},{"file":"apps/internal-client/pages/index.tsx","hash":"155a39399c0c1f2fb4f40dca3927a8c82e513d12","deps":["npm:styled-components","common-react","npm:@mui/material"]},{"file":"apps/internal-client/pages/styles.css","hash":"e8df664b21310fb18e3a97b2c89935b5db788787"},{"file":"apps/internal-client/project.json","hash":"337c1a848c817f8ad48368eb71fbcd7c5ab14493"},{"file":"apps/internal-client/public/.gitkeep","hash":"e69de29bb2d1d6434b8b29ae775ad8c2e48c5391"},{"file":"apps/internal-client/public/.nojekyll","hash":"e69de29bb2d1d6434b8b29ae775ad8c2e48c5391"},{"file":"apps/internal-client/public/config.json","hash":"677e3cdebdf644bcfcb8f9416e5b8822b2c01bb0"},{"file":"apps/internal-client/public/nx-graph/graph.json","hash":"c5f027dc631c9c97b9542f93e1d522bd804d98fe"},{"file":"apps/internal-client/README.md","hash":"3621d89b6e8de790afd54ac835bf82292cf2420e"},{"file":"apps/internal-client/sentry.client.config.js","hash":"09f7c52f3f95dc6907fdb47fdbeff354867e30ec","deps":["npm:@sentry/nextjs"]},{"file":"apps/internal-client/sentry.properties","hash":"f51633b67e1028c4cbc985ad5d0f52cb3e0e7e96"},{"file":"apps/internal-client/sentry.server.config.js","hash":"764ac4683848b7df8e1054dd0181c6ec004f424d","deps":["npm:@sentry/nextjs"]},{"file":"apps/internal-client/specs/index.spec.tsx","hash":"77269d9ec1d2ead92093b9882e49eda89c5ccb74","deps":["npm:@testing-library/react"]},{"file":"apps/internal-client/tsconfig.json","hash":"cadb8cda700070fec16641a4c734213862573c1c"},{"file":"apps/internal-client/tsconfig.spec.json","hash":"23a8088f2767edee8d855ed96148c2ec01fda8fc"}]}},{"name":"game-react-e2e","type":"e2e","data":{"tags":[],"root":"apps/game-react-e2e","files":[{"file":"apps/game-react-e2e/.eslintrc.json","hash":"696cb8b12127425419f6d2809c5f15a5963d86de"},{"file":"apps/game-react-e2e/cypress.json","hash":"2bbbfd8a870c07b9bab0cb282f21c753ed658570"},{"file":"apps/game-react-e2e/project.json","hash":"b722f4da63c9fdaa99b7e837eb912f65330fbe6a"},{"file":"apps/game-react-e2e/src/fixtures/example.json","hash":"294cbed6ce9e0b948b787452e8676aee486cb3be"},{"file":"apps/game-react-e2e/src/support/commands.ts","hash":"310f1fa0e043ffebbbcf575c5a4d17f13a6b14d6"},{"file":"apps/game-react-e2e/src/support/index.ts","hash":"3d469a6b6cf31eb66117d73e278bcf74f398f1db"},{"file":"apps/game-react-e2e/tsconfig.json","hash":"c4f818ecd40fbce82c3e08bf25cde3043970f8f3"}]}},{"name":"common-react","type":"lib","data":{"tags":[],"root":"libs/common-react","files":[{"file":"libs/common-react/.babelrc","hash":"ccae900be42788285eb6e1b3a2af4b81f56f14fe"},{"file":"libs/common-react/.eslintrc.json","hash":"734ddaceea447738208c9519158ad6b3062f3929"},{"file":"libs/common-react/.storybook/main.js","hash":"b17a4cd6ebe5e3b9bf8f3b47328cfa969bc0fef5"},{"file":"libs/common-react/.storybook/tsconfig.json","hash":"7a1170995999ff179ae31ea7b87133b1c2161bc2"},{"file":"libs/common-react/jest.config.ts","hash":"b59a0a99ecbe1f0f88b49e3267d438b75f245568"},{"file":"libs/common-react/package.json","hash":"b9f549a8fa4d69843afe074dd8ccb9d5b90a18ce"},{"file":"libs/common-react/project.json","hash":"bec8a20259078de9a3fc2340234d37049c5fffb8"},{"file":"libs/common-react/README.md","hash":"6c1acbabe912e9583cbf498fb7a5b9801d49eb9f"},{"file":"libs/common-react/src/index.ts","hash":"af98f1126ddd4944d82ea7b4c5438817e5d120e1"},{"file":"libs/common-react/src/lib/components/google-analytics/google-analytics.tsx","hash":"df4d1326d02425b0b183a7403f144af54705b292"},{"file":"libs/common-react/src/lib/components/header-bar/header-bar-context.ts","hash":"0677e6b9daddd842b49751c2ee94f3f64f3aa532","deps":["npm:react"]},{"file":"libs/common-react/src/lib/components/header-bar/header-bar.spec.tsx","hash":"e7b2f6b49ce9dacea72c24862f46f3d58b4c12ae","deps":["npm:@testing-library/react"]},{"file":"libs/common-react/src/lib/components/header-bar/header-bar.stories.tsx","hash":"036c179d8ee92c80ff2240c6b0772a4ed7694587","deps":["npm:@mui/material","npm:@mui/icons-material","npm:@storybook/react"]},{"file":"libs/common-react/src/lib/components/header-bar/header-bar.tsx","hash":"dd1b044da5b0dde7d900533374ef7d46c7ac98a6","deps":["npm:@mui/icons-material","npm:@mui/material","npm:react"]},{"file":"libs/common-react/src/lib/components/header-search/header-search.stories.tsx","hash":"a9da4c2d2c1e9267af519df95943c527b99791bc","deps":["npm:@storybook/react","npm:@mui/material"]},{"file":"libs/common-react/src/lib/components/header-search/header-search.tsx","hash":"cc8172116a221662ca454c5048dbca1ec460df83","deps":["game","npm:@mui/material","npm:@mui/icons-material","npm:react"]},{"file":"libs/common-react/src/lib/components/header-user/header-user.stories.tsx","hash":"837afb3023157e4232473ce37f2f9573f2f7cb29","deps":["npm:@storybook/react","npm:@mui/material"]},{"file":"libs/common-react/src/lib/components/header-user/header-user.tsx","hash":"354461938201d1018de468883426ad0351805917","deps":["npm:@auth0/nextjs-auth0","npm:@mui/material","npm:@mui/icons-material","npm:react"]},{"file":"libs/common-react/src/lib/components/side-nav/side-nav.spec.tsx","hash":"bd89a59660cf03e8cd28252a21d958be65295502","deps":["npm:@testing-library/react"]},{"file":"libs/common-react/src/lib/components/side-nav/side-nav.stories.tsx","hash":"2d939604e03b5b1857074fc9686220c6fa1ce2eb","deps":["npm:@mui/material","npm:@storybook/react"]},{"file":"libs/common-react/src/lib/components/side-nav/side-nav.tsx","hash":"b150c7377635b2c11d666e4901737c77c96bb39e","deps":["npm:@mui/material","npm:@mui/icons-material","npm:react"]},{"file":"libs/common-react/src/lib/hooks/index.ts","hash":"12bce91618b2ae9f148542d5d0e0dd04a18aac2a"},{"file":"libs/common-react/src/lib/hooks/theme-context.ts","hash":"6ca8fdcab60f4567c825b7a2695a88f2b1428243","deps":["npm:react"]},{"file":"libs/common-react/src/lib/hooks/theme-provider.tsx","hash":"4675eae508d5157070d7e7fd9e5508ae956c83e7","deps":["npm:react"]},{"file":"libs/common-react/src/lib/hooks/use-config.spec.tsx","hash":"74a81f5919a6c4e049a79b22410c60226e6a56b2","deps":["npm:@testing-library/react","npm:react"]},{"file":"libs/common-react/src/lib/hooks/use-config.ts","hash":"50228a5c574255b2a709b2c3e16b0b13a3723452","deps":["npm:react"]},{"file":"libs/common-react/src/lib/hooks/use-local-forage.ts","hash":"145b7cabbc42d258f2690578ac911d889708d094","deps":["npm:localforage","npm:react"]},{"file":"libs/common-react/src/lib/hooks/use-logger.ts","hash":"e95acb200def421f0df444960249141d8ae90fbb","deps":["common","npm:react"]},{"file":"libs/common-react/src/lib/hooks/use-nx-graph.ts","hash":"36c11fd630a96b4ded3d5c8784541b7d97bc8965","deps":["npm:react"]},{"file":"libs/common-react/src/lib/hooks/use-script.ts","hash":"8b5bf160ac1ea391287b718cedff8444e9426d6a","deps":["npm:react"]},{"file":"libs/common-react/src/lib/types/base-config.ts","hash":"5648d8afc499d735be0b82653fd3120e882276a3"},{"file":"libs/common-react/src/lib/types/index.ts","hash":"5161f4c99558ace611f07d674479df81aab171eb"},{"file":"libs/common-react/src/lib/types/themes.ts","hash":"8f233e77e5937a78b7da8e04e8d74555ee7bf853"},{"file":"libs/common-react/src/lib/utils/combine-components.tsx","hash":"6e13194af9442ef6c8e506b8240596ee89c73deb","deps":["npm:react"]},{"file":"libs/common-react/src/lib/utils/get-config.ts","hash":"e1c5b38b333ee58223fe8bc99610e4ca0237f663"},{"file":"libs/common-react/src/lib/utils/get-nx-graph.ts","hash":"9c87613999586cf84dd4dcfdfa6ebb6fcb5e79e8"},{"file":"libs/common-react/src/lib/utils/get-projects-by-target.spec.ts","hash":"573db404eb241631ca259c521bf5a906dd8b520d"},{"file":"libs/common-react/src/lib/utils/get-projects-by-target.ts","hash":"0b8a3e7fdb9092e8827c2f6c96b8d4b62487ef6f"},{"file":"libs/common-react/src/lib/utils/index.ts","hash":"d39a90a988a6155d294de5e57515d1c88e58991d"},{"file":"libs/common-react/tsconfig.json","hash":"9fff9cc2db0cca15bc96bf1cde3e27146d3922f2"},{"file":"libs/common-react/tsconfig.lib.json","hash":"2e54c51309bc084f59acb6b55604a4803b3fb238"},{"file":"libs/common-react/tsconfig.spec.json","hash":"ff08addd60ff581234ec9423d2bb90f31d8166e8"},{"file":"libs/common-react/typedoc.json","hash":"0df9bd3ed0bb9c9319f89ab55b71985fcba330f7"}]}},{"name":"game-client","type":"app","data":{"tags":[],"root":"apps/game-client","files":[{"file":"apps/game-client/.eslintrc.json","hash":"3e7f73889347f14dee65dd2817caeca44a880a73"},{"file":"apps/game-client/core/app-header/app-header.tsx","hash":"a7df964c1c3b45aa4b13470b9ed4badef205faf2","deps":["npm:@auth0/nextjs-auth0","game-react","npm:next"]},{"file":"apps/game-client/index.d.ts","hash":"7ba08fa17ccbb3d5eaa4d9c7b435bd44ff43f330"},{"file":"apps/game-client/jest.config.ts","hash":"aa6acba72eade1ed55b7c40dd3e929c1e361897b"},{"file":"apps/game-client/next-env.d.ts","hash":"4f11a03dc6cc37f2b5105c08f2e7b24c603ab2f4"},{"file":"apps/game-client/next.config.js","hash":"7922ea7e424f288b2b5118330010a9abb0cf1598","deps":["npm:@nrwl/next"]},{"file":"apps/game-client/pages/_app.tsx","hash":"00ce8552d0cb40c1dff2bfc1595ff23f5bbca7bc","deps":["npm:@mui/material","npm:next","npm:@auth0/nextjs-auth0"]},{"file":"apps/game-client/pages/_document.tsx","hash":"4d4b720886f881bd3be504f1015c5bd28e5eb339","deps":["npm:react","npm:next","npm:styled-components","common-react"]},{"file":"apps/game-client/pages/api/auth/[...auth0].ts","hash":"304b4012a1ca4702fe057b30f043d6001daa8e9c","deps":["npm:@auth0/nextjs-auth0"]},{"file":"apps/game-client/pages/dashboard/index.tsx","hash":"eef98fac26d5abe177551dc7b2d7ae27ef2b6612"},{"file":"apps/game-client/pages/game/index.tsx","hash":"638dc8d99c4ba6fed6820a834ce881b164c62d09"},{"file":"apps/game-client/pages/index.tsx","hash":"24e0c6e3af0f675066f2e65b57f87701cde51720"},{"file":"apps/game-client/pages/lobby/[game-session-id].tsx","hash":"f07af9a88553d3408a482016ea0d7a880f886618","deps":["npm:@auth0/nextjs-auth0","game","npm:next"]},{"file":"apps/game-client/pages/styles.css","hash":"e8df664b21310fb18e3a97b2c89935b5db788787"},{"file":"apps/game-client/project.json","hash":"11bfc21d24ed6d78a9093e320dfe74cc0730c259"},{"file":"apps/game-client/public/.gitkeep","hash":"e69de29bb2d1d6434b8b29ae775ad8c2e48c5391"},{"file":"apps/game-client/README.md","hash":"c1ff396e6da4b275863fc9f673c5c478b2d46c12"},{"file":"apps/game-client/specs/index.spec.tsx","hash":"42c94022afd1c1c396f85b24a08d75984b8adb9c","deps":["npm:react","npm:@testing-library/react"]},{"file":"apps/game-client/tsconfig.json","hash":"cadb8cda700070fec16641a4c734213862573c1c"},{"file":"apps/game-client/tsconfig.spec.json","hash":"23a8088f2767edee8d855ed96148c2ec01fda8fc"}]}},{"name":"game-react","type":"lib","data":{"tags":[],"root":"libs/game-react","files":[{"file":"libs/game-react/.babelrc","hash":"e513ea41ca325d74425a9a7d2bbbd2c4054d1c88"},{"file":"libs/game-react/.eslintrc.json","hash":"734ddaceea447738208c9519158ad6b3062f3929"},{"file":"libs/game-react/.storybook/main.js","hash":"b17a4cd6ebe5e3b9bf8f3b47328cfa969bc0fef5"},{"file":"libs/game-react/.storybook/preview.js","hash":"e69de29bb2d1d6434b8b29ae775ad8c2e48c5391"},{"file":"libs/game-react/.storybook/tsconfig.json","hash":"286dc2f6355dd1648ce24735eb8e2f73812f43e0"},{"file":"libs/game-react/jest.config.ts","hash":"175a6b835e6d731f348b1bf18695cd4648213930"},{"file":"libs/game-react/package.json","hash":"2d1dd5bcd761da4b65d68b38d5540fc27ca9b30b"},{"file":"libs/game-react/project.json","hash":"bc4497292bc31153b26668ad79132e5998d94248"},{"file":"libs/game-react/README.md","hash":"f3f71c7d00afabafd5ef8f03255ce3ff87115da5"},{"file":"libs/game-react/src/index.ts","hash":"aad2944835d6adc3941d25bc719d6cf7e82e93ac"},{"file":"libs/game-react/src/lib/core/header/header.stories.tsx","hash":"23785277148faab44bc1b31ff24ca4d8364229fe","deps":["npm:@storybook/react"]},{"file":"libs/game-react/src/lib/core/header/header.tsx","hash":"4925cbe8de73246074dde952e12f33dcbd564860","deps":["common-react","npm:@mui/material","npm:@mui/icons-material","npm:react","npm:next"]},{"file":"libs/game-react/src/lib/pages/.gitkeep","hash":"e69de29bb2d1d6434b8b29ae775ad8c2e48c5391"},{"file":"libs/game-react/tsconfig.json","hash":"9fff9cc2db0cca15bc96bf1cde3e27146d3922f2"},{"file":"libs/game-react/tsconfig.lib.json","hash":"2e54c51309bc084f59acb6b55604a4803b3fb238"},{"file":"libs/game-react/tsconfig.spec.json","hash":"ff08addd60ff581234ec9423d2bb90f31d8166e8"}]}},{"name":"storybook","type":"lib","data":{"tags":[],"root":"libs/storybook","files":[{"file":"libs/storybook/.babelrc","hash":"ccae900be42788285eb6e1b3a2af4b81f56f14fe"},{"file":"libs/storybook/.eslintrc.json","hash":"734ddaceea447738208c9519158ad6b3062f3929"},{"file":"libs/storybook/.storybook/main.js","hash":"d208510acb95068da99626be8ad356ad472fd259"},{"file":"libs/storybook/.storybook/preview-head.html","hash":"31db416a9aabb1122a1a6e59418a61272abebc0c"},{"file":"libs/storybook/.storybook/tsconfig.json","hash":"5236331a19174caa1865949505d8ce05a8163da9"},{"file":"libs/storybook/jest.config.ts","hash":"d6e42f3cbe680e87312920043cf29c1665fabe9b"},{"file":"libs/storybook/package.json","hash":"d11f91f93e7afb2ff329d118727ae1e232b92ffb"},{"file":"libs/storybook/project.json","hash":"c1ae4064a69befa55127f465489aad319cc66140"},{"file":"libs/storybook/README.md","hash":"2e02fbd3176bbb8855c450b7606e919cd1e92722"},{"file":"libs/storybook/src/index.ts","hash":"fb1481ec27960d4ff8714ef327c02b3939c32312"},{"file":"libs/storybook/src/lib/storybook-landing.spec.tsx","hash":"cf98d24b844457a1a5d303f3d685a8cbf561d14d","deps":["npm:@testing-library/react"]},{"file":"libs/storybook/src/lib/storybook-landing.stories.tsx","hash":"1077d8f56b34ca2b9f8e07a33947ddfb279b71fa","deps":["npm:@mui/material","npm:@storybook/react"]},{"file":"libs/storybook/src/lib/storybook-landing.tsx","hash":"a96abdad9b66b78a33e24d7eb76a10745314fa5e","deps":["npm:@mui/material","npm:react"]},{"file":"libs/storybook/tsconfig.json","hash":"9fff9cc2db0cca15bc96bf1cde3e27146d3922f2"},{"file":"libs/storybook/tsconfig.lib.json","hash":"2e54c51309bc084f59acb6b55604a4803b3fb238"},{"file":"libs/storybook/tsconfig.spec.json","hash":"ff08addd60ff581234ec9423d2bb90f31d8166e8"},{"file":"libs/storybook/typedoc.json","hash":"85163ace684abcf02f209f2c1db480fd9beecaeb"}]}},{"name":"common","type":"lib","data":{"tags":[],"root":"libs/common","files":[{"file":"libs/common/.babelrc","hash":"cf7ddd99c615a064ac18eb3109eee4f394ab1faf"},{"file":"libs/common/.eslintrc.json","hash":"9d9c0db55bb1e91c5f2e7b64a02bc6bf69fc7cb5"},{"file":"libs/common/jest.config.ts","hash":"43acc9da0efabd776fc72123e32ef2199372a264"},{"file":"libs/common/package.json","hash":"e2729c8a7a9555c70b55f0b074d67c590c18cc91"},{"file":"libs/common/project.json","hash":"3065be444d5cea02c7da0b6e4b2e59faa9bf6d48"},{"file":"libs/common/README.md","hash":"0246461f2c49545e5963fdbb5798244091246ac2"},{"file":"libs/common/src/index.ts","hash":"efb36b5cbe0761ecb2c5317b79268e110d295175"},{"file":"libs/common/src/lib/models/document-with-id.ts","hash":"2e9e79933c5773b6e0422aff32ac7b94acbbac43"},{"file":"libs/common/src/lib/models/index.ts","hash":"dbc33d1d2e816fe7dcb1493604af1b4d9f597b7f"},{"file":"libs/common/src/lib/utils/common-logger.spec.ts","hash":"984ea721cb129c3c44e456d99d7d66c82e8e8f92"},{"file":"libs/common/src/lib/utils/common-logger.ts","hash":"187f11ee436fc8db4590176f07a5ea5691b5d5c0"},{"file":"libs/common/src/lib/utils/get-id.spec.ts","hash":"1a131e1c17bf5f523d6530d9058974b596800eaa"},{"file":"libs/common/src/lib/utils/get-id.ts","hash":"d1cb5ac3f252c82aadc32014eeff341c40d06dbb"},{"file":"libs/common/src/lib/utils/index.ts","hash":"2c5250e0749b07a09903b23cede950e91baf8ce2"},{"file":"libs/common/tsconfig.json","hash":"e258886ffc933cca0326ceb2ee4fde881378131b"},{"file":"libs/common/tsconfig.lib.json","hash":"0e2a172abd561482f8c5e4d9ad900e03a9e48260"},{"file":"libs/common/tsconfig.spec.json","hash":"ff08addd60ff581234ec9423d2bb90f31d8166e8"},{"file":"libs/common/typedoc.json","hash":"f17b64fe6c15fb08a2b83fc32b966310866c0297"}]}},{"name":"game","type":"lib","data":{"tags":[],"root":"libs/game","files":[{"file":"libs/game/.babelrc","hash":"cf7ddd99c615a064ac18eb3109eee4f394ab1faf"},{"file":"libs/game/.eslintrc.json","hash":"9d9c0db55bb1e91c5f2e7b64a02bc6bf69fc7cb5"},{"file":"libs/game/jest.config.ts","hash":"f138664d7cb904463b4a418ebca82dad8cdd2b85"},{"file":"libs/game/package.json","hash":"1e81d6966f18f45e5411440e8b17cb720048d5f0"},{"file":"libs/game/project.json","hash":"f34fde98cd743440bf24c4f845c9aa5aca5c85f6"},{"file":"libs/game/README.md","hash":"b8c5cfc7cd116092a59fe4f26345630adfe5a9dc"},{"file":"libs/game/src/index.ts","hash":"efb36b5cbe0761ecb2c5317b79268e110d295175"},{"file":"libs/game/src/lib/game.spec.ts","hash":"20cf733d7ac786c29ea0916384669ff587b96452"},{"file":"libs/game/src/lib/game.ts","hash":"a46f4648c5e99ed3db3ef505a29527773b47173a"},{"file":"libs/game/src/lib/models/board/board-entity-id.spec.ts","hash":"98bc80d26467600e5f22ac253beff295c1ae8285"},{"file":"libs/game/src/lib/models/board/board-entity-id.ts","hash":"4c1c578b1949d8c7e0e976872c20ff4bd575de14","deps":["npm:nanoid"]},{"file":"libs/game/src/lib/models/board/board-entity.spec.ts","hash":"6627f943a394eaaa6f073be8660346ae5bcdc3bc"},{"file":"libs/game/src/lib/models/board/board-entity.ts","hash":"81671ff7e9477a882bd24003ffda403194b86517"},{"file":"libs/game/src/lib/models/board/board-grid.spec.ts","hash":"f0fa3d43d8deda0a508e7c7274e18326ba7de7ca"},{"file":"libs/game/src/lib/models/board/board-grid.ts","hash":"a07955bf7f231ca2fa4486d0a525cc27d57956dc"},{"file":"libs/game/src/lib/models/board/board-height.spec.ts","hash":"1ff0983f3663556f85c22a96117fccd113e3ba6d"},{"file":"libs/game/src/lib/models/board/board-height.ts","hash":"54854cdb01065eb3732a5bb46dc7908976353315"},{"file":"libs/game/src/lib/models/board/board-location.spec.ts","hash":"fb47436ae4cd9897a161706989d3d1fa17615f4d"},{"file":"libs/game/src/lib/models/board/board-location.ts","hash":"b86a5c0821ab84b13c5aba8d5e2b51213553a8d1"},{"file":"libs/game/src/lib/models/board/board-row.spec.ts","hash":"8b529cc5b8173211c71e943d3fe5bf24499a213a"},{"file":"libs/game/src/lib/models/board/board-row.ts","hash":"39a70fce8990788fa842102d651927c45aa9e249"},{"file":"libs/game/src/lib/models/board/board-x.spec.ts","hash":"42e10d4a59bd3f08e3c56d90c2ce49dc0476697d"},{"file":"libs/game/src/lib/models/board/board-x.ts","hash":"96b5ee416e4ad9754b4c414bbfab3a329fd8122a"},{"file":"libs/game/src/lib/models/board/board-y.spec.ts","hash":"e9b35d529cd7706056d30fc516c4a8093a791c28"},{"file":"libs/game/src/lib/models/board/board-y.ts","hash":"207a9c47ad927ed139602a208c4ef0dbc13e2049"},{"file":"libs/game/src/lib/models/board/direction.spec.ts","hash":"b2bcc591259ea138eb11e1d53af508572add09a6"},{"file":"libs/game/src/lib/models/board/direction.ts","hash":"47ac5e1a8e41eeb77e5cd5b66965216ca3b6a023"},{"file":"libs/game/src/lib/models/board/index.ts","hash":"fc5f46decc6e1a1071418b0363aaf09eb9d8a0aa"},{"file":"libs/game/src/lib/models/board/near-location.spec.ts","hash":"61727e4213e9f536e084101816496fd8c5ce1196"},{"file":"libs/game/src/lib/models/board/near-location.ts","hash":"b87f090333aa398de66dc2e892f79a4b1d689b90"},{"file":"libs/game/src/lib/models/card/defensive-card.spec.ts","hash":"152606d8deadd8c6eb13fa9bbdb0a0e25af786be"},{"file":"libs/game/src/lib/models/card/defensive-card.ts","hash":"d94eedd08e0320df19859f72837b657bb77623dd"},{"file":"libs/game/src/lib/models/card/index.ts","hash":"582541bcf385009bea1fbecbcb5e10815a25ac44"},{"file":"libs/game/src/lib/models/card/offensive-card.spec.ts","hash":"2217549edd5667f218f298faf31e33b22f52d05e"},{"file":"libs/game/src/lib/models/card/offensive-card.ts","hash":"6e71fe971ad8d3b6628263b8f751781474f70852"},{"file":"libs/game/src/lib/models/card/plane-card.spec.ts","hash":"67d1ff7aa8e32f5397b48dc521461e773e905363"},{"file":"libs/game/src/lib/models/card/plane-card.ts","hash":"a7cb404327168752ec408cdcfa5b8768e207e96c"},{"file":"libs/game/src/lib/models/game-session/dice-sides.spec.ts","hash":"cd6b7c662e7e56c91bb04b6408973badd15565af"},{"file":"libs/game/src/lib/models/game-session/dice-sides.ts","hash":"dbe3e98da983a569d181b7d0a8ae3ae387a58576"},{"file":"libs/game/src/lib/models/game-session/faction-side.spec.ts","hash":"781db83b226a91c60eb919a4dd19ad75f76cc6b0"},{"file":"libs/game/src/lib/models/game-session/faction.ts","hash":"12529770d3b52a47a7530c3ef3210171cb5e38bf"},{"file":"libs/game/src/lib/models/game-session/game-move-id.spec.ts","hash":"b1387203f374ba70c6987aa6b964d6c86205a1b1"},{"file":"libs/game/src/lib/models/game-session/game-move-id.ts","hash":"3e5f4da74a27004bde3cd069b2fc50a18d686ebe","deps":["npm:nanoid"]},{"file":"libs/game/src/lib/models/game-session/game-move.ts","hash":"ea623be1f41d96b70da388a8133fb8de399c6c84","deps":["common"]},{"file":"libs/game/src/lib/models/game-session/game-session-id.ts","hash":"718e56d2b90fd48c24a8779f04f4ee392758e390","deps":["npm:nanoid"]},{"file":"libs/game/src/lib/models/game-session/game-session.ts","hash":"8997148f6f84045ff51e46882c435872b882894d"},{"file":"libs/game/src/lib/models/game-session/index.ts","hash":"17d8b2bcb909597e00392b1216e7492603c7feec"},{"file":"libs/game/src/lib/models/game-session/roll-id.ts","hash":"41e1f64cb2a4a2e2534a6bba25ba1ec7eb2d7e90","deps":["npm:nanoid"]},{"file":"libs/game/src/lib/models/game-session/roll.ts","hash":"87027e2d0ce369a3c31b5bcdca2ebf70b2d277e4"},{"file":"libs/game/src/lib/models/index.ts","hash":"8820bcd57d5fa2e23fe8d56bf816c9686736d544"},{"file":"libs/game/src/lib/models/plane/index.ts","hash":"bd2a9ca72d79c83171d3376ac1c27ee8104ce869"},{"file":"libs/game/src/lib/models/plane/plane-id.ts","hash":"628b036db29974461a08042d13e829e16ea9e8cc"},{"file":"libs/game/src/lib/models/plane/plane-squadron.ts","hash":"2f272a30785e972c55e52c8db3e02d798f809759"},{"file":"libs/game/src/lib/models/plane/plane.ts","hash":"c643951e280bf0bdef95eb6cf2635efec7762710"},{"file":"libs/game/src/lib/utils/board-to-str/board-to-str.spec.ts","hash":"437bb4fc09e79fedfddc1f1c3468fbb7e8903cbf"},{"file":"libs/game/src/lib/utils/board-to-str/board-to-str.ts","hash":"5cbbcd2512577b4c5e59f34c72c8219c4a39332e"},{"file":"libs/game/src/lib/utils/index.ts","hash":"46d7ca5af988b2e4db5edd2792512d474c07cbdd"},{"file":"libs/game/src/lib/utils/on-move/get-move-locations.spec.ts","hash":"43ee7a49217059f26e73977cc5242e3344c1bfa0"},{"file":"libs/game/src/lib/utils/on-move/get-move-locations.ts","hash":"27b02e57fcba4e577daa93e5d0de3de92066323c"},{"file":"libs/game/tsconfig.json","hash":"62ebbd946474cea997e774d20fffc4d585c184f3"},{"file":"libs/game/tsconfig.lib.json","hash":"0e2a172abd561482f8c5e4d9ad900e03a9e48260"},{"file":"libs/game/tsconfig.spec.json","hash":"ff08addd60ff581234ec9423d2bb90f31d8166e8"}]}}],"dependencies":{"game-client-e2e":[{"source":"game-client-e2e","target":"game-client","type":"implicit"}],"internal-client":[{"source":"internal-client","target":"common-react","type":"static"}],"game-react-e2e":[{"source":"game-react-e2e","target":"game-react","type":"implicit"}],"common-react":[{"source":"common-react","target":"game","type":"static"},{"source":"common-react","target":"common","type":"static"}],"game-client":[{"source":"game-client","target":"game-react","type":"static"},{"source":"game-client","target":"common-react","type":"static"},{"source":"game-client","target":"game","type":"static"}],"game-react":[{"source":"game-react","target":"common-react","type":"static"}],"storybook":[],"common":[],"game":[{"source":"game","target":"common","type":"static"}]},"layout":{"appsDir":"apps","libsDir":"libs"},"affected":[],"focus":null,"groupByFolder":false,"exclude":[]};