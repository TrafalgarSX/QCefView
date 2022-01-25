"use strict";(self.webpackChunkqcefviewdoc=self.webpackChunkqcefviewdoc||[]).push([[579],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=i,y=d["".concat(u,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(y,a(a({ref:t},s),{},{components:n})):r.createElement(y,a({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9017:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],c={sidebar_position:4},u="CefViewQuery",l={unversionedId:"guide/CefviewQuery",id:"guide/CefviewQuery",title:"CefViewQuery",description:"window.CefViewQuery(query) is yet another approach to communicate from Javascript to C++ code, but in this way the communication is ASYNCHRONOUS operation. For more details please refer to the API reference.",source:"@site/docs/guide/CefviewQuery.md",sourceDirName:"guide",slug:"/guide/CefviewQuery",permalink:"/QCefView/docs/guide/CefviewQuery",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"default",previous:{title:"Interoperability",permalink:"/QCefView/docs/guide/Interoperability"},next:{title:"Reference",permalink:"/QCefView/docs/reference/"}},s=[{value:"Add Javascript Code",id:"add-javascript-code",children:[],level:2},{value:"Add C++ Code",id:"add-c-code",children:[],level:2},{value:"Run the Application",id:"run-the-application",children:[],level:2}],p={toc:s};function d(e){var t=e.components,c=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cefviewquery"},"CefViewQuery"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/reference/WebAPIs#web_apis_CefViewQuery"},(0,o.kt)("inlineCode",{parentName:"a"},"window.CefViewQuery")),(0,o.kt)("inlineCode",{parentName:"p"},"(query)")," is yet another approach to communicate from Javascript to C++ code, but in this way the communication is ",(0,o.kt)("inlineCode",{parentName:"p"},"ASYNCHRONOUS")," operation. For more details please refer to the API reference."),(0,o.kt)("p",null,"When this method gets called from Javascript, the following Qt signal will be emitted:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"public void "),(0,o.kt)("a",{parentName:"p",href:"/docs/reference/QCefView#class_q_cef_view_1acbf62eea36993163c4b70b4df96738d8"},(0,o.kt)("inlineCode",{parentName:"a"},"cefQueryRequest")),(0,o.kt)("inlineCode",{parentName:"p"},"(int browserId,int frameId,const "),(0,o.kt)("a",{parentName:"p",href:"/docs/reference/QCefQuery#class_q_cef_query"},(0,o.kt)("inlineCode",{parentName:"a"},"QCefQuery")),(0,o.kt)("inlineCode",{parentName:"p"}," & query)")),(0,o.kt)("p",null,"In this section let's demonstrate the usage of CefViewQuery with some simple code."),(0,o.kt)("h2",{id:"add-javascript-code"},"Add Javascript Code"),(0,o.kt)("p",null,"Add Javascript code as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'    function onCallBridgeQueryClicked() {\n      var query = {\n        request: document.getElementById("message").value,\n        onSuccess: function (response) {\n          alert(response);\n        },\n        onFailure: function (error_code, error_message) {\n          alert(error_message);\n        },\n      };\n      window.CefViewQuery(query);\n    }\n')),(0,o.kt)("p",null,"Add HTML code as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'    <label> Test Case for QCefQuery </label>\n    <br />\n    <textarea id="message" style="width: 320px; height: 120px">\n      this message will be processed by native code.\n    </textarea>\n    <br />\n    <input type="button" value="Query" onclick="onCallBridgeQueryClicked()" />\n')),(0,o.kt)("h2",{id:"add-c-code"},"Add C++ Code"),(0,o.kt)("p",null,"Add C++ code as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'MainWindow::MainWindow(QWidget* parent)\n  : QMainWindow(parent)\n{\n  // ...\n\n  // connect the cefQueryRequest to the slot\n  connect(cefViewWidget,\n          SIGNAL(cefQueryRequest(int, int, const QCefQuery&)),\n          this,\n          SLOT(onQCefQueryRequest(int, int, const QCefQuery&)));\n\n  // ...\n}\n\nvoid\nMainWindow::onQCefQueryRequest(int browserId, int frameId, const QCefQuery& query)\n{\n  QMetaObject::invokeMethod(\n    this,\n    [=]() {\n      QString title("QCef Query Request");\n      QString text = QString("Current Thread: QT_UI\\r\\n"\n                             "Query: %1")\n                       .arg(query.request());\n\n      QMessageBox::information(this->window(), title, text);\n\n      QString response = query.request().toUpper();\n      query.setResponseResult(true, response);\n      cefViewWidget->responseQCefQuery(query);\n    },\n    Qt::QueuedConnection);\n}\n')),(0,o.kt)("h2",{id:"run-the-application"},"Run the Application"),(0,o.kt)("p",null,"Now let's run the application."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"First Project",src:n(4977).Z})),(0,o.kt)("p",null,"Click the button in web area to invoke the C++ code"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"First Project",src:n(1331).Z})))}d.isMDXComponent=!0},4977:function(e,t,n){t.Z=n.p+"assets/images/cefview-query-01-c15d60e8983ff454b84164a942fe9ede.png"},1331:function(e,t,n){t.Z=n.p+"assets/images/cefview-query-02-b7adb24b4c3ae43408bb4e478de6a742.png"}}]);