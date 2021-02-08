const scenes = {
  1: {
    id: '1',
    character: '🐶',
    message: '今日はいい天気です\n外にでかけますか？',
    actions: [
      {
        label: 'はい',
        to: '2'
      }, {
        label: 'いいえ',
        to: '3'
      }
    ]
  },
  2: {
    id: '2',
    character: '🐶',
    message: 'ありがとう',
    actions: []
  },
  3: {
    id: '2',
    character: '🐶',
    message: 'なんでなん？',
    actions: []
  }
}

export default scenes
