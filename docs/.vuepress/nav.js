//导航栏
module.exports = [
      { text: '主页', link: '/index.html', icon: 'reco-home' },
      { text: '笔记', 
      	icon: 'reco-category',
      	items: [
		  { text: '笔记概览', link: '/categories/'},
		  { text: 'love', link: 'https://zpj80231.github.io/znote/html/love.html'},
		]
      },
      { text: '标签', link: '/tags/', icon: 'reco-tag' },
      { text: '时间线', link: '/timeLine/', icon: 'reco-date' },
      { text: '关于我', link: '/about/',icon: 'reco-message'}
]