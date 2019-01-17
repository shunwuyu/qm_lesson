// components/badge/badge.js
Component({
  externalClasses: ['wux-class-badge'],
  /**
   * 组件的属性列表
   */
  properties: {
    count: {
      type: Number,
      value: 0,
      observer(newVal) {
        const { overflowCount } = this.data
        // console.log(overflowCount)
        const finalCount = newVal >= overflowCount ? `${overflowCount}+` : newVal
        this.setData({
          finalCount
        })
      }
    },
    overflowCount: {
      type: Number,
      value: 99
    },
    dot: {
      type: Boolean,
      value: false
    },
    showZero: {
      type: Boolean,
      value: false
    },
    status: {
      type: String,
      value: ''
    },
    text: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    finalCount: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
