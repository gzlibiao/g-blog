import { App } from 'vue'

// [
//   'link',
//   {
// rel: 'stylesheet',
// id: 'font-awesome-css',
// href: 'https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.min.css',
// type: 'text/css',
// media: 'all'
//   }
// ],
//   [
//     'script',
//     {
//       src: 'https://cdn.staticfile.org/jquery/3.5.1/jquery.min.js'
//     }
//   ],
//   [
//     'div',
//     {
//       id: 'music',
//       key: '646868c966e23',
//       api: 'https://player.qsdurl.cn'
//     }
//   ],
//   [
//     'script',
//     {
//       async: 'true',
//       id: 'xplayer',
//       src: 'https://player.qsdurl.cn/Static/player9/js/player.js'
//     }
//   ]

function install(app: App) {
  console.log(app, 'app12')
  // const $link = document.createElement('link')
  // const $div = document.createElement('div')
  // const $jqScript = document.createElement('script')
  // const $musicScript = document.createElement('script')

  // rel: 'stylesheet',
  //     id: 'font-awesome-css',
  //     href: 'https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.min.css',
  //     type: 'text/css',
  //     media: 'all'
  //     $link.setAttribute("media","all")
  //     $link.setAttribute("type","text/css")
  //     $link.setAttribute("type","text/css")

  // $jqScript.setAttribute(
  //   'src',
  //   'https://cdn.staticfile.org/jquery/3.5.1/jquery.min.js'
  // )
  // $musicScript.setAttribute(
  //   'src',
  //   'https://player.qsdurl.cn/Static/player9/js/player.js'
  // )
  // $musicScript.setAttribute('xplayer', true)
  // app._container.appendChild($style)
  // app._container.appendChild($div)
  // app._container.appendChild($jqScript)
  // app._container.appendChild(
  //   `<div style="position:fixed;top:0;left:0;right:0;bottom:0;background:red">testtesttest</div>`
  // )
  // console.log(app._container, 'container')
  // window.addEventListener('load', () => {
  //   const $dom = document.createElement('div')
  //   $dom.innerHTML = `
  //     <link rel= 'stylesheet'
  //       id= 'font-awesome-css'
  //       href= 'https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.min.css'
  //       type= 'text/css'
  //       media= 'all' />
  //     <div id='music' key='646868c966e23' api='https://player.qsdurl.cn'></div>
  //     <script defer='true' id= 'xplayer' src='https://cdn.staticfile.org/jquery/3.5.1/jquery.min.js'/>
  //     <script id= 'xplayer' src='https://player.qsdurl.cn/Static/player9/js/player.js'/>
  //   `

  //   // '
  //   // < script src = "https://player.qsdurl.cn/Static/player9/js/player.js" /> '
  //   console.log('load', $dom)
  //   document.getElementsByTagName('body')[0].append($dom)
  // })
}

export default {
  install
}
