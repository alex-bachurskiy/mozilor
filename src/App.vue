<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">

@font-face {
	font-family: "Europe Bold";
	src: url("~@/assets/fonts/europe-bold/europe-bold.eot"); /* IE9 Compat Modes */
	src: url("~@/assets/fonts/europe-bold/europe-bold.eot?#iefix") format("embedded-opentype"), /* IE6-IE8 */
		url("~@/assets/fonts/europe-bold/europe-bold.otf") format("opentype"), /* Open Type Font */
		url("~@/assets/fonts/europe-bold/europe-bold.svg") format("svg"), /* Legacy iOS */
		url("~@/assets/fonts/europe-bold/europe-bold.ttf") format("truetype"), /* Safari, Android, iOS */
		url("~@/assets/fonts/europe-bold/europe-bold.woff") format("woff"), /* Modern Browsers */
		url("~@/assets/fonts/europe-bold/europe-bold.woff2") format("woff2"); /* Modern Browsers */
	font-weight: 700;
	font-style: normal;
}

@font-face {
	font-family: "Europe Normal";
	src: url("~@/assets/fonts/europe-normal/europe-normal.eot"); /* IE9 Compat Modes */
	src: url("~@/assets/fonts/europe-normal/europe-normal.eot?#iefix") format("embedded-opentype"), /* IE6-IE8 */
		url("~@/assets/fonts/europe-normal/europe-normal.otf") format("opentype"), /* Open Type Font */
		url("~@/assets/fonts/europe-normal/europe-normal.svg") format("svg"), /* Legacy iOS */
		url("~@/assets/fonts/europe-normal/europe-normal.ttf") format("truetype"), /* Safari, Android, iOS */
		url("~@/assets/fonts/europe-normal/europe-normal.woff") format("woff"), /* Modern Browsers */
		url("~@/assets/fonts/europe-normal/europe-normal.woff2") format("woff2"); /* Modern Browsers */
	font-weight: 400;
	font-style: normal;
}

.container {
	padding-right: 166px;
	padding-left: 166px;
}

.btn {
	border-radius: 6px;
	font-size: 16px;
    line-height: 150%;
	font-family: "Europe Bold";
	padding: 14px 22px;
	cursor: pointer;
}

.main__btn__style {
	background: #BF0830;
	color: #FFFFFF;
}

.transperent__btn__style {
	border: 1px solid #BF0830;
	color: #BF0830;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
	font-family: 'Europe Normal';
	color: #484C63;
	font-size: 16px;
    line-height: 27px;
	background: #fff;
}

a {
  text-decoration: none;
}

.btn__style {
  border-radius: 4px;
}

.color-btn__style a {
  color: #FFFFFF;
}

:hover, :active, :focus {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  outline: none;
}

input {
  outline:none;
}

ul,
ol {
  padding: 0;
  list-style: none;
}

body, h1, h2, h3, h4, h5, h6,
p, ul, ol, li, figure, figcaption,
blockquote, dl, dd {
  margin: 0;
}

h1, h2, h3, h4, h5, h6 {
	font-family: "Europe Bold";
	color: #1A2578;
	font-size: 44px;
    line-height: 57px;
}

</style>
