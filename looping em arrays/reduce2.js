const videos = [{
  id: 'p9mqWsPJEY4',
  title: 'Teclado Mecânico é Melhor pra Programação? + Desafio de Youtubers Tech // Vlog #117',
  views: 37208,
  likes: 10000
},
{
  id: 'Vxl5jUltHBo',
  title: 'Python na Prática fazendo Web Scraping (de JavaScript dinâmico) // Mão no Código #28',
  views: 22510,
  likes: 20000
},
{
  id: 'Xzt7GbQIQTk',
  title: 'As TOP 7 Profissões de Tecnologia do Futuro (O PROGRAMADOR VAI ACABAR?) // Vlog #112',
  views: 34732,
  likes: 2350
},
]

const totalViews = videos.reduce((soma, video) => {
  soma.views += video.views
  soma.likes += video.likes
  return soma
}, { views: 0, likes: 0 })

console.log(totalViews)