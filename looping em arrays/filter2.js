const videoResolution = [
  ['QVGA', '320x240', '4:3'],
  ['QVGA', '320x240', '4:3'],
  ['QVGA', '320x240', '16:9'],
  ['QVGA', '320x240', '4:3'],
  ['QVGA', '320x240', '4:3'],
  ['QVGA', '320x240', '16:9'],
]

const resolution16_9 = videoResolution.filter(value => value[2] == '16:9')

console.log(resolution16_9)