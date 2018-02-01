<template>
  <div id="vue">
      <h1>welcome vue!</h1>
      <p>{{data}}</p>
      <ul>
          <li><a href="http://www.baidu.com" target="blank"><span>这是列表</span></a></li>
          <li><a href="/"><span>这是列表</span></a></li>
          <li><a href=""><span>这是列表</span></a></li>
          <li><a href=""><span>这是列表</span></a></li>
      </ul>
  </div>
</template>
<script>
export default {
  name:"vue",
  data(){
      return{
          data:"data show me!"
      }
  }
}
</script>

