<style lang="less">
.app-footer {
  font-size: 15px;
  text-align: center;
  padding: 10px 0 30px;
  color: rgba(0,0,0,.45);
  a {
    color: rgba(0,0,0,.45);
  }
  .beian {
    p {
      font-size: 11px;
    }
  }
}
</style>

<template>
  <div class="app-footer">
    <p>{{ website.schoolName }}</p>
    <div class="beian">
      <p>
        互联网ICP备案：<a target="_blank" href="http://www.beian.miit.gov.cn">{{ website.ICP }}</a>&nbsp;
        <a target="_blank" :href="website.beianUrl">{{ website.beian }}</a>
      </p>
      <p>{{ website.designTeam + ' - ' + website.name }}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      website: Website
    };
  },
};
</script>
