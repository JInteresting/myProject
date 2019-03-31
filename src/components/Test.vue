<template>
  <div>
    <home ref="test" :img="img"></home>
  </div>
</template>

<script>
import home from './Home'
export default {
  components:{
    home,
  },
  data(){
    return {
      img:[{
        source: require('@/img/5.jpg'),
        des: 'EEEE',
      }, {
        source: require('@/img/1.jpg'),
        des: 'AAAA',
      }, {
        source: require('@/img/2.jpg'),
        des: 'BBBB',
      }, {
        source: require('@/img/3.jpg'),
        des: 'CCCC',
      }, {
        source: require('@/img/4.jpg'),
        des: 'DDDD',
      }, {
        source: require('@/img/5.jpg'),
        des: 'EEEE',
      }, {
        source: require('@/img/1.jpg'),
        des: 'AAAA',
      }]
    }
  },
  methods:{

  }
}
</script>

<style scoped>

</style>
